var crsr = document.querySelector("#cursor");
var crsrblur = document.querySelector("#cursor-blur");

document.addEventListener("mousemove", function (dets) {
  crsr.style.left = dets.x + "px";
  crsr.style.top = dets.y + "px";
  crsrblur.style.left = dets.x - 150 + "px";
  crsrblur.style.top = dets.y  - 150 + "px";
});
