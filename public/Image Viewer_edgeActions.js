/***********************
* Adobe Edge Animate Composition Actions
*
* Edit this file with caution, being careful to preserve 
* function signatures and comments starting with 'Edge' to maintain the 
* ability to interact with these actions from within Adobe Edge Animate
*
***********************/
(function($, Edge, compId){
var Composition = Edge.Composition, Symbol = Edge.Symbol; // aliases for commonly used Edge classes

   //Edge symbol: 'stage'
   (function(symbolName) {
      
      
      

      Symbol.bindElementAction(compId, symbolName, "document", "compositionReady", function(sym, e) {
         var images = []; //object for img srcs
         
         var getData = function(data)
         {
         	for (index in data.photos) {
         		images[index] = data.photos[index].image_url;
         		//console.log(images[index]);
         	}
         };
         
         getData(local_data);
         
         //console.log(images);
         
         var imageSymbols = [];
         
         window.getImageReel = function() 
         {
         	for (var j=0; j<images.length; j++) {
         		var start = 1000 + (j*50);
         		imageSymbols[j] = sym.createChildSymbol("Image", "imageReel");
         		imageSymbols[j].setVariable("imageSRC", images[j]);
         		imageSymbols[j].setVariable("startTime", start);
         
         		//console.log(images[j]+" "+start);
         		imageSymbols[j].setImage();
         		imageSymbols[j].setTime();
         
         		var element = imageSymbols[j].getSymbolElement();
         			sym.$(element).css({"position" : "absolute"});
         			sym.$(element).css({"left" : 0});
         			sym.$(element).css({"top" : 0});
         			sym.$(element).css({"user-select": "none"});
         			sym.$(element).css({"-moz-user-select": "none"});
         			sym.$(element).css({"-khtml-user-select": "none"});
         			sym.$(element).css({"-webkit-user-select": "none"});
         			if (start > 2000)
         				sym.$(element).css({"z-index" : 0});
         			else if (start > 1000)
         				sym.$(element).css({"z-index" : (2000-start)});
         			else if (start < 0)
         				sym.$(element).css({"z-index" : (0)});
         			else if (start <= 1000)
         				sym.$(element).css({"z-index" : (start)});
         	}
         	//console.log(imageSymbols);
         };
         
         
         mouseDown = false;
         mouseX = 0;
         lastX = 0;
         lastFive = [0,0,0,0,0];
         x2Change = 0;
         timelineX = 1000;
         mouseNum = 0;
         
         maxX = 1000 + (imageSymbols.length*50);
         minX = -3000 - (imageSymbols.length*50);
         count = 0;
         
         accelerationX = 0;
         accelerationX2 = 0;
         friction = 0.87;
         
         this.runApp = function() {
         	lastFive[4] = lastFive[3];
         	lastFive[3] = lastFive[2];
         	lastFive[2] = lastFive[1];
         	lastFive[1] = lastFive[0];
         	lastFive[0] = lastX;
         
         	if (mouseDown == true) {
         		xChange = (mouseX - lastX) * 0.2;
         		timelineX = timelineX + xChange;
         
         		//sym.getSymbol("timeline").stop(timelineX);
         		for (var k=0; k < imageSymbols.length; k++)
         		{
         			var sTime = Math.floor(timelineX+(k*50));
         
         			imageSymbols[k].setVariable("startTime", sTime);
         			imageSymbols[k].setTime();
         
         			var element = imageSymbols[k].getSymbolElement();
         				if (sTime > 2000)
         					sym.$(element).css({"z-index" : 0});
         				else if (sTime > 1000)
         					sym.$(element).css({"z-index" : (2000-sTime)});
         				else if (sTime < 0)
         					sym.$(element).css({"z-index" : (0)});
         				else if (sTime <= 1000)
         					sym.$(element).css({"z-index" : (sTime)});	
         
         			//console.log(k + " " + sTime);		
         		}
         
         		lastX = mouseX;
         	} else if (mouseNum == 1) {
         		accelerationX = (mouseX - lastFive[4]) * 0.2;
         
         		accelerationX2 = mouseX - lastFive[4];
         
         		if (accelerationX < 0) {
         			accelerationX = (accelerationX - 1) * 1.1;
         		}
         		if (accelerationX > 0) {
         			accelerationX = (1 + accelerationX) * 1.1;
         		}
         
         		accelerationX = accelerationX * friction;
         		timelineX = timelineX + accelerationX;
         
         		if (timelineX > maxX)
         			timelineX = maxX;
         		if (timelineX < minX)
         			timelineX = minX;
         
         		//sym.getSymbol("timeline").stop(timelineX);
         		//sym.getSymbol("timeline").stop(timelineX);
         		for (var k=0; k < imageSymbols.length; k++)
         		{
         			var sTime = Math.floor(timelineX+(k*50));
         
         			imageSymbols[k].setVariable("startTime", sTime);
         			imageSymbols[k].setTime();
         
         			var element = imageSymbols[k].getSymbolElement();
         				if (sTime > 2000)
         					sym.$(element).css({"z-index" : (0)});
         				else if (sTime > 1000)
         					sym.$(element).css({"z-index" : (2000-sTime)});
         				else if (sTime < 0)
         					sym.$(element).css({"z-index" : (0)});
         				else if (sTime <= 1000)
         					sym.$(element).css({"z-index" : (sTime)});	
         
         			//console.log(k + " " + sTime);		
         		}
         
         		mouseNum = 2;
         	} else if (mouseNum == 2) {
         		accelerationX = accelerationX * friction;
         		timelineX = timelineX + accelerationX;
         
         		if (timelineX > maxX)
         			timelineX = maxX;
         		if (timelineX < minX)
         			timelineX = minX;
         
         		//sym.getSymbol("timeline").stop(timelineX);
         		//sym.getSymbol("timeline").stop(timelineX);
         		for (var k=0; k < imageSymbols.length; k++)
         		{
         			var sTime = Math.floor(timelineX+(k*50));
         
         			imageSymbols[k].setVariable("startTime", sTime);
         			imageSymbols[k].setTime();
         
         			var element = imageSymbols[k].getSymbolElement();
         				if (sTime > 2000)
         					sym.$(element).css({"z-index" : (0)});
         				else if (sTime > 1000)
         					sym.$(element).css({"z-index" : (2000-sTime)});
         				else if (sTime < 0)
         					sym.$(element).css({"z-index" : (0)});
         				else if (sTime <= 1000)
         					sym.$(element).css({"z-index" : (sTime)});		
         
         			//console.log(k + " " + sTime);
         		}
         
         		if (accelerationX < 0.21 && accelerationX > -0.21) {
         			mouseNum = 0;
         		}
         	}
         	count++;
         }

      });
      //Edge binding end

      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1000, function(sym, e) {
         getImageReel();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Stage}", "mousedown", function(sym, e) {
         // insert code to be run when the mouse button is down
         mouseDown = true;
         mouseNum = 1;

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Stage}", "mouseup", function(sym, e) {
         // insert code to be run when the mouse button is released
         mouseDown = false;

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Stage}", "mousemove", function(sym, e) {
         // insert code to be run when the mouse is moved over the object
         if (mouseDown == false) {
         	mouseX = e.pageX;
         	lastX = e.pageX;
         }
         if (mouseDown == true) {
         	mouseX = e.pageX;
         }

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Stage}", "mouseout", function(sym, e) {
         // insert code to be run when the mouse is moved off the object
         mouseDown = false;

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 6016, function(sym, e) {
         this.runApp();
         
         sym.play(6000);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Stage}", "touchstart", function(sym, e) {
         // insert code to be run when the mouse button is down
         mouseDown = true;
         mouseNum = 1;

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Stage}", "touchmove", function(sym, e) {
         // insert code to be run when the mouse is moved over the object
         var touch = e.touches[0];
         
         if (mouseDown == false) {
         	mouseX = touch.pageX;
         	lastX = touch.pageX;
         }
         if (mouseDown == true) {
         	mouseX = touch.pageX;
         }

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Stage}", "touchend", function(sym, e) {
         // insert code to be run when the mouse is moved off the object
         mouseDown = false;

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'Image'
   (function(symbolName) {   
   
      Symbol.bindSymbolAction(compId, symbolName, "creationComplete", function(sym, e) {
         sym.$("imageContainer").hide();
         
         sym.setImage = function()
         {
         	//console.log(sym.getVariable("imageSRC"));
         
         	sym.$("imageContainer").html("<img src='"+sym.getVariable("imageSRC")+"'>");
         };
         
         sym.setTime = function()
         {
         	//console.log(sym.getVariable("startTime"));
         
         	var time = sym.getVariable("startTime");
         		if (time < 0)
         			time = 0;
         		else if (time > 2000)
         			time = 2000;
         
         	sym.stop(time);
         };
         
         sym.$("imageContainer").show();

      });
      //Edge binding end

      

      

   })("Image");
   //Edge symbol end:'Image'

})(window.jQuery || AdobeEdge.$, AdobeEdge, "EDGE-146736390");