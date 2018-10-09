const setting =
{
    nav: false,
}
function Toggle() {
    var toggler = document.getElementById("toggler");
    var sidenav = document.getElementById("sidenav");
    sidenav.classList.toggle("nav_open");
    document.getElementById("main").classList.toggle("main_open");
    toggler.classList.toggle("togggler_left");
    sidenav.classList.contains("nav_open") ? toggler.innerHTML = '&#xe079;' : toggler.innerHTML = "&#xe080;"
}
window.onload = function() {

    // Getimg();
}

window.onscroll = function() { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("tops").style.position = "fixed";
    } else {
        document.getElementById("tops").style.position = "static";
    }
}