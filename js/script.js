

$(document).ready(function(){
   $('.bar').click(function(){
       $('.nav-list').slideToggle();
   });
   // Header style 
   $('.nav-list .list a').on('click' , function(){
       $(this).addClass('link-active');
   });
});