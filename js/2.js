!function(e){"use strict";e(document).ready(function(){e("#nav-expander").on("click",function(t){t.preventDefault(),e("body").toggleClass("nav-expanded")}),e("#nav-close").on("click",function(t){t.preventDefault(),e("body").removeClass("nav-expanded")})}),e(function(){e('[data-toggle="tooltip"]').tooltip()}),e(".carousel").carousel({interval:4e3}),e(window).load(function(){e("#preloader").on(500).fadeOut(),e(".preloader").on(600).fadeOut("slow")}),jQuery(window).scroll(function(){jQuery(this).scrollTop()>1?jQuery(".dmtop").css({bottom:"25px"}):jQuery(".dmtop").css({bottom:"-100px"})}),jQuery(".dmtop").click(function(){return jQuery("html, body").animate({scrollTop:"0px"},800),!1})}(jQuery);function openCategory(e,t){var o,n,a;for(o=0,n=document.getElementsByClassName("tabcontent");o<n.length;o++)n[o].style.display="none";for(o=0,a=document.getElementsByClassName("tablinks");o<a.length;o++)a[o].className=a[o].className.replace(" active","");document.getElementById(t).style.display="block",e.currentTarget.className+=" active"}

// Smooth scroll to the target section
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: 'smooth' });
  }
  
  // Add event listeners to trigger scrolling
  document.addEventListener('DOMContentLoaded', function() {
    const homeLink = document.getElementById('home-link');
    const contactLink = document.getElementById('contact-link');
    
    homeLink.addEventListener('click', function(event) {
      event.preventDefault();
      scrollToSection('home');
    });
    
    contactLink.addEventListener('click', function(event) {
      event.preventDefault();
      scrollToSection('contact');
    });
  });
  