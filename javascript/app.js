let imagenes = [
    {
        "url": "../img/condeKontatras.jpg",
        "nombre": "Conde Kontatrás",
        "descripcion": "Jefe final de la isla de Frigost, la pelea tiene una particular mecánica de horarios que modifican la dirección de los ataques de los personajes."

    },
    {
        "url": "../img/jinetes.jpg",
        "nombre": "Jinetes del Selocalipsis",
        "descripcion": "Miseria, Servidumbre, Guerra y Corrupción. 'Esta guerra no figura en los registros del reloj divino...'"

    },
    {
        "url": "../img/ily.jpg",
        "nombre": "Ilyzaelle",
        "descripcion": "Ilyzaelle es la campeona de Jiva, Caballero del Cielo y guardiana de Noa, una de las 7 lanzas del juramento."

    },
    {
        "url": "../img/ciremomore.png",
        "nombre": "Cire Momore",
        "descripcion": "Cire Momore es una armadura animada capaz de succionar las almas de quienes se atreven a tocar el tesoro puesto bajo su protección."
    },
    {
        "url": "../img/talkasha.jpg",
        "nombre": "Tal Kasha",
        "descripcion": "Tal Kasha es la Reina de los Malditos. Ella y sus sirvientes fueron condenados por el Dios Xelor a una vida de sufrimiento, atrapados en la pirámide de Picahari por la eternidad."
    }
]


let atras = document.getElementById('atras');
let adelante = document.getElementById('adelante');
let imagen = document.getElementById('img');
let puntos = document.getElementById('puntos');
let texto = document.getElementById('texto')
let actual = 0
posicionCarrusel()

atras.addEventListener('click', function(){
    actual -=1

    if (actual == -1){
        actual = imagenes.length - 1
    }

    imagen.innerHTML = ` <img class="img" src="${imagenes[actual].url}" alt="logo pagina" loading="lazy"></img>`
    texto.innerHTML = `
    <h3>${imagenes[actual].nombre}</h3>
    <p>${imagenes[actual].descripcion}</p>
    `
    posicionCarrusel()
})  
adelante.addEventListener('click', function(){
    actual +=1

    if (actual == imagenes.length){
        actual = 0
    }

    imagen.innerHTML = ` <img class="img" src="${imagenes[actual].url}" alt="logo pagina" loading="lazy"></img>`
    texto.innerHTML = `
    <h3>${imagenes[actual].nombre}</h3>
    <p>${imagenes[actual].descripcion}</p>
    `
    posicionCarrusel()
})  

function posicionCarrusel() {
    puntos.innerHTML = ""
    for (var i = 0; i <imagenes.length; i++){
        if(i == actual){
            puntos.innerHTML += '<p class="bold">.<p>'
        }
        else{
            puntos.innerHTML += '<p>.<p>'
        }
    } 
}