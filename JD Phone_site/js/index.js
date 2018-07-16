window.onload=function () {
	var st =$(document).scrollTop();
	var h =$('.slideshow').innerHeight();
	scroll();
	var mySwiper = new Swiper ('.swiper1', {
		direction: 'horizontal',
		loop: true,
		autoplay: {
    			delay: 1000,
    			stopOnLastSlide: false,
    			disableOnInteraction: true,
		},
// 		如果需要分页器
		pagination: {
  			el: '.swiper1-p',
    		},
 	})      
 	var Swiper2 = new Swiper ('.swiper2', {
		direction: 'vertical',
		loop: true,
		autoplay: {
    			delay: 2000,
    			stopOnLastSlide: false,
    			disableOnInteraction: true,
		},
 	})
 	var Swiper3 = new Swiper ('.swiper3', {
		direction: 'horizontal',
		slidesPerView: 4,
      	spaceBetween: 0,
 	})

	function scroll (){
   		var st =$(document).scrollTop();
   		var h =$('.slideshow').innerHeight();
 		if(st==0){
 			$('.head').css('background','-webkit-linear-gradient(top, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.05))')
 		}
 		if(st>0 & st<=h){
 			$('.head').css('background','-webkit-linear-gradient(top, rgba(251, 57, 14,'+st*0.01+'), rgba(251, 57, 14,'+st*0.01+'))')
 		}
 		if(st>h){
 			$('.head').css('background','-webkit-linear-gradient(top, rgba(251, 57, 14,'+st*0.01+'), rgba(251, 57, 14,'+st*0.01+'))')
 		}
   	}/*)*/
   	$(document).scroll(function (){
   		scroll();
   		var sh = $(window).height();
 		if(st<sh){
			$('#totop').css('display','none')
		}
		if(st>sh){
			$('#totop').css('display','block')
		}
 	});
//	-------倒计时开始-----------
	var time = $('.timer span')
//	获取日期对象
//	var data = new Date();
//	获取未来时间的日期对象
//	月分的取值范围是从0-11
	var data = new Date(2018,6,11,8,40,0);
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
		time[2].innerHTML = m;
		time[4].innerHTML = s;
	},1000)
//	-------倒计时结束-----------	

//	-------返回顶部--------
	var top =document.getElementById('totop');
	top.addEventListener('touchstart',function(){
		$('html, body').animate({scrollTop: 0},300);
		},false)
//	-------返回顶部结束--------

}