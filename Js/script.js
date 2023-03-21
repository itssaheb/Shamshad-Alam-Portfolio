// Dark Mode

const body = document.querySelector("body");
const toggle = document.querySelector("#toggle");
const sunIcon = document.querySelector(".toggle .fa-solid fa-sun");
const moonIcon = document.querySelector(".toggle .fa-solid fa-moon");

toggle.addEventListener("change", () => {
  body.classList.toggle("dark");
  sunIcon.className =
    sunIcon.className == "fa-solid fa-sun" ? "fa-solid fa-sun" : "fa-solid fa-sun";
  moonIcon.className =
    moonIcon.className == "fa-solid fa-moon" ? "fa-solid fa-moon" : "fa-solid fa-moon";
});

// link reflection 

var list1 = document.getElementById("li-1");
var list2 = document.getElementById("li-2");
var list3 = document.getElementById("li-3");
var list4 = document.getElementById("li-4");
var list5 = document.getElementById("li-5");
var list6 = document.getElementById("li-6");

list1.onclick = function () {
  list1.classList.add("active");
  list2.classList.remove("active");
  list3.classList.remove("active");
  list4.classList.remove("active");
  list5.classList.remove("active");
  list6.classList.remove("active");
};
list2.onclick = function () {
  list2.classList.add("active");
  list1.classList.remove("active");
  list3.classList.remove("active");
  list4.classList.remove("active");
  list5.classList.remove("active");
  list6.classList.remove("active");
};
list3.onclick = function () {
  list3.classList.add("active");
  list2.classList.remove("active");
  list1.classList.remove("active");
  list4.classList.remove("active");
  list5.classList.remove("active");
  list6.classList.remove("active");
};
list4.onclick = function () {
  list4.classList.add("active");
  list2.classList.remove("active");
  list3.classList.remove("active");
  list1.classList.remove("active");
  list5.classList.remove("active");
  list6.classList.remove("active");
};
list5.onclick = function () {
  list5.classList.add("active");
  list2.classList.remove("active");
  list3.classList.remove("active");
  list4.classList.remove("active");
  list6.classList.remove("active");
  list1.classList.remove("active");
};
list6.onclick = function () {
  list6.classList.add("active");
  list2.classList.remove("active");
  list3.classList.remove("active");
  list4.classList.remove("active");
  list5.classList.remove("active");
  list1.classList.remove("active");
};

// text typing

var typing = new Typed(".text", {
  strings: ["I am a Graphic Designer.", "I create Poster.", "I create Poster.", "I create Catalogue.", "I create Brochure.", "I create Emailer.", "I create Flyer etc..."],
  typeSpeed: 100,
  backSpeed: 40,
  loop: true,
});
