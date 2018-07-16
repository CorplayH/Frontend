window.onload = function() {
  var mySwiper = new Swiper ('.swiper-container', {
  	direction: 'vertical',
  	    // 如果需要分页器
    pagination: {
      el: '.swiper-pagination',
      type:'progressbar',
      progressbarOpposite: true,
    },
    on:{
      init: function(){
        swiperAnimateCache(this); //隐藏动画元素 
        swiperAnimate(this); //初始化完成开始动画
      }, 
      slideChangeTransitionEnd: function(){ 
        swiperAnimate(this); //每个slide切换结束时也运行当前slide动画
      } 
    }
  })
  
//添加触摸事件
	$('.music')[0].addEventListener('touchstart',function(){
//					判断音乐是否播放
		if($('#audio')[0].paused){
//						让音乐播放
			$('#audio')[0].play()
//						让图片旋转
			$(this).css('animation-play-state','running')
		}else{
//						让以音乐暂停
			$('#audio')[0].pause();
//						让图片暂停
			$(this).css('animation-play-state','paused')
		}
	},false)
  
}