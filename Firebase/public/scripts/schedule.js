function showSchedule() {

    firebase.auth().onAuthStateChanged(function() {
        let num = 0;
        
        db.collection("events").get()
            .then(function(querySnapshot) {
                querySnapshot.forEach(function(doc) {
                    console.log("in for each");
                    events = true;
                    let myDoc = doc.data();
                    console.log(myDoc);

                    num++;

                    let myHtml = `
                    <li id="schedule">
                        <h3><b><u> Event ${num} </u></b></h3>
                        <h3><b>Name:  </b> ${myDoc.Name} <h3>
                        <h3><b>Date:  </b> ${myDoc.Date} <h3>
                        <h3><b>Time:  </b> ${myDoc.Time} </h3>
                        <h3><b>Duration:  </b> ${myDoc.Duration} </h3>
                    </li>
                        `

                    $('#list').append(myHtml);

            });
        })
        .then(function() {
            if(events == false) {
                console.log("No schedule created yet");
                $(".container").append('<h3>No schedule created yet</h3>')
            }
        })
        .catch(function(error) {
            console.log("Error getting documents", error);
        });

    });


}