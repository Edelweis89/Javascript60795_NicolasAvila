// 1) Mediante un alert, se deberá visualizar dar la bienvenida al sitio.

alert(
  "Cuando sabes que nada importa, el universo es tuyo. Y nunca he visto un universo al que le gustara eso. –(Rick)-  Bienvenido al Sitio de Rick and Morty.. Que Disfrutes tu aventura => Nicolas Avila"
);

// 2) Mediante un find y Math.random,se deberá visualizar en un alert la información de un personaje random.

function generarNumero(min, max) {
  return Math.round(Math.random() * 20);
}

/// esta funcion nos permite generar un numero random entre 1 y 20 que son los id disponibles en el array data. Con este numero que obtengamos vamos a mostrar la info de un personaje random con el metodo find.

function mostrarInfoPj() {
  let characterId = generarNumero(1, 20);
  console.log(characterId);
  const buscarId = data.find((id) => id.id === characterId);
  console.log(buscarId); ///devuelve objeto
  let nuevoArray = extraerDatosObjeto(buscarId);
}

alert(`Estas preparado para el personaje random del dia?`);
mostrarInfoPj();

// 3) Se deberán ordenar los personajes de Z-A, y visualizar en un alert la información del primer personaje.

data.sort((b, a) => {
  /// por el metodo .sort podemos reorganizar la informacion del array data de Z - A.
  if (a.name < b.name) {
    return -1;
  }
  if (b.name < a.name) {
    return 1;
  }
  if ((b.name = a.name)) {
    return 0;
  }
});

alert(`El personaje cuyo nombre empieza con una letra mas cercana a la Z es: `);
extraerDatosObjeto(data[0]);

// 4) Mediante un prompt, se deberá preguntarle al usuario sobre qué personaje quiere buscar y visualizar información.

// 5)  Se deberá buscar y mediante un alert, mostrar la información del personaje ingresado. Si el valor no coincide, se deberá enviar un mensaje que indique que ese personaje no existe y darle la chance de que pueda volver a ingresarlo y ver la información.

function seleccionUserPj() {
  let personaje = prompt(
    "Indica el nombre del personaje para ver su Hoja de Vida" ///Preguntamos al usuario que personaje quiere ver la info
  );

  const mostrarPj = data.find((name) => name.name === personaje); /// almacenamos la respuesta en una variable y buscamos dentro del objeto con el metodo find si coincide con alguna propiedad.

  if (mostrarPj) {
    extraerDatosObjeto(mostrarPj); /// si coincide ejecutamos funcion para mostrar los datos.
  } else if (mostrarPj === false) {
    alert(`No se ha encontrado al personaje ${personaje} Intentelo nuevamente`); /// si no coincide informamos al usuario y damos chance de volver a escribir la info.
    seleccionUserPj();
  } else if (mostrarPj === undefined) {
    alert(`No se ha encontrado al personaje ${personaje} Intentelo nuevamente`); /// si no selecciono nada o apreto cancelar informamos al usuario y damos chance de volver a escribir la info.
    seleccionUserPj();
  }
  return mostrarPj; /// mostramos info.
}

seleccionUserPj();

alert(
  `Te gusto la informacion del personaje que elegiste ?.. Gracias por Visitarnos!`
);

function extraerDatosObjeto(objeto) {
  let texto = "";
  texto += "id: " + objeto.id + "\n";
  texto += "name: " + objeto.name + "\n";
  texto += "status: " + objeto.status + "\n";
  texto += "species: " + objeto.species + "\n";
  texto += "type: " + objeto.type + "\n";
  texto += "gender: " + objeto.gender + "\n";

  // Añadimos al texto el nombre y la url del origen del objeto
  texto += "origin: \n";
  texto += " name: " + objeto.origin.name + "\n";
  texto += " url: " + objeto.origin.url + "\n";

  // Añadimos al texto el nombre y la url de la ubicación del objeto
  texto += "location: \n";
  texto += " name: " + objeto.location.name + "\n";
  texto += " url: " + objeto.location.url + "\n";

  // Añadimos al texto la url de la imagen del objeto
  texto += "image: " + objeto.image + "\n";

  // Añadimos al texto las urls de los episodios del objeto
  texto += "episode: \n";
  for (let j = 0; j < objeto.episode.length; j++) {
    // Accedemos a la url actual del episodio
    let episodio = objeto.episode[j];

    // Añadimos al texto la url del episodio con un guión y un espacio
    texto += "- " + episodio + "\n";
  }

  // Añadimos al texto la url y la fecha de creación del objeto
  texto += "url: " + objeto.url + "\n";
  texto += "created: " + objeto.created + "\n";
  alert(texto);
}

///Por medio de la Funcion extraerDatosObjeto(objeto), guardamos en la variable texto el valor de la propiedad del objeto que se le pasa por parametro.. de esta forma mostramos el contenido del array de objetos en formato string a traves de un alert.
