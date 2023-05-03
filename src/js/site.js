// SLIDER //
var count = 1;
document.getElementById('radio1').checked = true;

setInterval(()=>{
    count++
    if (count > 3) {
        count = 1
    }
    document.getElementById('radio' + count).checked = true;
},5000)  

// MOBILE MENU
function mobileMenu () {
    var mobileMenu = document.querySelector('.nav-content');
    var mobileMenu_animate = document.querySelector('.nav-content ul');

    if (mobileMenu.classList.contains('open')) {
        mobileMenu.classList.remove('open');
        mobileMenu_animate.classList.remove("animate__animated", "animate__fadeInDown");
        document.querySelector('.icon-mobileMenu').src = "src/images/menu_white_36dp.svg";
    } else {
        mobileMenu.classList.add('open');
        mobileMenu_animate.classList.add("animate__animated", "animate__fadeInDown");
        document.querySelector('.icon-mobileMenu').src = "src/images/close_white_36dp.svg";
    }

}