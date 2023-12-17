//----------------------www.maureenhaddadi.com--------------//

$(function() {

    function randomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    };

    var limit_flake = 50;
    setInterval(function() {
        let dimension = randomInt(3, 9) + "px";
        var flake = "<div class='drop animate' style='left:" + randomInt(10, window.innerWidth - 20) + "px;width:" + dimension + ";height:" + dimension + "'></div>";
        $('body').append(flake);

        var list_flake = $('.drop');
        if (list_flake.length > limit_flake) list_flake[list_flake.length - 1].remove();
    }, 200);
})



const images = document.querySelectorAll('.pictures img');
const sentences = document.querySelectorAll('.sentences p');
const dropzones = document.querySelectorAll('.dropzone');

images.forEach(image => {
  image.addEventListener('dragstart', (event) => {
    event.dataTransfer.setData('text/plain', event.target.id);
  });
});

sentences.forEach(sentence => {
  sentence.addEventListener('dragstart', (event) => {
    event.dataTransfer.setData('text/plain', event.target.id);
  });
});

dropzones.forEach(dropzone => {
  dropzone.addEventListener('dragover', (event) => {
    event.preventDefault();
  });

  dropzone.addEventListener('drop', (event) => {
    event.preventDefault();
    const data = event.dataTransfer.getData('text/plain');
    const element = document.getElementById(data);
    dropzone.appendChild(element);
  });
});


$(document).ready(function() {
$('.check-answers').on('click', function() {
  var correct = true
  $('.sentences .dropzone').each((i, zone) =>{
    if ( zone.children.length == 1)
    {
      if (i == 0)
      {
        if ( zone.children[0].id != "image6" )
        {
          correct = false;
        }
      }
      else if (i == 1)
      {
        if ( zone.children[0].id != "image3" )
        {
          correct = false;
        }
      }
      else if (i == 2)
      {
        if ( zone.children[0].id != "image1" )
        {
          correct = false;
        }
      }
      zone.children[0].id
    }
    else
    {
      correct = false;
    }
  });
  var textToAppend
  if ( correct )
  {
    textToAppend = 'Congrats you answered right !';
  }
  else {
    textToAppend = 'Something is not correct';
  }
$('.result').text(textToAppend);
});
});