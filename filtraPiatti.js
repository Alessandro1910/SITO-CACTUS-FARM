function cercaPiattiConIngrediente(dishes, ingredienteRichiesto) {
    console.log("ricerca ingredienti nei piatti");
    let nuovoArray = [];
    dishes.forEach(piatto => {
        console.log(`Piatto: ${piatto.nome}`);

        let trovato = false;
        piatto.ingredienti.forEach(ingrediente => {
            let piattoPerNome = ingrediente.name.toLowerCase();
            let ingredientePerRichiesta = ingredienteRichiesto.toLowerCase();
            //console.log('-  Ingrediente ' + piattoPerNome + ' è uguale a ' + ingredientePerRichiesta + '?');
            if (piattoPerNome == ingredientePerRichiesta) {
               trovato = true;
              // console.log(piatto.nome + ' contiene ' + piattoPerNome);
            }
        });
        
        if (trovato == true) {
            nuovoArray.push(piatto)
        }
    });
    console.log("piatti validi");
    console.log(nuovoArray);
    return nuovoArray;
};

export { cercaPiattiConIngrediente };