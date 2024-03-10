var swiper = new Swiper(".myswiper",{

    slidesPerView: 1, 
    spaceBetween: 80,
    grabCursor: true,
    loop: Infinity,
    breakpoints :{
        650:{
        slidesPerView:3
        }
    }

})