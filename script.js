window.onload = function() {
    let preloader = document.getElementById('preloader');
    preloader.classList.add('hide-preloader');
    setInterval(function() {
        preloader.classList.add('preloader-hidden');
    }, 2990);
}

gsap.from(".menu", {opacity:0, duration: 1, delay:1, stagger: 0.5}) 
gsap.from("#letter", {opacity: 0, duration:1, delay: 2, rotation: 360}) 
gsap.to("i", {scale:1.4, duration: 3, delay: 5}) 

const upBtn = document.querySelector('.up-button');
const downBtn = document.querySelector('.down-button');
const sidebar = document.querySelector('.sidebar');
const container = document.querySelector('.container');
const mainSlide = document.querySelector('.main-slide');
const slidesCount = mainSlide.querySelectorAll('div').length;

let activeSlideIndex = 0

sidebar.style.top = `-${(slidesCount - 1) * 70}vh`

upBtn.addEventListener('click', () =>{
    changeSlide('up')
})

downBtn.addEventListener('click', () => {
    changeSlide('down')
})

document.addEventListener('keydown', event => {
    if (event.key === 'ArrowUp') {
        changeSlide('up')
    } else if (event.key === 'ArrowDown'){
        changeSlide('down')
    }
})

function changeSlide(direction){
    if (direction === 'up'){
        activeSlideIndex++
        if (activeSlideIndex === slidesCount){
            activeSlideIndex = 0
        }
    } else if (direction === 'down'){
        activeSlideIndex--
        if (activeSlideIndex < 0){
            activeSlideIndex = slidesCount - 1
        }
    }
    const height = container.clientHeight
    
    mainSlide.style.transform = `translateY(-${activeSlideIndex * height}px)`
    sidebar.style.transform = `translateY(${activeSlideIndex * height}px)`
}