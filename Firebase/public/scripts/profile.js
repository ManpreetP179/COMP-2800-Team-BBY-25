
function showProfile(){

  
    const { Timber } = require("@timberio/node");

    const logger = new Timber("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJodHRwczovL2FwaS50aW1iZXIuaW8vIiwiZXhwIjpudWxsLCJpYXQiOjE1OTAxMTExMTcsImlzcyI6Imh0dHBzOi8vYXBpLnRpbWJlci5pby9hcGlfa2V5cyIsInByb3ZpZGVyX2NsYWltcyI6eyJhcGlfa2V5X2lkIjo4MDM2LCJ1c2VyX2lkIjoiYXBpX2tleXw4MDM2In0sInN1YiI6ImFwaV9rZXl8ODAzNiJ9.KbXP0ycxc0efKJN_Gjuc53ppPj7LYLlZKJTjitlEBuY", "37829", {ignoreExceptions: true});

  firebase.auth().onAuthStateChanged(function (user) {
       
    db.collection("users").doc(user.uid)
    .get()
    .then(function(doc) {
        let user = doc.data();
        logger.info(user.name);
        logger.info(user.email);
        document.getElementById("user").innerHTML = user.name;
        document.getElementById("name").innerHTML = user.name;
        document.getElementById("email").innerHTML = user.email;
    })
    
    .catch((error) => {
        logger.info(`Error getting data: ${error}`);
    });
});

}