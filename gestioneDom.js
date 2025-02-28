function risultatiPagina(piatti) {
    let risposte = document.getElementById("risultati"); //VADO A CREARE UNA VARIABILE CHE SI COLLEGA TRAMITE 'ID' AL DIV RISULTATI
    risposte.innerHTML = "";   //PULISCE I CAMPI DI TESTO PRECEDENTI
    console.log(piatti);

    piatti.forEach(piatto => {
        let mostraPagina = document.createElement('div');
        mostraPagina.innerHTML = `  
            <h3>Nome Piatto:${piatto.nome}</h3>
            <p>Ristorante: ${piatto.ristorante}</p>
            <p>Ingredienti: ${piatto.ingredienti.join(',')}</p>
            <p>Media Recensioni: ${piatto.calculateMedia()}</p>
            `;
        risposte.appendChild(mostraPagina);
    });
};

function risultatiIngredientiPagina(piatti) {
    let risposte = document.getElementById("risultati");
    risposte.innerHTML = "";
    console.log(piatti);
    if (piatti.length === 0) {
        risposte.innerHTML = "<p>Nessun piatto trovato con questo ingrediente.</p>";
        return;
    };

    piatti.forEach(piatto => {
        let mostraPagina = document.createElement('div');
        mostraPagina.innerHTML = `  
            <h3>${piatto.nome}</h3>
            <p>Ingredienti: ${piatto.ingredienti.join(', ')}</p>
        `;
        risposte.appendChild(mostraPagina);
    });
}

function stampaIngredienti(ingredient) {
    let risposteIngredienti = document.getElementById("risultatiIngredienti");
    risposteIngredienti.innerHTML = "";

    if (ingredient.length === 0) {
        risposte.innerHTML = "<p>Nessun ingrediente trovato!</p>";
        return;
    }

    ingredient.forEach(ingredientiPiatto => {
        let mostraIngredienti = document.createElement('div');
        mostraIngredienti.innerHTML = `  
            <p>Ingredienti: ${ingredientiPiatto.join(', ')}</p>
        `;
        risposte.appendChild(mostraIngredienti);
    });
}

export { risultatiPagina, risultatiIngredientiPagina, stampaIngredienti };