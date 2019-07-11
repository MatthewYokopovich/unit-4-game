var characters = [];

$( document ).ready(function(){
jQuery.each($(".character"), function(){
    characters.push(this);
    console.log(this);
});
console.log(characters);
// for(var i =0; i<characters.length; i++){
//     var img = $("<img>");
//     img.attr("src", "assets/images/"+characters[i].html()+".jpg>");
//     characters[i].html(img);
// }


})