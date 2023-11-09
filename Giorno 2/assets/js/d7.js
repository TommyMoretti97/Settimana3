/* ESERCIZIO 1
       Scrivi una funzione per cambiare il titolo della pagina in qualcos'altro
    */

const changeTitle = function () {
document.querySelector("h1").innerHTML = "questo e il nuovo titolo";
}
changeTitle();
/* ESERCIZIO 2
        Scrivi una funzione per aggiungere al titolo della pagina una classe "myHeading"
     */

const addClassToTitle = function () {
document.querySelector("h1").className = "myHeading";
}
addClassToTitle();
/* ESERCIZIO 3
     Scrivi una funzione che cambi il testo dei p figli di un div
       */

const changePcontent = function () {
const nuovoTesto = document.querySelectorAll("div p");
nuovoTesto.forEach((element) => element.innerHTML = 'nuovo testo');
}
changePcontent();
/* ESERCIZIO 4
        Scrivi una funzione che cambi la proprietà href di ogni link (tranne quello nel footer) con il valore https://www.google.com
       */

const changeUrls = function () {
const links = document.querySelectorAll("a:not(footer a)");
links.forEach((element) => element.setAttribute( 'href','https://www.google.com'));
}
changeUrls();
/* ESERCIZIO 5
        Scrivi una funzione che aggiunga un nuovo elemento lista alla seconda lista non ordinata
     */

const addToTheSecond = function (content) {
const ul = document.getElementById('secondList');
const nuovoli = document.createElement('li');
ul.innerHTML += ` <li>4rd</li>`
}
addToTheSecond();
/* ESERCIZIO 6
        Scrivi una funzione che aggiunga un paragrafo al primo div
     */

const addParagraph = function () {
const aggiungi = document.querySelector('div');
const p = document.createElement('p');
p.innerText = 'sono il paragrafo';
aggiungi.appendChild(p);
}
addParagraph();
/* ESERCIZIO 7
        Scrivi una funzione che faccia scomparire la prima lista non ordinata
     */

const hideFirstUl = function () {
const nascondi = document.getElementById('firstList');
nascondi.style.display = ('none'); 
}
hideFirstUl();
/* ESERCIZIO 8 
        Scrivi una funzione che renda verde il background di ogni lista non ordinata
       */

const paintItGreen = function () {
let rendiVerde = document.querySelector('ul');
rendiVerde.style.backgroundColor = 'green';
}
paintItGreen();
/* ESERCIZIO 9
        Scrivi una funzione che rimuova l'ultima lettera dall'h1 ogni volta che l'utente lo clicca
       */

const makeItClickable = function () {
    const rimuoviAlClick = document.querySelector('h1');
    rimuoviAlClick.onclick = function(){
       rimuoviAlClick.innerText = rimuoviAlClick.innerText.slice (0,-1);
    }
};
makeItClickable();
/* ESERCIZIO 10
        Crea una funzione che, al click sul footer, riveli l'URL del link interno come contenuto di un alert()
       */

const revealFooterLink = function () {
    const clickFooter = document.querySelector('footer');
    clickFooter.onclick = function(){
        alert('https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Manipulating_documents');
        //const link = document.quesrySelection('footer a');
        //alert(link.getAttribute('href'));
    } 
 };
revealFooterLink();
/* ESERCIZIO 11
        Crea una funzione che crei una tabella nell'elemento con id "tableArea". 
        La tabella avrà 5 elementi e questa struttura: immagine, nome prodotto, quantità, prezzo
     */

const generateTable = function () {
    
const tabella1 =[{
    id:1,
    immagine :'primaimg',
    nomeprodotto : 'prodotto1',
    quantità: '1',
    prezzo: '1',
},
{
    id: 2,
    immagine :'secondaimg',
    nomeprodotto : 'prodotto2',
    quantità: '2',
    prezzo: '2',
},
{
    id:3,
    immagine :'terzaimg',
    nomeprodotto : 'prodotto3',
    quantità: '1',
    prezzo: '1',
},
{
    id:4,
    immagine :'quartaimg',
    nomeprodotto : 'prodotto4',
    quantità: '1',
    prezzo: '1',
},
{
    id:5,
    immagine :'quintaimg',
    nomeprodotto : 'prodotto5',
    quantità: '1',
    prezzo: '1',
},
]
const contenitore = document.getElementById('tableArea');
const tabella = document.createElement('table');

tabella.style.width = '50vw';
const primaRiga = document.createElement('tr');
const intImmagine = document.createElement('th');
intImmagine.innerText = 'Immagine';
const intnome = document.createElement('th');
intnome.innerText = 'Nome Prodotto';
const intquantita = document.createElement('th');
intquantita.innerText = 'quantita';
const intPrezzo = document.createElement('th');
intPrezzo.innerText = 'Prezzo';
primaRiga.appendChild(intImmagine);
primaRiga.appendChild(intnome);
primaRiga.appendChild(intquantita);
primaRiga.appendChild(intPrezzo);
tabella.appendChild(primaRiga);
for(let i=0; i<tabella1.length;i++){
    const nuovaRiga = document.createElement('tr');
    const cellaImmagine =document.createElement('td');
    cellaImmagine.innerText= `${tabella1[i].immagine}`
    const cellanome =document.createElement('td');
    cellanome.innerText= `${tabella1[i].nomeprodotto}`
    const cellaquantita =document.createElement('td');
    cellaquantita.innerText= `${tabella1[i].quantità}`
    const cellaprezzo =document.createElement('td');
    cellaprezzo.innerText= `${tabella1[i].prezzo}`
    nuovaRiga.appendChild(cellaImmagine);
    nuovaRiga.appendChild(cellanome);
    nuovaRiga.appendChild(cellaquantita);
    nuovaRiga.appendChild(cellaprezzo);
    tabella.appendChild(nuovaRiga);
}
contenitore.appendChild(tabella);
}
generateTable();
/* ESERCIZIO 12
        Crea una funzione che aggiunga una riga alla tabella precedentemente creata e fornisca i dati necessari come parametri
     */

const addRow = function () {

};

/* ESERCIZIO 14
       Crea una funzione che nasconda le immagini della tabella quando eseguita
     */

const hideAllImages = function () {};

/* EXTRA ESERCIZIO 15
       Crea una funzione che cambi il colore del h2 con id "changeMyColor" con un colore random ad ogni click ricevuto
     */

const changeColorWithRandom = function () {
    const nuovoColore = document.getElementById('changeMyColor');
    
    nuovoColore.onclick = function(){
        const coloreCasuale = Math.floor(Math.random()*16777215).toString(16);
        nuovoColore.innerText += coloreCasuale.innerText;

    }
};
changeColorWithRandom(); 
/* EXTRA ESERCIZIO 16
       Crea una funzione che elimini le vocali da ogni elemento testuale della pagina (puoi aiutarti con i nuovi metodi degli array di ES6)
     */

const deleteVowels = function () {};
