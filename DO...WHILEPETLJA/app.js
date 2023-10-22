///////////////////6.1./////////////////////
// let i = 0;
// do{
//     console.log(i)
//     i++
// }
// while( i < 10)

/////////////////////////////////////6.2./////////

// let i = 0;
// do{
//     console.log(i)
//     i++
// }
// while( i <= 10)

// let i = 10;
// do{
//     console.log(i)
//     i--;
// }
// while( i >= 1)

// let i = 0;
// do{
//     console.log(i)
//     i+=2
// }
// while( i <= 10)

////////////////////////////6.3./////////////////////////////
// let n ;
// do{
// n =  parseFloat(prompt("unesi broj n"));
// }
// while(n*n >= 100)

///////////////////////////6.4.///////////////////////////////

// let n = parseFloat(prompt("unesi broj n"));
// let i = 1;

// do{
//     console.log(i)
//     i=2*i

// }
// while(i<=n)

// drugi nacin:
// let n = parseFloat(prompt("unesi broj n"))
// let stepen = 0
// let broj = 2

// do{
//     console.log(Math.pow(broj, stepen));
//     stepen++
// }
// while(Math.pow(broj, stepen) <= n)

/////////////////////////////////////6.8.////////////////////////
// let n = parseInt(prompt("unesi broj n"))
// let m = parseInt(prompt("unesi broj m"))
// let broj = n;

// do{
//     if( n < 0 || m > 100){
//     parseInt(prompt("unesi broj n"))
//     parseInt(prompt("unesi broj m"))
//     broj = n;
//     }
//     else{
//         if ( broj % 4 === 0){
//             console.log(broj)
//         }
//         broj++
//     }
// }
// while( broj <= m)

////////////////////////////////6.9.////////////////////////////////////

// let i = 100;
// let suma = 0;

// do{
//     if(i % 64 === 0){
//         suma = suma + i
//         console.log(i)
//     }
//     i ++

// }
// while( i<=999)
// console.log("suma je", suma)

/////////////////////////////////////////6.10.//////////////////////////////////

// let m = parseInt(prompt("unesi broj m"))
// let n = parseInt(prompt("unesi broj n"))

// do{
//     if(m>=0 || m<=10){

//     }

// else if(m == Math.floor(n/10)){
//         console.log(n)
//     }
//     n++
//   }
// while(n>m)

// drugi pokusaj: drugi pokusaj: drugi pokusaj: drugi pokusaj: drugi pokusaj: drugi pokusaj: drugi pokusaj: drugi pokusaj: drugi pokusaj:

// let m = parseInt(prompt("unesi broj m"))
// let broj ;

// for ( let i = 0; i<m; i++){
//         let n = parseFloat(prompt(`unesite ${i+1} element:`))
//         broj = n
// }

// do{
//     if(m>=0 || m<=10){
//     }
//     if(m === Math.floor(broj/10)){
//         console.log(`${broj}`)
//     }
//     broj++
//   }
// while(broj<100)

// treci pokusaj treci pokusaj treci pokusaj treci pokusaj treci pokusaj treci pokusaj treci pokusaj treci pokusaj treci pokusaj

// let n = parseInt(prompt("unesi broj n"))
// let broj;
// let brojac = 0;

// if(n<=0 || n>10)
// do{
//     let n = parseInt(prompt("unesi broj n"))
// }
// while(n<=0 || n>10)

// do{
//     let broj = parseInt(prompt("unesi broj "))
//     let pom = broj;
//     while(pom > 10){
// pom = Math.floor(pom/10)
//     }
//     if(pom === n)
//     brojac ++
// }
// while( broj != 0)
// console.log(brojac);

//////////////////////////////////SKOKOVI//////////////////////////////////////////
// 7.2.
// let n;

// do{
//   n = parseFloat(prompt("unesi broj n"))
//    if(n < 0) break
//    console.log(n*n)
// }
// while(true)

////////////////////////////////////////////7.3.////// map, filter, slice, split, join, concat//////////////////////

// let n;
// let i = 0;
// let Output = " ";

// for(let i = 0; i < 100; i++){
//   n = parseFloat(prompt("unesi broj n"))
//   if(n === 0 || n === 100)
// break;
//   Output += `${n}, `
// }
// console.log(Output)

/////////////////////////////////////7.4.////////////////////////////////
// let i;

// for( i = 1; i < 500; i++){
//   if(i % 3 === 0 && i % 4 === 0 && i % 5 === 0 && i % 7 === 0 ){
//     console.log(i);
//     break;
//   }
// }
/////////////////////////////////7.7.////////////////////////////

// for(let i = 1; i<=100; i++){
//   let j = 2;
//   for(; j <= i; j++){
//     if(i % j === 0) break;
//   }
//   if(i === j){
//     console.log(i);
//   }
// }
////////////////////////////////////////////////////////////////////

//////////////////////////////////CONTINUE///////////////////////////////////////////////
// 7.9.
// let i;

// for(i=1; i<10; i++){
//   if( i % 2  ) continue;
//   console.log(i)

// }
//////////////////////////////7.11.///////////////////////////////////
// let i;

// for(i=0; i<20; i++){
//   if(i % 3 === 0 ) continue;
//   console.log(i)
// }
////////////////////////7.12./////////////////////////////////////
// let n;
// let suma = 0;

// do{
//  n = parseInt(prompt("unesi broj n"));
//  if(n === 0) break;
//  if(n < 0) continue;
// suma += 1 / (n*n)
// console.log(suma)
// }
// while(true)

////////////////////////SWITCH...CASE//////////////////////////
// 7.19.

// let n = parseInt(prompt("unesi broj n"))

// switch (n){
//   case 1 :
//     console.log("ponedeljak");
//     break;
//     case 2 :
//     console.log("utorak");
//     break;
//     case 3 :
//     console.log("sreda");
//     break;
//     case 4 :
//     console.log("cetvrtak");
//     break;
//     case 5 :
//     console.log("petak");
//     break;
//     case 6 :
//     console.log("subota");
//     break;
//     case 7 :
//     console.log("nedelja");
//     break;
//     default:
//       console.log("nije dobro")
//       break;
// }

/////////////////////////////////////7.20./////////////////////////////////

// let n = prompt("unesi broj n")

// switch(n){
//   case "a" :
//     console.log("samoglasnik")
//     break;
//     case "e" :
//     console.log("samoglasnik")
//     break;
//     case "i" :
//     console.log("samoglasnik")
//     break;
//     case "o" :
//     console.log("samoglasnik")
//     break;
//     case "u" :
//     console.log("samoglasnik")
//     break;
//     default :
//     console.log("nije dobro")
//     break;

// }
/////////////////////////////////7.22.//////////////////////////////////////////////
// let a = prompt("unesi znak")
// let b = parseInt(prompt("unesi broj b"))
// let c = parseInt(prompt("unesi broj c"))

// switch(a){
//   case "+" :
//     console.log(b+c);
//     break;
//     case "-" :
//     console.log(b-c);
//     break;
//     case "*" :
//     console.log(b*c);
//     break;
//     case "/" :
//     console.log(b/c);
//     break;
// }
///////////////////////////////////////7.24.////////////////////////////////////////
// let a = parseInt(prompt("unesi godinu"));
// let b = parseInt(prompt("unesi mesec"));
// let dan;

// switch (b) {
//   case 1:
//   case 3:
//   case 5:
//   case 7:
//   case 8:
//   case 10:
//   case 12:
//     dan = 31;
//     break;

//   case 4:
//   case 6:
//   case 9:
//   case 11:
//     dan = 30;
//     break;

//   case 2:
//     dan = 28 + ((a % 4 === 0 && a % 100 === 0) || a % 400 === 0);
//     break;

//   default:
//     dan = 0;
//     break;
// }
// console.log(dan);
////////////////////////////////7.//////////////////////////////////////////////
