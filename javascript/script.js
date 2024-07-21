// Navigation - Hamburger
const navEl = document.querySelector(".nav");
const hamburgerEl = document.querySelector(".hamburger");

hamburgerEl.addEventListener("click", () => {
  navEl.classList.toggle("nav-open");
  hamburgerEl.classList.toggle("hamburger-open");
});

// navEl.addEventListener("click", () => {
//   navEl.classList.remove("nav-open");
//   hamburgerEl.classList.remove("hamburger-open");
// });

// Navigation - Dropdown
dropOne = document.getElementById("dropdown1");
dropTwo = document.getElementById("dropdown2");
dropThree = document.getElementById("dropdown3");
dropDiv = document.getElementById("dropDownDiv");

function dropdown1() {
  dropOne.classList.toggle("show");
  dropTwo.classList.remove("show");
  dropThree.classList.remove("show");

  dropDiv.classList.add("header-dropdown-show");
}
function dropdown2() {
  dropTwo.classList.toggle("show");
  dropOne.classList.remove("show");
  dropThree.classList.remove("show");

  dropDiv.classList.add("header-dropdown-show");
}
function dropdown3() {
  dropThree.classList.toggle("show");
  dropOne.classList.remove("show");
  dropTwo.classList.remove("show");

  dropDiv.classList.add("header-dropdown-show");
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
        dropDiv.classList.remove("header-dropdown-show");
      }
    }
  }
};
