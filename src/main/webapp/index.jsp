<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html>
<head>
  <meta http-equiv="Content-Type" content="text/html;charset=utf-8" />
  <script data-dojo-config="async: true, deps: ['application.js'], tlmSiblingOfDojo: true" src="${pageContext.request.contextPath}/dojo/dojo.js.uncompressed.js"></script>
  <%--
  The reason to use a JSP is that it is very easy to obtain server-side configuration
  information (such as the contextPath) and pass it to the JavaScript environment on the client.
  --%>
  <script src="http://code.jquery.com/jquery-1.8.2.min.js"></script>
  <script type="text/javascript" src="jscharts.js"></script>
  <script language="javascript" type="text/javascript" src="flot/jquery.flot.js"></script>
  <script language="javascript" type="text/javascript" src="flot/jquery.flot.selection.js"></script>
  <script language="javascript" type="text/javascript" src="flot/jquery.flot.crosshair.js"></script>
  <script type="text/javascript" src="bootstrap/js/bootstrap.min.js"></script>
  <script type="text/javascript">
  var config = {
  contextPath: '${pageContext.request.contextPath}'
  };
  </script>
  <script src="graph.js"></script>
  <link rel="stylesheet" href="bootstrap/css/bootstrap.min.css"/>
  <style>
td.legendLabel {
  text-decoration: underline;
  color: blue;
  cursor: pointer;
}
#placeholder {
  margin: 0 auto;
  margin-bottom: 30px;
}
#container {
  width: 840px;
  margin: 0 auto;
}
#popup-select {
  z-index: 99;
  position: relative;
  top: 300px;
  left: -50px;
  width: 400px;
  line-height: 50px;
  margin: 0 auto;
  height: 50px;
  padding: 20px;
  background-color: #444;
  color: #fff;
  font-size: 2.5em;
  border-radius: 5px;
}
body {
  overflow: hidden;
}
#black-background {
  position: absolute;
  top: 0;
  left: 0;
  width: 120%;
  background-color: #000;
  opacity: 0.6;
  height: 120%;
  z-index: 98;
}
#popup-content {
  width: 400px;
  font-size: 0.5em;
  line-height: 28px;
  position: relative;
  left: -20px;
  border-radius: 5px;
  padding: 20px;
  background-color: rgba(255,255,255,0.2);
}
label {
  width: 80px;
  float: left;
  margin-bottom: 20px;
  clear: left;
}
#idyahoo, #idgoogle, #idmicrosoft {
  margin-bottom: 20px;
}
  </style>
</head>



<body>

  <div id="container">
  <div id="black-background"><div id="popup-select"><div id="popup-title">Warning:</div><br/><div id="popup-content">Please Select a Company</div></div></div>

  <div style="width:100%;height:40px;"></div>

  <h1 id="demo" style="text-align:center;">PPA3 Real-Time Stock Data</h1>
  <div id="body" style="visibility:hidden"></div>
  <div id="placeholder" style="width:800px;height:500px;"></div>
  <div id="selection"></div>

  <p>Updating Time Frequency: <input id="updateInterval" type="text" value="" style="text-align: right; width:5em"> milliseconds</p>
  <p style="float:right;position:relative;top:-50px;left:-20px;"><input id="clearSelection" type="button" class="btn btn-warning btn-large" value="Reset Time Range Selection" /></p>
  <p style="font-size:1.2em;position:relative;top:7px;text-decoration:underline;margin-top:40px;">Select Companies to Show Stats For:</p>
  <p id="choices"></p>

  </div><!-- /#container -->

  <script>
  $("#clearSelection").hover(function() {
    $(this).tooltip({
      title: "Click this button, if you have selected a time period by dragging inside the graph, and want to return to the default view.",
      placement: "bottom",
    });
  });
  </script>

</body>
</html>
