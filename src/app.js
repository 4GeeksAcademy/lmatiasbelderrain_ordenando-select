import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function () {
  //write your code here
  let cartas = []
  let btnCreate = document.querySelector("#mostrar")
  let btnSort = document.querySelector("#mostrarCartasOrdenadas")
  let contenedor = document.querySelector("#contenedor")
  let ordenadas = document.querySelector("#ordenadas")
  btnCreate.addEventListener("click", generarCarta)
  btnSort.addEventListener("click", () => ordenarCartas(cartas))
  // document.getElementById("mostrar").addEventListener("click", generarCarta)
  // document.getElementById("mostrarCartasOrdenadas").addEventListener("click", ordenarCartas)


  function generarCarta() {
    let palos = ["♦", "♥", "♠", "♣"]
    // let palosRandom = palos[Math.floor(Math.random() * palos.length)]
    // console.log(palosRandom)

    let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
    // "A", "J", "Q", "K"

    // let numerosRandom = numeros[Math.floor(Math.random() * numeros.length)]
    // console.log(numerosRandom)
    let cantidadCartas = document.getElementById("cantidad").value
    //  console.log(cantidadCartas)

    cartas = []
    contenedor.innerHTML = ""
    for (
      let i = 0; i < cantidadCartas; i++
    ) {
      let palosRandom = Math.floor(Math.random() * palos.length)
      let numerosRandom = Math.floor(Math.random() * numeros.length)
      let pinta = palos[palosRandom]
      let valor = numeros[numerosRandom]
      cartas.push({
        pinta, valor
      })
      let carta = dibujarCarta(valor, pinta)
      contenedor.appendChild(carta)
    }
  }
  function invertirValor(numeros) {
    switch (numeros) {
      case 1:
        return "A";
      case 11:
        return"J";
        case 12:
          return "Q"
          case 13:
            return "K"
    

      default:
        return numeros
    }
  }
  // function dibujarCarta(valor, pinta) {
  //   let div = document.createElement("div")
  //   div.classList.add("card", pinta)
  //   div.innerHTML = valor+pinta
  //   return div
  // }

  function dibujarCarta(valor, pinta) {
    let ul = document.createElement("ul");
    ul.classList.add("card", pinta);

    let liTop = document.createElement("li");
    liTop.classList.add("top");
    liTop.textContent = pinta;

    let liMiddle = document.createElement("li");
    liMiddle.classList.add("middle");
    liMiddle.textContent = invertirValor(valor);

    let liBottom = document.createElement("li");
    liBottom.classList.add("bottom");
    liBottom.textContent = pinta;

    ul.appendChild(liTop);
    ul.appendChild(liMiddle);
    ul.appendChild(liBottom);

    return ul;
  }

  function ordenarCartas(arr = []) {
    ordenadas.innerHTML = "";  // Limpiamos el contenedor de cartas ordenadas
    let size = arr.length;
    let tempArr = [...arr];  // Copia el arreglo original para no modificar el arreglo original
  
    for (let i = 0; i < size - 1; i++) {
      let minIndex = i;  // Inicializamos el índice del mínimo
  
      // Encontramos el índice del valor más pequeño en el resto del arreglo
      for (let j = i + 1; j < size; j++) {
        if (tempArr[j].valor < tempArr[minIndex].valor) {
          minIndex = j;  // Actualizamos el índice del valor mínimo
        }
      }
  
      // Si encontramos un valor mínimo distinto, intercambiamos los valores
      if (minIndex !== i) {
        let temp = tempArr[i];
        tempArr[i] = tempArr[minIndex];
        tempArr[minIndex] = temp;
  
        // Mostramos el arreglo después de cada intercambio (paso intermedio)
        let fila = document.createElement("div");
        fila.classList.add("contenedor");
  
        tempArr.forEach(({ valor, pinta }) => {
          let carta = dibujarCarta(valor, pinta);
          fila.appendChild(carta);
        });
  
        ordenadas.appendChild(fila);
      }
    }
  
    // Mostrar el estado final del arreglo (solo una vez al final)
    let filaFinal = document.createElement("div");
    filaFinal.classList.add("contenedor");
  
    tempArr.forEach(({ valor, pinta }) => {
      let carta = dibujarCarta(valor, pinta);
     
    });
  
  
  }
  
}  