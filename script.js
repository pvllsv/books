"use strict"
console.log('ssss')
document.addEventListener("DOMContentLoaded", function(){
    let burger = document.querySelector('.burger_menu');
    let header_top = document.querySelector('.header-top');
    let mobile_fon = document.querySelector('.mobile_fon');
    burger.addEventListener('click', function(){
        burger.classList.toggle('open_burger');
        header_top.classList.toggle('header-open');
        mobile_fon.classList.toggle('mobile_fon_open');
    });
    mobile_fon.addEventListener('click', function(){
        burger.classList.toggle('open_burger');
        header_top.classList.toggle('header-open');
        mobile_fon.classList.toggle('mobile_fon_open');
        
    });
    window.addEventListener('scroll', function() {
        burger.classList.add('burger_menu_scrol');

    });

    
    

});