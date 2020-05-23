//function to retrive images from the storage.
function showImages() {

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
