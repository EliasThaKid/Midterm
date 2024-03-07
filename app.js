$(window).on("load", function() {
    console.log("Here");
    
    animateWave2($('#wave1'), 4);
    animateWave1($('#wave2'), 4); 
    animateWave1($('#wave3'), 3); 
    animateWave2($('#wave4'), 3); 
     
});


const navButtons = document.getElementsByClassName('nav-button');
const popupMenus = document.getElementsByClassName('popup-menu');
const menu = document.querySelector('#mobile-menu');
const mobileMenu = document.querySelector('#popup-nav-mobile');
const mobileLinks = document.querySelector('.mobile-list');



function animateWave1(wave, duration) {

    function animate() {
    
        wave.animate({'background-position-x': '0px'}, duration * 1000, 'linear', function() {
            
            wave.css('background-position-x', '1000px');
            
            animate();
        });
    }

    animate();
}

function animateWave2(wave, duration) {

    function animate() {

        wave.animate({'background-position-x': '1000px'}, duration * 1000, 'linear', function() {
            
            wave.css('background-position-x', '0px');
            
            animate();
        });
    }

    animate();
}

var on = false;

mobileMenu.style.height = "0px";
mobileMenu.style.padding = "0px";


for (let i = 0; i < popupMenus.length; i++) {
    popupMenus[i].style.display = "none";
}



menu.addEventListener("click", function() {
    menu.classList.toggle("is-active");
});

menu.addEventListener("click", toggleMobileMenu);

for (let i = 0; i < navButtons.length; i++) {
    navButtons[i].addEventListener("mouseenter", revealMenu);
    popupMenus[i].addEventListener("mouseleave", hideMenu);
}

for (let i = 0; i < popupMenus.length; i++) {
    popupMenus[i].addEventListener("mouseenter", changeBackground);
    popupMenus[i].addEventListener("mouseleave", resetBackgroundPm);
    navButtons[i].addEventListener("mouseleave", resetBackground);
}


function toggleMobileMenu()  {
    on = !on;
    mobileMenu.style.height = on ? "350px" : "0px";
    mobileMenu.style.padding = on ? "80px, 0px" : "0px";
}



function revealMenu(event) {
    const buttonId = event.target.id.slice(event.target.id.indexOf("b")+1);
    const popupMenu = document.getElementById("menu" + buttonId);
    popupMenu.style.display = "block";
}

function hideMenu(event) {
    const popupMenuid = event.target.id;
    const popupMenu = document.getElementById(popupMenuid);
    popupMenu.style.display = "none";
}


function changeBackground(event) {
    const btnidnum = event.target.id.slice(event.target.id.indexOf("u")+1);
    const navButton = document.getElementById("nb" + btnidnum);
    navButton.style.backgroundColor = "#969E7D";
    navButton.style.borderColor = "#969E7D";
}

function resetBackgroundPm(event) {
    const btnidnum = event.target.id.slice(event.target.id.indexOf("u")+1);
    const navButton = document.getElementById("nb" + btnidnum);
    navButton.style.backgroundColor = "";
    navButton.style.borderColor = "";
}

function resetBackground(event) {
    const btnid = event.target.id;
    const navButton = document.getElementById(btnid);
    navButton.style.backgroundColor = "";
    navButton.style.borderColor = "";
}
