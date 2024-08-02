function toggleMode() {
    const mobile_menu = document.getElementById('mobile_menu');
    const mobile_icon = document.getElementById('mobile_icon');

    mobile_menu.classList.toggle('active');
}
var btnMenu = document.getElementById('mobile_btn');
btnMenu.addEventListener('click', toggleMode);