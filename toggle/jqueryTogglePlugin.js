$.fn.toggleBtn = function (id) {
	var style = {
		slidingBtnStyle : {
        'background-color': '#25649F',
        'display': 'inline-block',
        'width': '50px',
        'text-align': 'center',
        'color':'white'
		},
		parentDivStyle : {
        'background-color': '#BBBBBB',
        'width': '100px',
		'margin':'10px'
		}
	}
	var me = this;	
	var itemValue = localStorage.getItem(id);
	
    me.css(style.parentDivStyle).append("<div id=" + id + ">ON</div>");
	 if(itemValue == 'false') {
		 $("#" + id).css({ 'margin-left': "50px" }).html("OFF");
		 me.data("value",false)
	 }
	 else {
	  me.data("value",true)
	 }
    $("#" + id).css(style.slidingBtnStyle).click(function () {
		itemValue = localStorage.getItem(id);
        if (itemValue == 'true' ) {
            ($("#" + id)).animate({ 'margin-left': "50px" }).html("OFF");
			me.data("value",false);
			localStorage.setItem(id,false);
            }
            else {
            ($("#" + id)).animate({ 'margin-left': "0px" }).html("ON");
			me.data("value",true);
			localStorage.setItem(id,true);
            }
    });
    return this;
};