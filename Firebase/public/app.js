document.addEventListener("DOMContentLoaded", event => {
    const app = firebase.app();
    
    const db = firebase.firestore();
    
    const myPost = db.collection('events').doc('oK79uysjfVsCYZQ8KeON');

    myPost.onSnapshot(doc => {
        const data = doc.data();
        
        document.write(data.title + '<br>')
        document.write(data.createdAt + '<br>')
        })
});
