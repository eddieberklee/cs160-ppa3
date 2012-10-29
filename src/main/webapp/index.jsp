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
  <script type="text/javascript">
    var config = {
      contextPath: '${pageContext.request.contextPath}'
    };
  </script>
  <script src="graph.js"></script>
</head>
<body>

  <p id="demo">demo</p>
  <p id="demo2">demo2</p>
  <button type="button" onclick="displayDate()">Display Date</button>
  <div id="body" style="visibility:hidden"></div>
<div id="placeholder" style="width:600px;height:300px;"></div>
<div id="selection"></div>

<p>You can update a chart periodically to get a real-time effect
by using a timer to insert the new data in the plot and redraw it.</p>

<p>Time between updates: <input id="updateInterval" type="text" value="" style="text-align: right; width:5em"> milliseconds</p>
<p><input id="clearSelection" type="button" value="Clear selection" /></p>


</body>
</html>
