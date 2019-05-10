
export class Slider {
   constructor(rootElement, imgArray) {
      this.slideToggler = this.slideToggler.bind(this);
      this.rootElement = rootElement;
      this.imgArray = imgArray;
      this.currentIndex = 0;
      this.imgDuration = 2000;
      this.render();
      this.slideToggler();
   }

   slideToggler() {
      this.rootElement.src = this.imgArray[this.currentIndex];
      this.currentIndex++;
      if (this.currentIndex === this.imgArray.length) {
         this.currentIndex = 0;
      }
      setTimeout(this.slideToggler, this.imgDuration);
   }

   render() {

   }
}