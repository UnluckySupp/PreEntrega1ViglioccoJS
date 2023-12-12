let precioLavarropa = 8000;
let precioHeladera = 9000;
let precioTelevisor = 12000;

let producto;
let cuotas;
let compra;
let compraCuotas;

let contado = 1000;
let tresCuotas = 1.12;
let seisCuotas = 1.25;
let doceCuotas = 1.52;

let nombre = prompt("Ingrese un nombre");
alert(`Bienvenido ${nombre}`);
let edad = Number(prompt("Ingrese su edad"));
if (edad <= 17) {
  alert("Eres menor de edad, no puedes realizar compras.");
} else {
  alert("Eres mayor de edad. Ingresando al catálogo de compras.");
  carrito();
}

function carrito() {
  let auxiliar = `true`;
  while (auxiliar === "true") {
    producto = prompt("Qué producto te interesa comprar?");
    if (producto === "lavarropa") {
      alert(`El precio del ${producto} es ${precioLavarropa} pesos.`);
      cuotas = Number(
        prompt("En cuántas cuotas deseas pagar? Elige 1, 3, 6 o 12")
      );
      switch (cuotas) {
        case 1:
          alert("Has elegido 1 cuota");
          compra = precioLavarropa - contado
          alert(`El valor total es ${compra} pesos`)
          break;

        case 3:
          alert("Has elegido 3 cuotas");
          compra = precioLavarropa * tresCuotas
          compraCuotas = compra / cuotas
          alert(`El valor total es ${compra} pesos. El valor de cada cuota es ${compraCuotas} pesos.`)
          break;

        case 6:
          alert("Has elegido 6 cuotas");
          compra = precioLavarropa * seisCuotas
          compraCuotas = compra / cuotas
          alert(`El valor total es ${compra} pesos. El valor de cada cuota es ${compraCuotas} pesos.`)
          break;

        case 12:
          alert("Has elegido 12 cuotas");
          compra = precioLavarropa * doceCuotas
          compraCuotas = compra / cuotas
          alert(`El valor total es ${compra} pesos. El valor de cada cuota es ${compraCuotas} pesos.`)
          break;

        default:
          alert("Número de cuotas incorrecto");
          break;
      }
    } else if (producto === "heladera") {
      alert(`El precio del ${producto} es ${precioHeladera} pesos.`);
      cuotas = Number(
        prompt("En cuántas cuotas deseas pagar? Elige 1, 3, 6 o 12")
      );
      switch (cuotas) {
        case 1:
          alert("Has elegido 1 cuota");
          compra = precioHeladera - contado
          alert(`El valor total es ${compra} pesos`)
          break;

        case 3:
          alert("Has elegido 3 cuotas");
          compra = precioHeladera * tresCuotas
          compraCuotas = compra / cuotas
          alert(`El valor total es ${compra} pesos. El valor de cada cuota es ${compraCuotas} pesos.`)
          break;

        case 6:
          alert("Has elegido 6 cuotas");
          compra = precioHeladera * seisCuotas
          compraCuotas = compra / cuotas
          alert(`El valor total es ${compra} pesos. El valor de cada cuota es ${compraCuotas} pesos.`)
          break;

        case 12:
          alert("Has elegido 12 cuotas");
          compra = precioHeladera * doceCuotas
          compraCuotas = compra / cuotas
          alert(`El valor total es ${compra} pesos. El valor de cada cuota es ${compraCuotas} pesos.`)
          break;

        default:
          alert("Número de cuotas incorrecto");
          break;
      }
    } else if (producto === "televisor") {
      alert(`El precio del ${producto} es ${precioTelevisor} pesos.`);
      cuotas = Number(
        prompt("En cuántas cuotas deseas pagar? Elige 1, 3, 6 o 12")
      );
      switch (cuotas) {
        case 1:
          alert("Has elegido 1 cuota");
          compra = precioTelevisor - contado
          alert(`El valor total es ${compra} pesos`)
          break;

        case 3:
          alert("Has elegido 3 cuotas");
          compra = precioTelevisor * tresCuotas
          compraCuotas = compra / cuotas
          alert(`El valor total es ${compra} pesos. El valor de cada cuota es ${compraCuotas} pesos.`)
          break;

        case 6:
          alert("Has elegido 6 cuotas");
          compra = precioTelevisor * seisCuotas
          compraCuotas = compra / cuotas
          alert(`El valor total es ${compra} pesos. El valor de cada cuota es ${compraCuotas} pesos.`)
          break;

        case 12:
          alert("Has elegido 12 cuotas");
          compra = precioTelevisor * doceCuotas
          compraCuotas = compra / cuotas
          alert(`El valor total es ${compra} pesos. El valor de cada cuota es ${compraCuotas} pesos.`)
          break;

        default:
          alert("Número de cuotas incorrecto");
          break;
      }
    } else {
      alert("El producto que escribiste no existe");
    }

    let continuar = prompt("Quieres seguir comprando? Ingrese si");
    if (continuar != `si`) {
      auxiliar = `false`;
    }
  }
}
