let popupBg = document.querySelector('.popup_bg');
let popup = document.querySelector('.popup');
let openPopupButtons = document.querySelectorAll('.open-popup');
let closePopupButton = document.querySelector('.close-popup');

openPopupButtons.forEach((button) => {
    button.addEventListener('click', (e) => {
        e.preventDefault();
        popupBg.classList.add('active');
        popup.classList.add('active');
    })
});

closePopupButton.addEventListener('click', () => {
    popupBg.classList.remove('active');
    popup.classList.remove('active');
});

document.addEventListener('click', (e) => {
    if (e.target === popupBg) {
        popupBg.classList.remove('active');
        popup.classList.remove('active');
    }
});

$(document).ready(function(){
    $(".carousel").owlCarousel({
        items: 5,
        loop: true,
        autoplay: true,
        autoplayTimeout: 2000,
        autoplayHoverPause: true,
    });
});

$(document).ready(function () {
    $(".rty").owlCarousel({
        items: 2,
        loop: true,
        autoplay: true,
        autoplayTimeout: 2000,
        autoplayHoverPause: true,
    });
});

//tab
function openCity(evt, cityName) {
    let i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabscontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    // Get all elements with class ="tabslinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace("active", "")
    }
    // Show the current tab, and add an "active" class to the button that opend the tab
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += "active";
}

$(window).scroll(function () {
    if ($(this).scrollTop() > 10){
        $('header').addClass('header-fixed');
    }else{
        $('header').removeClass('header-fixed');
    }
});