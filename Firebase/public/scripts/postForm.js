
function post() {

    const { Timber } = require("@timberio/node");

    const logger = new Timber("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJodHRwczovL2FwaS50aW1iZXIuaW8vIiwiZXhwIjpudWxsLCJpYXQiOjE1OTAxMTExMTcsImlzcyI6Imh0dHBzOi8vYXBpLnRpbWJlci5pby9hcGlfa2V5cyIsInByb3ZpZGVyX2NsYWltcyI6eyJhcGlfa2V5X2lkIjo4MDM2LCJ1c2VyX2lkIjoiYXBpX2tleXw4MDM2In0sInN1YiI6ImFwaV9rZXl8ODAzNiJ9.KbXP0ycxc0efKJN_Gjuc53ppPj7LYLlZKJTjitlEBuY", "37829", {ignoreExceptions: true});

    //alert("in post fun");
    logger.info("in post");
    let caption = document.getElementById("inputCaption").value;
    logger.info(caption);
    let user = firebase.auth().currentUser.uid;
    
    db.collection("posts").add({
        caption: caption,
        user: user
    })
    .then(function(docRef) {
        alert("success");
        logger.info("Success: " + docRef);
    })
    .catch(function(error) {
        alert("Fail");
        logger.info("Error: " + error);
        })
    }