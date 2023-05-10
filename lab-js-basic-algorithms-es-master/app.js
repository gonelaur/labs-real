


//PRIMERA ITARACIÓN

// 1.1 Crear una variable hacker1 con el nombre del conductor.
let hacker1 = "Miranda";

// 1.2 Imprimir "El nombre del conductor es XXXX".
console.log(`El nombre del conductor es ${hacker1}`);

// 1.3 Crear una variable hacker2 con el nombre del navegador.
let hacker2 = "Tomasa";

// 1.4 Imprimir "El nombre del navegante es YYYY".
console.log(`El nombre del navegante es ${hacker2}`);


//SEGUNDA ITERACIÓN

// 2.1 Dependiendo de qué nombre es más largo, imprimir:
if (hacker1.length > hacker2.length) {
  console.log(`El conductor tiene el nombre más largo, tiene ${hacker1.length} caracteres.`);
} else if (hacker1.length < hacker2.length) {
  console.log(`Parece que el navegante tiene el nombre más largo, tiene ${hacker2.length} caracteres.`);
} else {
  console.log(`¡Vaya, ambos tienen nombres igual de largos, ${hacker1.length} caracteres!.`);
}

//TERCERA ITERACIÓN

// Imprimir todos los caracteres del nombre del conductor, separados por un espacio y en mayúsculas
let nameWithSpaces = "";
for (let i = 0; i < hacker1.length; i++) {
  nameWithSpaces += hacker1[i].toUpperCase() + " ";
}
console.log(nameWithSpaces.trim());

// Imprimir todos los caracteres del nombre del navegador, en orden inverso
let reversedName = "";
for (let i = hacker2.length - 1; i >= 0; i--) {
  reversedName += hacker2[i];
}
console.log(reversedName);

// Según el orden lexicográfico de las cadenas, imprimir si el conductor va primero, el navegador va primero o si tienen el mismo nombre
if (hacker1.localeCompare(hacker2) < 0) {
  console.log("El nombre del conductor va primero.");
} else if (hacker2.localeCompare(hacker1) < 0) {
  console.log("Yo, el navegador voy primero definitivamente.");
} else {
  console.log("¿Qué? ¿Los dos tienen el mismo nombre?");
}


// BONO 1

// Generar párrafos Lorem Ipsum
const lorem = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed commodo nunc a fringilla pulvinar. Suspendisse non sagittis felis. Vestibulum vel erat vel elit finibus pretium quis id justo. Donec ornare libero sed luctus aliquet. Ut maximus commodo erat, quis vestibulum velit efficitur eget. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Suspendisse auctor suscipit mauris, ut ullamcorper lectus. Vestibulum vitae dolor vel nisi elementum mattis. Nam scelerisque faucibus enim, vel dictum eros aliquam eget. Sed commodo quis mi vel tincidunt. Aliquam vitae ante erat. Sed eleifend justo quam, eu ultricies est iaculis vel.

Phasellus gravida dui sed enim bibendum, quis consectetur nunc aliquet. Etiam convallis velit id laoreet lacinia. Vivamus vel ex vitae tellus posuere efficitur nec vel ante. Donec tempor ultricies justo, a bibendum magna sodales at. Suspendisse eu diam non justo suscipit cursus eu non nunc. Curabitur accumsan ligula id est malesuada dignissim. Aliquam pharetra imperdiet urna, vitae varius dolor gravida vitae.

Nullam ultrices leo et augue lacinia, ac eleifend erat lobortis. In hac habitasse platea dictumst. Donec sit amet lacus libero. Etiam pharetra enim id ante molestie, at ultrices lacus posuere. Sed eleifend turpis ut quam viverra, vel sollicitudin neque fringilla. Integer ac elementum ipsum. Sed placerat diam non diam hendrerit vehicula. Suspendisse nec tristique velit, vel placerat tellus. Donec quis quam sit amet dolor accumsan maximus. Proin aliquam eleifend neque, ut gravida augue suscipit ut. Nullam sed massa a metus dapibus facilisis a a enim. Quisque et enim dui.`
const paragraphs = lorem.split('\n\n');

// Contar palabras y aparición de "et"
let wordCount = 0;
let etCount = 0;
paragraphs.forEach(paragraph => {
  const words = paragraph.split(' ');
  wordCount += words.length;
  etCount += words.filter(word => word === 'et').length;
});

// Imprimir resultados
console.log(`El número total de palabras es: ${wordCount}`);
console.log(`La palabra "et" aparece ${etCount} veces.`);


// BONO 2

let phraseToCheck = "A man a plan a canal Panama";
let cleanPhrase = phraseToCheck.toLowerCase().replace(/[^a-z]+/g, ''); // Eliminamos los caracteres no alfabéticos y los convertimos a minúsculas
let length = cleanPhrase.length;
let isPalindrome = true;

for (let i = 0; i < length/2; i++) {
  if (cleanPhrase[i] !== cleanPhrase[length - 1 - i]) {
    isPalindrome = false;
    break;
  }
}

if (isPalindrome) {
  console.log(`${phraseToCheck} es un palíndromo.`);
} else {
  console.log(`${phraseToCheck} no es un palíndromo.`);
}
