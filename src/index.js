//import firstLaboratoryProblem from "./problems/firstLaboratoryProblem";
//firstLaboratoryProblem();

//import main from "./problems/destructuring";
//main();


//const listNumbers = [1,4,5,2,6,3];
//const Orderfuncion = listNumbers.sort((a,b) => {
    //return b-a;
//})
//console.log(Orderfuncion);

//2.- Es posible que conozcas algunos cuadrados perfectos bastante grandes. Pero, ¿qué pasa con el SIGUIENTE?
//Complete el método findNextSquare que encuentra el siguiente cuadrado perfecto integral después del que se pasó como parámetro. Recuerda que un cuadrado perfecto integral es un número entero n tal que sqrt (n) también es un número entero.
//Si el parámetro en sí mismo no es un cuadrado perfecto, se debe devolver -1. Puede asumir que el parámetro no es negativo.

function findNextSquare (sq) { 

    // Return the next square if sq is a perfect square, -1 otherwise 
  
    if (Number.isInteger(Math.sqrt(sq))) 
  
      return (Math.sqrt(sq)+1)*(Math.sqrt(sq)+1); 
  
    else 
  
      return "el parámetro en sí mismo no es un cuadrado perfecto:"+-1;
  
  } ;
  console.log(findNextSquare(121));
  console.log(findNextSquare(625));
  console.log(findNextSquare(114));

//3.- Después de unirte recientemente al grupo de desarrolladores de pruebas beta de Instacart, decides experimentar con su nueva API. Sabe que la API devuelve cadenas listas para mostrar específicas del artículo como un 10% más altas que en la tienda o un 5,0% más bajas que en la tienda que informan a los usuarios cuando el precio de un artículo es diferente al de la tienda. Pero desea ampliar esta funcionalidad dando a las personas una mejor idea de cuánto más pagarán por todo su carrito de compras.
//Su aplicación le permite al usuario decidir la cantidad total x que está dispuesto a pagar a través de Instacart sobre los precios en la tienda. A esto se le llama sensibilidad al precio.
//Su trabajo es determinar si un cliente determinado estará dispuesto a pagar por los artículos dados en su carrito en función de su sensibilidad de precio declarada x.