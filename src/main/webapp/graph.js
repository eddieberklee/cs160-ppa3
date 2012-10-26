$(function() {
  //$("#body").css('color','red');
  document.getElementById("body").style.color="blue";
  document.getElementById("body").innerHTML += "hi"
});

function displayDate()
{
    document.getElementById("demo").innerHTML=Date();
}