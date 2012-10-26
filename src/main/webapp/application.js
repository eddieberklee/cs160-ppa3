require(['dojo/dom', 'dojo/_base/unload', 'dojox/cometd', 'dojo/domReady!'],
function(dom, unloader, cometd)
{
        

    function _connectionEstablished()
    {
        dom.byId('body').innerHTML += '<div>CometD Connection Established</div>';
    }

    function _connectionBroken()
    {
        dom.byId('body').innerHTML += '<div>CometD Connection Broken</div>';
    }

    function _connectionClosed()
    {
        dom.byId('body').innerHTML += '<div>CometD Connection Closed</div>';
    }

    // Function that manages the connection status with the Bayeux server
    var _connected = false;
    function _metaConnect(message)
    {
        if (cometd.isDisconnected())
        {
            _connected = false;
            _connectionClosed();
            return;
        }

        var wasConnected = _connected;
        _connected = message.successful === true;
        if (!wasConnected && _connected)
        {
            _connectionEstablished();
        }
        else if (wasConnected && !_connected)
        {
            _connectionBroken();
        }
    }
    var data = {"YAHOO":{"price":[],"change":[]},
                "GOOGLE":{"price":[],"change":[]},
                "MSFT":{"price":[],"change":[]}};
    var data2 = {"YAHOO":[],
                    "GOOGLE":[],
                    "MSFT":[]};
        var counter = 0;
        
    // Function invoked when first contacting the server and
    // when the server has lost the state of this client
    function _metaHandshake(handshake)
    {
        if (handshake.successful === true)
        {
            cometd.batch(function()
            {
                cometd.subscribe('/hello', function(message)
                {
                    //data[message.data.symbol].price.push(parseFloat(message.data.price));
                    //data[message.data.symbol].change.push(parseFloat(message.data.change));
                                 
                    //var str = JSON.stringify(data, undefined, 2);
             
                	// dom.byId('body').innerHTML = '<div>Name: ' + message.data.symbol + '   Price:'+ message.data.price + '   Change: ' + message.data.change
                  //      +'<br>' + str + '</div>';
                                 
                      data2[message.data.symbol].push([counter, parseFloat(message.data.price)]);
                      var str2 = JSON.stringify(data2, undefined, 2);
                	  dom.byId('body').innerHTML = str2;
                                 counter += 1;
                    });
                    
                // Publish on a service channel since the message is for the server only
                cometd.publish('/service/hello', { name: 'World' });
            });
        }
    }

    // Disconnect when the page unloads
    unloader.addOnUnload(function()
    {
        cometd.disconnect(true);
    });

    var cometURL = location.protocol + "//" + location.host + config.contextPath + "/cometd";
    cometd.configure({
        url: cometURL,
        logLevel: 'debug'
    });

    cometd.addListener('/meta/handshake', _metaHandshake);
    cometd.addListener('/meta/connect', _metaConnect);
   // cometd.addListener('/meta/subscribe', handlemessage);

    cometd.handshake();
});
