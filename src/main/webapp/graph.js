$(function() {
  //$("#body").css('color','red');
  document.getElementById("body").style.color="blue";
  var json_string;
  var json_object;
  $("body").bind("DOMNodeInserted", function() {
    // read & parse
    json_string = $("#body").html();
    json_object = jQuery.parseJSON(json_string);

    //alert(JSON.stringify(json_object.YAHOO));

    $("p#demo").html(json_string);
    // remove #body's content so that DOMNodeInserted
    $("#body").html('');
  });
  
  var myChart = new JSChart('graph', 'line');
  myChart.setDataArray([[1, 80],[2, 40],[3, 60],[4, 65],[5, 50],[6, 50],[7, 60],[8, 80],[9, 150],[10, 100]], 'blue');
  myChart.setDataArray([[1, 100],[2, 55],[3, 80],[4, 115],[5, 80],[6, 70],[7, 30],[8, 130],[9, 160],[10, 170]], 'green');
  myChart.setDataArray([[1, 150],[2, 25],[3, 100],[4, 80],[5, 20],[6, 65],[7, 0],[8, 155],[9, 190],[10, 200]], 'gray');
  myChart.setSize(550, 300);
  myChart.setAxisValuesNumberY(5);
  myChart.setIntervalStartY(0);
  myChart.setIntervalEndY(200);
  myChart.setLabelX([2,'p1']);
  myChart.setLabelX([4,'p2']);
  myChart.setLabelX([6,'p3']);
  myChart.setLabelX([8,'p4']);
  myChart.setLabelX([10,'p5']);
  myChart.setAxisValuesNumberX(5);
  myChart.setShowXValues(false);
  myChart.setTitleColor('#454545');
  myChart.setAxisValuesColor('#454545');
  myChart.setLineColor('#A4D314', 'green');
  myChart.setLineColor('#BBBBBB', 'gray');
  myChart.setTooltip([1,' ']);
  myChart.setTooltip([2,' ']);
  myChart.setTooltip([3,' ']);
  myChart.setTooltip([4,' ']);
  myChart.setTooltip([5,' ']);
  myChart.setTooltip([6,' ']);
  myChart.setTooltip([7,' ']);
  myChart.setTooltip([8,' ']);
  myChart.setTooltip([9,' ']);
  myChart.setTooltip([10,' ']);
  myChart.setFlagColor('#9D16FC');
  myChart.setFlagRadius(4);
  myChart.setAxisPaddingRight(100);
  myChart.setLegendShow(true);
  myChart.setLegendPosition(490, 80);
  myChart.setLegendForLine('blue', 'Click me');
  myChart.setLegendForLine('green', 'Click me');
  myChart.setLegendForLine('gray', 'Click me');
  myChart.draw();

});

function displayDate()
{
    document.getElementById("demo").innerHTML=Date();
}




