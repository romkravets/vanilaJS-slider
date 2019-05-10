
export class Slider {
   constructor(rootElement, imgArray) {
      //this.slideToggler = this.slideToggler.bind(this);
      this.slidePrev = this.slidePrev.bind(this);
      this.slideNext = this.slideNext.bind(this);
      this.rootElement = rootElement;
      this.imgArray = imgArray;
      this.btnPrev = document.querySelector('.slider__btns_prev');
      this.btnNext = document.querySelector('.slider__btns_next');
      this.images = document.querySelectorAll('.slider__img');
      this.currentIndex = 0;
      this.imgDuration = 2000;
      this.render();
      this.slideNext();
      this.slidePrev()
   }

   //  slideToggler() {
   //     this.rootElement.src = this.imgArray[this.currentIndex];
   //     this.currentIndex++;
   //    if (this.currentIndex === this.imgArray.length) {
   //       this.currentIndex = 0;
   //    }
   //    //setTimeout(this.slideToggler, this.imgDuration);
    //}

   slidePrev() {
      this.btnPrev.addEventListener('click', () => {
         this.images[this.currentIndex].style.display = 'none';
         this.currentIndex--;

         if(this.currentIndex < 0) {
            this.currentIndex = this.images.length - 1;
         }
         this.images[this.currentIndex].style.display = 'block';
      })
   }

   slideNext() {
      this.btnNext.addEventListener('click', () => {
         this.images[this.currentIndex].style.display = 'none';
         this.currentIndex++;

         if(this.currentIndex >= this.images.length) {
            this.currentIndex = 0;
         }
         this.images[this.currentIndex].style.display = 'block';
      })
      }


   render() {

      }

}