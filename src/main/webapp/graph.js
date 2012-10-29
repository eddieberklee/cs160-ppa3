$(function() {
  //$("#body").css('color','red');
  document.getElementById("body").style.color="blue";
  var json_string;
  var json_object;
  var yah = [];
  var goog = [];
  var ms = [];
  $("body").bind("DOMNodeInserted", function() {
    // read & parse
    json_string = $("#body").html();
    json_object = jQuery.parseJSON(json_string);
    if (json_object) {
      if (json_object.YAHOO) {
        yah = json_object.YAHOO;
      }
      if (json_object.GOOGLE) {
        goog = json_object.GOOGLE;
      }
      if (json_object.MSFT) {
        ms = json_object.MSFT;
      }
    }
    

    //alert(JSON.stringify(json_object.YAHOO));

    // $("p#demo").html(json_string);
    var str = JSON.stringify(yah);
    // $("p#demo2").html(str);
    // remove #body's content so that DOMNodeInserted
    $("#body").html('');
  });
  
  $(function () {
    // we use an inline data source in the example, usually data would
    // be fetched from a server
    var data = [], totalPoints = 300;
    
    function getRandomData() {
    if (data.length > 0)
    data = data.slice(1);
    
    // do a random walk
    while (data.length < totalPoints) {
    var prev = data.length > 0 ? data[data.length - 1] : 50;
    var y = prev + Math.random() * 10 - 5;
    if (y < 0)
    y = 0;
    if (y > 100)
    y = 100;
    data.push(y);
    }
    
    // zip the generated y values with the x values
    var res = [];
    for (var i = 0; i < data.length; ++i)
    res.push([i, data[i]])
    return res;
    }
    
    // setup control widget
    var updateInterval = 500;
    $("#updateInterval").val(updateInterval).change(function () {
                                                    var v = $(this).val();
                                                    if (v && !isNaN(+v)) {
                                                    updateInterval = +v;
                                                    if (updateInterval < 1)
                                                    updateInterval = 1;
                                                    if (updateInterval > 2000)
                                                    updateInterval = 2000;
                                                    $(this).val("" + updateInterval);
                                                    }
                                                    });
    
    // setup plot
    var options = {
    series: { shadowSize: 0 }, // drawing is faster without shadows
    yaxis: { min: 0, max: 1200 },
    xaxis: { min: 0, max: 20, show: true }
    };
    var data2 = [ [ 3, 28.88 ], [ 5, 28.38 ], [ 11, 27.92 ], [ 12, 27.83 ], [ 15, 28.68 ], [ 18, 29.08 ], [ 19, 29.23 ], [ 24, 28.99 ], [ 25, 29.65 ], [ 27, 29.38 ], [ 29, 30.37 ], [ 30, 30.15 ], [ 31, 30.56 ], [ 32, 31.21 ], [ 33, 31.6 ], [ 36, 31.26 ], [ 39, 30.7 ], [ 41, 30.03 ], [ 43, 30.49 ], [ 44, 29.73 ], [ 47, 30.58 ], [ 53, 30.58 ], [ 54, 31.19 ], [ 55, 30.35 ], [ 57, 29.97 ], [ 60, 30.75 ], [ 62, 31.64 ], [ 64, 31.01 ], [ 72, 30.44 ], [ 77, 31.01 ], [ 80, 31.66 ], [ 82, 31.95 ], [ 83, 32.89 ], [ 88, 33.7 ], [ 92, 33.8 ], [ 95, 34.5 ], [ 98, 35.18 ], [ 99, 35.08 ], [ 101, 35.9 ], [ 102, 36.03 ], [ 104, 35.07 ], [ 105, 35.15 ], [ 117, 36.04 ], [ 120, 36.49 ], [ 122, 37.35 ], [ 123, 36.41 ], [ 124, 37.04 ]];
    var data3 = [ [ 0, 27.63 ], [ 5, 28.03 ], [ 7, 28.39 ], [ 10, 27.8 ], [ 11, 27.33 ], [ 12, 26.56 ], [ 13, 25.98 ], [ 14, 25.22 ], [ 15, 24.32 ], [ 20, 24.36 ], [ 23, 25.09 ], [ 27, 24.79 ], [ 28, 25.39 ], [ 30, 25.07 ], [ 31, 24.56 ], [ 32, 23.75 ], [ 37, 24.43 ], [ 39, 25.22 ], [ 41, 24.62 ], [ 43, 25.06 ], [ 44, 25.48 ], [ 49, 24.56 ], [ 55, 24.48 ], [ 56, 23.66 ], [ 62, 22.68 ], [ 69, 23.6 ], [ 71, 24.51 ], [ 79, 23.93 ], [ 81, 23.52 ], [ 82, 22.98 ], [ 84, 22.49 ], [ 86, 23.31 ], [ 87, 22.39 ], [ 88, 21.73 ], [ 89, 22.38 ], [ 91, 22.13 ] ];
    
    var data4 = [], totalPoints = 300;
    function getData() {
    if (data4.length > 0)
    data4 = data4.slice(1);
    
    // do a random walk
    while (data4.length < totalPoints) {
    var prev = data4.length > 0 ? data4[data4.length - 1] : 50;
    var y = prev + 1;
    if (y < 0)
    y = 0;
    if (y > 100)
    y = 25;
    data4.push(y);
    }
    
    // zip the generated y values with the x values
    var res = [];
    for (var i = 0; i < data4.length; ++i)
    res.push([i, data4[i]])
    return res;
    }
                 
                 
                 
    var plot = $.plot($("#placeholder"), [  yah, goog, ms], options);
    
    function update() {
      plot.setData([ yah, goog, ms ]);
      maxx = find_max_x([ yah, goog, ms ]);
      // since the axes don't change, we don't need to call plot.setupGrid()
      plot.draw();
      
      options = {
      series: { shadowSize: 0 }, // drawing is faster without shadows
      yaxis: { min: 0, max: 1200 },
      xaxis: { min: 0, max: maxx, show: true }
      };
      plot = $.plot($("#placeholder"), [  yah, goog, ms], options);

      setTimeout(update, updateInterval);
    }
    
    update();
    });

});

function find_max_x(arr) {
}

function displayDate() {
    document.getElementById("demo").innerHTML=Date();
}




