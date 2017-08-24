window.onload = function(){
	var btn = document.getElementById('top');
	var winH = document.documentElement.clientHeight; //获取视界的高度
	var timer = null; //定义定时器
	var isTop = true; //定义是否抵达顶部布尔值判断
	console.log(winH);

	window.onscroll = function(){
		var toTop = document.body.scrollTop || document.documentElement.scrollTop;
		console.log(toTop);
		//判断是否到了第二屏，若是，显示按钮
		if (toTop > winH) {
			btn.style.display = 'block';
		} else {
			btn.style.display = 'none';
		};
		//判断是否到达顶部，若否，停止计时器
		if (!isTop) {
			clearInterval(timer);
		};
		//重置布尔值判断
		isTop = false;
	}

	//回到顶部按钮点击事件
	btn.onclick = function(){
		//设置计时器50ms间隔
		timer = setInterval(function(){
			var toTop = document.body.scrollTop || document.documentElement.scrollTop;
			//设置速度，用等式而不用具体数值是为了产生混动效果
			var speed = Math.ceil(toTop/5);
			//作差，产生欢动效果；
			document.documentElement.scrollTop = document.body.scrollTop = toTop - speed;
			// 重置布尔值判断；
            isTop = true;
            // 判断是否抵达顶部，若是，停止计时器；
            if (toTop == 0) {
                clearInterval(timer);
            };
		},10)
	}
}