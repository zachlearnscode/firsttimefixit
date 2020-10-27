function scrollFunction() {
  if(document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("header").style.height = "150px";
    document.getElementById("logo").style.width = "150px";
  } else {
    document.getElementById("header").style.height = "300px";
    document.getElementById("logo").style.width = "300px";
  }
}

window.onscroll = scrollFunction;