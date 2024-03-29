$(document).ready(function(){
    $(window).scroll(function(){
        // sticky navbar on scroll script
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        
        // scroll-up button show/hide script
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // slide-up script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function(){
        // applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });

    // toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // typing text animation script
    var typed = new Typed(".typing", {
        strings: ["Adventures", "Vacations", "Experiences","Destinations"],
        typeSpeed: 300,
        backSpeed: 100,
        loop: true
    });

    var typed = new Typed(".typing-2", {
        strings: ["Adventures", "Vacations", "Experiences","Destinations"],
        typeSpeed: 300,
        backSpeed: 100,
        loop: true
    });

   

    // owl carousel script
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeOut: 200,
        autoplayHoverPause: true,
        responsive: {
            0:{
                items: 1,
                nav: true
            },
            // 600:{
            //     items: 2,
            //     nav: false
            // },
            // 1000:{
            //     items: 3,
            //     nav: false
            // }
        }
    });
});

 //Email function
 function sendEmail(params) {
    var tempParams = {
        from_name : document.getElementById("fromName").value,
        to_name : document.getElementById("toName").value,
        message : document.getElementById("message").value,

    }

    emaljs.send('gmail-id','template-id',tempParams)
    .then(function(res)
    {
        console.log("success",res.status);
    })
}

const prev = document.getElementById('prev-btn')
const next = document.getElementById('next-btn')
const list = document.getElementById('item-list')
const itemWidth = 150
const padding = 10

prev.addEventListener('click',()=>{
  list.scrollLeft -= (itemWidth + padding)
})
next.addEventListener('click',()=>{
  list.scrollLeft += (itemWidth + padding)
})



