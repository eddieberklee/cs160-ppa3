$(function() {
  //$("#body").css('color','red');
  document.getElementById("body").style.color="blue";
  var json_string;
  var json_object;
  var doupdate = true;
  var yah = {label: "Yahoo", data: []};
  var goog = {label: "Google", data: []};
  var ms = {label: "Microsoft", data: []};
  var mdata = [yah, goog, ms];
  var dataobj = {"yahoo":yah, "google":goog, "microsoft":ms};
  $("body").bind("DOMNodeInserted", function() {
    // read & parse
    json_string = $("#body").html();
    json_object = jQuery.parseJSON(json_string);
    if (json_object) {
      if (json_object.YAHOO) {
        yah.data = json_object.YAHOO;
      }
      if (json_object.GOOGLE) {
        goog.data = json_object.GOOGLE;
      }
      if (json_object.MSFT) {
        ms.data = json_object.MSFT;
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
    var updateInterval = 1000;
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
    series: { shadowSize: 0,
              series: {
                lines: { show: true },
                points: { show: true }
              }
            }, // drawing is faster without shadows
    yaxis: { min: 0, max: 1200 },
    xaxis: { min: 0, max: 20, show: true },
    selection: { mode: "x" },
    legend: { noColumns: 2 }
    };
                 
    var placeholder = $("#placeholder");
    placeholder.bind("plotselected", function (event, ranges) {
      $("#selection").text(ranges.xaxis.from.toFixed(1) + " to " + ranges.xaxis.to.toFixed(1));
      var zoom = $("#zoom").attr("checked");
      doupdate = false;
      zoom = 1;
      if (zoom)
        plot = $.plot(placeholder, mdata,
          $.extend(true, {}, options, {
            xaxis: { min: ranges.xaxis.from, max: ranges.xaxis.to }
          })
        );
    });
                 
    var plot = $.plot($("#placeholder"), mdata, options);
    
    function update() {
    if (doupdate) {
        plot.setData(mdata);
        maxx = find_max_x(mdata);
        // since the axes don't change, we don't need to call plot.setupGrid()
        plot.draw();
        
        options = {
        series: { shadowSize: 0,
        series: {
        lines: { show: true },
        points: { show: true }
        }
        }, // drawing is faster without shadows
        //yaxis: { min: 0, max: 1200 },
        xaxis: { min: 0, max: maxx, show: true },
        selection: { mode: "x" },
        legend: { noColumns: 2 }
        };
        plot = $.plot($("#placeholder"), mdata, options);
        setTimeout(update, updateInterval);
    }
    
    }
    
    $("#clearSelection").click(function () {
                               doupdate = true;
                               update();
                               });
    
    ////
    var choiceContainer = $("#choices");
    $.each(dataobj, function(key, val) {
           choiceContainer.append('<br/><input type="checkbox" name="' + key +
                                  '" checked="checked" id="id' + key + '">' +
                                  '<label for="id' + key + '">'
                                  + val.label + '</label>');
           });
    choiceContainer.find("input").click(plotAccordingToChoices);
    
    
    function plotAccordingToChoices() {
    mdata = []
    choiceContainer.find("input:checked").each(function () {
                                               var key = $(this).attr("name");
                                               if (key && dataobj[key])
                                               mdata.push(dataobj[key]);
                                               });
    
    if (mdata.length > 0)
    $.plot($("#placeholder"), mdata, {
           yaxis: { min: 0 },
           xaxis: { tickDecimals: 0 }
           });
    }
    ///
    update();
    });

});

function find_max_x(arr) {
}




