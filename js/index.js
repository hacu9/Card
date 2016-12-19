$(document).ready(function(){
  
 var button1 = $('#botony')[0];
 var button2 = $('#botonx')[0];
 var button3 = $('#botony1')[0];
 var button4 = $('#botonx1')[0];
 var carda = $('#cartaa')[0];
 var cardb = $('#cartab')[0];
 var carda1 = $('#cartaa1')[0];
 var cardb1 = $('#cartab1')[0];
 var cards = $('.cards');
  var btn = $('.btn');
 // var button3 = $('#botony');
 
  $("#newor").click(function(){
     $(this).toggleClass("active");
    $(".cards").toggleClass("neworigin");
   
    
  });
  $("#infinite").click(function(){
    $(".cards").toggleClass("rotate");
    $(this).toggleClass("active");
    
  });
  
  
  
  function pathPrepare ($el) {
    console.log($el);
		var lineLength = $el.getTotalLength();
	$el.style.strokeDasharray = lineLength + ' ' + lineLength;
  $el.style.strokeDashoffset = lineLength;
  
 }
  
  pathPrepare(button1);
  pathPrepare(button2);
  pathPrepare(button3);
  pathPrepare(button4);
  pathPrepare(carda);
  pathPrepare(cardb);
  
 
   var tl = new TimelineLite();
  
   tl .to(button1, 0.5,{strokeDashoffset: 0, ease:Linear.easeNone})
      .to(button2, 0.5, {strokeDashoffset: 0, ease:Linear.easeNone},"-=0.2")
      .to(carda, 1, {strokeDashoffset: 0, ease:Power1.easeInOut})
      .to(button3, 0.5, {strokeDashoffset: 0, ease:Linear.easeNone},"-=0.4")
      .to(button4, 0.5, {strokeDashoffset: 0, ease:Linear.easeNone},"-=0.8")
      .to(cardb, 1, {strokeDashoffset: 0, ease:Power1.easeInOut},"-=0.8")
      .to([cardb1,button3], 0.5, {fill:"white", ease:Linear.easeNone})
      .to([carda1,button1], 0.5, {fill:"white", ease:Linear.easeNone},"-=0.4")
      .to([cardb,cardb1], 1,{rotationY:200, transformOrigin:"50% 50%", ease:Power1.easeOut})
      .to([cardb,cardb1], 1,{x:320,autoAlpha:0, ease:Bounce.easeOut},"-=0.4")
      .to([carda1,carda,button1,button2,button3,button4], 0.2, {autoAlpha:0, ease:Linear.easeNone},"-=0.1")
      .to(cards, 0.5, {opacity:2, ease:Linear.easeNone},"-=0.9")
      .to(btn, 0.5, {opacity:2, ease:Linear.easeNone},"-=0.9")
  
      
});