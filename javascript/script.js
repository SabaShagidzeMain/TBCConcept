// Navigation - Hamburger
const navEl = document.querySelector(".nav");
const hamburgerEl = document.querySelector(".hamburger");

hamburgerEl.addEventListener("click", () => {
  navEl.classList.toggle("nav-open");
  hamburgerEl.classList.toggle("hamburger-open");
});

// Navigation - Dropdown
const dropOne = document.getElementById("dropdown1");
const dropTwo = document.getElementById("dropdown2");
const dropThree = document.getElementById("dropdown3");
const dropDivOne = document.getElementById("dropDownDiv1");
const dropDivTwo = document.getElementById("dropDownDiv2");
const dropDivThree = document.getElementById("dropDownDiv3");

function dropdown1() {
  dropOne.classList.toggle("show");
  dropTwo.classList.remove("show");
  dropThree.classList.remove("show");

  dropDivOne.classList.toggle("header-dropdown-show");
  dropDivTwo.classList.remove("header-dropdown-show");
  dropDivThree.classList.remove("header-dropdown-show");
}
function dropdown2() {
  dropTwo.classList.toggle("show");
  dropOne.classList.remove("show");
  dropThree.classList.remove("show");

  dropDivOne.classList.remove("header-dropdown-show");
  dropDivTwo.classList.toggle("header-dropdown-show");
  dropDivThree.classList.remove("header-dropdown-show");
}
function dropdown3() {
  dropThree.classList.toggle("show");
  dropOne.classList.remove("show");
  dropTwo.classList.remove("show");

  dropDivOne.classList.remove("header-dropdown-show");
  dropDivTwo.classList.remove("header-dropdown-show");
  dropDivThree.classList.toggle("header-dropdown-show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function (event) {
  if (!event.target.matches(".dropbtn")) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("show")) {
        openDropdown.classList.remove("show");
        dropDivOne.classList.remove("header-dropdown-show");
        dropDivTwo.classList.remove("header-dropdown-show");
        dropDivThree.classList.remove("header-dropdown-show");
      }
    }
  }
};
