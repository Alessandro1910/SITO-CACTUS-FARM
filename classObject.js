class Dish {
    constructor(nome, ingredienti, ristorante, reviews) {
        this.nome = nome;
        this.ingredienti = ingredienti;
        this.ristorante = ristorante;
        this.reviews = reviews;
    }

    calculateMedia() {
        let somma = 0;
        for (let i = 0; i < this.reviews.length; i++) {
            somma += this.reviews[i];
        }
        return (somma / this.reviews.length).toFixed(2);
    }

    updateRating(newRecensione) {
        if (newRecensione <= 5 && newRecensione >= 0) {
            this.reviews.push(newRecensione);
            console.log(`Nuova recensione per ${this.nome} e : ${this.calculateMedia()}`);
        } else {
            console.log("La Recensione deve essere compresa tra 0 e 5.");
        }
    }


    addIngredient(ingrediente) {
        if (!this.ingredienti.includes(ingrediente)) {
            this.ingredienti.push(ingrediente);
            console.log(`Ingrediente aggiunto: ${this.ingredienti}`);
        } else {
            console.log("L'ingrediente è già presente nella lista.");
        }
    }

    //     toString() {
    //         return this.nome + " | " + this.ristorante + " | " + this.calculateMedia() + " | ";
    //     }
}

export { Dish };