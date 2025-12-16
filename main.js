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