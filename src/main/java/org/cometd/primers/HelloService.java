/*
 * Copyright (c) 2010 the original author or authors.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

package org.cometd.primers;

import java.util.Map;
import java.util.HashMap;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.Random;
import java.util.Timer;
import java.util.TimerTask;

import org.cometd.bayeux.Message;
import org.cometd.bayeux.server.BayeuxServer;
import org.cometd.bayeux.server.ServerSession;
import org.cometd.server.AbstractService;

public class HelloService extends AbstractService
{

	
    public HelloService(BayeuxServer bayeux)
    {
        super(bayeux, "hello");
        addService("/service/hello", "processHello");
		
    }

    public void processHello(ServerSession remote, Message message)
    {
        Map<String, Object> input = message.getDataAsMap();
		
		
	    Map<String, Object> output = new HashMap<String, Object>();
		Stock[] stocks = new Stock[] {
		                        new Stock("GOOGLE", 435.43),
		                        new Stock("YAHOO", 27.88),
		                        new Stock("MSFT", 1015.55), };
		for(int i=0;;i++)
		{
			
				Random r = new Random(System.currentTimeMillis());
				int l = r.nextInt() % 3;
				if (l < 0)
					{l = l * (-1);}
		
				Stock stock = stocks[l];	
				
				double change = r.nextDouble();
        		boolean plus = r.nextBoolean();
        		if (plus) {
            		stock.setValue(stock.getValue() + change);
        		} else {
            		stock.setValue(stock.getValue() - change);
        		}
	    		output.put("greeting", "Hello, ");
				output.put("stock", stock.toString());
        		output.put("symbol", stock.getSymbol());
        		output.put("price", stock.getValueAsString());
				output.put("change", stock.getLastChangeAsString());
	    		remote.deliver(getServerSession(), "/hello", output, null);
			
	    try
		{
	    	Thread.sleep(1000);
		}
		catch(Exception e)
		{
			System.out.println("Exception");
		}
		}	
    }
}



