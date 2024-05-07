//domina las Web APIs con promesas y fetch

let intervalo = Number(prompt("En cuantos segundos desea que se ejecute la promesa:"));

const asincronia = (num) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(`la promesa se ha ejecutado en ${intervalo*1000} milisegundo`)
        }, num*1000);
        reject("no cargo la promesa")
    })
}
asincronia(intervalo)
.then(respuesta => console.log(respuesta))
.catch(respuesta => console.log(respuesta))

fetch("https://jsonplaceholder.typicode.com/posts")
.then(respuesta => respuesta.json())
.then(respuesta => console.log(respuesta))
.catch(() => console.log("error no se encontro la url"))