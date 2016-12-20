$(function () {
  /* Links and lil quotes */
  
  function update_content(content){
    $('#big-block-of-content').removeClass("fade");
    $('#big-block-of-content').show();  //Forces update of DOM
    $('#big-block-of-content').empty();
    $('#big-block-of-content').append(content);
    $('#big-block-of-content').addClass("fade");
  }
  $('#link-home').mouseenter(function() {
    update_content("<p>I'm never quite sure what to write here.</p>");
  });
  $('#link-maths').mouseenter(function() {
    update_content("<p>In these days the angel of topology and the devil   of abstract algebra fight for the soul of each individual mathematical domain.  --Weyl</p>");
  });
  $('#link-coding').mouseenter(function() {
    update_content("<p>Computer programming is an art, because it applies accumulated knowledge to the world, because it requires skill and ingenuity, and especially because it produces objects of beauty.  --Knuth</p>");
  });
  $('#link-links').mouseenter(function() {
    update_content("<p>Things I like.</p>");
  });
  $('#link-contact').mouseenter(function() {
    update_content("<p>Whats up?</p>");
  });
  
  /* Overlay Stuff */
  
  $('#overlay').click(function(event) {
    event.stopPropagation();
  });
  
  displayNoneAllOverlayContent = function(){
    $('#coding-overlay-content').css("display", "none");
    $('#links-overlay-content').css("display", "none");
    $('#contact-overlay-content').css("display", "none");
    $('#home-overlay-content').css("display", "none");
    $('#maths-overlay-content').css("display", "none");
  };
  
  hideOverlay = function(){
    //console.log("hideOverlay");
    $('#overlay').css("display", "none");
    $('#cross-outer').css("display", "none");
    displayNoneAllOverlayContent();
  };
  
  showOverlay = function(){
    //console.log("showOverlay");
    var left = ($('body').width() - 750)/2;
    var top = 220;
    $('#overlay').css("left", left.toString() + 'px');
    $('#overlay').css("top", top.toString() + 'px');   //Should really refer to just below title text
    $('#overlay').css("height", '300px');
    $('#overlay').css("display", "block");
    
    var crossleft = left + 750 - 20;
    var crosstop = top - 10;
    $('#cross-outer').css("left", crossleft.toString() + 'px');
    $('#cross-outer').css("top", crosstop.toString() + 'px'); 
    $('#cross-outer').css("display", "block");  
  };
  
  $('#cross-outer').click(function(event) {
    event.stopPropagation();
    hideOverlay();
  });
  
  $('body').click(function(event) {
    event.stopPropagation();
    hideOverlay();
  });
  
  $('#link-home').click(function(event) {
    event.stopPropagation();
    showOverlay();
    displayNoneAllOverlayContent();
    $('#home-overlay-content').css("display", "block");
  });
  
  $('#link-coding').click(function(event) {
    event.stopPropagation();
    showOverlay();
    displayNoneAllOverlayContent();
    $('#coding-overlay-content').css("display", "block");
  });
  
  $('#link-links').click(function(event) {
    event.stopPropagation();
    showOverlay();
    displayNoneAllOverlayContent();
    $('#links-overlay-content').css("display", "block");
  });
  
  $('#link-contact').click(function(event) {
    event.stopPropagation();
    showOverlay();
    displayNoneAllOverlayContent();
    $('#contact-overlay-content').css("display", "block");
  });
  
  $('#link-maths').click(function(event) {
    event.stopPropagation();
    showOverlay();
    displayNoneAllOverlayContent();
    $('#maths-overlay-content').css("display", "block");
  });
  
  /* Window resizing stuff */
  
  $(window).resize(function(){
    if ($('#overlay').css("display") == "block" ){
      showOverlay();
    }
  });
  
});