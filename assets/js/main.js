$(document).ready(function(){
  // La pagina espone 5 numeri generati casualmente.
  var serie = generaSerie(5, 1, 100);
  var finestra = $('.numeri p.1');
  finestra.text(serie);

  // Da li parte un timer di 30 secondi. Poi nascondo i numeri
  setTimeout(chiudi, 2000);

  // l'utente deve inserire, uno alla volta, i numeri che ha visto
  // precedentemente, tramite il prompt().

  setTimeout(bottoneShow, 2000);


  var bottone = $('button');


  bottone.click(function(){
    $(this).hide();
    var user = [];
    while (user.length < 5) {
      var nrUser = parseInt(prompt('Scrivi, uno per volta, i numeri che ricordi:'));
      if (!isNaN(nrUser) && !user.includes(nrUser)) {
        user.push(nrUser);
      } else {
        return user.length
      }
    };
    var giusti = [];
    for (var i = 0; i < user.length; i++) {
      if (serie.includes(user[i])) {
        giusti.push(user[i]);
      }
    }
    var punteggio = giusti.length;

    $('.numeri p.1').text('HAI INDOVINATO ' + punteggio + ' NUMERI')
    $('.numeri p.2').text(giusti);
    $('.numeri').show();
  })
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
  var finestra = $('.numeri');

  finestra.hide();
}

function bottoneShow(){
  var bottone = $('button');
  bottone.addClass('active');
}

// var controllo = setTimeout(controllo, 6000)
//
//
// function controllo(){
//   console.log(user);
// }

// function confronto(serie, user){
// }
