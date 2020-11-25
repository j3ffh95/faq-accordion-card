let accordionsElements = document.getElementsByClassName("accordion");

for (let i = 0; i < accordionsElements.length; i++) {
  accordionsElements[i].addEventListener("click", function () {
    // console.log(this.querySelector("img"));
    this.querySelector("img").classList.toggle("active");
    this.classList.toggle("text-active");
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}
// console.log(accordionsElements);
