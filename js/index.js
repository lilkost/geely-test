import { useDynamicAdapt } from './dynamicAdapt.js'

useDynamicAdapt()

if(document.querySelector('.car__slider')) {
    const parentSlider = document.querySelectorAll('.car__item');

    parentSlider.forEach(parent=>{
        const currentSlider = parent.querySelector('.car__slider');
        const currentThumb = parent.querySelector('.car__thumbs');
        const slides = parent.querySelectorAll('.car__slide');

        const swiper = new Swiper(currentThumb, {
            spaceBetween: 10,
            slidesPerView: 4,
            freeMode: true,
            watchSlidesProgress: true,
        });
        var swiper2 = new Swiper(currentSlider, {
            spaceBetween: 10,
            thumbs: {
                swiper: swiper,
            },
        });

        swiper2.on('slideChange', function () {
            const activeIndex = swiper2.activeIndex;
            const bg = slides[activeIndex].getAttribute('data-bg');
            parent.style.backgroundImage = `url(${bg})`;
        });
    })
}
