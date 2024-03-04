/*1 Cerveza // 2 Destilados // 3 Whyski // 4 Vinos // 5 Accesorios*/
const productos = [
    {id: "1", nombre: "Ron Bacardi Gold",     precio: 7000, img:             "../img/BacardiGold.jpg", idCat: "2", stock: 59},
    {id: "2", nombre: "Ron Barcelo",          precio: 8500, img:             "../img/Barcelo.webp",    idCat: "2",stock: 54},
    {id: "3", nombre: "Cerveza Corona 12U",   precio: 9990, img:             "../img/Corona12U.png",   idCat: "1",stock: 39},
    {id: "4", nombre: "cerveza Volcanes 4U",  precio: 5000, img:             "../img/Volc4.jpg",       idCat: "1",stock: 89},
    {id: "5", nombre: "cerveza Volcanes 10U", precio: 10000, img:            "../img/Vol10.webp",      idCat: "1",stock: 78},
    {id: "6", nombre: "Jegermeister",         precio: 12990, img:            "../img/Jegermeister.jpg",idCat: "3",stock: 56},
    {id: "7", nombre: "Whyski Jonny Walker Red Label",     precio: 15990, img: "../img/JWRL.jpg",      idCat: "3",stock: 67},
    {id: "8", nombre: "Whyski Jonny Walker Black Label",   precio: 22990, img: "../img/JWBL.jpg",      idCat: "3",stock: 53},
    {id: "10", nombre: "Whyski Jonny Walker Blue Label",    precio: 251990, img: "../img/JWBlL.jpg",   idCat: "3",stock: 229},
    {id: "11", nombre: "Whyski Blenders Pride",             precio: 21190, img: "../img/BlenderP.jpg", idCat: "3",stock: 23},
    {id: "12", nombre: "Whyski Ballantine",                 precio: 15990, img: "../img/Ballant.webp", idCat: "3",stock: 29},
    {id: "14", nombre: "Barril de Cerveza Kunstmann Torobayo", precio: 17990, img: "../img/BarrKu.jpg",idCat: "1",stock: 45},
    {id: "15", nombre: "Barril de cerveza Apoftel Braü",    precio: 13990, img: "../img/BarrAp.webp",  idCat: "1",stock: 83},
    {id: "16", nombre: "Vino Exportación blanco Viña C&T",  precio: 11990, img: "../img/CYTB.webp",    idCat: "4",stock: 34},
    {id: "17", nombre: "Vino Casillero del Diablo pack 12u",precio: 51990, img: "../img/P12CDD.jpg",   idCat: "4",stock: 14},
    {id: "18", nombre: "Pack Shopero Calavera 6 unidades 500cc", precio: 10990, img: "../img/PackShop.jpg", idCat: "5",stock: 5},
    {id: "20", nombre: "Barril Artesanal Cerveza",          precio: 30990, img: "../img/Barte.webp",   idCat: "5",stock: 23},
    {id: "21", nombre: "Shopero Pink Floyd 500cc",    precio: 12990, img: "../img/ShpPF.jpg",    idCat: "5",stock: 15},
    {id: "22", nombre: "Pack 3 Vasos Whysky 100cc",    precio: 6990, img: "../img/VasoCW.jpg",    idCat: "5",stock: 167},
    {id: "23", nombre: "Bar Mueble almacenamiento licores", precio: 51990, img: "../img/Bar.jpg",idCat: "5",stock: 59},
    {id: "24", nombre: "Vino Castillo Molina Cabernet Sauvignon",  precio: 12990, img: "../img/CM.jpg",    idCat: "4",stock: 59},
    {id: "25", nombre: "Decantador para vino",    precio: 19990, img: "../img/Dec.webp",    idCat: "5",stock: 59},
    {id: "26",nombre: "Vino Casillero del Diablo",         precio: 10990, img: "../img/CasiDD.webp",   idCat: "4",stock: 59}
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