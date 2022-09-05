const premioLoteria = {
    normal : 1000,
    bonoloto : 20000,
    superpremio : 70000
}

for (let objectEntry of Object.entries(premioLoteria)){
    console.log(objectEntry);
}

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