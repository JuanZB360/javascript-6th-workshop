function crearReservacion(room,roomTypes,listaReserva){
 
  let nombre = prompt("Ingresa el nombre del titular de la reserva:").toLowerCase();
  let fechaInicio = prompt("Ingresa la fecha de inicio dd-mm-aaaa:");
  let fechaFin = prompt("Ingresa la fecha de fin dd-mm-aaaa:");
  let cantidadpersonas = Number(prompt("Para cuantas personas es la habitacion."))

  let capacidad = roomTypes.filter(el => el.capacity>=cantidadpersonas).map(el => el.id);
  let disponibles = room.filter((el) => capacidad.includes(el.roomTypeId) && el.availability == true);
  let tipoHabi;

  const userInput = prompt(
    "Ingrese el numero de habitacion a reservar: " +
      disponibles
        .map((room) => {
          return `\nRoom Number: ${room.number} (${
            roomTypes.find((type) => type.id === room.roomTypeId).name
          })`;
        })
        .join(", ")
  );

  for(let i in room){
    if (room[i].number == userInput){
      for(let j in roomTypes){
        if(roomTypes[j].id == room[i].roomTypeId){
          tipoHabi=roomTypes[j].name;
        };
      };
    };
  };

  for (const i in room) {
    if (room[i].number == userInput) {
      room[i].availability = false;
    }
  }
  
  listaReserva.push({
    id: id(), nombre, userInput,tipoHabi,fechaInicio,fechaFin,cantidadpersonas,
  });
  console.log(listaReserva)
};

function  generarid(id) {
  return function () {
    return id++; // Cada vez que se llama a la función, se incrementa id y se devuelve
  }
};
let id =  generarid(1);

function verReservaciones (lista){
  let busqueda = prompt("Ingresa el nombre de la persona que realizo la reserva");
  let reservacionactual = lista.filter(el => el.nombre == busqueda);
  console.log(reservacionactual);
  for (const i in reservacionactual) {
    console.log(`\nNombre: ${reservacionactual[i].nombre}\n
    Habitacion: ${reservacionactual[i].userInput}\n
    Tipo de habitacion: ${reservacionactual[i].tipoHabi}\n
    fecha de inicio: ${reservacionactual[i].fechaInicio}\n
    Fecha de fin: ${reservacionactual[i].fechaFin}`);
  }
};

function cancelarReservacion(lista,room){
  let busqueda = prompt("Ingrese el nombre de la persona que que realiza la reservacion:")
  let encontrados = lista.filter(el => el.nombre == busqueda);
  console.log(encontrados)
  for(let i in encontrados){
    console.log(`Nombre: ${encontrados[i].nombre} Habitacion: ${encontrados[i].userInput}`)
  }

  let habitacion = prompt("Ingresa el numero de la habitacion:");
  let indice;
  for(let i in lista){
    if(lista[i].userInput == habitacion){
      indice = 1;
      break;
    }
  }

  let validar = confirm("seguro desea cancelar su reservacion");
  if(validar){

    lista.splice(indice,1)

    for(let i in room){
      if(room[i].number == habitacion){
        room[i].availability=true;
      }
    }

  }
  
};

function editarReserva (list){
  let busqueda = prompt("Ingresa el nombre de la persona que realizo la reserva");
  let reservacionactual = list.filter(el => el.nombre == busqueda);
  console.log(reservacionactual);
  for (const i in reservacionactual) {
    console.log(`id: ${reservacionactual[i].id}\n 
    Nombre: ${reservacionactual[i].nombre}\n
    Habitacion: ${reservacionactual[i].userInput}\n
    Tipo de habitacion: ${reservacionactual[i].tipoHabi}\n
    fecha de inicio: ${reservacionactual[i].fechaInicio}\n
    Fecha de fin: ${reservacionactual[i].fechaFin}`);
  }
  let busqid = prompt("Ingrese el id de la reservacion que desea editar:");
  for(let i in list){
    if(list[i].id == busqid){
      let nuevafechainicio = prompt("ingrese nueva fecha de inicio de la reservacion:");
      let nuevafechafin = prompt("ingrese nueva fecha de fin de la reservacion:");
      list[i].fechaInicio = nuevafechainicio;
      list[i].fechaFin = nuevafechafin;
      console.log(list[i]);
      break;
    }
  }
}

function menu (room,roomTypes){
  let listarReserva = [];

  let validar = true;
  while(validar){
    let eleccion =Number(prompt(`Menu \n1- Reservacion \n2- ver reservaciones activas \n3- Cancelar reservacion \n4- Editar reservacion \n5- Salir`))

    switch (eleccion) {
      case 1:
        crearReservacion(room,roomTypes,listarReserva);
        break;

      case 2:
        verReservaciones(listarReserva);
        break;
      
      case 3:
        cancelarReservacion(listarReserva,room);
        break;

      case 4:
        editarReserva(listarReserva);
      
      case 5:
        validar=false;
    }
  };
};










// Ruta del archivo data.json
const url = "data.json"; // Cambiar por la ruta correcta

// Función para cargar y mostrar el contenido de data.json
function cargarYMostrarData() {
  // Retorna una nueva promesa que se resuelve después del setTimeout
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // Realiza la solicitud fetch dentro del setTimeout
      fetch(url)
        .then((response) => {
          if (!response.ok) {
            throw new Error("Error al cargar los datos.");
          }
          return response.json();
        })
        .then((data) => {
          console.log("Habitaciones:", data.rooms);
          console.log("Tipos de Habitaciones:", data.roomTypes);
          resolve(data); // Resuelve la promesa con los datos cargados
        })
        .catch((error) => {
          console.error(error);
          reject(error); // Rechaza la promesa si hay un error
        });
    }, 3000);
  });
}

// Llamar a la función para cargar y mostrar el contenido de data.json
function principal () {
  cargarYMostrarData()
  .then(({ rooms, roomTypes }) => {
    // Mostrar el contenido de las habitaciones después de cargar los datos

    menu(rooms,roomTypes);
    // ... Continuar con la lógica de la app
  })
  .catch((error) => {
    console.error("Error al manejar la promesa:", error);
  });
};

principal();