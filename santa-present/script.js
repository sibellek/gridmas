$(document).ready(function() {
  $('.second-santa').animate({
    top: '-100vh' // Moves the div out of the screen vertically
  }, 0);
  $('.present').on('click', function() {
    $(this).animate({
      top: '-100vh' // Moves the div out of the screen vertically
    }, 1000); 
    $('.second-santa').animate({
      top: '0',
      opacity: 1 // Moves the div out of the screen vertically
    }, 2000);
});

$('.second-santa').on('click', function() {
  console.log('clicked')
  var imageURL = './santa.png';
  var imageElement = document.createElement('img');
  imageElement.src = imageURL;
  imageElement.style.position = 'absolute';
  imageElement.style.top = '50%';
  imageElement.style.left = '50%';
  imageElement.style.transform = 'translate(-50%, -50%)';

  var overlay = document.createElement('div');
  overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
  overlay.style.position = 'absolute';
  overlay.style.top = 0;
  overlay.style.left = 0;
  overlay.style.width = '100%';
  overlay.style.height = '100%';

  document.body.appendChild(overlay);
  document.body.appendChild(imageElement);
});
});