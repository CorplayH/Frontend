$(function () {
	$('#buttonl').click(function(){
		show(this,'record','.rightroom');
		scrollToBottom(0);
		scrollToBottom(1);
	})
	$('#buttonr').click(function(){
		show(this,'record2','.leftroom');
		scrollToBottom(0);
		scrollToBottom(1);
	})
//	on focus 功能
	$('.chart').focus(function(){
//		清空chart 里的内容
		$(this).val('')
//		判断输入框是否为高亮
		if($('.chart:focus')){
//			单键盘点击下运行功能
			$(this).keydown(function() {
//			存输入框里的值
			var txt = $(this).val();
				//判断哪个按键按下（keyCode=13是回车键）
         		if (event.keyCode == "13") {
//       			判断txt里是否为空，有则运行，无则不运行
         			if(txt){
         				$(this).siblings('button').click();
         			}
         		}
			})
		}
	})
//	-------------聊天功能-------------
	function show (a,b,c){
//		取得输入区域(.chart) 里的值
		var cont = $(a).siblings('.chart').val()
//		判断cont是否为空
		if(!cont||cont=='\n'){
		}else{
//			找到聊天显示区域, 插入发送的聊天内容
			$(a).siblings('.chartdisplay').append('<p><span>'+cont+'</span></p>')
//			给新加入的<p>标签加样式
			$(a).siblings('.chartdisplay').find('p').last().addClass(b)
//			清空输入框
			cont =  $(a).siblings('.chart').val('')
//			取到最后一个 p 标签的内容, 存入 p 变量
			var p = $(a).siblings('.chartdisplay').find('p').last()
//			克隆 存好的p
			var contl = p.clone();
//			把克隆好的标签插入需要显示的地方
			$(c).find('.chartdisplay').append(contl).last()
		}
	}
//	-----------滚动条持续在最下的功能-----------
	function scrollToBottom(a){
//		获取到chartdisplay
		var roomBottom = document.getElementsByClassName('chartdisplay');
//						 滚动条高度  =               文档高度
			roomBottom[a].scrollTop = roomBottom[a].scrollHeight;
	}
})