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

alert(
  "En el siguiente cuadro verás una lista de entradas disponibles, seleccione el numero de plato deseado e ingreselo luego"
);

//Constantes lista de entradas

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

function selccionEntrada() {
  let entradas = prompt("Ingrese aquí el numero de entrada seleccionada");
  if (entradas == 1) {
    alert("Bien, agregaste unos Camarones a tu pedido");
  } else if (entradas == 2) {
    alert("Bien, agregaste un Arroz con palta y sesamos a tu pedido");
  } else if (entradas == 3) {
    alert("Bien, agregaste un salmon tu pedido");
  } else if (entradas == 4) {
    alert("Bien, agregaste unas empanadas primavera tu pedido");
  }
}
selccionEntrada();

function cantidades() {
  let cantidad = prompt(
    "Indicanos el numero de entradas que quieres agregar al pedido"
  );
  if (cantidad == 1) {
    alert("Perfecto, una sola entrada");
  } else {
    alert("Excelente, serán " + cantidad + " entradas seleccionadas");
  }
}
cantidades();

function agregarMas() {
  let agregar = prompt(
    "¿Queres agregar otra entrada al pedido?, responde con si o no"
  );
  while (agregar == "si") {
    menuEntradas();
    selccionEntrada();
    cantidades();
    agregar = prompt(
      "¿Queres agregar otra entrada al pedido?, responde con si o no")
  }
  if (agregar != "si");
  {
  }
}
agregarMas();

alert(
  "En el siguiente cuadro verás una lista de platos disponibles, responde con el numero de plato seleccionado"
);

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
menuPlatos()


function selccionEntrada2() {
  let productos = prompt("Ingrese aquí su número de plato seleccionado");
if (productos == 1) {
  alert("Bien, agregaste un chao-fan a tu pedido");
} else if (productos == 2) {
  alert("Bien, agregaste un chao-mien a tu pedido");
} else if (productos == 3) {
  alert("Bien, agregaste un sushi a tu pedido");
} else if (productos == 4) {
  alert("Bien, agregaste una sopa de arroz a tu pedido");
}
}


function cantidades2() {
  let cantidad = prompt(
    "Indicanos el numero de platos que quieres agregar al pedido"
  );
  if (cantidad == 1) {
    alert("Perfecto, un solo plato");
  } else
  {
    alert("Excelente, serán " + cantidad + " plato");
  }
}
cantidades2();

function agregarMas2() {
  agregar = prompt(
    "¿Queres agregar otra entrada al pedido?, responde con si o no"
  );
  while (agregar == "si") {
    menuPlatos();
    selccionEntrada2();
    cantidades2();
    agregar = prompt(
      "¿Queres agregar otra entrada al pedido?, responde con si o no")
  }
  if (agregar != "si");
  {
  }
}
agregarMas2();

let correo = prompt("Dejanos tu email a continuación");

function email() {
  while (correo == "") {
    alert("Debes ingresar un email para contactarte");
    correo = prompt("Dejanos tu email a continuación");
  }
}
email();

alert(
  "Gracias! " +
    correo +
    " En unos minutos te contactaremos para enviarte el pedido"
);
