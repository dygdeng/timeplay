$(document).ready(function() {

    var beignTime=new Date("2016/12/31 09:00:00").getTime()/1000;
    var endTime = new Date("2017/01/01 00:00:00").getTime()/1000;
    var overTime = new Date("2017/01/01 20:00:00").getTime()/1000;
    var lineWidth1 = 0;
    var lineWidth2 = 0;
    var timeLine1 = $(".timeLine1 b");
    var timeLine2 = $(".timeLine2 b");
    var rw = $(".knRw");
    var duanTime1 = endTime - beignTime;
    var duanTime2 = overTime - endTime;
    var duanWidth1 = 140/duanTime1;
    var duanWidth2 = 140/duanTime2;

    var nowTimeOne = new Date().getTime()/1000;

    if (nowTimeOne > beignTime) {
    	var beiginW = nowTimeOne-beignTime;
    	var w = beiginW*duanWidth1;
    	//console.log(w);
    	timeLine1.css({width:w});
    	lineWidth1 = w;
    }

    if (nowTimeOne > endTime && nowTimeOne < overTime) {
    	var beiginW2 = nowTimeOne-endTime;
    	var w2 = beiginW2*duanWidth2;
    	console.log(w2);
    	timeLine2.css({width:w2});
    	lineWidth2 = w2;
    }
  
    var timeplay = setInterval(function(){
    		var myTime=new Date()
			var date = myTime.getDate();
			var year = myTime.getFullYear();
			var month = myTime.getMonth();
			var hours = myTime.getHours();
			var minutes = myTime.getMinutes();
			var seconds = myTime.getSeconds();
			var nowTime = myTime.getTime()/1000;


            if (nowTime >= beignTime && nowTime <= endTime) {

            	console.log("开始运行"+lineWidth1);
            	lineWidth1 = lineWidth1 + duanWidth1;
	            //运行轨迹
	            
	            timeLine1.css({width:lineWidth1});
	            rw.css({left:350+lineWidth1});

            }else{
            	//console.log("停止运动");
            	lineWidth = 0;
            }

            if (nowTime >= endTime && nowTime < overTime) {
            	//console.log(lineWidth2)
            	lineWidth2 = lineWidth2 + duanWidth2;
            	$(".time2").addClass('time2_red');
            	timeLine1.css({width:140});

            	timeLine2.css({width:lineWidth2});
	            rw.css({left:640+lineWidth2});
            }
            if (nowTime >= overTime){
            	//console.log("运动结束");
            	$(".knRw").css({left:800});
            	timeLine1.css({width:140});
            	timeLine2.css({width:140});
            	$(".time2").addClass('time2_red');
            	$(".time3").addClass('time3_red');
            	clearInterval(timeplay);
            }else{

            }
         
    },1000)
});