/*-----Navbar Dropdown Menu-----*/
/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

/*-----Aside - Profile Accordion-----*/
/* Set the width of the sidebar to 250px (show it) */
function openProfile() {
  document.getElementById("profileAside").style.width = "25%";
}

/* Set the width of the sidebar to 0 (hide it) */
function closeAside() {
  document.getElementById("profileAside").style.width = "0";
}

/*-----About - Auto Typing-----*/
var typed = new Typed(".auto-type", {
  strings: ["Azhari", "Front End Developer"],
  typeSpeed: 125,
  backSpeed: 100,
  loop: true
})

/*-----Qualification - Modal-----*/
// Declarate the variable
var modal1 = document.getElementById("quaModal1");
var modal2 = document.getElementById("quaModal2");
var modal3 = document.getElementById("quaModal3");
var modal4 = document.getElementById("quaModal4");
var btn1 = document.getElementById("quaBtn1");
var btn2 = document.getElementById("quaBtn2");
var btn3 = document.getElementById("quaBtn3");
var btn4 = document.getElementById("quaBtn4");
var span1 = document.getElementsByClassName("quaClose1")[0];
var span2 = document.getElementsByClassName("quaClose2")[0];
var span3 = document.getElementsByClassName("quaClose3")[0];
var span4 = document.getElementsByClassName("quaClose4")[0];

// When the user clicks on the button, open the modal
btn1.onclick = function() {
  modal1.style.display = "block";
}
btn2.onclick = function() {
  modal2.style.display = "block";
}
btn3.onclick = function() {
  modal3.style.display = "block";
}
btn4.onclick = function() {
  modal4.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span1.onclick = function() {
  modal1.style.display = "none";
}
span2.onclick = function() {
  modal2.style.display = "none";
}
span3.onclick = function() {
  modal3.style.display = "none";
}
span4.onclick = function() {
  modal4.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal1) {
    modal1.style.display = "none";
  }
  else if (event.target == modal2) {
    modal2.style.display = "none";
  }
  else if (event.target == modal3) {
    modal3.style.display = "none";
  }
  else if (event.target == modal4) {
    modal4.style.display = "none";
  }
}

/*-----Project - Filtering Content-----*/
// Execute the function and show all column
filterSelection("all")
function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("column");
  if (c == "all") c = "";
  for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
  }
}

function w3AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {element.className += " " + arr2[i];}
  }
}

function w3RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);     
    }
  }
  element.className = arr1.join(" ");
}

// Project - Navigation Indicatio
const projectBtns = document.querySelectorAll(".project-btn");

projectBtns.forEach((projectBtn, index) => {
  projectBtn.addEventListener("click", () => {
    document.querySelector(".projectActive").classList.remove("projectActive");
    projectBtn.classList.add("projectActive");
  })
})

/*-----Scroll To Top Btn-----*/
//Get the button:
const topButton = document.getElementById("topBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 1000 || document.documentElement.scrollTop > 1000) {
    topButton.style.display = "block";
  } else  {
    topButton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}