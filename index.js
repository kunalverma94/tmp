const setting =
{
    nav: false,
}
function Toggle() {
    var toggler = document.getElementById("toggler");
    document.getElementById("sidenav").classList.toggle("nav_open");
    document.getElementById("main").classList.toggle("main_open");
    toggler.classList.toggle("togggler_left");
    toggler.innerHTML == "☰" ? toggler.innerHTML = '&times;' : toggler.innerHTML = "☰"

}
window.onload = function () {
    Toggle();
}

