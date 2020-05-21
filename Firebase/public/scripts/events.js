<style>
    .list {

    }
</style>

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
                    <li class="list">
                        <h1><b><u> Event ${num} </u></b></h1>
                        <h1><b>Date:  </b> ${myDoc.Date} <h1>
                        <h1><b>Description:  </b> ${myDoc.Desc} </h1>
                        <h1><b>Duration:  </b> ${myDoc.Duration} </h1>
                        <h1><b>Location:  </b> ${myDoc.Location} </h1>
                        <h1><b>Time:  </b> ${myDoc.Time} </h1>
                        <h1><b>Topic:  </b> ${myDoc.topic} </h1>
                        <h1><b>Host:  </b> ${myDoc.host} </h1>
                    </li>
                        `

                    $('#events').append(myHtml);

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