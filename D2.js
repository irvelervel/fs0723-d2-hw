/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const num1 = 8
const num2 = 5

if (num1 > num2) {
  console.log('il più grande è num1!')
} else if (num2 > num1) {
  console.log('il più grande è num2')
} else {
  console.log('i due numeri sono uguali!')
}

/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const num3 = 46

if (num3 !== 5) {
  console.log('not equal')
}

/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: usa l'operatore modulo)
*/

/* SCRIVI QUI LA TUA RISPOSTA % */

const num4 = 100
if (num4 % 5 === 0) {
  console.log('il numero è perfettamente divisibile per 5')
}

/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const num5 = 12
const num6 = 21

if (
  num5 === 8 ||
  num6 === 8 ||
  num5 + num6 === 8 ||
  num5 - num6 === 8 ||
  num6 - num5 === 8
) {
  console.log('verificato!')
}

///

/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let totalShoppingCart = 30
let totalToPay
const shippingCost = 10

if (totalShoppingCart > 50) {
  // spedizione gratuita!
  totalToPay = totalShoppingCart // semplicemente il costo del carrello, senza spese aggiuntive
} else {
  totalToPay = totalShoppingCart + shippingCost
}

console.log('totalToPay', totalToPay)

/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% di sconto su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let totalShoppingCart2 = 30
let totalToPay2
const shippingCost2 = 10

if (totalShoppingCart2 * 0.8 > 50) {
  // spedizione gratuita!
  totalToPay2 = totalShoppingCart2 * 0.8 // semplicemente il costo del carrello, senza spese aggiuntive
} else {
  totalToPay2 = totalShoppingCart2 * 0.8 + shippingCost2
}

console.log('totalToPay', totalToPay2)

/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const Num1 = 3
const Num2 = 4
const Num3 = 5

if (Num1 >= num2 && Num1 >= Num3) {
  if (Num2 >= Num3) {
    console.log(Num1, Num2, Num3)
  } else {
    console.log(Num1, Num3, Num2)
  }
} else if (Num2 >= Num1 && Num2 >= Num3) {
  if (Num1 >= Num3) {
    console.log(Num2, Num1, Num3)
  } else {
    console.log(Num2, Num3, Num1)
  }
} else if (Num3 >= Num1 && Num3 >= Num2) {
  if (Num1 >= Num2) {
    console.log(Num3, Num1, Num2)
  } else {
    console.log(Num3, Num2, Num1)
  }
}

/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const z = 5
// const z = 'cadrega'

if (typeof z === 'number') {
  console.log('z è un numero!')
}

/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const myNum = 67

if (myNum % 2 === 0) {
  // numero pari
  console.log('pari!')
} else {
  // numero dispari
  console.log('dispari!')
}

/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.
  */
let val = 9
if (val < 5) {
  console.log('Meno di 5')
} else if (val < 10) {
  console.log('Meno di 10')
} else {
  console.log('Uguale a 10 o maggiore')
}

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/

const me = {
  name: 'John',
  lastName: 'Doe',
  skills: ['javascript', 'html', 'css'],
}

/* SCRIVI QUI LA TUA RISPOSTA */

me.city = 'Toronto'

/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/

/* SCRIVI QUI LA TUA RISPOSTA */

delete me.lastName

/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/

/* SCRIVI QUI LA TUA RISPOSTA */

me.skills.pop()
// me.skills.splice(2, 1)

/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const myArray = []
myArray.push(1)
myArray.push(2)
myArray.push(3)
myArray.push(4)
myArray.push(5)
myArray.push(6)
myArray.push(7)
myArray.push(8)
myArray.push(9)
myArray.push(10)

/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

myArray[9] = 100
