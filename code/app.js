const books = [{
    title: 'Good Omens',
    authors: ['Terry Pratchett', 'Neil Gaiman'],
    rating: 4.25,
    genres: ['fiction', 'fantasy']
  },
  {
    title: 'Changing My Mind',
    authors: ['Zadie Smith'],
    rating: 3.83,
    genres: ['nonfiction', 'essays']
  },
  {
    title: 'Bone: The Complete Edition',
    authors: ['Jeff Smith'],
    rating: 4.42,
    genres: ['fiction', 'graphic novel', 'fantasy']
  },
  {
    title: 'American Gods',
    authors: ['Neil Gaiman'],
    rating: 4.11,
    genres: ['fiction', 'fantasy']
  },
  {
    title: 'A Gentleman in Moscow',
    authors: ['Amor Towles'],
    rating: 4.36,
    genres: ['fiction', 'historical fiction']
  },
  {
    title: 'The Name of the Wind',
    authors: ['Patrick Rothfuss'],
    rating: 4.54,
    genres: ['fiction', 'fantasy']
  },
  {
    title: 'The Overstory',
    authors: ['Richard Powers'],
    rating: 4.19,
    genres: ['fiction', 'short stories']
  },
  {
    title: 'The Way of Kings',
    authors: ['Brandon Sanderson'],
    rating: 4.65,
    genres: ['fantasy', 'epic']
  },
  {
    title: 'Lord of the flies',
    authors: ['William Golding'],
    rating: 3.67,
    genres: ['fiction']
  }
]

const miLibro = books.reduce((groupedBooks, book) => {
  const key = book.genres[0];
  if(!groupedBooks[key])
    groupedBooks[key] = [];
  groupedBooks[key].push(book);    
  return groupedBooks;
},
{});


// const votes = ['y', 'y', 'y', 'n', 'n', 'absent'];

// if ({n: 1 }['n','n'])
//   console.log('por if');
// else
//   console.log('por else');


// const results = votes.reduce((tally, val) => {
//   if(tally[val]){    
//     tally[val]++;
//   }
//   else{    
//     tally[val] = 1;
//   }
//   console.log(val);
//   return tally;
// },
// {}
// );


// To tally the votes:
// const results = votes.reduce((tally, val) => {
//   if (tally[val]) {
//     tally[val]++
//   } else {
//     tally[val] = 1;
//   }
//   return tally;
// }, {})

// const miSuma = [10,20,30,40,50,60].reduce((sum, currValue) =>
//                                             {console.log(sum);
//                                             return (sum + currValue)});

// const prices1 = [934.45,284.45,4347.45,43462.45,2225.23,2344,463.23,7772,8001,-1, 0];
// const maxValue = prices1.reduce((max, currentValue) => {
//   if (currentValue > max) 
//     return currentValue;
//   else
//     return max;
// }, 999 )


// const minValue = prices1.reduce((min, currentValue) => {
//   if (min < currentValue)  
//     return min;
//   else
//     return currentValue;
// })



// const nums = [9,8,7,6,5,4,3,2,1];

// sumaTotalArray = nums.reduce((total, currentValue) => (total + currentValue));
// console.log(sumaTotalArray);

// const books = [{
//     title: 'Good Omens',
//     authors: ['Terry Pratchett', 'Neil Gaiman'],
//     rating: 4.25,
//     genres: ['fiction', 'fantasy']
//   },
//   {
//     title: 'Changing My Mind',
//     authors: ['Zadie Smith'],
//     rating: 3.83,
//     genres: ['nonfiction', 'essays']
//   },
//   {
//     title: 'Bone: The Complete Edition',
//     authors: ['Jeff Smith'],
//     rating: 4.42,
//     genres: ['fiction', 'graphic novel', 'fantasy']
//   },
//   {
//     title: 'American Gods',
//     authors: ['Neil Gaiman'],
//     rating: 4.11,
//     genres: ['fiction', 'fantasy']
//   },
//   {
//     title: 'A Gentleman in Moscow',
//     authors: ['Amor Towles'],
//     rating: 4.36,
//     genres: ['fiction', 'historical fiction']
//   },
//   {
//     title: 'The Name of the Wind',
//     authors: ['Patrick Rothfuss'],
//     rating: 4.54,
//     genres: ['fiction', 'fantasy']
//   },
//   {
//     title: 'The Overstory',
//     authors: ['Richard Powers'],
//     rating: 4.19,
//     genres: ['fiction', 'short stories']
//   },
//   {
//     title: 'The Way of Kings',
//     authors: ['Brandon Sanderson'],
//     rating: 4.65,
//     genres: ['fantasy', 'epic']
//   },
//   {
//     title: 'Lord of the flies',
//     authors: ['William Golding'],
//     rating: 3.67,
//     genres: ['fiction']
//   }
// ]

// sumaTotalBooks = books.reduce((accumulator, currentValue) =>
//                               (accumulator.rating + currentValue.rating));

// books.sort((a, b) => (b.rating - a.rating));

// const prices1 = [934.45,284.45,4347.45,43462.45,2225.23,2344,463.23,7772,8001,-1, 0];

// const badSort = prices1.slice().sort();
// console.log(badSort);

// const ascendingSort = prices1.slice().sort((a , b) => a - b);
// console.log(ascendingSort);

// const descendingSort = prices1.slice().sort((a , b) => b - a);
// console.log(descendingSort);


// const words = ['dog', 'dig', 'log', 'bag', 'wa2'];
// const all3letters = words.every(word => word.length === 3);
// const finalg = words.every(word => word[word.length-1] === 'g');

// const someStartsWithD = words.some(word => word[0] === 'q');

// const nums = [9,8,7,6,5,4,3,2,1,-1, 0];
// const impares = nums.filter(n => n % 2 === 1);
// const grandes = nums.filter(n => n > 5 );
// const impares2 = nums.map(n => n % 2 === 1);

// const books = [{
//     title: 'Good Omens',
//     authors: ['Terry Pratchett', 'Neil Gaiman'],
//     rating: 4.25,
//     genres: ['fiction', 'fantasy']
//   },
//   {
//     title: 'Changing My Mind',
//     authors: ['Zadie Smith'],
//     rating: 3.83,
//     genres: ['nonfiction', 'essays']
//   },
//   {
//     title: 'Bone: The Complete Edition',
//     authors: ['Jeff Smith'],
//     rating: 4.42,
//     genres: ['fiction', 'graphic novel', 'fantasy']
//   },
//   {
//     title: 'American Gods',
//     authors: ['Neil Gaiman'],
//     rating: 4.11,
//     genres: ['fiction', 'fantasy']
//   },
//   {
//     title: 'A Gentleman in Moscow',
//     authors: ['Amor Towles'],
//     rating: 4.36,
//     genres: ['fiction', 'historical fiction']
//   },
//   {
//     title: 'The Name of the Wind',
//     authors: ['Patrick Rothfuss'],
//     rating: 4.54,
//     genres: ['fiction', 'fantasy']
//   },
//   {
//     title: 'The Overstory',
//     authors: ['Richard Powers'],
//     rating: 4.19,
//     genres: ['fiction', 'short stories']
//   },
//   {
//     title: 'The Way of Kings',
//     authors: ['Brandon Sanderson'],
//     rating: 4.65,
//     genres: ['fantasy', 'epic']
//   },
//   {
//     title: 'Lord of the flies',
//     authors: ['William Golding'],
//     rating: 3.67,
//     genres: ['fiction']
//   }
// ]

// const allGoodBooks = books.every(book => book.rating > 4.5);
// const someGoodBooks = books.some(book => book.rating > 4.5);

// const librosBuenos = books.filter(b => b.rating > 4.3);
// const librosFantasy = books.filter( book => (
//     book.genres.includes('fantasy')
// ) );

// const query = books.filter(book => (    
//     book.title.toLowerCase().includes('the')
// ))


// let movies = [
//     'Willow',
//     'Alien',
//     'Alien nation',
//     'The blob',
//     'Four rooms'
// ];

// const movie = movies.find(movie =>  movie.includes('Wi'));

// const movie2 = movies.find(m => (
//     m.indexOf('Alien ')=== 0
// ))




//   // Implicit return one-liner:
//   const square2 = n => n * n;
  
  
//   const nums = [1, 2, 3, 4, 5, 6, 7, 8];
  
//   const doubles = nums.map(num=> num*2);

//   const parityList = nums.map(function (n) {
//     if (n % 2 === 0) return 'even';
//     return 'odd';
//   })
  
//   const listaPares = nums.map( (num) => {
//     return (num %2===0) ? 'par': 'impar';
//   })

//   const parityList2 = nums.map((n) => (
//     n % 2 === 0 ? 'even' : 'odd'
//   ));
  
//   const parityList3 = nums.map((n) => n % 2 === 0 ? 'even' : 'odd');

// const square = function(x) {
//     return x*x;
// } 

// const cuadrado = (x) => {
//     return x*x;
// }




// const nums = [9,8,7,6,5,4,3,2,1];
// const doubles  = nums.map(function(num){
//     return num * 2;
// })

// const isEven = nums.map(function(n){
//     return{
//         value:n,
//         isEven:n%2 ===0
//     }
// })



// const texts = ['rofl', 'lol', 'omg', 'ttyl'];
// const caps = texts.map(function (t) {
//     return t.toUpperCase();
// })

// const separadoPoPuntos = texts.map(function (text){
//     return text.toUpperCase().split('').join('.');
// })

// texts;
// caps;

// const books = [{
//     title: 'Good Omens',
//     authors: ['Terry Pratchett', 'Neil Gaiman'],
//     rating: 4.25
//   },
//   {
//     title: 'Bone: The Complete Edition',
//     authors: ['Jeff Smith'],
//     rating: 4.42
//   },
//   {
//     title: 'American Gods',
//     authors: ['Neil Gaiman'],
//     rating: 4.11
//   },
//   {
//     title: 'A Gentleman in Moscow',
//     authors: ['Amor Towles'],
//     rating: 4.36
//   }
// ]

// const soloTitulos = books.map(function titulo(book) {
//     return book.title;
// })

// // for (let book of books){
// //     console.log(book.title.toUpperCase());
// // }

// books.forEach(function (book, index) {
//     console.log(book.title.toUpperCase());     
// })



// const nums = [9,8,7,6,5,4,3,2,1];

// nums.forEach(function (kiko) {
//     console.log(kiko);
// })

// function printTriple(num){
//     console.log(num*3);
// }

// nums.forEach(printTriple)



// hoot();

// function hoot (){
//     console.log("Awoooo");
// }

// howl();
// function howl() {
//     console.log("Awoooo");
// }

// console.log(animal);
// var animal;


// function grumpus(){
//     alert('Fuera de aqui!')
// }

// const btn  = document.querySelector('button');
// btn.addEventListener('click', function() {
//     alert('Me has pulsado')
// })

// setTimeout(function(){
//     alert('welcome!');
// }, 3000);


// function multiplyBy(multiplier) {
//     return function(x) {
//         console.log(`x= ${x}, multiplier = ${multiplier}`);
//         return x * multiplier;
//     }
// }

// const triple = multiplyBy(3);
// const double = multiplyBy(2);


// function callThreeTimes(f){
//     f();
//     f();
//     f();
// }

// function cry(){
//     console.log("Boo i'm crying");
// }

// function rage(){
//     console.log("I hate everything");
// }

// function repeatNTimes(action, times){
//     for(let i = 0;i<times; i++){
//         action();
//     }
// }

// const  add = function (x,y){
//     return x + y;
// }

// const subtract = function (x,y){
//     return x - y;
// }

// const multiply =  function (x,y) {
//     return x * y;
// }

// const divide = function  (x,y){
//     return x / y;
// }

// const operations = [add, subtract, multiply, divide];


// for(let miFuncion of operations){
//     let result = miFuncion(100, 50);
//     console.log(result);
// }

// const cosa = {
//     doSomething : multiply
// }

// function exterior(){
//     let hero = 'superman';
//     function interior(){
//         let hero = 'batman';
//         function extraInterior(){
//             console.log(`Extra interior ${hero}`);    
//         }
//         console.log(`Interior ${hero}`);    
//         extraInterior();
//     }
//     interior();
// }


// console.log(Math.floor(Math.random()* 255))

// function getCard(){
//     const club = ['J', 'Q','K', 'A'];
//     let  number = (Math.floor(Math.random() * 10)) + 1;    
//     let miClub = club[(Math.floor(Math.random() * club.length))];
//     return {
//             number : number,
//             club : miClub
//     }
// }

// const abecedario = 'abcdefghijklmnñopqrstuvwxyz';
// function pangram(frase){
//     for (let char of abecedario) {
//         if(frase.toLowerCase().indexOf(char) === -1){
//             console.log(char);
//            return false;
//         }
//     }
//     return true;
// }

// function media(miarray) {
//     let suma=0;
//     for (let num of miarray){
//         suma += num;
//     }
//     return suma / miarray.length;
// }


// function isValidPassword(password, userName){    
//     if (password.length < 8 || 
//         password.indexOf(' ') !== -1 ||
//         password.indexOf(userName) !== -1)
//             return false;    
//     return true;
// }


// console.log(isValidPassword('123 ','22'));
// console.log(isValidPassword('12345678','12345678'));


// 


// function rollDie(numeroDados){
//     for (let i= 0; i< numeroDados; i++){
//         let roll = Math.floor(Math.random() * 6) + 1;
//         console.log(`he sacado un ${roll}`);
//     }
// }

// rollDie(12);


// const premioLoteria = {
//     normal : 1000,
//     bonoloto : 20000,
//     superpremio : 70000
// }

// for (let objectEntry of Object.entries(premioLoteria)){
//     console.log(objectEntry);
// }

// console.log(premioLoteria[0]);
// console.log(premioLoteria.normal);

// for (let prop in premioLoteria){
//     console.log(prop);
//     console.log(premioLoteria[prop]);
// }

// const notas = {
//     pepe : 6,
//     juan : 8,
//     pedro : 5
// };

// console.log();

// let lasnotas = Object.values(notas);
// console.log(lasnotas);
//     let total =0;
// for(let n of lasnotas){
//     total += n;
// }
// let media = total / lasnotas.length;
// console.log(`la media es ${media}`);

// for (let propiedad of Object.keys(objeto)) {
//     console.log(propiedad, objeto[propiedad]);
// };


// let colores = ['rojo', 'azul', 'amarillo', 'naranja'];

// for (let i=0; i<colores.length; i++) {
//     console.log(colores[i]);
// }

// for (let color of colores){
//     console.log(color);
// }

// for (let char of 'flkajfakjdfklajlfkjañkdfjalñk'){
//     console.log(char.toLocaleUpperCase());
// }

// for (let i = 1; i<= 10; i++) {
//     console.log('hello ', i );
// }


// let nums = [1,2,3];
// let mistery = [1,2,3];
// if (nums == mistery)
//     console.log(true)
// else
//     console.log(false)

//     let moreNums = nums;
// if (nums == moreNums)
//     console.log(true)
// else
//     console.log(false)



// const userReviews = {};
// userReviews['quenenBee33'] = 34;
// userReviews.robinHood = 89;
// userReviews['quenenBee33'] += 100;
// userReviews.quenenBee33 += 100;
// userReviews.robinHood++;



// const colors = {
//     red     : '#eb4d4b',
//     yellow  : '#f9ca24',
//     blue    : '#30336b'
// }

// const colorMisterioso = 'blue';

// console.log(colors.red);
// console.log(colors[colorMisterioso]);
// console.log(colors['ye' + 'llow']);



// const numbers = {
//     100 : 'cien',
//     15 : 'quince'
// }
// console.log(numbers['100']);
//console.log(numbers.100);


// let data = {a:1};

// const fitBitData = {
//     totalSteps : 23987,
//     totalMiles :    34.4,
//     avgCaloriesBurn : 234,
//     workoutsThisWeek : '4 of 7',
//     avgGoodSleep : '2:55',
// };

// console.log(`fitBitData.totalSteps ${fitBitData.totalSteps}`);
// console.log(`fitBitData.totalSteps `, fitBitData.totalSteps);
// console.log(fitBitData.totalMiles);
// console.log(fitBitData.totalSteps);


// const animalPairs = [
//     ['doe', 'buck'],
//     ['ewe', 'ram'],
//     ['peahen', 'peacock']
// ];
// console.log(animalPairs[1][0]);

// const tablerotresenraya = [
//     ['0', null, 'X'],
//     [null, 'X', '0'],
//     ['x', '0', null]
// ];
// console.log(tablerotresenraya);

// console.log(animalPairs[0,1]);
// console.log(animalPairs[0,2]);


// const myEggs = ['white','grey'];
// myEggs.push('violet');
// console.log(myEggs);

// console.log(myEggs.shift());
// console.log(myEggs);

// myEggs.unshift('brown');
// console.log(myEggs);

// console.log(myEggs.pop());
// console.log(myEggs);

// const misHuevos = []; 
// myEggs = misHuevos

// let diasSemana = ['lunes', 'martes', 'miercoles', 'jueves', 'viernes', 'sabado', 'domingo'];
// console.log(diasSemana);
// let laborables = diasSemana.slice(0,5);
// console.log(laborables);
// let festivos = diasSemana.slice(-2);
// console.log(festivos);


// diasSemana.splice(3,2,'thursday', 'friday');
// console.log(diasSemana);
// diasSemana.sort();
// console.log(diasSemana);
// let colors = [`naranja`];
// let miColor = colors;
// miColor.push('azul');
// console.log(colors);
// console.log(miColor);