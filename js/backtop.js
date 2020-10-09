$(window).scroll(function() {
  //为了保证兼容性，这里取两个值，哪个有值取哪一个
  //scrollTop就是触发滚轮事件时滚轮的高度
  let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
  let backBtn = document.getElementById("back-btn");
  if(scrollTop >= 2000 ) {
    backBtn.style.visibility = "visible";
  } else {
    backBtn.style.visibility = "hidden";
  }

  backBtn.addEventListener("click", () => {
    document.documentElement.scrollTop = 0
  })
})