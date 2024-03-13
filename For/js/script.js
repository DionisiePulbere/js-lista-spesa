// Ciao ragazze e ciao ragazzi!
// nome repo: js-lista-spesa
// Consegna:
// Data una lista della spesa:
// const list = [
//     'Latte',
//     'Cacao',
//     'Insalata',
//     'Carote',
//     'Pomodori',
//     'Piatti pronti'
// ];
// Stampare sulla pagina (anche brutalmente, basta che si vedano) gli elementi della lista individualmente.
// Svolgete questo esercizio in 2 versioni: col ciclo for e col ciclo while.
// Consigli:
// - Ricordiamoci di inizializzare la variabile di contatore prima dell'inizio del ciclo while
// - Ricordiamoci di incrementare il contatore, o comunque di inserire una condizione di uscita, all'interno ciclo while

// data un'array 
const list = ['Latte','Cacao','Insalata','Carote','Pomodori','Piatti pronti'];
// creo la costante collegata alla UL
const userList = document.querySelector("#list")
// creo un ciclo for
for (let i = 0; i < list.length; i++){
    const thisList = list[i];
    // stampo il risultato sulla pagina in un LI
    userList.innerHTML += `<li>${thisList}</li>`
}