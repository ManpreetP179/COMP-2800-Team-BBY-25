function showEvents() {

    const { Timber } = require("@timberio/node");

    const logger = new Timber("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJodHRwczovL2FwaS50aW1iZXIuaW8vIiwiZXhwIjpudWxsLCJpYXQiOjE1OTAxMTExMTcsImlzcyI6Imh0dHBzOi8vYXBpLnRpbWJlci5pby9hcGlfa2V5cyIsInByb3ZpZGVyX2NsYWltcyI6eyJhcGlfa2V5X2lkIjo4MDM2LCJ1c2VyX2lkIjoiYXBpX2tleXw4MDM2In0sInN1YiI6ImFwaV9rZXl8ODAzNiJ9.KbXP0ycxc0efKJN_Gjuc53ppPj7LYLlZKJTjitlEBuY", "37829", {ignoreExceptions: true});

    firebase.auth().onAuthStateChanged(function() {
        let num = 0;
        
        db.collection("events").get()
            .then(function(querySnapshot) {
                querySnapshot.forEach(function(doc) {
                    logger.info("in for each");
                    events = true;
                    let myDoc = doc.data();
                    logger.info(myDoc);

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
                logger.info("No events created yet");
                $(".container").append('<h3>No events created yet</h3>')
            }
        })
        .catch(function(error) {
            logger.info("Error getting documents", error);
        });

    });


}