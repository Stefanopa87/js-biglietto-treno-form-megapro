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

    costoTotale = costo * km;

    // blocco di sconti
    document.getElementById('prezzo').innerHTML = costoTotale;

    // blocco cp

    var cp = Math.floor(Math.random() * (100000-90000)) + 90000;
    document.getElementById('cp').innerHTML = cp;

    // blocco Carrozza

    var carrozza = Math.floor(Math.random() * 10) + 1;
    document.getElementById('carrozza').innerHTML = carrozza;


  } else{

  }

});

annullaBtn.addEventListener('click', function(){
  console.log('ho cliccato su annulla');
});
