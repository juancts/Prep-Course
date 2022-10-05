// No cambies los nombres de las funciones.

const { map } = require("@11ty/eleventy/src/TemplateGlob");

function deObjetoAmatriz(objeto){
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa 
  // un par clave-valor en forma de matriz.
  //Ejemplo: 
  /*objeto({
      D: 1,
      B: 2,
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
  //Escribe tu código aquí
  var matriz =[];
  for (clave in objeto){
    matriz.push([clave, objeto[clave]])
  }
  return matriz;
}


function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece 
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
  //Escribe tu código aquí
  var clavevalor = {};
  for (i = 0; i < string.length; i++) {
    if (Object.keys(clavevalor).includes(string[i])) {
      clavevalor[string[i]] = clavevalor[string[i]] + 1
    } else {
      clavevalor[string[i]] = 1;
    }
  }
  return clavevalor;
}


function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí
  var minusculas = '';
  
  var mayúsculas = '';
  
  for (var i = 0; i < s.length; i++) {
  
    if (s[i] === s[i].toUpperCase()) {
  
      mayúsculas += s[i];
  
    } else {
  
      minusculas += s[i];
    }
  }

  s = mayúsculas + minusculas;
  
  return s;
}



function asAmirror(str) {
  //La función recibe una frase. 
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha 
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí

  var fraseespejo = str.split(' ').map(function(palabra){
    return palabra.split('').reverse().join('')
  }).join(' ');
    return fraseespejo;
  /*var espacio = " "
  var str2 = str.split('').reverse().join('');
  var str3 = str2.split(espacio);
  var objeto = {};
  var espejo='';
  for (var i = str3.length-1; i >= 0; i--) {
    espejo += str3.pop() + ' ';
    
  }
  espejo = espejo.trim();
  return espejo; */
  } 


function capicua(numero){
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de 
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí
  numero = numero.toString();
  if (numero === numero.split('').reverse().join('')){
    return 'Es capicua';
  }
  return 'No es capicua';
}


function deleteAbc(cadena){
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí
  var i=0;
  do{
  cadena = cadena.replace('a', '');
  cadena = cadena.replace('b', '');
  cadena = cadena.replace('c', '');
  i++;
  }while(i<cadena.length);
  return cadena;    


}


function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí
   var arr2 = arr.sort(function(anterior, siguiente){
    return anterior.length - siguiente.length
   })
      return arr2;
  }


function buscoInterseccion(arreglo1, arreglo2){
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita 
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí 
   //[1,2,3,4,5]  [4,5,6,7,8]

  //vuelta 1 i=0 - arreglo1[0] -> 1   j=1 arreglo2[0] -> 4 
  


  var intersección=[];
  for (let i = 0; i < arreglo1.length; i++){
    for (let j = 0; j< arreglo2.length; j++){
     
      if (arreglo1[i]==arreglo2[j]){
        intersección.push(arreglo1[i]);
      }

    }  
  }
  return intersección;
}




// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
   deObjetoAmatriz,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};

