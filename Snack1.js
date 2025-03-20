//TRACCIA
// Ottieni il titolo di un post con una Promise.

// Crea una funzione getPostTitle(id) che accetta un id e
// restituisce una Promise che recupera il titolo di un post
// dal link https://dummyjson.com/posts/{id}

// 🎯 Bonus:
// Ottieni l'intero post con l'autore
// Crea una funzione getPost(id) che recupera l'intero post.
// Concatena una seconda chiamata che aggiunge una proprietà user che contiene i dati dell'autore,
// recuperati dalla chiamata https://dummyjson.com/users/{post.userId}.


// getPostTitle(1)
//1
// // const fetchResponse = fetch(`https://dummyjson.com/posts/1`)
// console.log(fetchResponse) //in promise reuslt vedo la response
//2
// fetch(`https://dummyjson.com/posts/1`)
// .then(response => response.json())
// .then(obj => console.log(obj.title))
// .catch(error => console.log(error))

//questa funzione ci ritornera una promise...
const getPostTitle = (id) => {
    return new Promise((resolve, reject) => { //passiamo executor - operazione da fare? fetch
        fetch(`https://dummyjson.com/posts/${id}`) //interroga link
            .then(response => response.json())//trasforma dato in oggetto
            .then(obj => resolve(obj.title))//result(title) //prendo dato e sposto in una funzione> quindi scrivo direttamente 
            .catch(reject)//gestisce errore
    })
}

getPostTitle(1)
.then(title => console.log(`il titolo e`,title))
.catch(error => console.error(error))
//nome dei parametri delle callback passate a catch sono arbitrari
//funzione che promise esegue in caso di reject


