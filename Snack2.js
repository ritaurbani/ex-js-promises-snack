//TRACCIA

// Crea la funzione lanciaDado() che restituisce una Promise 
// che, dopo 3 secondi, genera un numero casuale tra 1 e 6. 
// Tuttavia, nel 20 % dei casi, il dado si "incastra" e la Promise va in reject.


const lanciaDado = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const result = Math.floor(Math.random()*6) + 1
           if( Math.random() < 0.2) {
            reject("incastrato")
           } else {
            resolve(result)
           }

        }, 3000)
    })
}

lanciaDado()
.then(number => console.log(number))
.catch(error => console.error(error))