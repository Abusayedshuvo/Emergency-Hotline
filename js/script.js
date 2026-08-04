const heartBtn = document.querySelectorAll(".heart-btn");
let heartCountElement = document.getElementById("heart-count");
let heartCount = parseInt(heartCountElement.innerHTML);
for (let item of heartBtn) {
  item.addEventListener("click", function () {
    heartCount++;
    heartCountElement.innerHTML = heartCount;
  });
}
