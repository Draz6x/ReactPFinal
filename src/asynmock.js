const productos =[
    {id: 1, nombre: "Ron Bacardi Gold",     precio: 7000, img: "./img/Bacardigold.jpg"},
    {id: 2, nombre: "Ron Barcelo",          precio: 8500, img: "./img/Barcelo.jpg"},
    {id: 3, nombre: "Cerveza Corona 12U",   precio: 9990, img: "./img/corona12U"},
    {id: 4, nombre: "cerveza Volcanes 4U",  precio: 5000, img: "./img/Volc4.jpg"},
    {id: 5, nombre: "cerveza Volcanes 10U", precio: 10000, img: "./img/Vol10.jpg"},
    {id: 6, nombre: "Jegermeister",         precio: 12990, img: "./img/Jegermeister.jpg"},
    {id: 7, nombre: "Whyski Jonny Walker Red Label",     precio: 15990, img: "./img/JWRL.jpg"},
    {id: 8, nombre: "Whyski Jonny Walker Black Label",   precio: 22990, img: "./img/JWBL.jpg"},
    {id: 9, nombre: "Whyski Jonny Walker Blue Label",    precio: 251990, img: "./img/JWBlL.jpg"},
    {id: 10, nombre: "Vino Casillero del Diablo",        precio: 10990, img: "./img/CasiDD.jpg"}
]

export const getProductos =()=> {
    return new Promise ((resolve)=> {
        
        setTimeout (()=> {
            resolve(productos);

        }, 100)
    })
}