
function event() {

  const { Timber } = require("@timberio/node");

  const logger = new Timber("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJodHRwczovL2FwaS50aW1iZXIuaW8vIiwiZXhwIjpudWxsLCJpYXQiOjE1OTAxMTExMTcsImlzcyI6Imh0dHBzOi8vYXBpLnRpbWJlci5pby9hcGlfa2V5cyIsInByb3ZpZGVyX2NsYWltcyI6eyJhcGlfa2V5X2lkIjo4MDM2LCJ1c2VyX2lkIjoiYXBpX2tleXw4MDM2In0sInN1YiI6ImFwaV9rZXl8ODAzNiJ9.KbXP0ycxc0efKJN_Gjuc53ppPj7LYLlZKJTjitlEBuY", "37829", {ignoreExceptions: true});

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
        logger.info("Event added to database");
      })
      .catch (function(error){
        logger.info("Error in document",error);
      });
}
document.getElementById("btn").onclick = event;
