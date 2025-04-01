//TRACCIA
// Ottieni il titolo di un post con una Promise.

// Crea una funzione getPostTitle(id) che accetta un id e
// restituisce una Promise che recupera il titolo di un post
// dal link https://dummyjson.com/posts/{id}


const getPostTitle = (id) => {
    return new Promise((resolve, reject) => { 
        fetch(`https://dummyjson.com/posts/${id}`) 
            .then(response => response.json())
            .then(obj => resolve(obj.title))
            .catch(reject)
    })
}

getPostTitle(1)
.then(title => console.log(`il titolo e`,title))
.catch(error => console.error(error))



