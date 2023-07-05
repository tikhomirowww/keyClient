let num = document.querySelector("#counter");
let minus = document.querySelector("#minus");
let plus = document.querySelector("#plus");
let closeIcon = document.querySelector("#closeIcon");
let sendBtn = document.querySelector(".send_btn");

let modal = document.querySelector(".modal");
let openModal = document.querySelector(".buy");

let mailInp = document.querySelector("#mailInput");
let closeInp = document.querySelector("#closeInp");

let mainImage = document.getElementById("main-image");
let subImages = document.getElementsByClassName("sub-image");

let closeBurger = document.querySelector(".burger_close");
let openBurger = document.querySelector("#menu");
let burger = document.querySelector(".burger-menu");

openBurger.addEventListener("click", () => {
  burger.style.display = "block";
});

closeBurger.addEventListener("click", () => {
  burger.style.display = "none";
});

for (var i = 0; i < subImages.length; i++) {
  subImages[i].addEventListener("click", function () {
    mainImage.src = this.src;
    for (var j = 0; j < subImages.length; j++) {
      subImages[j].classList.remove("active");
    }
    this.classList.add("active");
  });
}

let counter = 1;

minus.addEventListener("click", () => {
  if (!counter) {
    return;
  }
  counter--;
  num.innerHTML = counter;
});

plus.addEventListener("click", () => {
  counter++;
  num.innerHTML = counter;
});

closeIcon.addEventListener("click", () => {
  modal.style.opacity = 0;
  modal.style.zIndex = -1;
});

sendBtn.addEventListener("click", () => {
  modal.style.opacity = 0;
  modal.style.zIndex = -1;
});

openModal.addEventListener("click", () => {
  modal.style.zIndex = 1;
  modal.style.opacity = 1;
});

closeInp.addEventListener("click", () => {
  mailInp.value = "";
});
