///////////////////////////BONUS/////////////////////
// 🎯 Bonus:
// Ottieni l'intero post con l'autore

// Crea una funzione getPost(id) che recupera l'intero post.
// Concatena una seconda chiamata che aggiunge una proprietà user che contiene i dati dell'autore,
// recuperati dalla chiamata https://dummyjson.com/users/{post.userId}.

const getPost = (id) => {
    return new Promise((resolve, reject) => { //operazione da fare? fetch
        fetch(`https://dummyjson.com/posts/${id}`)
            .then(response => response.json()) //convert response(post)into obj
            .then(post => {//ottenuto il post leggo post.userId e uso questo id per fare altro fetch
                fetch(`https://dummyjson.com/users/${post.userId}`)
                    .then(response => response.json())
                    .then(user => {//user => resolve({...post, user})
                        post.user = user //assegno dati autore a post.user - creo nuova proprieta -obj.proprieta = valore
                           // const result = {
                        //     ...post,
                        //     user:user//user
                        // }
                        resolve(post)
                    })//post ha ora anche 
                    .catch(reject) //errore 
            })
            .catch(reject)
    })

}

getPost(1)
    .then(post => console.log(`post completo`,post))
    .catch(error => console.error(error))