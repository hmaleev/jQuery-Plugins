(function ( $ ) {
	$.fn.barChart = function (options) {
		
		var me = this;	
		var canvas = $(me);
		ctx = setCanvas(canvas,options);
		createBars(ctx,options);
		
		if(options.lineCount) {
			createLines(ctx,options);
		}
		if(options.labels) {
			addLabels(ctx,options)
		}

		if (options.width) {
			canvas.width(options.width+'px');
		}
		else {
			canvas.width(window.innerWidth);
		}

		if (options.height) {
			canvas.height(options.height+'px');
		}
		else {
			canvas.height('300px');
		}
		return this;
	};

	function setCanvas(canvas,options) {
				
		var ctx = canvas[0].getContext("2d");
	    devicePixelRatio = window.devicePixelRatio || 1,
	    backingStoreRatio = ctx.webkitBackingStorePixelRatio ||
	                        ctx.backingStorePixelRatio || 1,

	    ratio = devicePixelRatio / backingStoreRatio;

		canvas.attr("width",window.innerWidth);
		canvas.attr("height",'300px');

	  	var oldWidth = canvas.width();
	    var oldHeight = canvas.height();

		canvas.attr("width",oldWidth * ratio);
		canvas.attr("height",oldHeight * ratio);
		return ctx;
	}

	function createBars(ctx,options) {

		var maxValue = Math.max.apply(Math,(options.inputData));
		var unitHeight = canvas.height() / maxValue;
		var barWidth = canvas.width() / ((options.inputData.length));

		for (i = 0; i < options.inputData.length; i++) {
		 	ctx.fillStyle ="red";
			ctx.fillRect(((barWidth/2)+(barWidth*i)),(canvas.height() -(options.inputData[i]*unitHeight)),barWidth/2,(options.inputData[i]*unitHeight));
	    }
	}

	function addLabels(ctx,options) {

		var barWidth = canvas.width() / ((options.inputData.length));
		ctx.fillStyle ="black";
		ctx.font=" 15px Arial";

		for (i = 0; i < options.inputData.length; i++) {
			ctx.fillText(options.labels[i],((barWidth/2)+(barWidth*i)+5),canvas.height()-5)
	    }

	}

	function createLines(ctx,options) {

		var maxValue = Math.max.apply(Math,(options.inputData));
	 	var textValueInterval= maxValue/options.lineCount
		var lineInterval = canvas.height()/options.lineCount;
		ctx.fillStyle ="black";
		ctx.font=" 15px Arial";

		for(j=options.lineCount;j>0;j--) {
			ctx.beginPath();
			ctx.fillText(((maxValue-textValueInterval*j).toFixed(0)),10,(lineInterval*(j))-5);
			ctx.moveTo(0, lineInterval*(j));
			ctx.lineTo(canvas.width(), lineInterval*(j));
			ctx.stroke();
		}
	}

}( jQuery ));

/*
$.fn.pieChart = function () {
	
	var me = this;	
	 var canvas = $(me);
	 console.log(canvas);
	
	 var ctx = canvas[0].getContext("2d");
	
	ctx.beginPath();
	ctx.moveTo(100,65);
	ctx.fillStyle="black";
	ctx.arc(100,65,65,0,1.1);
	ctx.fill();

	ctx.beginPath();
	ctx.moveTo(100,65);
	ctx.fillStyle="red";
	ctx.arc(100,65,65,1.1,2);
	ctx.fill();

	ctx.beginPath();
	ctx.moveTo(100,65);
	ctx.fillStyle="green";
	ctx.arc(100,65,65,2,3);
	ctx.fill();

	ctx.beginPath();
	ctx.moveTo(100,65);
	ctx.fillStyle="blue";
	ctx.arc(100,65,65,3,6.28318);
	ctx.fill();
	 
    return this;
};
*/