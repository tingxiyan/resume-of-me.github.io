// 相册自动切换 + 按钮切换交互
let allImg = document.querySelectorAll(".slide-img");
let index = 0;

// 默认显示第一张
allImg[0].style.display = "block";

// 下一张
document.getElementById("next").onclick = function(){
    allImg[index].style.display = "none";
    index++;
    if(index >= allImg.length){
        index = 0;
    }
    allImg[index].style.display = "block";
}

// 上一张
document.getElementById("prev").onclick = function(){
    allImg[index].style.display = "none";
    index--;
   < 0){
        index = allImg.length - 1;
    }
    allImg[index].style.display = "block";
}

// 导航平滑滚动
document.querySelectorAll(".nav-item").forEach(item => {
    item.onclick = function(e){
        e.preventDefault();
        let target = document.querySelector(this.getAttribute("href"));
        target.scrollIntoView({behavior:"smooth"});
    }
});
