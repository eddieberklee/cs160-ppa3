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
  myChart.setBarSpeed(100);
  myChart.setDataArray([ [ 0, 435.94 ], [ 1, 436.15 ], [ 2, 436.67 ], [ 3, 437.14 ], [ 8, 436.54 ], [ 11, 435.99 ], [ 14, 436.83 ], [ 15, 436.77 ], [ 16, 437.6 ], [ 18, 437.7 ], [ 19, 438.62 ], [ 21, 439.1 ], [ 22, 438.32 ], [ 25, 439.18 ], [ 29, 439.56 ], [ 30, 438.76 ], [ 31, 438.77 ], [ 34, 437.99 ] ], 'green');
  myChart.setDataArray([ [ 1, 1014.86 ], [ 3, 1015.51 ], [ 4, 1015.85 ], [ 5, 1015.6 ], [ 14, 1015.94 ], [ 19, 1015.85 ], [ 22, 1015.88 ], [ 24, 1016.76 ], [ 26, 1017.05 ], [ 27, 1016.49 ], [ 28, 1016.62 ], [ 31, 1016.23 ], [ 37, 1016.05 ], [ 38, 1017 ], [ 42, 1017.85 ], [ 47, 1016.88 ], [ 50, 1017.62 ], [ 52, 1016.77 ], [ 55, 1017.22 ], [ 57, 1018.09 ], [ 58, 1017.73 ], [ 60, 1017.25 ], [ 61, 1017.68 ], [ 63, 1016.95 ], [ 69, 1017.19 ], [ 71, 1016.23 ], [ 74, 1016.54 ], [ 75, 1016.32 ], [ 77, 1016.5 ], [ 79, 1015.92 ], [ 85, 1015.85 ], [ 86, 1016.19 ], [ 88, 1016.65 ], [ 90, 1017.25 ], [ 96, 1016.57 ], [ 97, 1015.58 ], [ 99, 1015.05 ], [ 102, 1015 ], [ 105, 1015 ], [ 106, 1015.75 ], [ 110, 1015.56 ], [ 114, 1015.02 ], [ 115, 1014.92 ], [ 117, 1014.29 ] ] , 'gray');
  myChart.setDataArray([ [ 7, 28.72 ], [ 8, 28.61 ], [ 9, 28.75 ], [ 10, 28.06 ], [ 14, 28.39 ], [ 15, 29.02 ], [ 16, 29.18 ], [ 17, 29.99 ], [ 18, 29.4 ], [ 24, 30.11 ], [ 26, 30.59 ], [ 30, 30.29 ], [ 33, 30.79 ], [ 40, 30.35 ], [ 42, 30.79 ], [ 47, 29.82 ], [ 49, 30.51 ], [ 51, 30.85 ], [ 55, 31.21 ], [ 57, 30.4 ], [ 59, 31.15 ], [ 63, 31.87 ], [ 64, 31.88 ], [ 68, 31.14 ], [ 71, 31.41 ], [ 72, 31.23 ], [ 75, 30.97 ], [ 79, 30.08 ], [ 80, 30.51 ], [ 82, 30.35 ], [ 86, 30.96 ], [ 89, 30.53 ], [ 91, 30.56 ], [ 95, 31.54 ], [ 98, 31.78 ], [ 100, 31.81 ], [ 105, 30.97 ], [ 114, 31.51 ], [ 117, 31.69 ], [ 118, 31.83 ], [ 120, 32.28 ], [ 121, 31.53 ], [ 122, 30.64 ], [ 125, 30.32 ], [ 126, 29.35 ], [ 128, 30.15 ], [ 129, 30.05 ], [ 139, 30.35 ], [ 140, 29.69 ], [ 143, 30.24 ], [ 144, 30.41 ], [ 151, 30.83 ], [ 152, 31.54 ], [ 153, 32.14 ], [ 154, 32.77 ], [ 156, 32.86 ], [ 163, 33.82 ], [ 166, 34.08 ], [ 167, 33.55 ], [ 169, 32.56 ], [ 170, 33.5 ], [ 173, 33.66 ], [ 175, 34.48 ], [ 178, 33.79 ], [ 181, 34.3 ], [ 182, 34.37 ] ], 'blue');
  myChart.setSize(550, 300);
  myChart.setAxisValuesNumberY(5);
  myChart.setIntervalStartY(0);
  myChart.setIntervalEndY(1500);
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




