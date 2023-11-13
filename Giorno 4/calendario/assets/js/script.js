//1. Dobbiamo capire in che mese siamo per scriverlo nell'h1
// e quanti giorni ha il mese per generare il corretto numero di celle
const now = new Date();
// per salvare gli appuntamenti abbiamo bisogno di un array, perche ogni appuntamento e una stringa
//ogni giorno puo contenere infiniti appuntamenti e ogni mese ha un numeri di giorni variabili
// creeremo quindi un array di array dove l'array padre e il mese e gli array figli sono i giorni
/*[rappresenta il mese]
    [rappresenta il primo giorno],[rappresenta il secondo giorno], ecc
 esempio: oggi e il 10 novembre l'array padre e novembre l'arrray figlio rappresenta 30giorni
 [
    [],
    [],
    [],
    ['9:00-live coding calendario','14:00 esercitazione']questo e il giorno 10
    [],
 ]   
 creiamo il guscio del mese
 */
const appointments = [];
//dentro appointments pushiamo tanti sottoarray quanti sono i giorni del mese
const monthsNames = [
  "Gennaio",
  "Febbraio",
  "Marzo",
  "Aprile",
  "Maggio",
  "Giugno",
  "Luglio",
  "Agosto",
  "Settembre",
  "Ottobre",
  "Novembre",
  "Dicembre",
];
const scriviMese = function () {
  const title = document.querySelector("h1"); //titolo viene associato a h1
  const indiceMese = now.getMonth(); //ottiene 10 perche siamo a novembre
  const nomeMese = monthsNames[indiceMese]; // ottiene la posizione 9 di quell'array che sarebbe novembre
  title.innerText = nomeMese; // scrivi il nome del mese nel tag h1
};
scriviMese();
// siamo nel mese, ma questo mese quanti giorni ha?
// per sapere quanti giorni ha bisogna sapere in che hanno siamo ( per capire se siamo in anno bisestile o no(se febbraio ha 28 o 29 giorni))
const giorniTotali = function () {
  const anno = now.getFullYear(); // ottiene 2023 perche siamo nell'anno 2023
  const mese = now.getMonth(); //ottiene 10 perche siamo a novembre
  //dal momento che nell'oggetto date il numero dei giorni del mese parte da 1 mi basta sapere qual'e l'ultimo giorno del mese in corso per avere il suo numero di giorni
  // per sapere l'ultimo giorno del mese in corso,creo la data del primo giorno del mese successivo al mese in corso e faccio -1
  let ultimoGiorno = new Date(anno, mese + 1, 0); // corrisponde allo 0 dicembre 2023 che non esiste quindi è il 30 novembre 2023
  const numeroGiorni = ultimoGiorno.getDate(); // alla costante numeroGiorni assegno il numero dei giorni che ha il mese selezionato (30)
  return numeroGiorni; // restituisce il numero 30
};
//giorniTotali(); dopo aver chiamato sotto la funzione creaGriglia(giorniTotali) non serve dichiarare la funzione qui
// quando carico un mese, eventuali classi selected devono essere rimosse altrimenti mi trovero selezionati i giorni del mese precedente che avevano degli appuntamenti
// seleziono tutti gli elementi con classe selected e rimuovo la classe
const deselezionaCelle = function () {
  const celle = document.querySelectorAll(".day");
  celle.forEach((element) => {
    element.classList.remove("selected"); // rimuove la classe selected a tutti quelli con la classe .day
  });
};
// quando faccio click sullo span newMeetingDay dovro leggere la data selezionata
const giornoAppuntamento = function (indiceGiorno) {
  const giorno = document.getElementById("newMeetingDay"); // a giorno gli assegno il div con id newMeetingDay
  giorno.classList.add("hasDay"); // aggiungo la classe hasDay al div newMeetingDay
  giorno.innerText = indiceGiorno + 1; // scrive il numero del giorno selezionando l'indice dell'array e mettendo +1 perche l'indice dell'array parte sempre da 0
};
// va creata la griglia dei div contenenti i giorni del mese in corso
//questa griglia userà il numero di giorni per gestire l'array globale creato all'inizio(appointments) e scrivera i vari div
const creaGriglia = function (numeroGiorni) {
  // numero giorni è il numero di giorni nel mese corrente (in questo caso 30)
  const calendarDiv = document.getElementById("calendar"); //associamo il div calendar a calendarDiv
  for (let i = 0; i < numeroGiorni; i++) {
    // ciclo il numero dei giorni
    const cellaGiorno = document.createElement("div"); // ad ogni giorno associo un div
    cellaGiorno.classList.add("day"); //stilizzo il div come definito su css
    //devo scrivere il numero del giorno nei div
    const valoreCella = document.createElement("h3");
    valoreCella.innerText = i + 1;
    //appendo gli elementi creati
    cellaGiorno.appendChild(valoreCella);
    calendarDiv.appendChild(cellaGiorno);
    // creato il calendario inserisco nell'array appointments l'array dei giorni del mese ()
    appointments.push([]);
    // Dopo aver creato la griglia gli dico che al click parte la funzione scritta sotto
    cellaGiorno.addEventListener("click", function (e) {
      // creo una funzione al click dei giorni
      deselezionaCelle(); // deselezione l'eventuale altra cella selezionata
      cellaGiorno.classList.add("selected"); // aggiungo la classe css per mostrare la selezione del giorno cliccato
      giornoAppuntamento(i); //scrrivo il giorno cliccato nella sezione Giorno del form
      // se ci sono gia eventi nella giornata devo far comprarire la lista completa
      if (appointments[i].length > 0) {
        mostraAppuntamenti(i);
      } else {
        const divAppuntamenti = document.getElementById("appointments");
        divAppuntamenti.style.display = "none";
      }
    });
    
  }
};
creaGriglia(giorniTotali());
const mostraAppuntamenti = function (indiceGiorno) {
  //con questa funzione si popola la lista degli apppuntamenti con gli appuntamenti del giorno
  // 1. prendere gli appuntamenti giusti
  const appuntamentiGiorno = appointments[indiceGiorno];
  //2.selezionare la lista contenitore
  const lista = document.querySelector("#appointments ul");
  // 3.svuotare la lista
  lista.innerHTML = "";
  // 4. ciclare gli appuntamenti del giorno e creare un li per ogni appuntamento
  appuntamentiGiorno.forEach((element) => {
    const newLi = document.createElement("li");
    newLi.innerText = element;
    lista.appendChild(newLi);
  });
  //5. la lista è piena ma è ancora nascosta (guarda riga divAppuntamenti display none)
  const divAppuntamenti = document.getElementById("appointments");
  divAppuntamenti.style.display = "block";
};
//dobbiamo creare nuovi appuntamenti
const meetingForm = document.querySelector("form");

meetingForm.addEventListener("submit", function (e) {
  e.preventDefault();

  // 1.giorno dell'appuntamento
  const selectedDays = document.getElementById("newMeetingDay").innerText;

  // 2. ora dell'appuntamento selezionato
  const meetingTime = document.getElementById("newMeetingTime").value;

  // 3. nome appuntamento
  const meetingName = document.getElementById("newMeetingName").value;

  // 4. creo la stringa dell'appuntamento
  const stringaAppuntamento = `${meetingTime} - ${meetingName}`;

  //5. scrivo l'appuntamento nell'array
  const indiceArray = parseInt(selectedDays) - 1;
  appointments[indiceArray].push(stringaAppuntamento);
  console.log("array dopo salvataggio", appointments);

  //creo un pallino che evidenzi nel calendario la presenza di un appuntamento
  const pallino = document.createElement("span");
  pallino.classList.add("pallino");

  //creo il div del giorno selezionato
  const divSelezionato = document.querySelector(".selected");
  if (!divSelezionato.querySelector(".pallino")) {
    // aggiungiamo la classe pallino solo se non è ancora stato selezionato
    divSelezionato.appendChild(pallino);
  }
  mostraAppuntamenti(indiceArray);
});
