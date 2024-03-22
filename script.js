var con = document.querySelector("img");
var pop = document.querySelector(".pop");
var like = document.querySelector(".like");

var check = 0;
con.addEventListener("dblclick", function () {
  pop.style.transform = "translate(-50%, -50%) scale(1)";
  pop.style.opacity = 0.7;
  like.style.color = "red";
  check = 1;

  setTimeout(function () {
    pop.style.opacity = 0;
  }, 1000);
  setTimeout(function () {
    pop.style.transform = "translate(-50%, -50%) scale(0)";
  }, 2000);
});

like.addEventListener("click", function () {
  if (check == 0) {
    like.style.color = "red";
    setTimeout(function () {
        like.style.scale = 1.75;
      }, 1000);
      setTimeout(function () {
        like.style.scale = 1;
      }, 1400);
    
    check = 1;
  } else if (check == 1) {
    like.style.color = "white";
    check=0;
  }
});
