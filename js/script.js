window.onload = function(){
    var page1 = document.getElementById("page1");
    var page2 = document.getElementById("page2");
    var page3 = document.getElementById("page3");
    var page4 = document.getElementById("page4");
    page1.addEventListener("touchmove", function(event){
      this.style.display = "none";
      page2.style.display = "block";
      page2.setAttribute("class", "page fadein");
    }, false);
    page2.addEventListener("touchmove", function(event){
      this.setAttribute("class", "page fadeout");
      page3.style.display = "block";
      page3.setAttribute("class", "page fadein");
    }, false);
    page3.addEventListener("touchmove", function(event){
      this.style.display = "none";
      page4.style.display = "block";
      page4.setAttribute("class", "page fadein");
    }, false);
};
