console.log('hello')

// --------------------исодные данные по слайдеру-------------------------
const sliderImages = document.querySelectorAll('.slider__picture');
const sliderDots = document.querySelectorAll('.slider__dot');
const sliderLine = document.querySelector('.slider__line');

const sliderTexts = document.querySelectorAll('.slider__text');
const sliderLineText = document.querySelector('.slider__line-text');


// --------------------переменные-------------------------
let sliderCount = 0;
let sliderWidth;
let sliderWidthText;

// --------------------адаптивность-------------------------
window.addEventListener('resize', showSlider);


function showSlider() {
    sliderWidth = document.querySelector('.slider').offsetWidth;
    sliderLine.style.width = sliderWidth * sliderImages.length + 'px';
    sliderImages.forEach(item => item.style.width = sliderWidth + 'px');
    rollSlide();
}
showSlider()

function showSliderText() {
    sliderWidthText = document.querySelector('.slider__container-text').offsetWidth;
    sliderLineText.style.width = sliderWidthText * sliderTexts.length + 'px';
    sliderTexts.forEach(item => item.style.width = sliderWidthText + 'px');
    rollSlideText();
}
showSliderText()

// --------------------перелистывание-------------------------
function nextSlder() {
    sliderCount++;
    if (sliderCount >= sliderImages.length) sliderCount = 0;
    rollSlide();
    thisSlide(sliderCount);
    rollSlideText();
}

function prevSlder() {
    sliderCount--;
    if (sliderCount < 0) sliderCount = sliderImages.length-1;
    rollSlide();
    thisSlide(sliderCount);
    rollSlideText();
}

// --------------------шаг перелистывания слайдев------------------
function rollSlide() {
    sliderLine.style.transform = `translateX(${-sliderCount * sliderWidth}px)`
}

function rollSlideText() {
    sliderLineText.style.transform = `translateX(${-sliderCount * sliderWidthText}px)`
}

// ----------------какой слайд по счетчику активен--------------------
function thisSlide(index) {
    sliderDots.forEach(item => item.classList.remove('active-dot'));
    sliderDots[index].classList.add('active-dot');
}

// -----------------------------клик на дот--------------------------
sliderDots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        sliderCount = index;
        rollSlide();
        thisSlide(sliderCount);
        rollSlideText();
    })
})




