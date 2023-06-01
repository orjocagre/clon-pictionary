const numPlayers = 4;

const pla = ["Liebre","Han Solo","Tigre","Pez payaso","Cantera","Romeo and Juliet","Elizabeth Bennet","Biblioteca antigua","Captain Jack Sparrow","Voldemort","Granja","Glaciar","Montaña","Thor","Colina","Leopardo de las nieves","Hotel","Profesor","Astronauta","Valle de las flores","Castillo de cuentos de hadas","Bilbo Baggins","Estación de tren","Aeropuerto","Mahatma Gandhi","París","Montaña nevada","Koala","Escorpión","Isla tropical","Pablo Picasso","Ruinas","Rana","Parque temático","Acuario","Villano","Noruega","Cuevas submarinas","Atleta","Kakapo","India","Reino Unido","Frodo Bolsón","Castillo","Artista","Cangrejo","Mr. Spock","Luke Skywalker","Frodo Baggins","Frida Kahlo","Black Widow","Araña","Pueblo","Lionel Messi","Ballena","Catwoman","Ciervo volante","Saltamontes","Alice","Granja de animales","Estadio deportivo","Museo","Jirafa","Italia","Cerdo","Gimli","Murciélago","Tapir","Belle","Cristiano Ronaldo","Detective","Barack Obama","Parque nacional","Robin Hood","Reserva natural","Países Bajos","Ganso","Piscina","México","Spider-Man","Moby Dick","Jardinero","Gran cañón del colorado","Colina verde","Pavo real","Cisne negro","Fontanero","Albatros","Marruecos","Actor","Frodo Baggins","Brujo","Superman","Río","Maravilla arquitectónica","Sherlock Holmes","William Shakespeare","Ratón","Mercado nocturno","Chimpancé","Conductor de taxi","Restaurante","Gorila de montaña","Elon Musk","Búho","Manatí","Periquito","Sinagoga","Luciérnaga","Wolverine","Medusa","Albert Einstein","Dr. Hannibal Lecter","Tortuga marina","Gaviota","Ciudad medieval","Hermione Granger","Pueblo costero","Cueva","Ariel","Flamenco","Pantera","Perico","Armadillo","Sherlock Holmes","Hipopótamo","Casa rural","Aladdin","Cine","Campo de golf","Oprah Winfrey","Músico","Alemania","Viñedo","Mulan","Cuevas de cristal","Snow White","Batman","Aragorn","Diseñador de videojuegos","Abogado","Lago","Parque nacional marino","Captain America","Cataratas","Ardilla","Dr. Jekyll and Mr. Hyde","Suecia","Tigre de Bengala","Lobo","Quokka","Katniss Everdeen","Panda","Ciudad antigua","Amelia Earhart","Caballito de mar","Callejón estrecho","Farmacéutico","Pez espada","Rey","Hulk","Spa","Dorothy Gale","Ibex","Calamar","Pueblo fantasma","Dingo","Mansión","Zoológico","Teatro","Pueblo pintoresco","Zorro","Tyrion Lannister","Pez","Teatro antiguo","Mono","Antílope","Narval","Sapo","Jane Goodall","Delfín","Palacio","Camaleón","Rata","Diseñador","Lagarto","Steve Jobs","Captain America","J.K. Rowling","Darth Vader","Superman","Atticus Finch","Frodo Baggins","Estación de esquí","Animador","Elefante africano","Ciudad","Bill Gates","Marie Curie","Mario","Rinoceronte","Conejo","Indiana Jones","Simba","Estrella de mar","Biblioteca","Calamar gigante","Lechuza","Cobra","Gato","Stephen Hawking","Periodista","Mark Zuckerberg","Playa paradisíaca","Castor","Jardín","Superhéroe","Cisne","Tortuga","Don Quijote","Carpintero","Lago cristalino","Ñu","Bombero","Leia Organa","Puma","Tarzan","Rinoceronte blanco","Mercado","Suiza","Marie Antoinette","Guepardo","Gandalf","Pocahontas","Ocelote","Japón","China","Neo","Caballo","Lémur","Plaza de mercado","Bosque de hadas","Perro","Nueva Zelanda","Albañil","Arquitecto","Voldemort","Playa desierta","Rusia","Gorrión","Bosque encantado","Gimnasio","Cascada","Centro comercial","Cebra","Monumento","Canario","Anakin Skywalker","Mapache","Queen Elizabeth II","Templo hindú","Bosque encantado","Cocodrilo","Jeff Bezos","Marabú","Espía","Coco Chanel","Galería de arte","Madonna","Chef","Gandalf","Pingüino","Spider-Man","Juez","Elefante","Observatorio","Hormiga","Peter Pan","Grulla","Spa","Alce","Santuario de aves","Sudáfrica","Libélula","Caballito de mar","Elvis Presley","Leopardo","Campo","Thorin Oakenshield","Hulk","Gandalf","Pista de esquí","Drácula","Kylo Ren","Gacela","Caracol","Gorila","Iglesia","Veterinario","Volcán","Grillo","Oveja","Muhammad Ali","Mariposa","Hermione Granger","Éowyn","Puerto","Agricultor","Cinderella","Rosa Parks","Koala","Langosta","Bailarín","Malala Yousafzai","Investigador","Iron Man","Playa","Langostino","Thor","Cascada secreta","Canguro","Spock","Cantante","Mansión abandonada","Loro","Piloto","Bar","Entrenador","Australia","Paseo marítimo","Don Draper","Águila calva","Marilyn Monroe","Pez globo","Michael Jackson","Deadpool","Desierto","Nelson Mandela","Egipto","Mofeta","Wolverine","Orangután de Borneo","Electricista","Wonder Woman","Bélgica","Mother Teresa","Faro solitario","Pikachu","Zarigüeya","Castillo encantado","Oryx","Cueva misteriosa","Walter White","Count Dooku","Abejorro","Bella durmiente","Wonder Woman","Tiburón","Mosquito","Legolas","Cucaracha","Orangután","Samwise Gamgee","Tortuga gigante","Científico","Portugal","Brasil","Plaza","Mariposa","Lagartija","Ciervo","Mezquita","Halcón","Mansión embrujada","Holden Caulfield","Pez ángel","Conductor de autobús","Director de cine","Murciélago","Isla","Cóndor","Ingeniero","Programador","Fotógrafo","Elsa","Delfín nariz de botella","Templo budista","Arrecife de coral","James T. Kirk","Canadá","Escritor","Trinity","Lara Croft","Buitre","Viñedo","Langosta espinosa","Orca","Francia","Ruinas mayas","Cafetería","Bosque","Argentina","Santuario","Daenerys Targaryen","Mowgli","Ualabí","Policía","Oso","Hermione Granger","León","Batman","Jay Gatsby","Obi-Wan Kenobi","Masajista","Águila","Severus Snape","Templo","Pato","Zorro","Catedral","Puercoespín","Psicólogo","Trucha","Iglesia histórica","Calle","Pulpo","Faro","Empresario","Catedral gótica","Jardín botánico","Ron Weasley","Nutria","Mosca","Legolas","Sherlock Holmes","Vaca","James Bond","Selva","Isla privada","Estados Unidos","The Joker","Gran cañón","Salamandra","Harry Potter","Cabra montesa","España","Iron Man","Hacker","Langosta de agua dulce","Darth Vader","Víbora","Modelo","Parque","Serpiente","Cementerio","Gandalf","Parque de atracciones","Frankenstein","Erizo","Yoda","Dumbledore","Pingüino emperador","Luke Skywalker","Pelícano","Martin Luther King Jr.","Captain Jack Sparrow","Willy Wonka","Lago tranquilo","Leonardo da Vinci","Escarabajo","Rascacielos","Abeja","Médico","Aragorn","Sherlock Holmes","Serena Williams"];
const obj = ["Sombrero","Escultura","Guitarra","Transportador","Navaja multiusos","Flauta","Jabonera","Exprimidor","Raqueta de bádminton","Cantimplora","Pinzas","Aire acondicionado","Cepillo de uñas","Papelera","Batidora","Joyero","Bolígrafo","Tambor","Perfume","Pijama","Taza","Pantalla","Bolígrafo","Mapas","Taza","Sacapuntas","Mochila de acampada","Leggings","Jeans","Blusa","Grapadora","Cuaderno","Botella","Alicate","Camisa","Plancha de pelo","Atlas","Tijeras","Silla","Gorro","Sartén","Destornillador eléctrico","Escuadra","Telescopio","Binoculares","Teléfono","Brújula","Televisor","Bañador","Caja de herramientas","Licuadora","Cobija","Calcetines","Esponja","Colchón inflable","Lápiz","Vestido","Bolsa","Bicicleta","Escoba","Tostadora","Corrector líquido","Marcador","Patines","Horno","Microondas","Trípode","Térmica","Martillo neumático","Regla","Esponja de baño","Cuaderno","Cinturón","Carpeta","Auriculares","Globo terráqueo","Procesador de alimentos","Reloj","Control remoto","Botiquín","Rotuladores","Proyector","Martillo","Gorra","Archivador","Escalera","Reloj de pulsera","Paraguas","Falda","Bufanda","Gafas","Microondas","Mesa","Refrigerador","Peine","Post-it","Silla de ruedas","Lavadora","Pintura","Nivel de burbuja","Pintura","Billetera","Collar de perlas","Clips","Clasificadores","Jabón","Abrigo","Microscopio","Bloc de notas","Estufa","Cepillo de dientes eléctrico","Marcadores","Mantequillera","Papel milimetrado","Cafetera","Carpeta","Cuchillo","Candelabro","Pasta de dientes","Licuadora","Carrito de la compra","Ventilador","Aspiradora","Escritorio","Violonchelo","Pincel","Chaqueta","Plancha","Bolsa de lápices","Encendedor","Chinches","Percha","Resaltadores","Separadores","Destapador","Secador de pelo","Mantel","Refrigerador","Cepillo de pelo","Espejo","Fregona","Navaja","Goma de borrar","Clips","Cama","Toalla","Monopatín","Zapatos","Trompeta","Bloc de notas","Escalera de mano","Sudadera","Saxofón","Papel de colores","Batidora","Bolso de mano","Cubo de basura","Corrector líquido","Pizarra","Horno","Calculadora","Maleta","Lavavajillas","Llave inglesa","Corbata","Vaso","Tijeras","Televisor","Taza de café","Cinta métrica","Teclado","Cacerola","Zapatos","Anillo de compromiso","Planta","Lámpara de pie","Cepillo de dientes","Maquillaje","Sacapuntas","Estuche","Colores","Lavadora","Equipo de música","Chanclas","Correa de reloj","Pelota de baloncesto","Cinta adhesiva","Guantes","Toallas de playa","Agenda escolar","Palillos chinos","Papel de calco","Ventilador","Sierra eléctrica","Secadora","Almohada","Barra de sonido","Cafetera","Raqueta de tenis","Llave ajustable","Plato","Ropa interior","Camiseta","Tostadora","Cubeta","Rodillo de pintura","Termómetro","Compás","Destornillador","Guantes","Libro","Borrador para pizarra","Archivador","Mapa","Lápiz","Chaqueta","Carretilla","Abrelatas","Cámara deportiva","Ratón","Computadora","Papel de acuarela","Canasta de baloncesto","Cuchara","Pulsera","Trombón","Despertador","Tenedor","Pegamento","Patines de hielo","Campana extractora","Rotuladores","Mochila","Bufanda","Linterna","Mochila","Altavoz","Lámpara","Calcetines","Aspiradora","Termómetro de cocina","Patineta","Proyector","Brújula de senderismo","Anillo","Piano","Termo","Reproductor de DVD","Olla","Plancha","Cucharón","Pantalones","Pantalones","Pelota de golf","Collar","Vestido","Marcadores","Chaleco","Acordeón","Volante","Suéter","Cámara","Tienda de campaña","Reloj de pared","Shorts","Portafolios","Servilleta","Bastón","Regla","Calefactor","Clavo","Altavoz","Bolsa de deporte","Violín","Calculadora","Libreta de notas","Libro de texto","Perforadora","Grapadora","Diccionario","Traje","Camisa","Maletín de negocios","","Lámpara de escritorio","Secadora","Freidora","Balón de fútbol","Linterna frontal"];
const acc = ["Hablar","Desafiar","Bailar","Mimar","Estudiar","Probar","Crear","Practicar yoga","Plantar","Disfrutar","Colaborar","Bailar","Crear","Experimentar","Realizar","Celebrar","Despertar","Lanzarse en paracaídas","Desconectar","Visitar","Explorar","Meditar","Programar","Recordar","Mezclar","Resolver","Atrapar","Reciclar","Escribir","Reír","Dibujar","Construir","Bailar","Correr","Filmar","Colaborar","Cooperar","Comunicar","Enseñar","Flexionar","Pintar","Invertir","Evolucionar","Participar","Compartir","Aprender","Dirigir","Desconectar","Practicar artes marciales","Fallar","Construir","Lanzar","Desempacar","Explorar","Nadar","Mejorar","Limpiar","Compartir","Innovar","Escribir","Fotografiar","Observar","Escribir","Recuperar","Componer","Escuchar","Reciclar","Renovar","Cocinar","Soñar","Compartir","Discutir","Besar","Hornear","Donar","Hacer ejercicio","Colaborar","Comprar","Beber","Navegar en bote","Enseñar","Cooperar","Observar","Lanzar","Colaborar","Mover","Caminar","Enseñar","Nadar","Atrapar","Bailar ballet","Relajar","Investigar","Superar","Visitar","Agradecer","Perder","Imaginar","Resolver","Voltear","Motivar","Saltar","Remar","Navegar","Flotar","Leer","Ayudar","Viajar","Organizar","Planificar","Apoyar","Sorprenderse","Engordar","Pintar","Zambullirse","Navegar","Reflexionar","Relajarse","Construir","Descubrir","Esperar","Patinar","Cocinar","Escribir","Adaptarse","Jugar","Explorar","Tocar","Superar","Promover","Perder","Agitar","Abrazar","Saltar","Innovar","Nadar","Ahorrar","Descubrir","Reír","Compartir","Descubrir","Saludar","Cultivar","Saltar en paracaídas","Descansar","Pensar","Cuidar","Alimentar","Disfrutar","Aprender","Adelgazar","Experimentar","Cocinar","Celebrar","Flotar","Pintar","Caminar","Diseñar","Sumergirse","Participar","Diseñar","Negociar","Degustar","Viajar","Golpear","Editar","Ayudar","Llorar","Planificar","Saludar","Soñar","Enseñar","Cosechar","Emocionarse","Despedirse","Organizar","Decorar","Aprender","Cantar","Descansar","Empacar","Resolver","Explorar","Imaginar","Perdonar","Ganar","Viajar","Documentar","Batir","Fotografiar","Acariciar","Abordar","Dibujar","Inspirar","Meditar","Besar","Conectar","Marcar","Visitar","Mejorar","Inventar","Descubrir","Capturar","Soñar","Cantar","Innovar","Decorar","Saltar","Probar","Descansar","Superar","Estudiar","Deslizarse","Motivar","Experimentar","Probar","Estirarse","Ganar","Conducir","Reparar","Soñar","Desafiar","Planificar","Fotografiar","Aprender","Practicar","Correr maratón","Comer","Abrazar","Estirar","Navegar","Adaptarse","Trabajar","Explorar","Conectar","Conducir","Filmar","Viajar","Correr","Competir","Jugar","Desafiar","Celebrar","Imaginar","Reutilizar","Conectar","Organizar","Colaborar","Publicar","Escalar","Olvidar","Correr","Apreciar","Reparar","Bucear","Actuar","Investigar","Relajarse","Admirar","Planificar","Esquiar","Celebrar","Cooperar","Hacer ejercicio","Compartir","Vender","Competir","Innovar","Trotar","Dibujar","Recibir","Crear","Explorar","Sonreír","Leer","Motivar","Innovar","Reparar","Filmar","Escuchar","Participar","Coordinar","Proteger","Compartir","Girar","Meditar","Resolver","Charlar","Cantar","Cuidar","Fortalecer","Compartir","Cambiar","Reflexionar","Investigar","Resolver","Llorar","Enviar","Convencer","Estudiar","Observar","Competir","Discutir","Pensar","Leer","Cooperar","Aprender","Investigar","Lograr","Dormir","Hablar","Limpiar","Competir","Calcular","Inspirar"];
const dif = ["Inconmensurable","Inescrutable","Efímero","Laberíntico","Escrupuloso","Enigmático","Perplejidad","Inextricable","Ambiguo","Desalentador","Desolación","Efervescente","Desconcertante","Enmarañado","Desolador","Indescifrable","Incógnito","Intrincado","Perplejidad","Desafiante","Escabroso","Desolación","Exorbitante","Cifrado","Desamparo","Intrusivo","Desolador","Desesperanzado","Arduo","Embrollado","Impenetrable","Inquebrantable","Intrigante","Resiliente","Incongruente","Vilipendiar","Desafiante","Minucioso","Discrepancia","Clandestino","Desconcertado","Laberinto","Intrínseco","Inextricable","Desconcertado","Elusivo","Indecifrable","Intruso","Anómalo","Desafiante","Anómalo","Indómito","Incongruente","Indómito","Esquivo","Intrincado","Prodigioso","Paradoja","Embaucador","Discrepante","Opaco","Espurio","Laberíntico","Desalentado","Vilipendiar","Prodigioso","Embaucador","Intrincado","Esquivo","Inexpugnable","Impenetrable","Inaccesible","Efervescente","Insólito","Desafiante","Esotérico","Laberíntico","Ininteligible","Efímero","Desconcertante","Clandestino","Retorcido","Paradigma","Perspicaz","Paradoja","Indomable","Oscuro","Quimera","Resiliente","Perspicaz","Enrevesado","Inextricable","Arduo","Insólito","Prodigioso","Obstinado","Intrigado","Desamparo","Inextricable","Enigmático","Escrupuloso","Quimera","Nebuloso","Laberinto","Enrevesado","Nebuloso","Clandestinidad","Exorbitante","Discrepancia","Perplejo","Elucidar","Retorcido","Intransigente","Inquietante","Inmutable","Elucidar","Intrépido","Indescifrable","Oscuro","Indefinible","Impenetrable","Paradigma","Incógnito","Cauteloso","Inconmensurable","Enigmático","Escarpado","Impenetrable","Incomprensible","Desalentado","Perplejo","Insondable","Desalentador","Intrigante","Obstinado","Intrincado","Insondable","Intrigante","Recalcitrante","Esotérico"];



const boton__jugador1 = document.querySelector('.controles--boton__jugador1');
const boton__jugador2 = document.querySelector('.controles--boton__jugador2');
const boton__jugador3 = document.querySelector('.controles--boton__jugador3');
const boton__jugador4 = document.querySelector('.controles--boton__jugador4');
const boton__temporizador = document.querySelector('.controles--boton__temporizador');
const contenedor_boton = document.querySelector('.controles--contenedor-boton');
const marcador1 = document.querySelector('.marcador-1');
const marcador2 = document.querySelector('.marcador-2');
const marcador3 = document.querySelector('.marcador-3');
const marcador4 = document.querySelector('.marcador-4');
const boton__nueva = document.querySelector('.btn-nueva');
const persona1 = document.querySelector('.personat1');
const persona2 = document.querySelector('.personat2');
const objeto1 = document.querySelector('.objetot1');
const objeto2 = document.querySelector('.objetot2');
const accion1 = document.querySelector('.acciont1');
const accion2 = document.querySelector('.acciont2');
const dificil1 = document.querySelector('.dificilt1');
const dificil2 = document.querySelector('.dificilt2');
const todos1 = document.querySelector('.todost1');
const todos2 = document.querySelector('.todost2');



let jugadorActivado = 0;
const animation_time = 200;
let dice;

switch(numPlayers) {
    case 2:
        boton__jugador3.style.display = 'none';
        boton__jugador4.style.display = 'none';
        boton__jugador1.style.height = '100%';
        boton__jugador2.style.height = '100%';
        marcador3.style.display = 'none';
        marcador4.style.display = 'none';

        break;
    case 3:
        boton__jugador4.style.display = 'none';
        marcador4.style.display = 'none';
        break;
}

boton__jugador1.addEventListener('click',clickJugador1);
boton__jugador2.addEventListener('click',clickJugador2);
boton__jugador3.addEventListener('click',clickJugador3);
boton__jugador4.addEventListener('click',clickJugador4);
boton__temporizador.addEventListener('click',clickCancelar);
boton__nueva.addEventListener('click',clickNueva);


// moveToken(marcador1, 2);



function clickJugador1() {
    if(jugadorActivado == 0) {
        jugadorActivado = 1;
        boton__temporizador.innerHTML = 'CANCELAR';
        switch(numPlayers) {
            case 2:
                boton__jugador2.style.display = 'none';
                boton__jugador1.classList.add('aumentar2');
                break;
            case 3:
                boton__jugador2.style.display = 'none';
                boton__jugador3.style.display = 'none';
                boton__jugador1.classList.add('aumentar4');
                break;
            default:
                boton__jugador2.style.display = 'none';
                boton__jugador3.style.display = 'none';
                boton__jugador4.style.display = 'none';
                boton__jugador1.classList.add('aumentar4');
        }
        setTimeout(() => {
            boton__jugador1.innerHTML = 'JOSE - PEDRO<div class="dice"><div class="side front"></div><div class="side back"></div><div class="side left"></div><div class="side right"></div><div class="side top"></div><div class="side bottom"></div></div>';
            dice = document.querySelector('.dice');
        },150)
    }
    else {
        boton__jugador1.disabled = true;
        boton__temporizador.disabled = true;
        boton__temporizador.style.color= 'rgb(161, 161, 161)';
        throwDice(marcador1);       
    }
   
}
function clickJugador2() {
    
    if(jugadorActivado == 0) {
        jugadorActivado = 2;
        boton__temporizador.innerHTML = 'CANCELAR';
        contenedor_boton.style.justifyContent = "flex-end"
        switch(numPlayers) {
            case 2:
                boton__jugador1.style.display = 'none';
                boton__jugador2.classList.add('aumentar2');
                break;
            case 3:
                boton__jugador1.style.display = 'none';
                boton__jugador3.style.display = 'none';
                boton__jugador2.classList.add('aumentar4');
                break;
            default:
                boton__jugador1.style.display = 'none';
                boton__jugador3.style.display = 'none';
                boton__jugador4.style.display = 'none';
                boton__jugador2.classList.add('aumentar4');
        }
        setTimeout(() => {
            boton__jugador2.innerHTML = 'ANA - MARCO<div class="dice"><div class="side front"></div><div class="side back"></div><div class="side left"></div><div class="side right"></div><div class="side top"></div><div class="side bottom"></div></div>';
            dice = document.querySelector('.dice');
        },150)
    }
    else {
        boton__jugador2.disabled = true;
        boton__temporizador.disabled = true;
        boton__temporizador.style.color= 'rgb(161, 161, 161)';
        throwDice(marcador2);
    }

    
}
function clickJugador3() {
    if(jugadorActivado == 0) {

        jugadorActivado = 3;
        boton__temporizador.innerHTML = 'CANCELAR';
        contenedor_boton.style.alignContent = "flex-end"
        switch(numPlayers) {
            case 3:
                boton__jugador2.style.display = 'none';
                boton__jugador1.style.display = 'none';
                boton__jugador3.classList.add('aumentar4');
                break;
            default:
                boton__jugador2.style.display = 'none';
                boton__jugador1.style.display = 'none';
                boton__jugador4.style.display = 'none';
                boton__jugador3.classList.add('aumentar4');
        }
        setTimeout(() => {
            boton__jugador3.innerHTML = 'MATEO - MARIA<div class="dice"><div class="side front"></div><div class="side back"></div><div class="side left"></div><div class="side right"></div><div class="side top"></div><div class="side bottom"></div></div>';
            dice = document.querySelector('.dice');
        },150)
    }
    else {
        boton__jugador3.disabled = true;
        boton__temporizador.disabled = true;
        boton__temporizador.style.color= 'rgb(161, 161, 161)';
        throwDice(marcador3);
    }
}
function clickJugador4() {
    
    if(jugadorActivado == 0) {

        jugadorActivado = 4;
        boton__temporizador.innerHTML = 'CANCELAR';
        contenedor_boton.style.justifyContent = 'flex-end';
        contenedor_boton.style.alignContent = 'flex-end';
    
        switch(numPlayers) {
            default:
                boton__jugador2.style.display = 'none';
                boton__jugador3.style.display = 'none';
                boton__jugador1.style.display = 'none';
                boton__jugador4.classList.add('aumentar4');
        }
        setTimeout(() => {
            boton__jugador4.innerHTML = 'ESTEFANI - MAYRA<div class="dice"><div class="side front"></div><div class="side back"></div><div class="side left"></div><div class="side right"></div><div class="side top"></div><div class="side bottom"></div></div>';
            dice = document.querySelector('.dice');
        },150)
        
    }
    else {
        boton__jugador4.disabled = true;
        boton__temporizador.disabled = true;
        boton__temporizador.style.color= 'rgb(161, 161, 161)';
        throwDice(marcador4);
    }
}

function throwDice(marcador) {
    /*
    1 = x-90
    2 = y90
    3 = x180
    4 = y-90
    5 = x90 
    6 = 
    */
    let numeroAleatorio = Math.ceil(Math.random() * 6);
    numeroAleatorio = numeroAleatorio == 0 ? 1 : numeroAleatorio;
    
    switch(numeroAleatorio) {
        case 1:
            document.documentElement.style.setProperty('--gradosX','-90deg');
            document.documentElement.style.setProperty('--gradosY','0deg');
            break;
        case 2:
            document.documentElement.style.setProperty('--gradosX','0deg');
            document.documentElement.style.setProperty('--gradosY','90deg');
            break;
        case 3:
            document.documentElement.style.setProperty('--gradosX','180deg');
            document.documentElement.style.setProperty('--gradosY','0deg');
            break;
        case 4:
            document.documentElement.style.setProperty('--gradosX','0deg');
            document.documentElement.style.setProperty('--gradosY','-90deg');
            break;
        case 5:
            document.documentElement.style.setProperty('--gradosX','90deg');
            document.documentElement.style.setProperty('--gradosY','0deg');
            break;
        case 6:
            document.documentElement.style.setProperty('--gradosX','0deg');
            document.documentElement.style.setProperty('--gradosY','0deg');
            break;           
    
    }
    dice.classList.add('lanzarDado');
    setTimeout(() => {
        moveToken(marcador,numeroAleatorio);


        
    },10000);



}

function clickCancelar() {
    switch(jugadorActivado) {

        case 0:




        //---------------------------------jugador 1

        case 1:
        boton__jugador1.innerHTML = 'JOSE - PEDRO<span></span>';
        switch(numPlayers) {
            case 2:
                boton__jugador1.classList.add('disminuir2');
                boton__jugador1.classList.remove('aumentar2')
                
                setTimeout(function() {
                    boton__jugador1.classList.remove('disminuir2');
                    boton__jugador2.style.display = 'flex';
                }, animation_time);
                break;
            case 3:
                boton__jugador1.classList.add('disminuir4');
                boton__jugador1.classList.remove('aumentar4')
                
                setTimeout(function() {
                    boton__jugador1.classList.remove('disminuir4');
                    boton__jugador2.style.display = 'flex';
                    boton__jugador3.style.display = 'flex';
                }, animation_time);
                break;
            default:
                boton__jugador1.classList.add('disminuir4');
                boton__jugador1.classList.remove('aumentar4')
                
                setTimeout(function() {
                    boton__jugador1.classList.remove('disminuir4');
                    boton__jugador2.style.display = 'flex';
                    boton__jugador3.style.display = 'flex';
                    boton__jugador4.style.display = 'flex';
                }, animation_time);
        }
        jugadorActivado = 0;
        boton__jugador1.disabled = false;
        boton__temporizador.disabled = false;
        boton__temporizador.style.color= '#0e0953';
        jugadorActivado = 0;
        boton__temporizador.innerHTML = 'INICIAR <span></span>';
        break;
        
        //---------------------------------jugador 2

        case 2:
        boton__jugador2.innerHTML = 'ANA - MARCO<span></span>';
        switch(numPlayers) {
            case 2:
                boton__jugador2.classList.add('disminuir2');
                boton__jugador2.classList.remove('aumentar2')
                
                setTimeout(function() {
                    boton__jugador2.classList.remove('disminuir2');
                    boton__jugador1.style.display = 'flex';
                    contenedor_boton.style.justifyContent = "space-between";
                }, animation_time);
                break;
            case 3:
                boton__jugador2.classList.add('disminuir4');
                boton__jugador2.classList.remove('aumentar4')
                
                setTimeout(function() {
                    boton__jugador2.classList.remove('disminuir4');
                    boton__jugador1.style.display = 'flex';
                    boton__jugador3.style.display = 'flex';
                    contenedor_boton.style.justifyContent = "space-between";
                }, animation_time);
                break;
            default:
                boton__jugador2.classList.add('disminuir4');
                boton__jugador2.classList.remove('aumentar4')
                
                setTimeout(function() {
                    boton__jugador2.classList.remove('disminuir4');
                    boton__jugador1.style.display = 'flex';
                    boton__jugador3.style.display = 'flex';
                    boton__jugador4.style.display = 'flex';
                    contenedor_boton.style.justifyContent = "space-between";
                }, animation_time);
        }
        jugadorActivado = 0;
        boton__jugador2.disabled = false;
        boton__temporizador.disabled = false;
        boton__temporizador.style.color= '#0e0953';
        jugadorActivado = 0;
        boton__temporizador.innerHTML = 'INICIAR <span></span>';
        break;
            
        //---------------------------------jugador 3

        case 3:
            boton__jugador3.innerHTML = 'MATEO - MARIA<span></span>';
            switch(numPlayers) {
                case 3:
                    boton__jugador3.classList.add('disminuir4');
                    boton__jugador3.classList.remove('aumentar4')
                    
                    setTimeout(function() {
                        boton__jugador3.classList.remove('disminuir4');
                        boton__jugador1.style.display = 'flex';
                        boton__jugador2.style.display = 'flex';
                        contenedor_boton.style.alignContent = "space-between";
                    }, animation_time);
                    break;
                default:
                    boton__jugador3.classList.add('disminuir4');
                    boton__jugador3.classList.remove('aumentar4')
                    
                    setTimeout(function() {
                        boton__jugador3.classList.remove('disminuir4');
                        boton__jugador1.style.display = 'flex';
                        boton__jugador2.style.display = 'flex';
                        boton__jugador4.style.display = 'flex';
                        contenedor_boton.style.alignContent = "space-between";
                    }, animation_time);
            }
            jugadorActivado = 0;
            boton__jugador3.disabled = false;
            boton__temporizador.disabled = false;
            boton__temporizador.style.color= '#0e0953';
            jugadorActivado = 0;
            boton__temporizador.innerHTML = 'INICIAR <span></span>';
            break;
        
        //---------------------------------jugador 4       
        
        case 4:
            boton__jugador4.innerHTML = 'ESTEFANI - MAYRA<span></span>';
            switch(numPlayers) {
                default:
                    boton__jugador4.classList.add('disminuir4');
                    boton__jugador4.classList.remove('aumentar4')
                    
                    setTimeout(function() {
                        boton__jugador4.classList.remove('disminuir4');
                        boton__jugador1.style.display = 'flex';
                        boton__jugador2.style.display = 'flex';
                        boton__jugador3.style.display = 'flex';
                        contenedor_boton.style.justifyContent = "space-between";
                        contenedor_boton.style.alignContent = "space-between";

                    }, animation_time);
            }
            jugadorActivado = 0;
            boton__jugador4.disabled = false;
            boton__temporizador.disabled = false;
            boton__temporizador.style.color= '#0e0953';
            jugadorActivado = 0;
            boton__temporizador.innerHTML = 'INICIAR <span></span>';
            break;
        
    }
    
}

function moveToken(marcador, numSpaces) {
    
    let position = marcador.getAttribute('pos');
    
    for(let i=0; i<numSpaces; i++) {

        if((position >= 0 && position < 2) || (position > 19 && position < 22) || (position > 28 && position < 32) || (position > 33 && position < 36) || (position > 37 && position < 41)) {
            setTimeout(() => {moveTokenDown(marcador);}, 350 * i);
        }
        else if((position > 1 && position < 5) || (position > 11 && position < 14) || (position > 31 && position < 34) || (position > 40 && position < 44)) {
            setTimeout(() => {moveTokenLeft(marcador);}, 350 * i);
        }
        else if((position > 4 && position < 8) || (position > 9 && position < 12) || (position > 13 && position < 17) || (position > 23 && position < 26) || (position > 43 && position < 46)) {
            setTimeout(() => {moveTokenUp(marcador);}, 350 * i);
        }
        else if((position > 7 && position < 10) || (position > 16 && position < 20) || (position > 21 && position < 24) || (position > 25 && position < 29) || (position > 35 && position < 38)) {
            setTimeout(() => {moveTokenRight(marcador);}, 350 * i);
        }
        position++;
        marcador.setAttribute('pos', position);
    }

    setTimeout(() => {clickCancelar()},350 * numSpaces);

    
}

function moveTokenDown(marcador) {
    marcador.classList.add('moveTokenDown');
    setTimeout(() => {
        marcador.classList.remove('moveTokenDown');
        marcador.style.gridRow = (String)((Number)(getComputedStyle(marcador).gridRowStart) + 1);
    },300);
    
}
function moveTokenUp(marcador) {
    marcador.classList.add('moveTokenUp');
    setTimeout(function() {
        marcador.classList.remove('moveTokenUp');
        marcador.style.gridRow = (String)((Number)(getComputedStyle(marcador).gridRowStart) - 1);
    }, 300);
}
function moveTokenLeft(marcador) {
    marcador.classList.add('moveTokenLeft');
    setTimeout(() => {
        marcador.classList.remove('moveTokenLeft');
        marcador.style.gridColumn = (String)((Number)(getComputedStyle(marcador).gridColumnStart) - 1);
    }, 300);
}
function moveTokenRight(marcador) {
    marcador.classList.add('moveTokenRight');
    setTimeout(() => {
        marcador.classList.remove('moveTokenRight');
        marcador.style.gridColumn = (String)((Number)(getComputedStyle(marcador).gridColumnStart) + 1);
    }, 300);
}

function clickNueva() {
    persona1.innerHTML = pla[Math.floor(Math.random()*pla.length)];
    persona2.innerHTML = pla[Math.floor(Math.random()*pla.length)];
    objeto1.innerHTML = obj[Math.floor(Math.random()*obj.length)];
    objeto2.innerHTML = obj[Math.floor(Math.random()*obj.length)];
    accion1.innerHTML = acc[Math.floor(Math.random()*acc.length)];
    accion2.innerHTML = acc[Math.floor(Math.random()*acc.length)];
    dificil1.innerHTML = dif[Math.floor(Math.random()*dif.length)];
    dificil2.innerHTML = dif[Math.floor(Math.random()*dif.length)];
    todos1.innerHTML = pla[Math.floor(Math.random()*pla.length)];
    todos2.innerHTML = pla[Math.floor(Math.random()*pla.length)];
}