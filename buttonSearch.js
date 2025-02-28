import { fetchDishes, chiamataPizza } from "./api.js";
import { cercaPiattiConIngrediente } from "./filtraPiatti.js";
import { risultatiPagina, risultatiIngredientiPagina, stampaIngredienti} from "./gestioneDom.js";

export function cercaPiatti() {
    let query = document.getElementById("cercaPietanze").value;   // OTTENGO IL VALORE INSERITO DALL UTENTE
    // SI RICOLLEGA ALL'API E RISALE AI DATI CHE HA DENTRO
    chiamataPizza(query).then(piatti => {
        console.log(piatti);
        risultatiPagina(piatti);
    });
};

export function cercaDishPerIngrediente() {
    let ingrediente = document.getElementById("cercaIngrediente").value.trim();

    if (ingrediente === "") {
        document.getElementById("risultati").innerHTML = "Inserisci un ingrediente per la ricerca.";
        return;
    }

    fetchDishes().then(piatti => {
        console.log("I piatti in input sono:", piatti);
        let piattiFiltrati = cercaPiattiConIngrediente(piatti, ingrediente);
        console.log("I piatti filtrati sono:", piattiFiltrati);
        risultatiIngredientiPagina(piattiFiltrati);
        stampaIngredienti(piattiFiltrati);
    });
}

