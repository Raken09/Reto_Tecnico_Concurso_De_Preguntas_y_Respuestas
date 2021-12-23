// Primero se elimina la sección de preguntas, con el fin de que al comienzo solo se vea el formulario de registro.
const padrePreguntas = document.getElementById("preguntasPadre");
const hijoPreguntas = document.getElementById("preguntas");
const remvPreguntas = padrePreguntas.removeChild(hijoPreguntas);

const nicknameJugador = document.getElementById("nickname").value;
const regionJugador = document.getElementById("region").value;

// Registrar el jugador 
const botonRegistro = document.getElementById("botonRegistro");

botonRegistro.addEventListener("click", (e) => {
    e.preventDefault();
    // Se obtienen los valores de los inputs
    let nickJugador = document.getElementById("nickname").value;
    let region = document.getElementById("region").value;

    function jugador(nickname, region) {
        this.nickname = nickname;
        this.region = region;
    }
    // Se crea el objeto jugador con los datos ingresados.
    //var nuevoJugador = new jugador(nickJugador, region);
    //console.log(nuevoJugador);

    if (nickJugador === "" || region === "seleccionar") {
        alert("Debes completar todos los campos");
    } else {
        alert("Bienvenido " + nickJugador + " el registro ha sido exitoso, ahora puedes jugar!");

        // Se elimina el formulario de registro.
        const us = document.getElementById("usuarioPadre");
        const usua = document.getElementById("usuario");
        us.removeChild(usua);

        // Se muestra la sección de preguntas la cual fue eliminada anteriormente.
        padrePreguntas.appendChild(remvPreguntas);
        // Se ejecuta la función pregunta para que se muestre una pregunta aleatoria, se porporciona como parametro
        // el grupo de preguntas del nivel 1, ya que siempre se inicia en el nivel 1.
        pregunta(preguntasNivel1);
    }

    return jugadorInscrito = new jugador(nickJugador, region);
})

// Preguntas y respuestas de cada nivel:

const preguntasNivel1 = [
    {
        pregunta: "¿Que es League of Legends?",
        respuestas: {
            a: "Un juego de estrategia en equipo",
            b: "Un juego de cartas",
            c: "Un juego de automóviles",
            d: "Un juego de fútbol"
        },
        respuestaCorrecta: "a"
    },
    {
        pregunta: "En una partida de LOL, el equipo se compone de:",
        respuestas: {
            a: "3 jugadores",
            b: "2 jugadores",
            c: "7 jugadores",
            d: "5 jugadores"
        },
        respuestaCorrecta: "d"
    },
    {
        pregunta: "¿Como se llama la estructura mas importante?",
        respuestas: {
            a: "Principal",
            b: "Nexo",
            c: "Hinibidor",
            d: "torreta"
        },
        respuestaCorrecta: "b"
    },
    {
        pregunta: "¿Como se llama la primer estructura de defensa?",
        respuestas: {
            a: "Torreta",
            b: "Nexo",
            c: "Hinibidor",
            d: "Principal"
        },
        respuestaCorrecta: "a"
    },
    {
        pregunta: "A los personajes de League of Legends se les denomina",
        respuestas: {
            a: "Guerreros",
            b: "Luchadores",
            c: "Campeones",
            d: "Principales"
        },
        respuestaCorrecta: "c"
    }
];

const preguntasNivel2 = [
    {
        pregunta: "¿En qué línea suelen estar los asesinos?",
        respuestas: {
            a: "Top",
            b: "Mid",
            c: "Jg",
            d: "Adc"
        },
        respuestaCorrecta: "b"
    },
    {
        pregunta: "¿Cuantos hechizos de invocador puede llevar un jugador?",
        respuestas: {
            a: "2",
            b: "10",
            c: "3",
            d: "5"
        },
        respuestaCorrecta: "a"
    },
    {
        pregunta: "¿Como se llama el modo de juego que consta de un solo carril?",
        respuestas: {
            a: "Solo lane",
            b: "ARAM",
            c: "Jungla",
            d: "Full mid"
        },
        respuestaCorrecta: "b"
    },
    {
        pregunta: "A los jugadores de League of Legends se les denomina:",
        respuestas: {
            a: "Players",
            b: "Aliados",
            c: "Invocadores",
            d: "Dioses"
        },
        respuestaCorrecta: "c"
    },
    {
        pregunta: "Cual es el nivel máximo que puede alcanzar un campeón?",
        respuestas: {
            a: "Nivel 5",
            b: "Nivel 18",
            c: "Nivel 30",
            d: "Nivel 50"
        },
        respuestaCorrecta: "b"
    }
];

const preguntasNivel3 = [
    {
        pregunta: "La campeona Ahri es de tipo:",
        respuestas: {
            a: "Maga",
            b: "Adc",
            c: "Tanque",
            d: "Lichadora"
        },
        respuestaCorrecta: "a"
    },
    {
        pregunta: "Cual es el nivel máximo de maestría que alcanza un campeón?",
        respuestas: {
            a: "Nivel 5",
            b: "Nivel 18",
            c: "Nivel 7",
            d: "Nivel 30"
        },
        respuestaCorrecta: "c"
    },
    {
        pregunta: "¿Cuantas habilidades tiene un campeón?",
        respuestas: {
            a: "4 habilidades",
            b: "10 habilidades",
            c: "3 habilidades",
            d: "5 habilidades"
        },
        respuestaCorrecta: "a"
    },
    {
        pregunta: "¿Que miembro del equipo puede pedir la rendición?",
        respuestas: {
            a: "El lider del equipo",
            b: "El mejor jugador del equipo",
            c: "Cualquier miembro",
            d: "Ningun miembro"
        },
        respuestaCorrecta: "c"
    },
    {
        pregunta: "Cual es el limite de objetos que puede llevar un campeón?",
        respuestas: {
            a: "10 objetos",
            b: "1 objeto",
            c: "5 objetos",
            d: "6 objetos"
        },
        respuestaCorrecta: "d"
    }
];

const preguntasNivel4 = [
    {
        pregunta: "¿Quién de los siguientes campeones pertenece a el Vacío?",
        respuestas: {
            a: "Lulu",
            b: "Qiyana",
            c: "Kai'sa",
            d: "Akali"
        },
        respuestaCorrecta: "c"
    },
    {
        pregunta: "¿Cual de los siguientes campeones en un Yordle?",
        respuestas: {
            a: "Lulu",
            b: "Tristana",
            c: "Heimerdinger",
            d: "Todos los anteriores"
        },
        respuestaCorrecta: "d"
    },
    {
        pregunta: "¿El campeon Rengar pertenece a?:",
        respuestas: {
            a: "La raza vastalla",
            b: "La raza elfo",
            c: "La raza orco",
            d: "El vacio"
        },
        respuestaCorrecta: "a"
    },
    {
        pregunta: "¿Cual echizo de infocador te permite teletransportar a tucampeón una corta distancia?",
        respuestas: {
            a: "Teleportación",
            b: "Destello",
            c: "Curación",
            d: "Ignición"
        },
        respuestaCorrecta: "b"
    },
    {
        pregunta: "¿Cual de los siguientes campeones tiene una habilidad definitiva global?",
        respuestas: {
            a: "Nasus",
            b: "Akali",
            c: "Jinx",
            d: "Yasuo"
        },
        respuestaCorrecta: "c"
    }
];

const preguntasNivel5 = [
    {
        pregunta: '¿Que campeon dice la siguiente frase?: "Fuego rapido, ¿donde esta el drama?"',
        respuestas: {
            a: "Lucian",
            b: "Jhin",
            c: "Annie",
            d: "Jinx"
        },
        respuestaCorrecta: "b"
    },
    {
        pregunta: "¿De qué material están hechos los muros de la ciudad de Demacia?",
        respuestas: {
            a: "Petricita",
            b: "Ormigón",
            c: "De un meteorito",
            d: "De madera"
        },
        respuestaCorrecta: "a"
    },
    {
        pregunta: "¿Como se llama el material que contrarresta la magia?",
        respuestas: {
            a: "Vasilisco",
            b: "Petricita",
            c: "Madera yordle",
            d: "Hierro noxiano"
        },
        respuestaCorrecta: "b"
    },
    {
        pregunta: "En el modo competitivo, ¿Cuantas ligas tiene League of Legends?",
        respuestas: {
            a: "3 ligas",
            b: "10 ligas",
            c: "9 ligas",
            d: "18 ligas"
        },
        respuestaCorrecta: "c"
    },
    {
        pregunta: "¿Cual de los siguientes campeones no utiliza maná para sus habilidades?",
        respuestas: {
            a: "Garen",
            b: "Akali",
            c: "Dr. Mundo",
            d: "Todos los anteriores"
        },
        respuestaCorrecta: "d"
    }
];


// La siguiente función imprime de manera aleatoria una pregunta y sus respuestas
// en el HTML segun el nivel.
// Ya que siempre se inicia en el nivel 1
function pregunta(nivelPreguntas) {
    const numeroAleatorio = Math.floor(Math.random() * (5)); //Genera un numero aleatorio entre 0 y 4, los cuales son los indices de las preguntas.
    console.log(numeroAleatorio);
    const preguntaSeleccionada = nivelPreguntas[numeroAleatorio];
    console.log(preguntaSeleccionada);

    const pregunta = preguntaSeleccionada.pregunta;
    const opcionA = preguntaSeleccionada.respuestas.a;
    const opcionB = preguntaSeleccionada.respuestas.b;
    const opcionC = preguntaSeleccionada.respuestas.c;
    const opcionD = preguntaSeleccionada.respuestas.d;
    
    const mostrarPregunta = document.getElementById("pregunta");
    const mostrarOpcionA = document.getElementById("opcionA");
    const mostrarOpcionB = document.getElementById("opcionB");
    const mostrarOpcionC = document.getElementById("opcionC");
    const mostrarOpcionD = document.getElementById("opcionD");

    mostrarPregunta.innerHTML = pregunta;
    mostrarOpcionA.innerHTML = opcionA;
    mostrarOpcionB.innerHTML = opcionB;
    mostrarOpcionC.innerHTML = opcionC;
    mostrarOpcionD.innerHTML = opcionD;
    
    return respuestaCorrecta = preguntaSeleccionada.respuestaCorrecta;
}


function datosJugador(nicknameJugador, regionJugador, rp, nivel) {
    // Creando el objeto jugador

    // Se crea el constructor que guardará los datos del jugador.
    function jugador(nickname, region, riotPoints, nivel) {
        this.nickname = nickname;
        this.region = region;
        this.riotPoints = riotPoints;
        this.nivel = nivel;
    }

    // Se crea el objeto jugador con los datos ingresados.
    return nuevoJugador = new jugador(nicknameJugador, regionJugador, rp, nivel);
}


// El valor del contador nos indica el nivel en el que está el jugador, con el fin de seleccionar una pregunta de acuerdo al nivel.
// La variable "rp" guardara el acomulado del premio segun el nivel.
var contador = 0;
const premios = {
    nivel1: 500,
    nivel2: 1000,
    nivel3: 2000,
    nivel4: 4000,
    nivel5: 8000
}
var rp = 0; // Acomulado de premio


function respuesta() {
    console.log(contador);
    const respuesta = document.querySelector('input[name="pregunta1"]:checked');
    const nivel = document.getElementById("nivel");  // Imprime el nivel en el HTML
    
    if (respuesta === null) {
        alert("Debes seleccionar una respuesta");
    } else if (respuesta.value === respuestaCorrecta && contador === 0) {
        rp += premios.nivel1;
        alert("Respuesta correcta!!!, pasaste a el nivel 2 🚀, tienes "  + rp + " Riot Points.");
        pregunta(preguntasNivel2);
        nivel.innerText = "Nivel 2";
        return contador = 1, rp;
    
    } else if (respuesta.value === respuestaCorrecta && contador === 1) {
        rp += premios.nivel2;
        alert("Respuesta correcta!!!, pasaste a el nivel 3 🚀, tienes " + rp + " Riot Points.");
        pregunta(preguntasNivel3);
        nivel.innerText = "Nivel 3";
        return contador = 2, rp;
    
    } else if (respuesta.value === respuestaCorrecta && contador === 2) {
        rp += premios.nivel3;
        alert("Respuesta correcta!!!, pasaste a el nivel 4 🚀, tienes " + rp + " Riot Points.");
        pregunta(preguntasNivel4);
        nivel.innerText = "Nivel 4";
        return contador = 3, rp;
    
    } else if (respuesta.value === respuestaCorrecta && contador === 3) {
        rp += premios.nivel4;
        alert("Respuesta correcta!!!, pasaste a el ultimo nivel 🚀, tienes " + rp + " Riot Points.");
        pregunta(preguntasNivel5);
        nivel.innerText = "Nivel 5";
        return contador = 4, rp;
    
    } else if (respuesta.value === respuestaCorrecta && contador === 4) {
        rp += premios.nivel5;
        alert("Respuesta correcta!!!, ganaste el juego 🎉✨, tienes un acomulado de " + rp + " Riot Points, pronto serán cargados a tu cuenta.");
        const nivel = 5;
        datosJugador(jugadorInscrito.nickname, jugadorInscrito.region, rp, nivel);
        location.href = "../index.html";
    
    } else {
        alert("Respuesta incorrecta, perdiste el juego 😞");
        rp = 0;
        datosJugador(jugadorInscrito.nickname, jugadorInscrito.region, rp, contador);
        location.href = "../index.html";
    }
}


function retirarse() {
    if (rp <= 0) {
        alert("Te retiraste del juego sin ganar nada 😔" );
        const nivel = 0;
        datosJugador(jugadorInscrito.nickname, jugadorInscrito.region, rp, nivel);
        location.href = "../index.html";
    } else {
        alert("Te retiraste del juego ganando " + rp + " Riot Points 🎉✨");
        datosJugador(jugadorInscrito.nickname, jugadorInscrito.region, rp, contador);
        location.href = "../index.html";
    }
}


