//首先获取元素，这里获取了所有需要的元素。
			    var box = document.getElementsByClassName("box_big")[0];
//			    var spot = document.getElementsByClassName("spot_list");
			    var block = document.getElementsByClassName("block")[0];
			    var left_btn = document.getElementsByClassName("left_btn")[0];
			    var right_btn = document.getElementsByClassName("right_btn")[0];
			    var time = null;
			    var count = 0;
			    showtime();
			    //鼠标进入计时器停止
			    block.onmouseenter = function () {
			        clearInterval(time);
			    };
			    //鼠标出来计时器打开
			    block.onmouseleave = function () {
			        showtime();
			    };

			    //图片左边划
			    right_btn.onclick = function () {
			        mate();
			    };
			    //图片右边划
			    left_btn.onclick = function () {
//			        spot[count].style.backgroundColor = "rgba(255,255,255,0.3)";
			        count--;
			        if (count < 0) {
			            box.className = "box_big";
			            count = box.children.length - 1;
			            box.style.left = "-300px";
			        }
			        setTimeout(function () {
			            box.className = "box_big nav";
			            box.style.left = (-300 * count) + "px";
//			            spot[count].style.backgroundColor = "rgba(91,91,91,0.8)";
			        }, 1);
			    };
			    
			    //计时器
			    function showtime() {
			        time = setInterval(function () {
			            mate();
			        }, 2000);
			    }
			    //正常滚动
			    function mate() {
			        box.className = "box_big nav";
//			        spot[count].style.background = "rgba(255, 255, 255, 0.3)";
			        count++;
//			        spot[count > box.children.length - 1 ? 0 : count].style.background = "rgba(91,91,91,0.8)";
			        box.style.marginLeft = (count * -300) + "px";
			        setTimeout(function () {
			            if (count > box.children.length - 2) {
			                count = 0;
			                box.className = "box_big";
			                box.style.marginLeft = "0px"
			            }
			        }, 500)
			    }
