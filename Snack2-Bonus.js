// TRACCIA

// Bonus: HOF con closure per memorizzare l'ultimo lancio
// Modifica la funzione in creaLanciaDado(), che restituisce una closure (funzione anonima)
// che memorizza l'ultimo risultato. Se il numero esce due volte di fila, 
// stampa "Incredibile!".


//Note di teoria mia sulle CLOSURE:
// generatori di funzione che hanno uno scope interno che viene mantenuto
// tra le esecuzioni della funzione generata
//Funzioni ritornate da funzioni devono essere anonime
//Essendo dentro creaLanciaDado ma fuori dalla funzione che ritorniamo, 
// questa variabile sarà "chiusa" (closure) e mantenuta in memoria tra le esecuzioni della funzione restituita.
//la usiamo per memorizzare variabili tra esecuzioni di una funzione. 


const creaLanciaDado = () => {
    //qui posso creare variabili che la funzione interna usa tra un esecuzione e l altra
    let ultimoLancio = null

    return function () {
        return new Promise((resolve, reject) => {

            setTimeout(() => {
                const result = Math.floor(Math.random() * 6) + 1
                if (Math.random() < 0.2) {
                    ultimoLancio = null; //azzeriamo quando si incastra
                    reject("incastrato")
                } else {
                  
                    if(result === ultimoLancio){
                        console.log("incredibile")
                    }
                    ultimoLancio = result
                    resolve(result)
                    // resolve("numero")
                }
            }, 3000)
        })
    }

}

const lanciaDadoConMemoria = creaLanciaDado() 


lanciaDadoConMemoria()
    .then(number => console.log(`risultato e ${number}`))
    .catch(error => console.error(error))