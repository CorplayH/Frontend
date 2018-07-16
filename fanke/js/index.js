$(function () {
//	--------下拉菜单开始------
//	用find找当前元素标签下的子集
	$('.mainnavli').mouseenter(function () {
		$(this).find(".subul").stop().slideDown({duration:1000, easing:"easeOutBounce"});
	})
	$('.mainnavli').mouseleave(function () {
		$(this).find(".subul").stop().slideUp(500);
	})
//	--------下拉菜单结束------	

//	----轮播图开始----
//	创建变量
	var num = 0;
	var imgl= $('#slideshow img').length;
//	显示和隐藏图片功能
	function shownhide() {
		$('#slideshow img').eq(num).fadeIn(300).parents('a').siblings('a').children('img').fadeOut(300);
		$('.dot li').eq(num).addClass('active').siblings('li').removeClass('active');
	}
//	移动功能
	function run() {
		num++;
		if (num>imgl-1) {
			num=0;
		}
		shownhide();
	}
//	定时器
	var timer = setInterval(run,1500)
//	鼠标移入时清理定时器----简单写法   ----记得提问
	$('#slideshow').hover(function(){
		clearInterval(timer)
	},function () {
		timer = setInterval(run,1500);
	});
//	鼠标移入时清理定时器----麻烦写法（意思更清楚）
//	$('#slideshow').mouseenter(function(){
//		clearInterval(timer);
//	})
//	$('#slideshow').mouseleave(function () {
//		timer = setInterval(run,1500);
//	})

//	小点移入事件， 颜色变化在css 里已经解决
	$('.dot li').hover(function(){
//		获取当前元素序号,然后赋值给num
		num = $(this).index();
//		调用显隐函数
		shownhide();
	})
//	添加左右点击事件
	$('.prev').click(function () {
		num--;
		if (num<0) {
			num=imgl-1;
		}
		shownhide();
	})
	$('.next').click(function () {
		num++;
		if (num>imgl-1) {
			num=0;
		}
		shownhide();
	})
//	-------轮播图结束----------


//	-------倒计时开始-----------
	var time = $('.timer span')
//	获取日期对象
//	var data = new Date();
//	获取未来时间的日期对象
//	月分的取值范围是从0-11
	var data = new Date(2018,11,25,8,40,0);
//	document.write(data)
//	或取指定时间到时间原点的毫秒数
	var endTime = data.getTime();
	setInterval(function(){
//		获取当前时间的日期对象
		var now = new Date();
//		获得当前时间距离时间原点的毫秒数
		var strtTime = now.getTime();
//		计算相差的毫秒数
		var c = endTime-strtTime;
			c = parseInt(c/1000)
		var d = parseInt(c/3600/24)
		var h = parseInt(c/3600)
		var m = parseInt(c%(60*60)/60)
		var s =  parseInt(c % (60))
//		计算天数
//		var d = parseInt(c/(24*60*60*1000))
//		计算小时数
//		var h =  parseInt(c%(24*60*60*1000)/(60*60*1000))
///		计算 分钟数
//		var m =  parseInt(c%(60*60*1000)/(60*1000))
//		计算秒数
//		var s = parseInt(c%(60*1000)/1000)
		time[0].innerHTML = h;
		time[1].innerHTML = m;
		time[2].innerHTML = s;
	},1000)
//	-------倒计时结束-----------	
	
	
//	-------返回顶部--------
    $('#floatmenu .to-top').click(function(){
	$('html, body').animate({scrollTop: 0},300);
	});
//	-------返回顶部结束--------
});
	
