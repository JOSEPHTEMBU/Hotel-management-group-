var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 6000); // Change image every 2 seconds
}
// $(document).ready(function(){

// });

function contact(form){
var name = document.forms["form2"]["name"].value;
var email = document.forms["form2"]["email"].value;
var message = document.forms["form2"]["message"].value;
alert("Hello! " + name + "," + " We have received your message. Thank you for reaching out to us. ");
};

