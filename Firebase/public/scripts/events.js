//function to retrive data of the details of the website from the database and show in eventList page

function showEvents() {

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
                    <li id="events">
                        <h3><b><u> Event ${num} </u></b></h3>
                        <h3><b>Date:  </b> ${myDoc.Date} <h3>
                        <h3><b>Description:  </b> ${myDoc.Desc} </h3>
                        <h3><b>Duration:  </b> ${myDoc.Duration} </h3>
                        <h3><b>Location:  </b> ${myDoc.Location} </h3>
                        <h3><b>Time:  </b> ${myDoc.Time} </h3>
                        <h3><b>Topic:  </b> ${myDoc.topic} </h3>
                        <h3><b>Host:  </b> ${myDoc.host} </h3>
                    </li>
                        `
                        
                    $('#list').append(myHtml);

            });
        })
        .then(function() {
            if(events == false) {
                console.log("No events created yet");
                $(".container").append('<h3>No events created yet</h3>')
            }
        })
        .catch(function(error) {
            console.log("Error getting documents", error);
        });

    });


}