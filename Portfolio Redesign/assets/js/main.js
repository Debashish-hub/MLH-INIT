//common side navbar call

$(document).ready(function () {
  $(".sidenav").sidenav();
});

//Get the top button
var mybutton = document.getElementById("myBtn");
// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};
function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

//Footer and Navbar

let header = $(`
<nav class="black">
<div class="nav-wrapper container">
    <a href="#!" class="brand-logo">| 𝕯𝖊𝖇𝖆𝖘𝖍𝖎𝖘𝖍 |</a>
    <a href="#" data-target="mobile-demo" class="white-text sidenav-trigger"><i
            class="material-icons">menu</i></a>
    <ul class="right hide-on-med-and-down">
        <li><a class="white-text" href="index.html">Home</a></li>
        <li><a class="white-text" href="experience.html">Experience</a></li>
        <li><a class="white-text" href="projects.html">Projects</a></li>
        <li><a class="white-text" href="education.html">Education</a></li>

        <!--TOGGLE FOR LIGHT/DARK MODE-->
        <li>
        <label for="switch" class="theme-switch">
        <input class="toggle-checkbox" type="checkbox" id="switch" name="theme" />
          <div class='toggle-slot'>
          <div class='sun-icon-wrapper'>
          <div class="iconify sun-icon" data-icon="feather-sun" data-inline="false"> </div>
          </div>
          <div class='toggle-button'></div>
          <div class='moon-icon-wrapper'>
          <div class="iconify moon-icon" data-icon="feather-moon" data-inline="false"> </div>
          </div>
          </div>
          </label>
        </li>
    </ul>
</div>
</nav>

<!--Side Nav Bar -->
<ul class="sidenav" id="mobile-demo">
<li><a href="index.html">Home</a></li>
<li><a href="experience.html">Experience</a></li>
<li><a href="projects.html">Projects</a></li>
<li><a href="education.html">Education</a></li>

<!--TOGGLE FOR LIGHT/DARK MODE-->
        <li>
        <label for="switch" class="theme-switch">
        <input class="toggle-checkbox" type="checkbox" id="switch" name="theme" />
          <div class='toggle-slot side-toggle'>
          <div class='sun-icon-wrapper'>
          <div class="iconify sun-icon" data-icon="feather-sun" data-inline="false"> </div>
          </div>
          <div class='toggle-button'></div>
          <div class='moon-icon-wrapper'>
          <div class="iconify moon-icon" data-icon="feather-moon" data-inline="false"> </div>
          </div>
          </div>
          </label>
        </li>
</ul>`);

let footer = $(`
    <footer class="mainfooter" role="contentinfo">
      <div class="footer-middle">
        <div class="container">
          <div class="col-md-12 col-sm-4">
            <h4 class="text-center">Connect With Me</h4>
              <div class="social-icons text-center">
                  <a class="social-icon linkedin" href="https://linktr.ee/DebashishKumarSahoo" target="_blank" rel="author">
                      <i class="fas fa-link"></i>
                  </a>  

                    <a class="social-icon twitter" href="https://twitter.com/imdebashish_10" target="_blank" rel="author">
                        <i class="fab fa-twitter"></i>
                    </a>

                    <a class="social-icon linkedin" href="https://www.linkedin.com/in/debashish-kumar-sahoo-784948193/" target="_blank" rel="author">
                        <i class="fab fa-linkedin-in"></i>
                    </a>

                    <a class="social-icon instagram" href="https://www.instagram.com/debashish10_/" target="_blank" rel="author">
                        <i class="fab fa-instagram"></i>
                    </a>

                    <a class="social-icon github" href="https://github.com/Debashish-hub" target="_blank" rel="author">
                        <i class="fab fa-github"></i>
                    </a>

                    <a class="social-icon youtube" href="https://www.youtube.com/channel/UC_WiPA1i6QtRivPJfARwuAA" target="_blank" rel="author">
                        <i class="fab fa-youtube"></i>
                    </a>

                </div>
            </div>
        </div>
        <hr>
        <div class="row">
          <div class="col-md-12 sm text-center">
            <p class="text-center">Designed and built with ❤ by  <a href="index.html"><strong style="font-size:20px;">𝕯𝖊𝖇𝖆𝖘𝖍𝖎𝖘𝖍 𝕶𝖚𝖒𝖆𝖗 𝕾𝖆𝖍𝖔𝖔</strong></a></p>
          </div>
        </div>
   
      </div>
      </div>
    </footer>
`);
let bodyElement = $(`body`);
bodyElement.prepend(header);
bodyElement.append(footer);

/*JavaScript for toggle for light/dark mode*/ 

var checkbox = document.querySelector('input[name=theme]');
if(checkbox)
 {
 checkbox.addEventListener('change', function(){
   if(this.checked)
   {
     trans()
     document.documentElement.setAttribute('data-theme', 'dark')
   }
   else
   {
     trans()
     document.documentElement.setAttribute('data-theme', 'light')
   }
 });

 let trans = () => {
   document.documentElement.classList.add('transition');
   window.setTimeout(() => {
     document.documentElement.classList.remove('transition')
   }, 1000)
 }}
