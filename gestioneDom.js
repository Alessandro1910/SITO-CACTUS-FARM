function risultatiPagina(piatti) {
    let risposte = document.getElementById("risultati"); //VADO A CREARE UNA VARIABILE CHE SI COLLEGA TRAMITE 'ID' AL DIV RISULTATI
    risposte.innerHTML = ""; //PULISCE I CAMPI DI TESTO PRECEDENTI
    if (piatti.length === 0) {
        risposte.innerHTML = "<p>Nessun piatto trovato con questo ingrediente.</p>";
        return;
    };

    console.log(piatti);

    piatti.forEach(piatto => {
        let mostraPagina = document.createElement('div');
        mostraPagina.innerHTML = `  
            <h3>Nome Piatto:${piatto.nome}</h3>
            <p>Ristorante: ${piatto.ristorante}</p>
            <p>Ingredienti:${piatto.ingredienti.map(ingrediente => ingrediente.name).join(',')}</p>
            <p>Media Recensioni: ${piatto.calculateMedia()}</p>
            `;
        risposte.appendChild(mostraPagina);
    });
    
};

function stampaIngredienti(ingredient) {
    let risposteIngredienti = document.getElementById("risultatiIngredienti");
    risposteIngredienti.innerHTML = "";

    if (ingredient.length === 0) {
        risposte.innerHTML = "<p>Nessun ingrediente trovato!</p>";
        return;
    }


    let ul = document.createElement("ul");
    ingredient.forEach(ingredientiPiatto => {
        let li = document.createElement("li");
            li.textContent = ingredientiPiatto;
            ul.appendChild(li);
        });
        risposteIngredienti.appendChild(ul);
}

export { risultatiPagina, stampaIngredienti };

