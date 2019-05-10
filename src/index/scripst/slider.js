
export class Slider {
   constructor(rootElement, imgArray) {
      this.rootElement = rootElement;
      this.imgArray = imgArray;
      this.currentIndex = 0;
      this.imgDuration = 2000;
      this.render();
   }

   render() {
      console.log('Hello World');
      console.log(this.rootElement);
      console.log(this.imgArray);
   }
}