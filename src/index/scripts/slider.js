const ROOT_CLASS_NAMES = 'slider';
const SLIDES__CLASS__ALL = `.${ROOT_CLASS_NAMES}__image`;
const BUTTON_PREV_CLASS = `.${ROOT_CLASS_NAMES}__prev`;
const BUTTON_NEXT_CLASS = `.${ROOT_CLASS_NAMES}__next`;
const VISIBLE_CLASS = 'visible';

export class Slider {
   constructor(rootElement, sliderData) {
         this.rootElement = rootElement;
         this.sliderData = sliderData;
         this.slider;
         this.buttonContainer;
         this.buttonPrev;
         this.buttonNext;
         this.render();
    }

    render() {
      this.slider = document.createElement('div');
      this.slider.classList.add('slider__images');
      this.rootElement.appendChild(this.slider);

      for (let i = 0; i < this.sliderData.length; i++) {
         const {img, name, desc} = this.sliderData[i];
         const slideData = `
           <div class="slider__image ${i == 0 ? 'visible' : ''}" data-slider="slide-${i}">
             <div class="slide__image">
              <img src="${img}" />
             </div>
             <div class="slider__caption">
               <div class="slider__caption-content">
                 <div class="slider__caption-title">
                   <h2>${name}</h2>
                 </div>
                 <p>${desc}</p>
               </div>
             </div>
           </div>
         `;
         this.slider.innerHTML += slideData;
       }
       const buttonContainer = `
         <div class="slider__btns">
            <input class="slider__prev" type="button" value="&#10094;"></input>
            <input class="slider__next" type="button" value="&#10095;"></input>
         </div>
      `;
      this.rootElement.innerHTML += buttonContainer;

      this.buttonPrev = document.querySelector(BUTTON_PREV_CLASS);
      this.buttonPrev.addEventListener('click', () => {
         slides[currentSlide].classList.remove(VISIBLE_CLASS);
         currentSlide--;
         if(currentSlide < 0 )
         currentSlide = slides.length - 1;
         slides[currentSlide].classList.add(VISIBLE_CLASS);
      })

      this.buttonNext = document.querySelector(BUTTON_NEXT_CLASS);
      this.buttonNext.addEventListener('click', () => {
         slides[currentSlide].classList.remove(VISIBLE_CLASS);
         currentSlide = (currentSlide + 1) % slides.length;
         slides[currentSlide].classList.add(VISIBLE_CLASS);
      })

       const slides = document.querySelectorAll(SLIDES__CLASS__ALL);
         let currentSlide = 0;
         const slideInterval = setInterval(() => {
         slides[currentSlide].classList.remove(VISIBLE_CLASS);
         currentSlide = (currentSlide + 1) % slides.length;
         slides[currentSlide].classList.add(VISIBLE_CLASS);
         }, 7000);

    }
 }