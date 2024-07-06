
function show(){
   
let open=document.getElementById("navList");

if(open.style.display==='none'){

   open.style.display='block'

}
else{
   open.style.display='none'

}

    
    
    }

    let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 5000); // Change image every 2 seconds
}

function footNav() {
let foot= document.getElementById('footer-list')
if ( foot.style.display=='none'){
foot.style.display=" block"


}
else{
foot.style.display='none'

}
  

}





















