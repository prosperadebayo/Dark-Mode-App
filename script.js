const toggleSwitch = document.querySelector('input[type="checkbox"]');
const nav = document.getElementById('nav');
const toggleIcon = document.getElementById('toggle-icon');
const image1 = document.getElementById('image1');
const image2 = document.getElementById('image2');
const image3 = document.getElementById('image3');
const textBox = document.getElementById('text-box');
const icon = document.getElementById('icon')
const icon2 = document.getElementById('icon2')
const iconNav = document.getElementById('nav-icon') 
const navbar = document.querySelector('.open');




// Switch Theme Dynamically
function switchTheme(event){
    if(event.target.checked){
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
        darkMode();
    }else{
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
        lightMode();
    }
}

//Image Color
function image(Color){
    image1.src = `img/undraw_proud_coder_${Color}.svg`;
    image2.src = `img/undraw_feeling_proud_${Color}.svg`;
    image3.src = `img/undraw_conceptual_idea_${Color}.svg`;
} 

// DarkMODE
function darkMode(){
    nav.style.backgroundColor = 'rgb(0 0 0 / 50%)';
    textBox.style.backgroundColor = 'rgb(225 225 225 / 50%)';
    toggleIcon.children[0].textContent = 'Dark Mode';
    toggleIcon.children[1].classList.replace('fa-sun', 'fa-moon');
    image('dark')
  
}
// light mode
function lightMode() {
    nav.style.backgroundColor = 'rgb(255 255 255 / 50%)';
    textBox.style.backgroundColor = 'rgb(0 0 0 / 50%)';
    toggleIcon.children[0].textContent = 'Ligth Mode';
    toggleIcon.children[1].classList.replace('fa-moon', 'fa-sun');
    navbar.style.backgroundColor = 'rgba(255, 255, 255, 0.7)';

    
    image('light')
}

//Event Listener
toggleSwitch.addEventListener('change', switchTheme) 

//  Check Current Theme
currentTheme = localStorage.getItem('theme');
if (currentTheme){
    document.documentElement.setAttribute('data-theme', currentTheme);
}
if(currentTheme === 'dark'){
    toggleSwitch.checked = true;
    darkMode();
}

// media queries for bar icons

function chgIcon(){
    navbar.style.display = 'flex';
    icon2.style.display = 'flex';
    icon.style.display = 'none';
    iconNav.children[0].classList.replace(icon, icon2 );
}

function chgIcon2(){
    navbar.style.display = 'none';
    icon.style.display = 'flex';
    icon2.style.display = 'none';
    iconNav.children[0].classList.replace(icon2, icon );
}
 
icon.addEventListener('click', chgIcon)
icon2.addEventListener('click', chgIcon2)