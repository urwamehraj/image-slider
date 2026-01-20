let arr =[];
    arr[0] = "slide1.png";  
    arr[1] = "slide2.png";  
    arr[2] = "slide3.png";  
    arr[3] = "slide4.png";  
    arr[4] = "slide5.png"; 
 let totalImages = arr.length;
 let currentIndex = 0;
    const imageHolder = document.getElementById("image-holder");
    const forwardButton = document.getElementById("forward");
    const backwardButton = document.getElementById("backward"); 
    imageHolder.style.backgroundImage = `url(${arr[currentIndex]})`;

 forwardButton.addEventListener("click", function() {
        currentIndex = (currentIndex + 1) % totalImages;
        imageHolder.style.backgroundImage = `url(${arr[currentIndex]})`;
    });

 backwardButton.addEventListener("click", function() {
        currentIndex = (currentIndex - 1 + totalImages) % totalImages;
        imageHolder.style.backgroundImage = `url(${arr[currentIndex]})`;
    });
function showimage() {
  imageHolder.style.backgroundImage = `url(${arr[currentIndex]})`;
}
let autoplay = null;
const Auto = document.getElementById("Autoplay"); 
Auto.addEventListener("click",function(){

  if (autoplay === null) {
    // START autoplay
    Auto.style.backgroundImage = "url('pause.png')";

    autoplay = setInterval(() => {
      currentIndex = (currentIndex + 1) % totalImages;
      showimage();
    }, 3000);
  } 
  else {
    // STOP autoplay
    clearInterval(autoplay);
    autoplay = null;
    Auto.style.backgroundImage = "url('play.png')";
  }
});


        
   