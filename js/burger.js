const navWrapper = document.querySelector('.nav-wrapper'),
navToogler =  document.querySelector('.nav-toogler')

navToogler.addEventListener('click', function (event) {
	navWrapper.classList.toggle('active')
})
 


window.addEventListener('scroll') = function() {scroleHandler()};

const header = document.getElementById("topNavbar");

const sticky = navbar.offsetTop;

function hideNavBar() {
  if (window.pageYOffset > sticky) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
}
