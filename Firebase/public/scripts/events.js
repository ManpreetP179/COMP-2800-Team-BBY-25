document.addEventListener("DOMContentLoaded", event => {
    const app = firebase.app();
    
    const db = firebase.firestore();
    
    const myPost = db.collection('events').doc('oK79uysjfVsCYZQ8KeON');

    myPost.onSnapshot(doc => {
        const data = doc.data();

        var event = document.getElementById("events");
        
        event.write(data.title + '<br>')
        })
});