// Carrello e sconti particolari

/*
Oggi il tuo compito è creare la logica per un sito di e-commerce che deve supportare sconti extra per utenti speciali.
A partire da una lista di prezzi, un utente e un costo di spedizione l'algoritmo deve determinare il costo totale del carrello.
ATTENZIONE! Gli argomenti di questa settimana sono cruciali per lo svolgimento di un lavoro di un developer (il 90% del dati che maneggerai saranno array di oggetti!!) quindi 
assicurati di COMPRENDERE la logica. Se ti trovi in difficolta', scrivi ad un membro del teaching staff! :) 

Se l'utente ha la proprietà "isAmbassador" con valore true, il carrello deve venire scontato del 30%, PRIMA di calcolare la spedizione (anche gli utenti speciali pagano le spedizioni).
Se l'utente ha la proprietà "isAmbassador" con valore false, il carrello NON deve venire scontato.
In entrambi i casi, la spedizione è gratuita per ogni carrello con costo superiore a 100. Altrimenti, aggiungi il valore fornito per coprire il costo della spedizione.

In basso troverai degli esempi di utenti, una lista prezzi e un costo fisso di spedizione.
Crea un array di utenti (usando .push) e stampa, per ogni utente (quindi con un loop) la frase "NOMEUTENTE COGNOMEUTENTE e' / non e' un ambassador" basandoti sui dati contenuti nell'oggetto. 
ES. L'utente Marco Rossi e' un ambassador, quindi la frase dovrebbe essere "Marco Rossi e' un ambassador"
Infine, crea un SECONDO array in cui inserirai SOLO gli ambassador.
*/

const marco = {
  name: "Marco",
  lastName: "Rossi",
  isAmbassador: true,
}

const paul = {
  name: "Paul",
  lastName: "Flynn",
  isAmbassador: false,
}

const amy = {
  name: "Amy",
  lastName: "Reed",
  isAmbassador: false,
}

const prices = [36, 10, 1000]
const shippingCost = 50
let utenteCheEffettuaLAcquisto = marco

for (i = 0; i < prices.length; i++) {


  Valore = utenteCheEffettuaLAcquisto.isAmbassador === true ? ((prices[i] * 0.7))
    : (prices[i])

  Valore > 100 ? Valore -= shippingCost : Valore += shippingCost



}
console.log(utenteCheEffettuaLAcquisto, Valore);



let Clienti = [amy, paul, marco]


amy.isAmbassador === true ? console.log(amy.name, amy.lastName + " è un ambassador ")
  : console.log(amy.name, amy.lastName + " Non è un ambassador")


paul.isAmbassador === true ? console.log(paul.name, paul.lastName + " è un ambassador ")
  : console.log(paul.name, paul.lastName + " Non è un ambassador")


marco.isAmbassador === true ? console.log(marco.name, marco.lastName + " è un ambassador ")
  : console.log(marco.name, marco.lastName + " Non è un ambassador")

 
  let Ambassador =[marco]