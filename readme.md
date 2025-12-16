# Biglietto del treno

## Descrizione
Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.

## Calcolo
- il prezzo del biglietto è definito in base ai km (0.21 € al km)
- va applicato uno sconto del 20% per i minorenni
- va applicato uno sconto del 40% per gli over 65
- L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca

### Pseudocodice
- Chiedere all'utente il numero di chilometri da percorrere
- Chiedere l'eta' del passeggero
- Calcolare il prezzo base
   - SE ha un'eta' minore di 18 anni applicare lo sconto del 20%
   - SE ha un'eta' maggiore/uguale di 65 anni applicare lo sconto del 40%
- Formattare il prezzo finale con due decimali
- Stampare il risultato in console
