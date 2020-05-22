
function showProfile(){

  firebase.auth().onAuthStateChanged(function (user) {
       
    db.collection("users").doc(user.uid)
    .get()
    .then(function(doc) {
        let user = doc.data();
        document.getElementById("user").innerHTML = user.name;
        document.getElementById("name").innerHTML = user.name;
        document.getElementById("email").innerHTML = user.email;
    })
    
    .catch((error) => {
        console.log(`Error getting data: ${error}`);
    });
});

}