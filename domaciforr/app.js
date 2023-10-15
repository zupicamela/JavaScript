////////////////////////////////4.16./////////////////////////////////////////

// let a;
// let b;
// let c;
// let d;

// for(a=1; a<=9; a++){
//     for(b=0; b<=9; b++){
//         for(c=0; c<=9; c++){
//             d=100*a+10*b+c; 
//             if(d == ((10*a+b)*(10*a+b)-Math.pow(c,2))){
//                 console.log(a,b,c)
//             }
            
//         }
//     }
// }

// ///////////////////////// 4.17. /////////////////////////

// for(let a= 1; a<=9; a++){
//     for(let b = 0; b<=9; b++){
//     for(let c = 0; c<=9; c++){
//     broj = a*100 + b*10 + c;
//     let dvecifre = a*10 + c;

//     if(broj% dvecifre === 0 )
//     console.log(broj)
//     }
// }
// }

////////////////////////////// 4.18. /////////////////////
// let n = 0;
// let suma = 0;
// for(let a= 1; a<=9; a++){
//         for(let b = 0; b<=9; b++){
//         for(let c = 0; c<=9; c++){ 
//             if ( a + b + c === 5 ){
//                 suma = (a*100 + b *10 + c) + suma
//                 n++;
//                 console.log("suma je ", suma);
//                 console.log("broj je ", n);

//             }
//         }
//     }
// }

// /////////////////////// 4.19. /////////////////////
// let n = parseInt(prompt("unesi broj n"));

// for (let i = 1; i <= n; i++){
//     if(n % i == 0 )
//     console.log(i)
// }

///////////////////4.20. /////////////////////////////////

// let suma = 0;
// let n = parseInt(prompt("unesite broj"));
// for ( i=1; i<n; i++){
//     if(n % i == 0)
//     suma = suma + i;
// }
// if (suma == n){
// console.log("broj n je savrsen ", n);
// }
// else {
//     console.log("broj n nije svrsen", n);
// }

///////////////////////////////////////////////4.21./////////////////

// let n = parseInt(prompt("broj ucenika"))
// let jedinica = 0
// let ocena = 0
// let broj;
// let srednjaocena;

// for ( i=1; i<=broj; i++){
// console.log("ocena je", i);
// let ocena = parseInt(prompt("ocena je"))
// s+=ocena;
// if(ocena==1){
//     jedinica++
// }
// }
// srednjaocena = s/n
// console.log("srednja ocena je = ", srednjaocena);

////////////////////////////////4.22.///////////////////////


// let n = parseInt(prompt("unesi broj"))

// for(sat=0; sat<=23; sat++){
// for(min=0; min<=59; min++){
// for(sec=0; sec<=59; sec++){
//     if(n==(sat / 10 + sat % 10 + min / 10 + min % 10 + sec / 10 + sec % 10)) 
//     console.log(`${sat}` )
    
// }
// }
// }