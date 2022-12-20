let carrito = [];
let ingreso = prompt("Bienvenido a Asiatic Food, ingresá tu nombre");

//Funcion de ingreso de usuario

function login() {
  while (ingreso == "") {
    alert("hey, no pusiste nada");
    ingreso = prompt("Bienvenido a Asiatic Food, ingresá tu nombre ");
  }
  alert("Hola " + ingreso + " adelante!");
}
login();

//Funcion de limite de edad

let años = prompt("Debes ser mayor de 18 años, ingresa tu edad por favor");

function edad() {
  while (años == "") {
    alert("Debes ingresar tu edad");
    años = prompt("Ingresa tu edad por favor");
  }
  if (años >= 18) {
    alert("Perfecto " + ingreso + " ya puedes hacer tu pedido, gracias!");
  } else {
    alert("No deberías estar aquí");
    años = prompt("Ingresa tu edad nuevamente por favor");
  }
}
edad();

//Funcion lista de platos entradas

alert(
  "En el siguiente cuadro verás una lista de entradas disponibles, seleccione el numero de plato deseado e ingreselo"
);

function menuEntradas() {
  const listaDeEntradas = [
    { nombre: " 1. Camarones ", precio: "1200" },
    { nombre: " 2. Arroz con palta y sesamo ", precio: "1400" },
    { nombre: " 3. Salmon ", precio: "2500" },
    { nombre: " 4. Empanadas primavera ", precio: "1400" },
  ];
  let todosLasEntradas = listaDeEntradas.map(
    (listaDeEntradas) => listaDeEntradas.nombre + listaDeEntradas.precio + "$"
  );
  alert(todosLasEntradas.join(" - "));
}
menuEntradas();

//Funcion selección platos entrada

function selccionEntrada() {
  let entradas = prompt(
    "Ingrese aquí el numero de entrada seleccionada, en caso de no querer entrada ingrese 'no'"
  );
  if (entradas == "no") {
    platos();
  } else if (entradas == 1) {
    alert("Bien, agregaste unos Camarones a tu pedido");
  } else if (entradas == 2) {
    alert("Bien, agregaste un Arroz con palta y sesamo a tu pedido");
  } else if (entradas == 3) {
    alert("Bien, agregaste un salmon tu pedido");
  } else if (entradas == 4) {
    alert("Bien, agregaste unas empanadas primavera tu pedido");
  }
  if (
    entradas == "1" ||
    entradas == "2" ||
    entradas == "3" ||
    entradas == "4"
  ) {
    switch (entradas) {
      case "1":
        precio = 1200;
        break;
      case "2":
        precio = 1400;
        break;
      case "3":
        precio = 2500;
        break;
      case "4":
        precio = 1400;
        break;
      default:
        break;
    }
    let cantidad = parseInt(
      prompt("Indicanos el numero de entradas que quieres agregar al pedido")
    );
    let agregar = prompt(
      "¿Queres agregar otra entrada al pedido?, responde con si o no"
    );
    while (agregar == "si") {
      menuEntradas();
      selccionEntrada();
      agregar = prompt(
        "¿Queres agregar otra entrada al pedido?, responde con si o no"
      );
    }
    while (agregar == "no") {
      break;
    }
    carrito.push({ entradas, precio, cantidad });
    console.log(carrito);
  }
}
selccionEntrada();

carrito.forEach((carritoFinal)=>{
  console.log(`entradas: ${carritoFinal.entradas}, cantidad: ${carritoFinal.cantidad}, totalPagar: ${carritoFinal.cantidad * carritoFinal.precio}`);
})

//PEDIDO DE PLATOS PRINCIPALES

function platos() {
  alert(
    "En el siguiente cuadro verás una lista de platos disponibles, responde con el numero de plato seleccionado"
  );
}

function menuPlatos() {
  const listaDePlatos = [
    { nombre: "1. Chao-fan ", precio: "2200" },
    { nombre: "2. Chao-mien ", precio: "2200" },
    { nombre: "3. Sushi ", precio: "3000" },
    { nombre: "4. Sopa de arroz ", precio: "1800" },
  ];
  let todosLosPlatos = listaDePlatos.map(
    (listaDePlatos) => listaDePlatos.nombre + listaDePlatos.precio + "$"
  );
  alert(todosLosPlatos.join(" - "));
}
menuPlatos();

function selccionEntrada2() {
  let productos = prompt(
    "Ingrese aquí el número de plato seleccionado, en caso de no querer ingres 'no'"
  );
  if (productos == "no") {
    email();
  } else if (productos == 1) {
    alert("Bien, agregaste un chao-fan a tu pedido");
  } else if (productos == 2) {
    alert("Bien, agregaste un chao-mien a tu pedido");
  } else if (productos == 3) {
    alert("Bien, agregaste un sushi a tu pedido");
  } else if (productos == 4) {
    alert("Bien, agregaste una sopa de arroz a tu pedido");
  }
  if (
    productos == "1" ||
    productos == "2" ||
    productos == "3" ||
    productos == "4"
  ) {
    switch (productos) {
      case "1":
        precio = 2200;
        break;
      case "2":
        precio = 2200;
        break;
      case "3":
        precio = 3000;
        break;
      case "4":
        precio = 1800;
        break;
      default:
        break;
    }
    let cantidad = parseInt(
      prompt("Indicanos la cantidad del platos seleccionado")
    );
    agregar = prompt(
      "¿Queres agregar otro plato al pedido?, responde con si o no"
    );
    while (agregar == "si") {
      menuPlatos();
      selccionEntrada2();
      agregar = prompt(
        "¿Queres agregar otra entrada al pedido?, responde con si o no"
      );
    }
    while (agregar == "no") {
      break;
    }
    carrito.push({ productos, precio, cantidad });
    console.log(carrito);
  }
}

selccionEntrada2();

carrito.forEach((carritoFinal)=>{
  console.log(`productos: ${carritoFinal.productos}, cantidad: ${carritoFinal.cantidad}, totalPagar: ${carritoFinal.cantidad * carritoFinal.precio}`);
})

//TOTAL FINAL A PAGAR

const totalFinal = carrito.reduce((acc, el) => acc + el.precio * el.cantidad, 0);
console.log(`el total a pagar es: ${totalFinal}`);

//PEDIDO DE EMAIL

function email() {
  let correo = prompt("Dejanos tu email a continuación");
  while (correo == "") {
    alert("Debes ingresar un email para contactarte");
    correo = prompt("Dejanos tu email a continuación");
  }
  alert(
    "Gracias! " +
      correo +
      " En unos minutos te contactaremos para enviarte el pedido"
  );
}
email();


