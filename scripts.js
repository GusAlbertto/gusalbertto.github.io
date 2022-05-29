$(document).ready(function(){
    $('#autoWidth').lightSlider({
        autoWidth:true,
        loop:true,
        slideMargin: 0,
        onSliderLoad:function(){
            $('#autoWidth').removeClass('cS-hidden');
        }
    });
});

window.addEventListener("scroll", function(){
    let header = document.querySelector('.navbar');
    header.classList.toggle('sticky', window.scrollY > 0);
});

let toggle = document.querySelector('.menu-btn');
let navbar = document.querySelector('.navigation');
toggle.onclick = function(){
    toggle.classList.toggle('open');
    navbar.classList.toggle('active');
}

function toggleMenu(){
    toggle.classList.remove('open');
    navbar.classList.remove('active');
   
}