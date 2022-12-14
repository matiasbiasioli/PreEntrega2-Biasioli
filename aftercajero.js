let savedPin = "9852";

function login() {
  let ingresar = false;

  for (let i = 2; i >= 0; i--) {
    let clavePin = prompt("ingresá tu clave pin");
    if (clavePin === savedPin) {
      alert("Ingreso exitoso");
      ingresar = true;
      break;
    } else {
      alert("Error, clave pin incorrecta, te quedan " + i + " intentos");
    }
  }
  return ingresar;
}

let acceso = login();
if (acceso) {
  let saldo = 90000;
  let opcion = prompt(
    "Elegí una opción: \n1- Saldo \n2- Retiro de dinero \n3- Depositar \n4 Presioná X para finalizar"
  );

  while (opcion != "X") {
    switch (opcion) {
      case "1":
        alert("tu saldo actual es $" + saldo);
        break;
      case "2":
        let retiro = parseInt(prompt("cuanto dinero quiere retirar?"));
        if (retiro <= saldo) {
          saldo = saldo - retiro;
          alert("retiraste $" + retiro + " tu saldo actual es de $" + saldo);
        } else {
          ("Saldo insuficiente");
        }
      case "3":
        let deposito = parseInt(prompt("Cuanto dinero quieres depositar?"));
        {
          saldo = saldo + deposito;
          alert(
            "Acaba de depositar $" +
              deposito +
              "tu saldo actual es de $" +
              saldo
          );
        }
        case "4":
          alert("gracias por tu visita");
      default:
        alert("opcion no valida");
        break;
    }
    //Condicion de salida -- le doy la opcion para salir poniendo x
    opcion = prompt(
      "Elegí una opción: \n1- Saldo \n2- Retiro de dinero \n3- Depositar \n Presioná x para finalizar"
    );
  } 
} else {
  alert ("Retendremos tu tarjeta")
}
alert("Gracias por operar con nosotros");     