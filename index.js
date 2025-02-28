
// FORMATO DATA E ORA 

/*const oggi = new Date()
const options = [
    {
        year: 'Numeric',
        month: '2-digit',
        day: '2-digit',
        weekday: 'long'
    }
]

console.log(oggi.toLocaleString(undefined, options)) */

//ARRAY DI NUMERI X CICLO FOR CON BREAK E CONTINUE

/*let array = [10, 21, 40, 51, 60, 71];*/


/*for (i = 0; i < array.length; i++) {            se trovera numeri che danno resto diverso da 0 non li mandera a schermo
    if (array[i] % 2 == 1) {
        continue;
    }

    console.log(array[i]);
}*/

/*let array = [10, 21, 40, 51, 60, 71];

for (i = 0; i < array.length; i++) {                        se trovera numero uguale a 40 il conteggio si bloccherà e non continuera piu a ciclare
    console.log(array[i]);
    if (array[i] == 40) {
        break;
    }
}*/


// INIZIO DI FUNZIONI

/*let button = document.querySelector('button');                  ho collegato le variabili con le query selector e ho dato alla funzione una soluzione di default
let title = document.querySelector('h1');                x il cambio dell h1 abbiamo usato inneRHTML 
let nome = document.querySelector('input');             MENTRE X IL CAMBIO DEL TESTO AL CLICK DEL BOTTONE ABBIAMO DATO UN EVENTLISTENER CON FUNZIONE

function saluta(name = 'Marco') {
    title.innerHTML = `ciao ${name}`;
}

button.addEventListener('click', ()=>{
    saluta(nome.value);
}); */

//ForEach


/*let frutti = [34,56,19,21];                          
frutti.forEach(frutto => {
    if(frutto % 2 == 1) {
        console.log(frutto);
    }
});*/

/*Il forEach è un metodo più semplice per scorrere un array/collections:
    •    Non hai bisogno di gestire manualmente gli indici.
    •    Non puoi interrompere il ciclo con break.
    •    È più leggibile e usato per operazioni rapide su ogni elemento.
lo uso per elaborare tutti gli elementi di un array /lenght */

// Oggetti

/*const Persona = {
    nome: 'Luca',
    genere: 'Maschio',
    eta: 25,
    interessi: ['cucinare', 'sciare', 'snowboard'],
    indirizzi: {
        cap: '80137',
        via: 'Roma',
        provincia: 'MI',
        citta: 'Napoli'
    },
    saluta: function () {
        console.log(`ciao sono ${this.nome}`);
    }
};

Persona.saluta();

Persona.indirizzi.cap = '80140';
Persona.interessi[2] = 'ballare'; 

console.log(Persona.interessi[2]); */

// Programmazione ad oggetti 

/*function calcolaEta(nascitaStringa) {
    const oggi = new Date(); // Data corrente
    const dataDiNascita = new Date(nascitaStringa); // Esempio di data di nascita
    
    let eta = oggi.getFullYear() - dataDiNascita.getFullYear();
    const meseCorrente = oggi.getMonth();
    const giornoCorrente = oggi.getDate();
    const meseDiNascita = dataDiNascita.getMonth();
    const giornoDiNascita = dataDiNascita.getDate();
    
    if (meseCorrente < meseDiNascita || (meseCorrente === meseDiNascita && giornoCorrente < giornoDiNascita)) {
        eta--; // Decrementa l'età se il compleanno non è ancora passato quest'anno
    }

    return eta
}



function Persona(nome, cognome, nascitaStringa, genere, interessi) {

    this.nome = nome;
    this.cognome = cognome;
    this.nascitaStringa = nascitaStringa;
    this.genere = genere;
    this.interessi = interessi;
    this.eta = calcolaEta(nascitaStringa);

    this.bio = function () {
        console.log(`${this.nome} ${this.cognome} è ${(this.genere === 'Maschio') ? 'un ragazzo' : 'una ragazza'} di ${this.eta} anni a cui piace ${this.interessi}`);
    };
}

const Persona1 = new Persona('Luca', 'Forte', '2000-10-15', 'Maschio', 'Basket');
const Persona2 = new Persona('Ludovica', 'Renna', '1996-11-10', 'Ragazza', 'Pallavolo');

Persona1.bio();
Persona2.bio(); */

// Classi ed Ereditarietà 

/*function Persona(nome, cognome, eta, genere, interessi) {
    this.nome =  nome;
    this.cognome = cognome;
    this.eta = eta;
    this.genere = genere;
    this.interessi = interessi;
    this.saluta = function() {
        console.log(`ciao sono ${this.nome}`);
    };
};

function Insegnante (nome, cognome, eta, genere, interessi, materia) {
    Persona.call(this, nome, cognome, eta, genere, interessi)

    this.materia = materia;
    this.saluta = function() {
        super.saluta();
     //   console.log(`ciao sono ${this.nome} ${this.cognome}, e ho ${this.eta} anni e sono ${this.genere}`);
    };
};*/

// const insegnante = new Insegnante ('Anna', 'Blu', 32, 'Donna', ['Netflix'], 'Storia');
// console.log(insegnante);
// insegnante.saluta();


//JSON
/*let requestURL = './index.json';
let request  = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();

request.onload = function(){
    const classe = request.response;
    console.log(classe.insegnanti[0].cognome);
}*/

//Codice Asincrono 

/*fetch('index.json').then(function (response) {   // tramite fetch prenderò dati dalla index.json dopo di che vorro ricevere una risposta che sara
    return response.json();         // in formato json,dopo di che ancora con ".then", prendero questo contenuto json e lo assegno ad una costante
}).then(function (json) {            // Elementi = json e stamperò a video con console.log('Dati: ', classe), con il catch gestiro l'errore qualora
    Elementi = json;                 //ci sia un errore nel passaggio dati
    console.log('Elementi: ', Elementi);
}).catch(function (err) {
    console.log('Fetch problem: '+ err.message);
});*/


//CODICE ASINCRONO CON FETCH DALL INTERNO

// fetch('index.json').then(function (response) {   
//     return response.json();         
// }).then(json => { 
//     let dati = json.insegnanti;         
//    dati.forEach( res => {
//         let insegnante = new Insegnante(res.nome, res.cognome, res.eta, res.genere, res.interessi, res.materia);
//         insegnante.saluta();  
//     })        
// }).catch(function (err) {
//     console.log('Fetch problem: ');
// });

// PROMISE

// function timeoutPromise (message, interval) {
//     return new Promise((resolve, reject) => {
//         if (message === '' || typeof message != 'string') {
//             reject ('message is not a string') 
//         } else if (interval < 0 || typeof interval != 'number') {
//             reject ('interval is not a number');
//         } else setTimeout(function () {
//             resolve(message);
//         }, interval)
//     });
// };

// timeoutPromise('Hello There', 5000)
// .then(message => {
//     alert(message);
// })
// .catch(error => {
//     console.log('error: ' + error);
// });

//PROGRAMMARE A OGGETTI


// // class Dish {
// //     constructor(  nome, ingredienti,   ristorante, reviews) {
// //         this.nome = nome;
// //         this.ingredienti = ingredienti;
// //         this.ristorante = ristorante;
// //         this.reviews = this.reviews;
// //     };


// //     updateRating(newRecensione) {
// //         if (newRecensione <= 5 && newRecensione >= 0) {
// //             this.reviews = newRecensione;
// //             console.log(`Nuova recensione per ${this.ristorante}: ${this.reviews}`);
// //         } else {
// //             console.log("La Recensione deve essere compresa tra 0 e 5.");
// //         }
// //     }
// //     addIngredient(ingrediente) {
// //         if (!this.ingredienti.includes(ingrediente)) {
// //             this.ingredienti.push(ingrediente);
// //             console.log(`Ingrediente aggiunto: ${this.ingredienti}`);
// //         } else {
// //             console.log("L'ingrediente è già presente nella lista.");
// //         }
// //     }
// }

// //let pizzaMarinara = new Dish('Pizza', ['Mozzarella', 'Basilico', 'Origano'], 'Ristorante Da Pulcinella', 4);
// pizzaMarinara.updateRating(4.5);
// pizzaMarinara.addIngredient('Pesto');
// console.log(pizzaMarinara);


// class Dish {
//     constructor(nome, ingredienti, ristorante, reviews) {
//         this.nome = nome;
//         this.ingredienti = ingredienti;
//         this.ristorante = ristorante;
//         this.reviews = reviews;
//     }

//     calculateMedia() {
//         let somma = 0;
//         for (let i = 0; i < this.reviews.length; i++) {
//             somma += this.reviews[i];
//         }
//         return (somma / this.reviews.length).toFixed(2);
//     }

//     updateRating(newRecensione) {
//         if (newRecensione <= 5 && newRecensione >= 0) {
//             this.reviews.push(newRecensione);
//             console.log(`Nuova recensione per ${this.nome} e : ${this.calculateMedia()}`);
//         } else {
//             console.log("La Recensione deve essere compresa tra 0 e 5.");
//         }
//     }


//     addIngredient(ingrediente) {
//         if (!this.ingredienti.includes(ingrediente)) {
//             this.ingredienti.push(ingrediente);
//             console.log(`Ingrediente aggiunto: ${this.ingredienti}`);
//         } else {
//             console.log("L'ingrediente è già presente nella lista.");
//         }
//     }

    //     toString() {
    //         return this.nome + " | " + this.ristorante + " | " + this.calculateMedia() + " | ";
    //     }
//}

// function fetchDishes() {
//     return fetch('http://185.216.75.210:50080/api.php')
//         .then(response => response.json())
//         .then(json => {
//             let primoLivello = json.results;
//             console.log(primoLivello);
//             let listaDish = [];
//             primoLivello.forEach(function (res) {
//                 let el = new Dish(res.name, res.ingredients, res.restaurant, res.reviews);
//                 listaDish.push(el);
//             });

//             return listaDish;
//             // console.log(listaDish);
//             // listaDish.forEach(function (res) {
//             //     console.log(res.toString());
//             // });
//         })
//         .catch(err => {
//             console.log('Error richiests API:', err);

//             return [];
//         });
// }


// function cercaPiatti() {
//     let query = document.getElementById("cercaPietanze").value;   // OTTENGO IL VALORE INSERITO DALL UTENTE
//     // SI RICOLLEGA ALL'API E RISALE AI DATI CHE HA DENTRO
//     chiamataPizza(query).then(piatti => {
//         console.log(piatti);
//         risultatiPagina(piatti);
//     });
// };


// function cercaDishPerIngrediente() {
//     let ingrediente = document.getElementById("cercaIngrediente").value;  // Ottieni l'ingrediente inserito dall'utente
//     fetchDishes().then(piatti => {
//         console.log(piatti);
//         let piattiFiltrati = cercaPiattiConIngrediente(piatti, ingrediente);
//         console.log("i piatti filtrati sono");
//         console.log(piattiFiltrati);
//     });

// }

// function cercaDishPerIngrediente() {
//     let ingrediente = document.getElementById("cercaIngrediente").value.trim();

//     if (ingrediente === "") {
//         document.getElementById("risultati").innerHTML = "Inserisci un ingrediente per la ricerca.";
//         return;
//     }

//     fetchDishes().then(piatti => {
//         console.log("I piatti in input sono:", piatti);
//         let piattiFiltrati = cercaPiattiConIngrediente(piatti, ingrediente);
//         console.log("I piatti filtrati sono:", piattiFiltrati);
//         risultatiIngredientiPagina(piattiFiltrati);
//         stampaIngredienti(piattiFiltrati);
//     });
// }


// function cercaPiattiConIngrediente(dishes, ingredienteRichiesto) {
//     console.log("ricerca ingredienti nei piatti");
//     let nuovoArray = [];
//     dishes.forEach(piatto => {
//         console.log(`Piatto: ${piatto.nome}`);

//         let trovato = false;
//         piatto.ingredienti.forEach(ingrediente => {
//             let piattoPerNome = ingrediente.name.toLowerCase();
//             let ingredientePerRichiesta = ingredienteRichiesto.toLowerCase();
//             //console.log('-  Ingrediente ' + piattoPerNome + ' è uguale a ' + ingredientePerRichiesta + '?');
//             if (piattoPerNome == ingredientePerRichiesta) {
//                trovato = true;
//               // console.log(piatto.nome + ' contiene ' + piattoPerNome);
//             }
//         });
        
//         if (trovato == true) {
//             nuovoArray.push(piatto)
//         }
//     });
//     console.log("piatti validi");
//     console.log(nuovoArray);
//     return nuovoArray;
// };



// mi permette di salvarmi la lista dati che ricevo
// function chiamataPizza(query) {
//     return fetch('http://185.216.75.210:50080/api.php?q=' + query)
//         .then(response => response.json())
//         .then(json => {
//             let listaData = json.results;

//             let listaDish = [];
//             listaData.forEach(function (res) {
//                 let elementi = new Dish(res.name, res.ingredients, res.restaurant, res.reviews);
//                 listaDish.push(elementi);
//             });
//             console.log(listaDish);
//             return listaDish;

//         })
//         .catch(err => console.log("Errore API:", err));
// }



// function risultatiPagina(piatti) {
//     let risposte = document.getElementById("risultati"); //VADO A CREARE UNA VARIABILE CHE SI COLLEGA TRAMITE 'ID' AL DIV RISULTATI
//     risposte.innerHTML = "";   //PULISCE I CAMPI DI TESTO PRECEDENTI
//     console.log(piatti);

//     piatti.forEach(piatto => {
//         let mostraPagina = document.createElement('div');
//         mostraPagina.innerHTML = `  
//             <h3>Nome Piatto:${piatto.nome}</h3>
//             <p>Ristorante: ${piatto.ristorante}</p>
//             <p>Ingredienti: ${piatto.ingredienti.join(',')}</p>
//             <p>Media Recensioni: ${piatto.calculateMedia()}</p>
//             `;
//         risposte.appendChild(mostraPagina);
//     });
// };

// function risultatiIngredientiPagina(piatti) {
//     let risposte = document.getElementById("risultati");
//     risposte.innerHTML = "";
//     console.log(piatti);
//     if (piatti.length === 0) {
//         risposte.innerHTML = "<p>Nessun piatto trovato con questo ingrediente.</p>";
//         return;
//     };

//     piatti.forEach(piatto => {
//         let mostraPagina = document.createElement('div');
//         mostraPagina.innerHTML = `  
//             <h3>${piatto.nome}</h3>
//             <p>Ingredienti: ${piatto.ingredienti.join(', ')}</p>
//         `;
//         risposte.appendChild(mostraPagina);
//     });
// }

// function stampaIngredienti(ingredient) {
//     let risposteIngredienti = document.getElementById("risultatiIngredienti");
//     risposteIngredienti.innerHTML = "";

//     if (ingredient.length === 0) {
//         risposte.innerHTML = "<p>Nessun ingrediente trovato!</p>";
//         return;
//     }

//     ingredient.forEach(ingredientiPiatto => {
//         let mostraIngredienti = document.createElement('div');
//         mostraIngredienti.innerHTML = `  
//             <p>Ingredienti: ${ingredientiPiatto.join(', ')}</p>
//         `;
//         risposte.appendChild(mostraIngredienti);
//     });
// }
// CON IL FOR EACH CICLO I DATI RICEVUTI E CON CREATE ELEMENT CREO UN DIV PER OGNUNO DI ESSI MI RICOLLEGO ALL OGGETTO DISH
// E INFINE APPENDO IN PAGINA I RISULTATI PRESI TRAMITE LA VARIABILE RISPOSTE PASSANDO COME PARAMETRO mostraPagina che ha tutto all interno
