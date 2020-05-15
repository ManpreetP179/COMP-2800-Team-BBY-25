function showEvents() {
    console.log("in event lists");
    let events = false;

    firebase.auth().onAuthStateChanged(function(user) {
        console.log("in user");
        // console.log(user.uid);
        let myUser = user.uid;
        console.log(myUser);

        let num = 0;
        
        db.collection("events").where("user", "==", myUser)
        .get()
        .then(function(querySnapshot) {
            console.log("in then");
            querySnapshot.forEach(function(doc) {
                console.log("in for each");
                events = true;
                let myDoc = doc.data();
                console.log(myDoc);

                num++;

                let date = myDoc.Date;
                let description = myDoc.Desc;
                let duration = myDoc.Duration;
                let location = myDoc.Location;
                let time = myDoc.Time;
                let topic = myDoc.Topic;
                let host = myDoc.host;

                console.log(date);
                console.log(description);
                console.log(duration);
                console.log(location);
                console.log(time);
                console.log(topic);
                console.log(host);

                let myHtml = `
                    <div id="events">
                        <h1><b><u> Event ${num} </u></b></h1>
                        <h1><b>Date:  </b> ${myDoc.Date} <h1>
                        <h1><b>Description:  </b> ${myDoc.Desc} </h1>
                        <h1><b>Duration:  </b> ${myDoc.Duration} </h1>
                        <h1><b>Location:  </b> ${myDoc.Location} </h1>
                        <h1><b>Time:  </b> ${myDoc.Time} </h1>
                        <h1><b>Topic:  </b> ${myDoc.topic} </h1>
                        <h1><b>Host:  </b> ${myDoc.host} </h1>
                    </div>
                `
                $('#container').append(myHtml);

            });
        })
        .then(function() {
            if(events == false) {
                console.log("No events created yet");
                $("#container").append('<h3>No events created yet</h3>')
            }
        })
        .catch(function(error) {
            console.log("Error getting documents", error);
        });

    });

}