$(document).ready(function(){
  // La pagina espone 5 numeri generati casualmente.
  var serie = generaSerie(5, 1, 100);
  var finestra = $('.numeri p');
  finestra.text(serie);

  // Da li parte un timer di 30 secondi. Poi nascondo i numeri
  var user = setTimeout(chiudi, 2000);

  // l'utente deve inserire, uno alla volta, i numeri che ha visto
  // precedentemente, tramite il prompt().


});

function generaSerie(serieLung, min, max){
  var serie = [];
  while (serie.length < serieLung) {
    var serieNr = randomNumberInRange(min, max);
    if (!serie.includes(serieNr)) {
      serie.push(serieNr);
    }
  }

  return serie;
}

function randomNumberInRange(min, max) {
  return Math.floor(Math.random() * max) + min;
}

function chiudi(){
  var finestra = $('.numeri p');

  finestra.hide();

  setTimeout(game, 2000);

}
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
function game(){
  var user = [];

  while (user.length < 5) {
    var nrUser = parseInt(prompt('Scrivi, uno per volta, i numeri che ricordi:'));
    if (!isNaN(nrUser) && !user.includes(nrUser)) {
      user.push(nrUser);
    } else {
      return user.length
    }
  };
  console.log(user);
  return user;
}
