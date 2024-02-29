/*1 Cerveza // 2 Destilados // 3 Whyski // 4 Vinos // 5 Accesorios*/
const productos = [
    {id: "1", nombre: "Ron Bacardi Gold",     precio: 7000, img:             "../img/BacardiGold.jpg", idCat: "2"},
    {id: "2", nombre: "Ron Barcelo",          precio: 8500, img:             "../img/Barcelo.webp",    idCat: "2"},
    {id: "3", nombre: "Cerveza Corona 12U",   precio: 9990, img:             "../img/Corona12U.png",   idCat: "1"},
    {id: "4", nombre: "cerveza Volcanes 4U",  precio: 5000, img:             "../img/Volc4.jpg",       idCat: "1"},
    {id: "5", nombre: "cerveza Volcanes 10U", precio: 10000, img:            "../img/Vol10.webp",      idCat: "1"},
    {id: "6", nombre: "Jegermeister",         precio: 12990, img:            "../img/Jegermeister.jpg",idCat: "3"},
    {id: "7", nombre: "Whyski Jonny Walker Red Label",     precio: 15990, img: "../img/JWRL.jpg",      idCat: "3"},
    {id: "8", nombre: "Whyski Jonny Walker Black Label",   precio: 22990, img: "../img/JWBL.jpg",      idCat: "3"},
    {id: "10", nombre: "Whyski Jonny Walker Blue Label",    precio: 251990, img: "../img/JWBlL.jpg",    idCat: "3"},
    {id: "11", nombre: "Whyski Blenders Pride",             precio: 21190, img: "../img/BlenderP.jpg",  idCat: "3"},
    {id: "12", nombre: "Whyski Jonny Walker Blue Label",    precio: 251990, img: "../img/JWBlL.jpg",    idCat: "5"},
    {id: "13", nombre: "Whyski Jonny Walker Blue Label",    precio: 251990, img: "../img/JWBlL.jpg",    idCat: "5"},
    {id: "14", nombre: "Whyski Jonny Walker Blue Label",    precio: 251990, img: "../img/JWBlL.jpg",    idCat: "5"},
    {id: "15", nombre: "Whyski Jonny Walker Blue Label",    precio: 251990, img: "../img/JWBlL.jpg",    idCat: "5"},
    {id: "16", nombre: "Whyski Jonny Walker Blue Label",    precio: 251990, img: "../img/JWBlL.jpg",    idCat: "5"},
    {id: "17", nombre: "Whyski Jonny Walker Blue Label",    precio: 251990, img: "../img/JWBlL.jpg",    idCat: "5"},
    {id: "18", nombre: "Whyski Jonny Walker Blue Label",    precio: 251990, img: "../img/JWBlL.jpg",    idCat: "5"},
    {id: "19", nombre: "Whyski Jonny Walker Blue Label",    precio: 251990, img: "../img/JWBlL.jpg",    idCat: "5"},
    {id: "20", nombre: "Whyski Jonny Walker Blue Label",    precio: 251990, img: "../img/JWBlL.jpg",    idCat: "5"},
    {id: "21", nombre: "Whyski Jonny Walker Blue Label",    precio: 251990, img: "../img/JWBlL.jpg",    idCat: "5"},
    {id: "22", nombre: "Whyski Jonny Walker Blue Label",    precio: 251990, img: "../img/JWBlL.jpg",    idCat: "5"},
    {id: "23", nombre: "Whyski Jonny Walker Blue Label",    precio: 251990, img: "../img/JWBlL.jpg",    idCat: "5"},
    {id: "24", nombre: "Whyski Jonny Walker Blue Label",    precio: 251990, img: "../img/JWBlL.jpg",    idCat: "5"},
    {id: "25", nombre: "Whyski Jonny Walker Blue Label",    precio: 251990, img: "../img/JWBlL.jpg",    idCat: "5"},
    {id: "26",nombre: "Vino Casillero del Diablo",         precio: 10990, img: "../img/CasiDD.webp",   idCat: "4"}
]

export const getProductos =()=> {
    return new Promise ( (resolve) => {
        setTimeout ( ()=> {
            resolve(productos);
        }, 100)
    })
}
export const getUnProducto = (id) => {
    return new Promise (resolve =>{
        setTimeout ( () => {
            const producto = productos.find(prod => prod.id === id);
            resolve(producto);
        }, 100)
    })
}

export const getProductosPorCategoria = (idCategoria) =>{
    return new Promise (resolve =>{
        setTimeout(() =>{
            const productosCategoria =  productos.filter(prod => prod.idCat === idCategoria);
            resolve (productosCategoria);
           },100)
    })
}