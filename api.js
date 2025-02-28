import { Dish } from "./classObject.js";

function fetchDishes() {
    return fetch('http://185.216.75.210:50080/api.php')
        .then(response => response.json())
        .then(json => {
            let primoLivello = json.results;
            console.log(primoLivello);
            let listaDish = [];
            primoLivello.forEach(function (res) {
                let el = new Dish(res.name, res.ingredients, res.restaurant, res.reviews);
                listaDish.push(el);
            });

            return listaDish;
            // console.log(listaDish);
            // listaDish.forEach(function (res) {
            //     console.log(res.toString());
            // });
        })
        .catch(err => {
            console.log('Error richiests API:', err);

            return [];
        });
}

function chiamataPizza(query) {
    return fetch('http://185.216.75.210:50080/api.php?q=' + query)
        .then(response => response.json())
        .then(json => {
            let listaData = json.results;

            let listaDish = [];
            listaData.forEach(function (res) {
                let elementi = new Dish(res.name, res.ingredients, res.restaurant, res.reviews);
                listaDish.push(elementi);
            });
            console.log(listaDish);
            return listaDish;

        })
        .catch(err => console.log("Errore API:", err));
}

export { fetchDishes, chiamataPizza };