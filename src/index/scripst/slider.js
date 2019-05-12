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
             <div class="slide-image">
              <img src="${img}" />
             </div>
             <div class="slide-caption">
               <div class="slide-caption-content">
                 <div class="title-bg">
                   <h1>${name}</h1>
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

      this.buttonPrev = document.querySelector('.slider__prev');
      this.buttonPrev.addEventListener('click', () => {
         slides[currentSlide].classList.remove(VISIBLE_CLASS);
         currentSlide--;
         if(currentSlide < 0 )
         currentSlide = slides.length - 1;
         slides[currentSlide].classList.add(VISIBLE_CLASS);
      })

      this.buttonNext = document.querySelector('.slider__next');
      this.buttonNext.addEventListener('click', () => {
         slides[currentSlide].classList.remove(VISIBLE_CLASS);
         currentSlide = (currentSlide + 1) % slides.length;
         slides[currentSlide].classList.add(VISIBLE_CLASS);
      })

       const slides = document.querySelectorAll(".slider__image");
         let currentSlide = 0;
         const slideInterval = setInterval(() => {
         slides[currentSlide].classList.remove(VISIBLE_CLASS);
         currentSlide = (currentSlide + 1) % slides.length;
         slides[currentSlide].classList.add(VISIBLE_CLASS);
         }, 5000);

    }
 }