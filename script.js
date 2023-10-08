
const recuadroInfo = document.getElementById("recuadro-info");
const recuadroInfo2 = document.getElementById("recuadro-info2");
const recuadroInfo3 = document.getElementById("recuadro-info3");

function mostrarRecuadroInfo(contenido, recuadroInfoElement) {
  recuadroInfoElement.textContent = contenido;

  // Si el recuadro de información está oculto, mostrarlo
  if (recuadroInfoElement.style.display === "none") {
    recuadroInfoElement.style.display = "inline";
  } else {
    // Si ya está mostrándose, ocultarlo nuevamente
    recuadroInfoElement.style.display = "none";
  }
};

// Agregar el evento de clic a todos los botones con la clase "mostrarBtn"
const botones = document.querySelectorAll(".mostrarBtn");
botones.forEach(boton => {
  boton.addEventListener("click", () => mostrarRecuadroInfo(boton.dataset.contenido, recuadroInfo));
});
const botones2 = document.querySelectorAll(".mostrarBtn2");
botones2.forEach(boton => {
  boton.addEventListener("click", () => mostrarRecuadroInfo(boton.dataset.contenido, recuadroInfo2));
});
const botones3 = document.querySelectorAll(".mostrarBtn3");
botones3.forEach(boton => {
  boton.addEventListener("click", () => mostrarRecuadroInfo(boton.dataset.contenido, recuadroInfo3));
});

// Obtener el conjunto de preguntas y botones "Siguiente" específicos
const preguntas1 = document.querySelectorAll(".pregunta");
const botonesSiguiente1 = document.querySelectorAll(".siguienteBtn");

const preguntas2 = document.querySelectorAll(".pregunta2");
const botonesSiguiente2 = document.querySelectorAll(".siguienteBtn2");

const preguntas3 = document.querySelectorAll(".pregunta3");
const botonesSiguiente3 = document.querySelectorAll(".siguienteBtn3");

// Agregar el evento de clic a todos los botones "Siguiente" del conjunto 1
botonesSiguiente1.forEach(boton => {
  boton.addEventListener("click", () => mostrarSiguientePregunta(preguntas1, boton));
});

// Agregar el evento de clic a todos los botones "Siguiente" del conjunto 2
botonesSiguiente2.forEach(boton => {
  boton.addEventListener("click", () => mostrarSiguientePregunta(preguntas2, boton));
});

botonesSiguiente3.forEach(boton => {
  boton.addEventListener("click", () => mostrarSiguientePregunta(preguntas3, boton));
});

// Mostrar la primera pregunta inicialmente para ambos conjuntos
preguntas1[0].style.display = "block";
preguntas2[0].style.display = "block";
preguntas3[0].style.display = "block";

function mostrarSiguientePregunta(preguntas, botonSiguiente) {
  ocultarPreguntas(preguntas);

  const preguntaActual = botonSiguiente.parentNode;
  const siguientePregunta = preguntaActual.nextElementSibling;

  if(preguntas==preguntas1){

    if (siguientePregunta == preguntas1[5]) {
      preguntas1[0].style.display = "block";
      recuadroInfo.style.display = "none";
    } else {
      siguientePregunta.style.display = "block";
      recuadroInfo.style.display = "none";
    }

  } else if(preguntas==preguntas2){

    if (siguientePregunta == preguntas2[5]) {
      preguntas2[0].style.display = "block";
      recuadroInfo2.style.display = "none";
    } else {
      siguientePregunta.style.display = "block";
      recuadroInfo2.style.display = "none";
    }
  
  } else if(preguntas==preguntas3){

      if (siguientePregunta == preguntas3[5]) {
        preguntas3[0].style.display = "inline";
        recuadroInfo3.style.display = "none";
      } else {
        siguientePregunta.style.display = "inline";
        recuadroInfo3.style.display = "none";
      }
  } 
}

function ocultarPreguntas(preguntas) {
  preguntas.forEach(pregunta => {
    pregunta.style.display = "none";
  });
}

//section option cards
const texts = {
  'btn-option1_1': 'Si el barbero se afeita a sí mismo, deja de ser el barbero especificado, por lo tanto, no puede afeitarse a sí mismo.',
  'btn-option1_2': 'Si el barbero no se afeita a sí mismo, entonces entra en el grupo de gente que serían afeitados por el barbero y, como el barbero, debe afeitarse a sí mismo.',
  'btn-option2_1': 'Si estoy enfermo y es mi destino recuperar la salud, entonces recuperaré la vitalidad igualmente. Si visito al médico o no, si mi destino es no recuperar mi salud, entonces ni siquiera el doctor podrá ayudarme.',
  'btn-option2_2': 'Si todo estuviera predeterminado por un destino intachable, hacer algo o no hacerlo no cambiaría nuestro destino y, por lo tanto, no necesitaríamos siquiera intentar.',
  'btn-option3_1': ' Los alumnos razonan: "Si no sabemos cuándo será el examen, no podrá ser el viernes ya que si llega el jueves y no ha sido, está claro que será el viernes. Pero si el viernes no se puede el jueves tampoco, ni el miércoles, martes ni lunes por los mismos motivos"',
  'btn-option3_2': 'Siguiendo este razonamiento, los alumnos llegan a la conclusión de que lo que ha dicho el profesor es falso. Y precisamente aquí está la paradoja, dado que, el día miércoles el profesor anuncia el exámen sorpresa y los alumnos, seguros de su razonamiento, son tomados por sorpresa.',
  'btn-option4_1': 'Al viajar al pasado, encuentras tu casa, tocas el timbre y dejas el libro, que explica cómo armar la máquina del tiempo, en la puerta de tu casa.',
  'btn-option4_2': 'Si quien dejó el libro en la puerta de tu casa fuiste tú, necesitas que te hayan entregado el libro para construir la máquina, y a su vez necesitas construir la máquina para entregarte el libro a ti mismo.',
  'btn-option5_1': 'Si retiramos un grano del montón de arena, no lo hacemos desaparecer. Pero si proseguimos con esta operación, llegará un momento en que ya no tengamos ningún grano, y entonces el montón habrá desaparecido. La cuestión a resolver es la siguiente: ¿a partir de cuántos granos de arena podemos decir que un montón de arena es un “montón de arena”?',
  'btn-option5_2': 'Si un montón de arena está compuesto por n granos de arena, n-1 dejaría de ser un montón de arena. Pero previmente habíamos establecido que si le quitamos un grano a un montón de arena, éste sigue siendo -un montón de arena- así pues tenemos una palabra vaga (montón) que no debería usarse en lógica.',
  'btn-option6_1': 'Notamos con la letra A la cantidad de dinero del sobre elegido. La probabilidad de que A sea la mayor o la menor cantidad de dinero es de una una entre dos. Lo mismo para el otro sobre. Al hacer la cuenta (1/2.2A+1/2.1/2A) nos da que el otro sobre tiene 5/4A, lo cual es mayor que solo A. Por esto, intuyes que ganarás más intercambiando el sobre.',
  'btn-option6_2': 'Pero al intercambiar el sobre, puedes hacer el mismo razonamiento anterior con éste y así terminas por ir intercambiando los sobres indefinidamente, a pesar de que lo más racional sería elegir uno y es aquí donde encontramos la contradicción. El desafío sería encontrar la falla en el razonamiento anterior.',
};

const changingCardText = document.querySelectorAll('.changing-card-text');

// Add a click event listener to the parent container
changingCardText.forEach((cardText) => {
cardText.addEventListener('click', function(event) {
  
  const optionClicked = event.target.id;
  const content = texts[optionClicked]; 

  // Check if the clicked element is a button with the 'changeTextButton' class
  if (event.target.classList.contains('option1')) {
    // Find the span element within the same container
    const span = cardText.querySelector('span');
    if(span.textContent == content){
      span.textContent = ''
      cardText.style.backgroundColor = "whitesmoke";
    } else{
      span.textContent = content;
      cardText.style.backgroundColor = "#99FFCD";
    }
  }
});
});