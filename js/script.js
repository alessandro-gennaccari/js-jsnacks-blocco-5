/* Jsnack1 - Creare un oggetto palla che abbia le seguenti proprietà.
Nome = palla
Peso = 10
Attraverso un prompt dare la possibilità all'utente di modificare il peso della palla. */

var palla = {
    'nome' : 'palla',
    'peso' : 10
};
console.log('Peso della palla iniziale: ' + palla.peso);

palla.peso = parseInt(prompt('Inserisci il nuovo peso della palla.'))
console.log('Peso modificato della palla: ' + palla.peso);

// ---------------------------------------------------------------------------------------



/* Jsnack2 - Creare un array che contiene 10 oggetti che rappresentano una zucchina,
indicandone per ognuno varietà, peso e lunghezza.
Calcola quanto pesano tutte le zucchine. */

var zucchine = [
    {
        'varieta' : 'nero di milano',
        'peso' : 10,
        'lunghezza' : 16
    },
    {
        'varieta' : 'romanesco',
        'peso' : 15,
        'lunghezza' : 7
    },
    {
        'varieta' : 'lunga fiorentina',
        'peso' : 20,
        'lunghezza' : 11
    },
    {
        'varieta' : 'siciliano',
        'peso' : 25,
        'lunghezza' : 25
    },
    {
        'varieta' : 'striata di napoli',
        'peso' : 30,
        'lunghezza' : 16
    },
    {
        'varieta' : 'bianca triestina',
        'peso' : 35,
        'lunghezza' : 9
    },
    {
        'varieta' : 'rigata pugliese',
        'peso' : 40,
        'lunghezza' : 14
    },
    {
        'varieta' : 'tondo di piacenza',
        'peso' : 45,
        'lunghezza' : 7
    },
    {
        'varieta' : 'rugoso friulano',
        'peso' : 50,
        'lunghezza' : 16
    },
    {
        'varieta' : 'trombetta di albenga',
        'peso' : 55,
        'lunghezza' : 20
    }
];

var totalePeso = 0;
for (var i = 0; i < zucchine.length; i++) {
    totalePeso += zucchine[i].peso;
}

console.log('Tutte le zucchine pesano: ' + totalePeso + 'gr');

// ---------------------------------------------------------------------------------------



/* Jsnack3 - Creare  un array che contiene 10 oggetti che rappresentano una zucchina.
Dividi in due array separati le zucchine che misurano meno o più di 15cm.
Infine stampa separatamente quanto pesano i due gruppi di zucchine. */

var maggioriDi15 = [];
var minoriDi15 = [];
var pesoMaggiori = 0;
var pesoMinori = 0;

for (var i = 0; i < zucchine.length; i++) {
    if (zucchine[i].lunghezza < 15){
        minoriDi15.push(zucchine[i]);
        pesoMinori += zucchine[i].peso;
    } else {
        maggioriDi15.push(zucchine[i]);
        pesoMaggiori += zucchine[i].peso;

    }
}

console.log(maggioriDi15);
console.log('Totale peso delle zucchine che misurano più di 15cm: ' + pesoMaggiori + 'gr');
console.log(minoriDi15);
console.log('Totale peso delle zucchine che misurano meno di 15cm: ' + pesoMinori + 'gr');

// ---------------------------------------------------------------------------------------
