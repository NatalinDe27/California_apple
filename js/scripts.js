$(document).ready(function(){

    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:0,
        nav:true,
        navText: [ '', ' ' ],

        responsive:{
            0:{
                items:1
            },

            1000:{
                items:1
            }
        }
    });
    let button = document.getElementById('what-lorem-ipsum-header');
    button.onclick = function(){
        this.nextElementSibling.style.display =  this.nextElementSibling.style.display == 'none' ? 'block' : 'none' ;
    }
});