
$(document).ready(function() {


    $("a").on('click', function(event) {
  
        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
          // Prevent default anchor click behavior
          event.preventDefault();
    
          // Store hash
          var hash = this.hash;
    
          // Using jQuery's animate() method to add smooth page scroll
          // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
          $('html, body').animate({
            scrollTop: $(hash).offset().top
          }, 800, function(){
    
            // Add hash (#) to URL when done scrolling (default click behavior)
            window.location.hash = hash;
          });
        } // End if
      });
  
    
    if ($(window).width() > 618) {
        $('#hero-video').attr('poster', 'img/hero-web.jpg')
        $("#hero-video").html('<source src="videos/higuera-golf-club.mp4" loop type="video/mp4"></source>' );
  
     } 
     else {
        $('#hero-video').attr('poster', 'img/hero-mobile.jpg')
        $("#hero-video").html('<source src="videos/higuera-golf-club.mp4" loop type="video/mp4"></source>' );
     }
  
     $('.galeria').slick({
         infinite: true,
         dots: true,
         arrows: true,
     });
  
     
  
     $('.navbar-toggler').click(function(){
  
        if ($(".menu-mobile").hasClass("opened")) {
            
            $(".menu-mobile").css({ left: '-1000px' });
            $(".menu-mobile").removeClass("opened");
            
        } else{
  
  
            $(".menu-mobile").css({ left: '0px' });
            $(".menu-mobile").addClass("opened");
        }
        
     });
  
     $('.nav-item').click(function(){
        $(".menu-mobile").css({ left: '-1000px' });
        $(".menu-mobile").removeClass("opened");
     });
  })
  
  /*POP-UP1*/
  /* let popup1 = document.querySelector("#popup-1");
  let openPopup1 = document.querySelector("#open-popup-1")
  
  openPopup1.addEventListener("click", e => {
    e.preventDefault();
    popup1.classList.remove("hidden");
  });
  
  popup1.addEventListener("click", e => {
    e.preventDefault();
    if(e.target.classList.contains("close-popup")){
      popup1.classList.add("hidden");
    };
  });
   */
  /*POP-UP2*/
  let popup2 = document.querySelector("#popup-2");
  let openPopup2 = document.querySelector("#open-popup-2")
  
  openPopup2.addEventListener("click", e => {
    e.preventDefault();
    popup2.classList.remove("hidden");
  });
  
  popup2.addEventListener("click", e => {
    e.preventDefault();
    if(e.target.classList.contains("close-popup")){
      popup2.classList.add("hidden");
    };
  });
  
  /*POP-UP3*/
  let popup3 = document.querySelector("#popup-3");
  let openPopup3 = document.querySelector("#open-popup-3")
  
  openPopup3.addEventListener("click", e => {
    e.preventDefault();
    popup3.classList.remove("hidden");
  });
  
  popup3.addEventListener("click", e => {
    e.preventDefault();
    if(e.target.classList.contains("close-popup")){
      popup3.classList.add("hidden");
    };
  });
  

  /*HOLE-1*/
let hole1 = document.querySelector("#hole-1");
let open1 = document.querySelector("#open-1");
let prev1 = document.querySelector(".prev-1");
let next1 = document.querySelector(".next-1");


open1.addEventListener("click",(e) => {
  e.preventDefault();
  hole1.classList.remove("hidden");
});

hole1.addEventListener("click", e => {
  if(e.target.classList.contains("close")){
    e.preventDefault();
    hole1.classList.add("hidden")
  }
});

next1.addEventListener("click", (e) =>{
  e.preventDefault();
  hole1.classList.add("hidden")
  hole2.classList.remove("hidden")
});

prev1.addEventListener("click", (e) =>{
  e.preventDefault();
  hole1.classList.add("hidden")
  hole18.classList.remove("hidden")
});

/*HOLE-2*/
let hole2 = document.querySelector("#hole-2");
let open2 = document.querySelector("#open-2");
let prev2 = document.querySelector(".prev-2");
let next2 = document.querySelector(".next-2");

open2.addEventListener("click",(e) =>{
  e.preventDefault();
  hole2.classList.remove("hidden")
});

hole2.addEventListener("click", e => {
  if(e.target.classList.contains("close")){
    e.preventDefault();
    hole2.classList.add("hidden")
  }
});

prev2.addEventListener("click", (e) =>{
  e.preventDefault();
  hole2.classList.add("hidden")
  hole1.classList.remove("hidden")
});

next2.addEventListener("click", (e) =>{
  e.preventDefault();
  hole2.classList.add("hidden")
  hole3.classList.remove("hidden")
});




/*HOLE-3*/
let hole3 = document.querySelector("#hole-3");
let open3 = document.querySelector("#open-3");
let prev3 = document.querySelector(".prev-3");
let next3 = document.querySelector(".next-3");

open3.addEventListener("click",(e) =>{
  e.preventDefault();
  hole3.classList.remove("hidden")
});

hole3.addEventListener("click", e => {
  if(e.target.classList.contains("close")){
    e.preventDefault();
    hole3.classList.add("hidden")
  }
});

prev3.addEventListener("click", (e) =>{
  e.preventDefault();
  hole3.classList.add("hidden")
  hole2.classList.remove("hidden")
});

next3.addEventListener("click", (e) =>{
  e.preventDefault();
  hole3.classList.add("hidden")
  hole4.classList.remove("hidden")
});



/*HOLE-4*/
let hole4 = document.querySelector("#hole-4");
let open4 = document.querySelector("#open-4");
let prev4 = document.querySelector(".prev-4");
let next4 = document.querySelector(".next-4");

open4.addEventListener("click",(e) =>{
  e.preventDefault();
  hole4.classList.remove("hidden")
});

hole4.addEventListener("click", e => {
  if(e.target.classList.contains("close")){
    e.preventDefault();
    hole4.classList.add("hidden")
  }
});


prev4.addEventListener("click", (e) =>{
  e.preventDefault();
  hole4.classList.add("hidden")
  hole3.classList.remove("hidden")
});

next4.addEventListener("click", (e) =>{
  e.preventDefault();
  hole4.classList.add("hidden")
  hole5.classList.remove("hidden")
});


/*HOLE-5*/
let hole5 = document.querySelector("#hole-5");
let open5 = document.querySelector("#open-5");
let prev5 = document.querySelector(".prev-5");
let next5 = document.querySelector(".next-5");

open5.addEventListener("click",(e) =>{
  e.preventDefault();
  hole5.classList.remove("hidden")
});

hole5.addEventListener("click", e => {
  if(e.target.classList.contains("close")){
    e.preventDefault();
    hole5.classList.add("hidden")
  }
});

prev5.addEventListener("click", (e) =>{
  e.preventDefault();
  hole5.classList.add("hidden")
  hole4.classList.remove("hidden")
});

next5.addEventListener("click", (e) =>{
  e.preventDefault();
  hole5.classList.add("hidden")
  hole6.classList.remove("hidden")
});


/*HOLE-6*/
let hole6 = document.querySelector("#hole-6");
let open6 = document.querySelector("#open-6");
let prev6 = document.querySelector(".prev-6");
let next6 = document.querySelector(".next-6");

open6.addEventListener("click",(e) =>{
  e.preventDefault();
  hole6.classList.remove("hidden")
});

hole6.addEventListener("click", e => {
  if(e.target.classList.contains("close")){
    e.preventDefault();
    hole6.classList.add("hidden")
  }
});

prev6.addEventListener("click", (e) =>{
  e.preventDefault();
  hole6.classList.add("hidden")
  hole5.classList.remove("hidden")
});

next6.addEventListener("click", (e) =>{
  e.preventDefault();
  hole6.classList.add("hidden")
  hole7.classList.remove("hidden")
});



/*HOLE-7*/
let hole7 = document.querySelector("#hole-7");
let open7 = document.querySelector("#open-7");
let prev7 = document.querySelector(".prev-7");
let next7 = document.querySelector(".next-7");

open7.addEventListener("click",(e) =>{
  e.preventDefault();
  hole7.classList.remove("hidden")
});

hole7.addEventListener("click", e => {
  if(e.target.classList.contains("close")){
    e.preventDefault();
    hole7.classList.add("hidden")
  }
});

prev7.addEventListener("click", (e) =>{
  e.preventDefault();
  hole7.classList.add("hidden")
  hole6.classList.remove("hidden")
});

next7.addEventListener("click", (e) =>{
  e.preventDefault();
  hole7.classList.add("hidden")
  hole8.classList.remove("hidden")
});


/*HOLE-8*/
let hole8 = document.querySelector("#hole-8");
let open8 = document.querySelector("#open-8");
let prev8 = document.querySelector(".prev-8");
let next8 = document.querySelector(".next-8");

open8.addEventListener("click",(e) =>{
  e.preventDefault();
  hole8.classList.remove("hidden")
});

hole8.addEventListener("click", e => {
  if(e.target.classList.contains("close")){
    e.preventDefault();
    hole8.classList.add("hidden")
  }
});

prev8.addEventListener("click", (e) =>{
  e.preventDefault();
  hole8.classList.add("hidden")
  hole7.classList.remove("hidden")
});

next8.addEventListener("click", (e) =>{
  e.preventDefault();
  hole8.classList.add("hidden")
  hole9.classList.remove("hidden")
});


/*HOLE-9*/
let hole9 = document.querySelector("#hole-9");
let open9 = document.querySelector("#open-9");
let prev9 = document.querySelector(".prev-9");
let next9 = document.querySelector(".next-9");

open9.addEventListener("click",(e) =>{
  e.preventDefault();
  hole9.classList.remove("hidden")
});

hole9.addEventListener("click", e => {
  if(e.target.classList.contains("close")){
    e.preventDefault();
    hole9.classList.add("hidden")
  }
});

prev9.addEventListener("click", (e) =>{
  e.preventDefault();
  hole9.classList.add("hidden")
  hole8.classList.remove("hidden")
});

next9.addEventListener("click", (e) =>{
  e.preventDefault();
  hole9.classList.add("hidden")
  hole10.classList.remove("hidden")
});

/*HOLE-10*/
let hole10 = document.querySelector("#hole-10")
let open10 = document.querySelector("#open-10");
let prev10 = document.querySelector(".prev-10");
let next10 = document.querySelector(".next-10");

open10.addEventListener("click",(e) =>{
  e.preventDefault();
  hole10.classList.remove("hidden")
});

hole10.addEventListener("click", e => {
  if(e.target.classList.contains("close")){
    e.preventDefault();
    hole10.classList.add("hidden")
  }
});

prev10.addEventListener("click", (e) =>{
  e.preventDefault();
  hole10.classList.add("hidden")
  hole9.classList.remove("hidden")
});

next10.addEventListener("click", (e) =>{
  e.preventDefault();
  hole10.classList.add("hidden")
  hole11.classList.remove("hidden")
});

/*HOLE-11*/
let hole11 = document.querySelector("#hole-11")
let open11 = document.querySelector("#open-11");
let prev11 = document.querySelector(".prev-11");
let next11 = document.querySelector(".next-11");

open11.addEventListener("click",(e) =>{
  e.preventDefault();
  hole11.classList.remove("hidden")
});

hole11.addEventListener("click", e => {
  if(e.target.classList.contains("close")){
    e.preventDefault();
    hole11.classList.add("hidden")
  }
});

prev11.addEventListener("click", (e) =>{
  e.preventDefault();
  hole11.classList.add("hidden")
  hole10.classList.remove("hidden")
});

next11.addEventListener("click", (e) =>{
  e.preventDefault();
  hole11.classList.add("hidden")
  hole12.classList.remove("hidden")
});

/*HOLE-12*/
let hole12 = document.querySelector("#hole-12")
let open12 = document.querySelector("#open-12");
let prev12 = document.querySelector(".prev-12");
let next12 = document.querySelector(".next-12");


open12.addEventListener("click",(e) =>{
  e.preventDefault();
  hole12.classList.remove("hidden")
});

hole12.addEventListener("click", e => {
  if(e.target.classList.contains("close")){
    e.preventDefault();
    hole12.classList.add("hidden")
  }
});

prev12.addEventListener("click", (e) =>{
  e.preventDefault();
  hole12.classList.add("hidden")
  hole11.classList.remove("hidden")
});

next12.addEventListener("click", (e) =>{
  e.preventDefault();
  hole12.classList.add("hidden")
  hole13.classList.remove("hidden")
});


/*HOLE-13*/
let hole13 = document.querySelector("#hole-13");
let open13 = document.querySelector("#open-13");
let prev13 = document.querySelector(".prev-13");
let next13 = document.querySelector(".next-13");

open13.addEventListener("click",(e) =>{
  e.preventDefault();
  hole13.classList.remove("hidden")
});

hole13.addEventListener("click", e => {
  if(e.target.classList.contains("close")){
    e.preventDefault();
    hole13.classList.add("hidden")
  }
});

prev13.addEventListener("click", (e) =>{
  e.preventDefault();
  hole13.classList.add("hidden")
  hole12.classList.remove("hidden")
});

next13.addEventListener("click", (e) =>{
  e.preventDefault();
  hole13.classList.add("hidden")
  hole14.classList.remove("hidden")
});

/*HOLE-14*/
let hole14 = document.querySelector("#hole-14");
let open14 = document.querySelector("#open-14");
let prev14 = document.querySelector(".prev-14");
let next14 = document.querySelector(".next-14");

open14.addEventListener("click",(e) =>{
  e.preventDefault();
  hole14.classList.remove("hidden")
});

hole14.addEventListener("click", e => {
  if(e.target.classList.contains("close")){
    e.preventDefault();
    hole14.classList.add("hidden")
  }
});

prev14.addEventListener("click", (e) =>{
  e.preventDefault();
  hole14.classList.add("hidden")
  hole13.classList.remove("hidden")
});

next14.addEventListener("click", (e) =>{
  e.preventDefault();
  hole14.classList.add("hidden")
  hole15.classList.remove("hidden")
});

/*HOLE-15*/
let hole15 = document.querySelector("#hole-15")
let open15 = document.querySelector("#open-15");
let prev15 = document.querySelector(".prev-15");
let next15 = document.querySelector(".next-15");

open15.addEventListener("click",(e) =>{
  e.preventDefault();
  hole15.classList.remove("hidden")
});

hole15.addEventListener("click", e => {
  if(e.target.classList.contains("close")){
    e.preventDefault();
    hole15.classList.add("hidden")
  }
});

prev15.addEventListener("click", (e) =>{
  e.preventDefault();
  hole15.classList.add("hidden")
  hole14.classList.remove("hidden")
});

next15.addEventListener("click", (e) =>{
  e.preventDefault();
  hole15.classList.add("hidden")
  hole16.classList.remove("hidden")
});

/*HOLE-16*/
let hole16 = document.querySelector("#hole-16")
let open16 = document.querySelector("#open-16");
let prev16 = document.querySelector(".prev-16");
let next16 = document.querySelector(".next-16");

open16.addEventListener("click",(e) =>{
  e.preventDefault();
  hole16.classList.remove("hidden")
});

hole16.addEventListener("click", e => {
  if(e.target.classList.contains("close")){
    e.preventDefault();
    hole16.classList.add("hidden")
  }
});

prev16.addEventListener("click", (e) =>{
  e.preventDefault();
  hole16.classList.add("hidden")
  hole15.classList.remove("hidden")
});

next16.addEventListener("click", (e) =>{
  e.preventDefault();
  hole16.classList.add("hidden")
  hole17.classList.remove("hidden")
});

/*HOLE-17*/
let hole17 = document.querySelector("#hole-17");
let open17 = document.querySelector("#open-17");
let prev17 = document.querySelector(".prev-17");
let next17 = document.querySelector(".next-17");

open17.addEventListener("click",(e) =>{
  e.preventDefault();
  hole17.classList.remove("hidden")
});

hole17.addEventListener("click", e => {
  if(e.target.classList.contains("close")){
    e.preventDefault();
    hole17.classList.add("hidden")
  }
});

prev17.addEventListener("click", (e) =>{
  e.preventDefault();
  hole17.classList.add("hidden")
  hole16.classList.remove("hidden")
});

next17.addEventListener("click", (e) =>{
  e.preventDefault();
  hole17.classList.add("hidden")
  hole18.classList.remove("hidden")
});

/*HOLE-18*/
let hole18 = document.querySelector("#hole-18")
let open18 = document.querySelector("#open-18");
let prev18 = document.querySelector(".prev-18");
let next18 = document.querySelector(".next-18");

open18.addEventListener("click", (e) =>{
  e.preventDefault();
  hole18.classList.remove("hidden")
});

hole18.addEventListener("click", e => {
  if(e.target.classList.contains("close")){
    e.preventDefault();
    hole18.classList.add("hidden")
  }
});

prev18.addEventListener("click", (e) =>{
  e.preventDefault();
  hole18.classList.add("hidden")
  hole17.classList.remove("hidden")
});

next18.addEventListener("click", (e) =>{
  e.preventDefault();
  hole18.classList.add("hidden")
  hole1.classList.remove("hidden")
});


  