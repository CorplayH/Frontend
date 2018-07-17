
$(function(){
//	创建变量
	var num= 0;	
//	显隐函数
	function xy(){
		$('#displaysmall .smallpic').eq(num).fadeIn(500).siblings('.smallpic').fadeOut(500)
		$('#displaybig img').eq(num).addClass('active').siblings('img').removeClass('active')
//		$('')
	}
//	给小点添加点击事件
	$('#smb .smbpic').click(function(){
//		获取当前元素序号
		num = $(this).index();
//		调用显隐函数
		xy();
	})
//window.onload = function(){
	var dsplayS = document.getElementById("displaysmall");
	var cbox = document.getElementById("clickbox");
	var cover = document.getElementById("cover");
	var bigpic = document.getElementsByClassName("bigpic");
	var displaybig= document.getElementById("displaybig");
	var smbpic = document.getElementsByClassName('smbpic')
//	抓取浮动小框的宽和高
	var cboxW = cbox.offsetWidth;
	var cboxH = cbox.offsetHeight;
	
	cover.onmousemove = function (event){
//		显示图片里小框与旁边大框
		displaybig.style.display = "block";
//		bigpic.style.display = "block";
//		cbox.style.display = "block";
		cbox.style.zIndex = 9;
//		获取对象属性
		var e = window.event || event;
//		获取小图外框的宽高
		var dsW = dsplayS.offsetWidth; 
		var dsH = dsplayS.offsetHeight;
//		获取鼠标相对于事件源 X轴的位置
		var x = e.offsetX||e.layerX;
//		或取鼠标相对事件源Y轴的位置
		var y = e.offsetY||e.layerY;
//		判断移动距离
		newx = x -cboxW/2;
		newy = y -cboxH/2;
		
		if(x<=cboxW/2){
			newx=0;
		}
		if(x>=(dsW-cboxW/2)){
			newx=(dsW-cboxW);
		}
		if(y<=cboxH/2){
			newy=0;
		}
		if(y>=(dsH-cboxH/2)){
			newy=(dsH-cboxH);
		}
		cbox.style.left = newx+'px';
		cbox.style.top = newy+'px';
		
		bigpic[num].style.left = -5*newx +"px";
		bigpic[num].style.top = -5*newy +"px";
	}
	cover.onmouseover = function(){
		cbox.style.display = "block";
		bigpic[num].style.display = "block";
	}
	cover.onmouseout =function(){
		cbox.style.zIndex = -1;
//		cbox.style.display = "none";
		displaybig.style.display = "none";
		bigpic[num].style.display = "none";
	}
//}	
})



