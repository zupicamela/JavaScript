
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

let i = 100;
let suma = 0;


do{
    if(i % 64 === 0){
        suma = suma + i
        console.log(i)
    }
    i ++
   
}
while( i<=999)
console.log("suma je", suma)








