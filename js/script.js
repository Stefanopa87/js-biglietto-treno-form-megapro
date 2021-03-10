var generaBtn = document.getElementById('genera')
var annullaBtn = document.getElementById('annulla')

var costo = 0.21;
var costoTotale = 0;

generaBtn.addEventListener('click', function(){
  // console.log('ho cliccato su genera');
  var nome = document.getElementById('nome').value;

  var km = document.getElementById('km').value;

  var eta = document.getElementById('eta').value;

  console.log(nome, km, eta);

  if (nome !== '', km > 0, eta !== '') {

    // blocco Nome
    document.getElementById('pax').innerHTML = nome;

    // blocco Carrozza
    var carrozza = Math.floor(Math.random() * 10) + 1;
    document.getElementById('carrozza').innerHTML = carrozza;

    // blocco cp
    var cp = Math.floor(Math.random() * (100000-90000)) + 90000;
    document.getElementById('cp').innerHTML = cp;

    // blocco di sconti
    costoTotale = costo * km;
    if (eta == 1){
      costoTotale = costoTotale / 100 * 80;
        document.getElementById('speciale').innerHTML = "Sconto Minorenne";
    } else if (eta == 3){
      costoTotale = costoTotale / 100 * 60;
      document.getElementById('speciale').innerHTML = "Sconto Over 65";
    } else{
      document.getElementById('speciale').innerHTML = "Nessuno sconto applicato";
    }
    document.getElementById('prezzo').innerHTML = costoTotale + " Euro";

  } else{
    alert("Devi copilare tutti i campi!!");
  }
});

annullaBtn.addEventListener('click', function(){
  // console.log('ho cliccato su annulla');
   document.getElementById('nome').innerHTML = "";
   document.getElementById('km').innerHTML = "";
   // non funziona

});
