//function to retrive data for the details of the events from the database
function showEvents() {
    
    let events = false;

    firebase.auth().onAuthStateChanged(function(user) {
    
        let myUser = user.uid;
        let num = 0;
        //retrieving data from events collection.
        db.collection("events").where("user", "==", myUser)
        .get()
        .then(function(querySnapshot) {
            querySnapshot.forEach(function(doc) {
                events = true;
                let myDoc = doc.data();

                num++;

                let myHtml = `
                <div id="myDiv" style="padding:10px">
                    <h3><b><u> Event ${num} </u></b></h1>
                    <h3><b>Date:  </b> ${myDoc.Date} <h3>
                    <h3><b>Description:  </b> ${myDoc.Desc} </h3>
                    <h3><b>Duration:  </b> ${myDoc.Duration} </h3>
                    <h3><b>Location:  </b> ${myDoc.Location} </h3>
                    <h3><b>Time:  </b> ${myDoc.Time} </h3>
                    <h3><b>Topic:  </b> ${myDoc.topic} </h3>
                    <h3><b>Host:  </b> ${myDoc.host} </h3>
                </div><br>
                    `;

                $('#innerDiv').append(myHtml);

            });
        })
        .then(function() {
            if(events == false) {
                console.log("No events created yet");
                $("#myDiv").append('<h3>No events created yet</h3>')
            }
        })
        .catch(function(error) {
            console.log("Error getting documents", error);
        });

    });

}