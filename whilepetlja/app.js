//////////////////////// 5.7. a
// fp=1; fpp=1;

// let n = parseInt(prompt("unesi broj n"))

// let rowOutput = '1 1';

// let i = 3;

// while(i<=n){
//     let pom = fp + fpp
//     rowOutput += '${pom}'
//     fp = fpp;
//     fpp = pom;
//     i++
// }
// console.log(rowOutput)

///////////////////////5.7. b
// fp=1; fpp=1;

// let n = parseInt(prompt("unesi broj n"))

// let rowOutput = '1 1';

// let i = 3;
// suma = 2;


// while(i<=n){
//     let pom = fp + fpp
//     rowOutput += '${pom} '
//     fp = fpp;
//     fpp = pom;
//     let suma = suma += pom
//     i++
// }
// console.log(rowOutput, suma);

////////////////////////////////5.8.

// let a = parseInt(prompt("unesi broj a"))

// let n = parseInt(prompt("unesi broj n"))

// c=1;  i= 1;

// while(i<=n) {
//     c*=a;
//     i++
//     console.log(c);
// }

///////////////////////////5.9.
// let suma = 0, iterator = 0;
// let stop = parseInt(prompt("unesi broj ")) ;

// while(stop !==0){
// suma += stop;
// stop = parseInt(prompt("unesi broj ")) 
// iterator ++

// }
// console.log(suma / iterator);

/////////////////////5.10.

// let suma = 0, iterator = 0;
// let a = parseInt(prompt("unesi broj ")) ;
// while(a !==0){
//     if(a>=2 && a <= 6){   
//         suma += a;
//         iterator ++
//     }
    
// a = parseInt(prompt("unesi broj ")) 
// }
// console.log(suma / iterator);

//////////////////5.12
// n = parseInt(prompt("unesi broj "))
// m = parseInt(prompt("unesi broj "))

// if(m > n){
//     // [m,n] = [n,m]
//     let pom = m;
//     m = n;
//     n = pom;
// }

// let i = m, suma = 0;

// while(i <= n){
//     if( i % 2 === 1)
//     suma += Math.sqrt(i)
//     i++
// }

// console.log(suma);

////////////////////////////////////////////////// DOMACI //////////////////////////////////////////////

//////////// 5.17. /////////////

// a = parseInt(prompt("unesi broj "));
// b = parseInt(prompt("unesi broj "));

// while(b!=0){
//     i=a;
//     a=b;
//     b=i%b;
// }
// nzd=a;

// console.log(nzd)

////////////////// 5.18. /////////
// let n = parseInt(prompt("unesi broj "));

// let suma = 0;

// let pom = n;

// while(pom >= 1){
//     suma += pom % 10
//  pom = Math.floor(pom / 10)
// }
// if(n % suma === 0){
//     console.log("deljivo")
// }
// else{
//     console.log("nije deljivo")        (% ostatak npr 126%10 (12,6 ZNACI 6))
// }

////////////// 5.19.///////

// let n = parseInt(prompt("unesi broj "));
// let obrnuto = 0;

// while(n > 0){
//     obrnuto = obrnuto * 10 + n % 10;
//     n = Math.floor(n/10);
// }
// console.log(obrnuto);


//////////////////// 5.20. ////////////////////////////////////
// let n = parseInt(prompt("unesi broj "));

// for(let i = 2; i<=n; i++){
//     while(n % i === 0){
//         n /= i;
//         console.log(i);
//     }
// }

///////////////////////////////// 5.21. ////////////////////////////

// for(let a = 1; a<=20; a++){
//     for(let b = 1; b<=20; b ++){
//        let i=a*a+b*b;
//        let c = 1;
//         while(c*c<=i){
//             if(c*c === i){
//                 console.log(a,b,c)
//             }
//             c++
//         }
//          }
//           }

/////////////////////////////////////////////////////////////////////////////

      
      
    

    











