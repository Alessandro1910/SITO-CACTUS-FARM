
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

function calcolaEta(nascitaStringa) {
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
Persona2.bio(); 
