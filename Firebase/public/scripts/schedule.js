function showSchedule() {

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
                logger.info("No schedule created yet");
                $(".container").append('<h3>No schedule created yet</h3>')
            }
        })
        .catch(function(error) {
            logger.info("Error getting documents", error);
        });

    });


}