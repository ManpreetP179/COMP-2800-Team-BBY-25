
function event() {

  logger.info("Events Page");
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
            name: name_event,
            topic: topic_event,
            desc: desc_event,
            date: date_event,
            time:time_event,
            duration:duration_event,
            host:host_event,
            place:place_event
        })
      .then (function() {
        console.log("Event added to database");
      })
      .catch (function(error){
        console.log("Error in document",error);
      });
}
document.getElementById("btn").onclick = event;
