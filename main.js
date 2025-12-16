console.log("JS collegato");

// Richiesta dei KM da percorrere
const kilometers = parseFloat(prompt("Quanti chilometri vuoi percorrere?"));
console.log("Km inseriti:", kilometers);

// Richiesta dell'eta' 
const age = parseInt(prompt("Quanti anni hai?"));
console.log("Età inserita:", age);

// Calcolo del prezzo base
const pricePerKm = 0.21;
let ticketPrice = kilometers * pricePerKm;
console.log("Prezzo base:", ticketPrice);

// Sconti
if (age < 18) {
  ticketPrice *= 0.8;
  console.log("Sconto minorenne applicato");
} 
else if (age >= 65) {
  ticketPrice *= 0.6;
  console.log("Sconto over 65 applicato");
}
else {
  console.log("Nessuno sconto applicato");
}

// Prezzo finale del biglietto "fixato"
const finalPrice = ticketPrice.toFixed(2);
console.log("Prezzo finale:", finalPrice);