$.fn.barChart = function (data,lineCount,labels) {
	
	var max = Math.max.apply(Math,(data));
	var me = this;	
	var canvas = $(me);

function setCanvas(canvas) {
	
	canvas.attr("width",window.innerWidth)
	var ctx = canvas[0].getContext("2d");
	ctx.clearRect(0, 0, canvas.width(), canvas.height());
	return ctx;
}
	ctx = setCanvas(canvas);
	ctx.fillStyle="red";

	var unitHeight = canvas.height() / max;
	var barWidth = canvas.width() / ((data.length));

 ctx.font=" 15px Arial";
	 	
	var lineInterval = canvas.height()/lineCount;
	for (i = 0; i < data.length; i++) {
	 	ctx.fillStyle ="red";
		ctx.fillRect(((barWidth/2)+(barWidth*i)),(canvas.height() -(data[i]*unitHeight)),barWidth/2,(data[i]*unitHeight));
		ctx.fillStyle ="black";
		ctx.fillText(labels[i],((barWidth/2)+(barWidth*i)+5),canvas.height()-5)
    }
	var textValueInterval= max/lineCount

	for(j=lineCount;j>0;j--) {
		ctx.beginPath();
		ctx.fillText(((max-textValueInterval*j).toFixed(0)),10,(lineInterval*(j))-5);
		ctx.moveTo(0, lineInterval*(j));
		ctx.lineTo(window.innerWidth, lineInterval*(j));
		ctx.stroke();
	  }
    return this;
};