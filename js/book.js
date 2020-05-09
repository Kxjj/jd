
		//	首先获取元素，这里获取了所有需要的元素。
			    var box_1 = document.getElementsByClassName("box_big_1")[0];
			    var spot = document.getElementsByClassName("spot_list");
			    var block_1 = document.getElementsByClassName("block_1")[0];
			    var left_btn_1 = document.getElementsByClassName("left_btn_1")[0];
			    var right_btn_1 = document.getElementsByClassName("right_btn_1")[0];
			    var time_1 = null;
			    spot[0].style.background = "rgba(91,91,91,0.8)";
			    var count_1 = 0;
			    showtime_1();
			    //鼠标进入计时器停止
			    block_1.onmouseenter = function () {
			        clearInterval(time_1);
			    };
			    //鼠标出来计时器打开
			    block_1.onmouseleave = function () {
			        showtime_1();
			    };
			    //点的事件
			    for (var i = 0; i < spot.length; i++) {
			        spot[i].index = i;
			        spot[i].onmouseenter = function () {
			            spot[count_1].style.background = "rgba(255, 255, 255, 0.3)";
			            this.style.background = "rgba(91,91,91,0.8)";
			            count = this.index;
			            box_1.style.left = (count * -500) + "px";
			        }
			
			    }
			    //图片左边划
			    left_btn_1.onclick = function () {
			        mate();
			    };
			    //图片右边划
			    right_btn_1.onclick = function () {
			        spot[count_1].style.backgroundColor = "rgba(255,255,255,0.3)";
			        count--;
			        if (count_1 < 0) {
			            box_1.className = "box_big_1";
			            count_1 = box_1.children.length - 1;
			            box_1.style.left = "-2000px";
			        }
			        setTimeout(function () {
			            box_1.className = "box_big_1 nav";
			            box_1.style.left = (-500 * count) + "px";
			            spot[count_1].style.backgroundColor = "rgba(91,91,91,0.8)";
			        }, 1);
			    };
			    //计时器
			    function showtime_1() {
			        time_1 = setInterval(function () {
			            mate_1();
			        }, 2000);
			    }
			    //正常滚动
			    function mate_1() {
			        box_1.className = "box_big_1 nav_1";
			        spot[count_1].style.background = "rgba(255, 255, 255, 0.3)";
			        count_1++;
			        spot[count_1 > box_1.children.length - 1 ? 0 : count_1].style.background = "rgba(91,91,91,0.8)";
			        box_1.style.left = (count_1 * -500) + "px";
			        setTimeout(function () {
			            if (count_1 > box_1.children.length - 1) {
			                count_1 = 0;
			                box_1.className = "box_big_1";
			                box_1.style.left = "0px"
			            }
			        }, 500)
			    }
			    
			    
