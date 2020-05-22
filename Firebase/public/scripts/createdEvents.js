function showEvents() {

    const { Timber } = require("@timberio/node");

    const logger = new Timber("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJodHRwczovL2FwaS50aW1iZXIuaW8vIiwiZXhwIjpudWxsLCJpYXQiOjE1OTAxMTExMTcsImlzcyI6Imh0dHBzOi8vYXBpLnRpbWJlci5pby9hcGlfa2V5cyIsInByb3ZpZGVyX2NsYWltcyI6eyJhcGlfa2V5X2lkIjo4MDM2LCJ1c2VyX2lkIjoiYXBpX2tleXw4MDM2In0sInN1YiI6ImFwaV9rZXl8ODAzNiJ9.KbXP0ycxc0efKJN_Gjuc53ppPj7LYLlZKJTjitlEBuY", "37829", {ignoreExceptions: true});

    logger.info("in show events");
    let events = false;

    firebase.auth().onAuthStateChanged(function(user) {
        logger.info("in user");
        // console.log(user.uid);
        let myUser = user.uid;
        logger.info(myUser);

        let num = 0;
        
        db.collection("events").where("user", "==", myUser)
        .get()
        .then(function(querySnapshot) {
            logger.info("in then");
            querySnapshot.forEach(function(doc) {
                logger.info("in for each");
                events = true;
                let myDoc = doc.data();
                logger.info(myDoc);

                num++;

            /*    let date = myDoc.Date;
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
                console.log(host);   */

                let myHtml = `
                <div style="border: 1px solid crimson; padding:10px">
                    <h3><b><u> Event ${num} </u></b></h1>
                    <h3><b>Date:  </b> ${myDoc.Date} <h3>
                    <h3><b>Description:  </b> ${myDoc.Desc} </h3>
                    <h3><b>Duration:  </b> ${myDoc.Duration} </h3>
                    <h3><b>Location:  </b> ${myDoc.Location} </h3>
                    <h3><b>Time:  </b> ${myDoc.Time} </h3>
                    <h3><b>Topic:  </b> ${myDoc.topic} </h3>
                    <h3><b>Host:  </b> ${myDoc.host} </h3>
                </div>
                    `

           //     let myCaption = myDoc.caption;
           //     console.log(myCaption);

           //     $('#myDiv').append('<p>' + myCaption + '</p>');

                $('#myDiv').append(myHtml);

            });
        })
        .then(function() {
            if(events == false) {
                logger.info("No events created yet");
                $("#myDiv").append('<h3>No events created yet</h3>')
            }
        })
        .catch(function(error) {
            logger.info("Error getting documents", error);
        });

    });

}