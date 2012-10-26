$(function() {
  //$("#body").css('color','red');
  document.getElementById("body").style.color="blue";
  var json_string;
  var json_object;
  $("body").bind("DOMNodeInserted", function() {
    json_string = $("#body").html();
    json_object = jQuery.parseJSON(json_string);
    alert(JSON.stringify(json_object.YAHOO));
    $("p#demo").html(json_string);
    $("#body").html('');
  });
});

function displayDate()
{
    document.getElementById("demo").innerHTML=Date();
}
