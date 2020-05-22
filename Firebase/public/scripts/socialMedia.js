function showImages() {

  const { Timber } = require("@timberio/node");

  const logger = new Timber("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJodHRwczovL2FwaS50aW1iZXIuaW8vIiwiZXhwIjpudWxsLCJpYXQiOjE1OTAxMTExMTcsImlzcyI6Imh0dHBzOi8vYXBpLnRpbWJlci5pby9hcGlfa2V5cyIsInByb3ZpZGVyX2NsYWltcyI6eyJhcGlfa2V5X2lkIjo4MDM2LCJ1c2VyX2lkIjoiYXBpX2tleXw4MDM2In0sInN1YiI6ImFwaV9rZXl8ODAzNiJ9.KbXP0ycxc0efKJN_Gjuc53ppPj7LYLlZKJTjitlEBuY", "37829", {ignoreExceptions: true});

var storage = firebase.storage();
var storageRef  = storage.ref();

$('#List').find('tbody').html('');

var i =0;

storageRef.child('images/').listAll().then(function(result){
 result.items.forEach(function(imageRef){

   i++
   displayImage(i, imageRef);
 
 });
});
function displayImage(row, images){
images.getDownloadURL().then(function(url){
  logger.info(url);

let new_html = '';
new_html += '<tr>';
new_html += '<td>';
new_html += row;
new_html += '</td>';
new_html += '<td>';
new_html += '<img src= " '+url+' " width="100px" style= "float:right">';
new_html += '</td>';
new_html += '</tr>';
// $('#List').find('tbody').append(new_html);


let myImg = `
<div><br>
  <img src="${url}" width="90%" height="90%"><br>
  <button id="like">Like</button>
  <br>
</div>
`;

$('#postDiv').append(myImg);

});
}
}
