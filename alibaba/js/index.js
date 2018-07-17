window.onload = function(){
//	获取slides元素
	var slides = document.getElementById('slides');
//	获取标签为img的元素
	var imgs = document.getElementsByClassName('slideimg');
//	获取class为ss的元素
	var lis = document.getElementsByClassName('ss');
	
	var lbt = document.getElementById('arrow-lf');
	
	var rbt = document.getElementById('arrow-rt');
	
	var bg = document.getElementById("nav")
	
//	设置初始 自增量,作为imgs的脚标
	var num = 0;
//	左点击事件
	lbt.onclick = function(){
		for (var i=0; i<imgs.length; i++ ) {
// 			设置一个新的变量i 更改img的脚标，更改display为 none
			imgs[i].style.display ="none";
			lis[i].style.background="#424242";
		}
		if (num <= 0) {
			num = imgs.length-1;
		} else{
			num--;
		}
		imgs[num].style.display ="block";
		lis[num].style.background="#FFAC13";
		switch (num){
				case 0:
					bg.style.background="#FDCBC8";
					break;
				case 1:
					bg.style.background="#F85C43";
					break;
				case 2:
					bg.style.background="#F7A044";
					break;
				case 3:
					bg.style.background="#273052";
					break;
				case 4:
					bg.style.background="#1C1A1F";
					break;
//				default:
//					bg.style.background="#19171B";
//					break;
			}
	}
//	右点击事件
	rbt.onclick = function(){
		for (var i=0; i<imgs.length; i++ ) {
// 			设置一个新的变量i 更改img的脚标，更改display为 none
			imgs[i].style.display ="none";
			lis[i].style.background="#424242";
		}
		if (num >= imgs.length-1) {
			num = 0;
		} else{
			num++;
		}
		imgs[num].style.display ="block";
		lis[num].style.background="#FFAC13";
		switch (num){
				case 0:
					bg.style.background="#FDCBC8";
					break;
				case 1:
					bg.style.background="#F85C43";
					break;
				case 2:
					bg.style.background="#F7A044";
					break;
				case 3:
					bg.style.background="#273052";
					break;
				case 4:
					bg.style.background="#1C1A1F";
					break;
//				default:
//					bg.style.background="#19171B";
//					break;
			}
	}
//	圆点点击事件
	for (var i=0; i<lis.length; i++ ) {
		lis[i].xuhao =i;
		lis[i].onclick = function(){
//			??如何取到鼠标当前位置的元素 ----lis[i]中有 4 个 数字
			num = this.xuhao;
			for (var j=0; j<imgs.length; j++ ) {
	// 			设置一个新的变量i 更改img的脚标，更改display为 none
				imgs[j].style.display ="none";
				lis[j].style.background="#424242";
			}
			imgs[num].style.display ="block";
			lis[num].style.background="#FFAC13";
			switch (num){
				case 0:
					bg.style.background="#FDCBC8";
					break;
				case 1:
					bg.style.background="#F85C43";
					break;
				case 2:
					bg.style.background="#F7A044";
					break;
				case 3:
					bg.style.background="#273052";
					break;
				case 4:
					bg.style.background="#1C1A1F";
					break;
//				default:
//					bg.style.background="#19171B";
//					break;
			}
		}
	}
//	定义功能，命名为run
	function run(){
//		功能开始时, 让 num 自增
		num++; 		
		for (var i=0; i<imgs.length; i++ ) {
// 		设置一个新的变量i 更改img的脚标，更改display为 none
		imgs[i].style.display ="none";
		lis[i].style.background="#424242";
		}
//		如果num > 3, 使之变为0， 因为只有4张图
		if (num>imgs.length-1) {
			num=0;
		}
//		如果num<=3,改变图片的display为block
		if (num<=imgs.length-1) {
		imgs[num].style.display ="block";
//		改变图片的原点的背景
		lis[num].style.background="#FFAC13";
		}
		switch (num){
				case 0:
					bg.style.background="#FDCBC8";
					break;
				case 1:
					bg.style.background="#F85C43";
					break;
				case 2:
					bg.style.background="#F7A044";
					break;
				case 3:
					bg.style.background="#273052";
					break;
				case 4:
					bg.style.background="#1C1A1F";
					break;
				default:
					bg.style.background="#FFFFFF";
					break;
			}
	}
//	设置定时器
	var timer = setInterval(run,2000);
//	清除定时器 timer
	slides.onmouseover = function(){
		clearInterval(timer);
	}
//	把新的 定时器赋值给之前的 timer 这个变量,下次清除的时候才找的到
	slides.onmouseout =function(){
		timer = setInterval(run,2000);
	}
}
