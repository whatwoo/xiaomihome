  let listTimer = null;
  let ulList = document.getElementById("ulList");
  let sep = 0;

  function listAutoPlay() {
    listTimer = setInterval(() => {
      sep = sep - 992;
      if(sep <= -3968){
        sep = 0
      }
      ulList.style.transform = "translate3d("+sep+"px, 0px, 0px)";
    },5000)
  }

  listAutoPlay();

  let searchBtn = document.getElementById("search-btn");
  let searchBox = document.getElementById("search-box");
  searchBtn.addEventListener("focusin", () => {
    searchBox.style.display = "block";
  })
  searchBtn.addEventListener("focusout", () => {
    searchBox.style.display = "none";
  })