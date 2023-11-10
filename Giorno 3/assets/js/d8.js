const addBtn = document.querySelector('#inserisci');//bottone
let taskList = document.querySelector('#listaTask');//ul
const task = document.querySelector('#task');//input text
const tasks = [];

addBtn.addEventListener('click', function () { //quando clicchi bottone parte la funzione
	if (task.value !== '') { //se il campo non e vuoto esegui le funzione in ordine
		aggiungiTask();
		scriviLista();
		cancellaInput();
	} else {//se il campo e vuoto esegui l'allert
		alert('Inserire un task nel campo di input!');
		return;
	}
});

const aggiungiTask = () => {//Inserisci nell'array quello che digito nell'input
	tasks.push(task.value);
};

const scriviLista = () => {
	taskList.innerHTML = '';//cancella quello che c'e
	tasks.forEach((element, index) => { //ciclo l'array con valore(element) e indice(index)
		let singletask = document.createElement('li');//creo li della ul
        singletask.style.borderBottom = '1px solid gray';
		singletask.innerHTML = `${element} <button class="button" onclick="elimina(${index})">❌</button>`;
// con element aggiungo l'elemento(li) alla lista e aggiungo un bottone che quando clicca fa partire la funzione elimina()
// oppure si poteva fare : let pulsante = document.createElement('button')
//pulsante.classList.add('button');
//pulsante.innerHTML = '❌'
//pulsante.setAttribute('onclick',`elimina(${index})`)
        taskList.appendChild(singletask);//appendi l'elemento alla lista
	});
	barraTask();// parte la funzione
};

function cancellaInput() {
	task.value = '';
}

function elimina(index) {
	tasks.splice(index, 1);//splice elimina l'elemento che sta in posizione (index),e 1 indica che solo quell'elemento deve essere eliminato 
	scriviLista();
}

function barraTask() {
	const elencoTask = document.querySelectorAll('li');// trova l'elemento li aggiunto dall'input
	elencoTask.forEach((element) => { // per ogni elemento dell'array(li)
		element.onclick = function () {//ogni volta che clicco
			element.classList.toggle('barrato');// metto l'elemento barrato
		};
	});
}