const SHOWED_CLASS = 'showed';

export class Slider {
   constructor(rootElement, imgArray) {
      this.slidePrev = this.slidePrev.bind(this);
      this.slideNext = this.slideNext.bind(this);
      this.rootElement = rootElement;
      this.imgArray = imgArray;
      this.btnPrev = document.querySelector('.slider__btns_prev');
      this.btnNext = document.querySelector('.slider__btns_next');
      this.images = document.querySelectorAll('.slider__image');
      this.currentIndex = 0;
      this.imgDuration = 1000;
      this.render();
      this.slideNext();
      this.slidePrev()
   }

   slidePrev() {
      this.btnPrev.addEventListener('click', () => {
         this.images[this.currentIndex].classList.remove(SHOWED_CLASS);
         this.currentIndex--;

         if(this.currentIndex < 0) {
            this.currentIndex = this.images.length - 1;
         }
         this.images[this.currentIndex].classList.add(SHOWED_CLASS)
      })
   }

   slideNext() {
      this.btnNext.addEventListener('click', () => {
         this.images[this.currentIndex].classList.remove(SHOWED_CLASS);
         this.currentIndex++;

         if(this.currentIndex >= this.images.length) {
            this.currentIndex = 0;
         }
         this.images[this.currentIndex].classList.add(SHOWED_CLASS);
      })
      }

   render() {

      }

}