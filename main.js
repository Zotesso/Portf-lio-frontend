window.onload = function(){
var icon = document.getElementById("icons");

  icon.onclick = function() {
     
    var x = document.getElementById("myMenu");
    if (x.className === "Menu") {
      x.className += " responsive";
    } else {
      x.className = "Menu";
    }
 }

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
     dots[i].className = dots[i].className.replace(" activeSlide", "");
   }
   slides[slideIndex-1].style.display = "block";  
   dots[slideIndex-1].className += " activeSlide";
   setTimeout(showSlides, 2000); // Change image every 2 seconds
 }
 
 var formpopup = document.getElementById("btndiv");

 formpopup.onclick = function(){
  document.getElementById("myForm").style.display = "block";
 }
 document.getElementsByClassName("btn cancel")[0].onclick = function(){
  document.getElementById("myForm").style.display = "none";
 }

 document.getElementById("addHamb").onclick = function(){
  var seuNode = document.getElementsByClassName("ClonableItem")[0]; 
var clone   = seuNode.cloneNode(true); 
document.getElementsByClassName("panel")[0].appendChild(clone);
 }
}
