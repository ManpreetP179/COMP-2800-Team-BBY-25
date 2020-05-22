
function event() {
    let user = firebase.auth().currentUser.uid;

    console.log("Events Page");
    var name_event = document.getElementById('textbox1').value;
    var topic_event = document.getElementById('textbox2').value;
    var desc_event = document.getElementById('txt').value;
    var date_event = document.getElementById('textbox3').value;
    var time_event = document.getElementById('textbox4').value;
    var duration_event = document.getElementById('textbox6').value;
    var host_event = document.getElementById('textbox7').value;
    var place_event = document.getElementById('textbox8').value;
    db.collection("events").add(
        {
            Name: name_event,
            topic: topic_event,
            Desc: desc_event,
            Date: date_event,
            Time:time_event,
            Duration:duration_event,
            host:host_event,
            Location:place_event,
            user: user
        })
      .then (function() {
    console.log("Event added to database");
      })
    .then (function() {
  console.log("Event added to database");
    })
    .catch (function(error){
        console.log("Error in document",error);
    });
}
document.getElementById("btn").onclick = event;
