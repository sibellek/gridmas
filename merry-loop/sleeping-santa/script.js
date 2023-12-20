$(document).ready(function() {
  
  $('.envelope').click(function() {
      $('.envelope').addClass('open');
      alert("OOPS! Santa overslept and left his letters unattended, do you wanna take a peak?");
  });

  $('.letter').click(function() {
    window.location.href = "../letter-to-santa/index.html";
});
});