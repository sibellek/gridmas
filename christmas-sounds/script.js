var notes = [2, 2, 2, 2, 2, 2, 2, 4, 0, 1, 2, 3, 3, 3, 3, 2, 2, 2, 1, 1, 2, 1, 4, 2, 2, 2, 2, 2, 2, 2, 4, 0, 1, 2, 3, 3, 3, 3, 2, 2, 4, 4, 3, 1, 0, 2, 2, 2, 2, 2, 2, 2, 4, 0, 1, 2, 3, 3, 3, 3, 2, 2, 2, 1, 1, 2, 1, 4, 2, 2, 2, 2, 2, 2, 2, 4, 0, 1, 2, 3, 3, 3, 3, 2, 2, 4, 4, 3, 1, 0];

var tempos =[1, 1, 2, 1, 1, 2, 1, 1, 1, 1, 4, 1, 1, 2, 1, 1, 2, 1, 1, 1, 1, 2, 2, 1, 1, 2, 1, 1, 2, 1, 1, 1, 1, 4, 1, 1, 2, 1, 1, 2, 1, 1, 1, 1, 4, 1, 1, 2, 1, 1, 2, 1, 1, 1, 1, 4, 1, 1, 2, 1, 1, 2, 1, 1, 1, 1, 2, 2, 1, 1, 2, 1, 1, 2, 1, 1, 1, 1, 4, 1, 1, 2, 1, 1, 2, 1, 1, 1, 1, 4];

var playing = false;

var notas = $('.sonidos');

$('.note').click(function() {
  let num = parseInt(this.id);
  tocar(num);
});

function tocar(num) {
  notas[num].pause();
  notas[num].currentTime = 0;
  notas[num].play();
  $("#" + num).css("box-shadow", "0px 0px 10px #fff");
  setTimeout(function() {
    $("#" + num).css("box-shadow", "none");
  }, 300);
}

$('.boton').click(function() {
  if (playing) {
    playing = false
  }
  else {
    playing = true
    for (var x = 0, ln = notes.length; x < ln; x++) {
      setTimeout(function (y) {
        if (playing) {
          tocar(notes[y]);
        }
      }, ritmo(x) * 350, x);
    }
  }
});

function ritmo(num) {
  suma = 0;
  for (c = 0; c < num ; c++) {
    suma = suma + tempos[c];
  }
  return suma;
}


document.addEventListener('keydown', (event) => {
  var num;
  if (event.key === 'a') {
    num = 0;
  } else if (event.key === 's') {
    num = 1;
  } else if (event.key === 'd') {
    num = 2;
  } else if (event.key === 'f') {
    num = 3;
  } else if (event.key === 'g') {
    num = 4;
  } else if (event.key === 'h') {
    num = 5;
  } else if (event.key === 'j') {
    num = 6;
  } else if (event.key === 'k') {
    num = 7;
  }
  tocar(num)
});