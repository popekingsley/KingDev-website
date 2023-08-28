const previous = document.querySelector('.previous');
const next = document.querySelector('.next');
const images = document.querySelector('.carousel-inner').children;
const totalImages = images.length;
let currentIndex = 0;

previous.addEventListener('click', () => {
  previousImage()
})
next.addEventListener('click', () => {
  nextImage();
})

setInterval(()=>{
    nextImage();
},1000);

function nextImage(){

  images[currentIndex].classlist.remove('active');
    if(currentIndex == totalImages-1){
            currentIndex = 0;
    }
    else{
            currentIndex++;
    }

    images[currentIndex].classlist.add('active');

}

function nextImage(){

  images[currentIndex].classlist.remove('active');
    if(currentIndex == 0){  
            currentIndex = totalImages-1;
    }
    else{
              currentIndex--;
    }

    images[currentIndex].classlist.add('active');

}