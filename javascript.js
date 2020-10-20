// alert("Hello! I am an alert box!!");

// Lista Cognomi
// Chiedere all'utente il cognome
// inserirlo in un array con altri cognomi: 'Bianchi', 'Rossi', 'Duzioni', 'Balsano', 'Giorgini'
// stampa la lista ordinata alfabeticamente
// scrivi anche la posizione "umana" della lista in cui il nuovo utente si trova

var arrayCognomi = ['Bianchi', 'Rossi', 'Duzioni', 'Balsano', 'Giorgini'];

var cognomeUtente = prompt('Il tuo cognome?!? ' ).trim();
// trim evita gli spazi inutili

while(cognomeUtente === ''){
  cognomeUtente = prompt('Il tuo cognome?!?' ),trim();
}

// MDN Il metodo push() aggiunge uno o più elementi alla fine di un array e ne restituisce la nuova lunghezza.
arrayCognomi.push(cognomeUtente).;

// Ordine Alfabetico
arrayCognomi.sort();

// MDN Trovare l'indice di un elemento nell'Array POSIZIONE UMANA +1
var posizione = arrayCognomi.indexOf(cognomeUtente);

// inserimento cognome utente
console.log('Il tuo cognome è: ' + cognomeUtente);

console.log('La tua posizione è: ' + (posizione + 1));

console.log(arrayCognomi);

// PRINT HTML ul
var nomi = '';

for (var i = 0; i < arrayCognomi.length; i++) {
       document.getElementById('lista-cognomi').innerHTML += '<li>' + 'Posizione: '  + (i+1) + " " + arrayCognomi[i] + '</li>';

       console.log(arrayCognomi[i]);
   };
