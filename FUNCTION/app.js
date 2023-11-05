//////////////////////////////////////////9.3.//////////////////////////////

// function max (a, b){
//     if (a === b) return 0;
//     else if (a>b) return a;
//     else return b;
// }
// let a = parseInt(prompt("unesi broj a"))
// let b = parseInt(prompt("unesi broj b"))
// let c = parseInt(prompt("unesi broj c"))
// let d = parseInt(prompt("unesi broj d"))

// let max1 = max(a, b);
// let max2 = max (c, d);
// console.log(max(max1, max2));

////////////////////////////////////////////9.5.///////////////////////////
// let r = parseFloat(prompt("unesi broj r"))

// function Povrsina (r){
//     let Povrsina = 4*r*r*3.14
//     return Povrsina ;
// }

// function Zapremina (r){
//     let Zapremina = (4/3)*r*r*r*3.14
//     return Zapremina;
// }

/////////////////////////////////////////9.7./////////////

// function ZbirKv (a, b){
//     let suma = 0;
//     for(let i=a; i<=b; i++ ){
//     suma += i*i;
//     }
//     return suma;
// }

// function ZbirKvparnih (a, b){
// let suma = 0;
//     for(i=a; i<=b; i++){
//  if(i%2 !== 0) continue
//  suma += i*i;
//  }
//  return suma;
// }

// function ZbirKvneparnih (a, b){
//     let suma = 0
//     for(i=a; i<=b; i++){
//         if(i%2 === 0) continue
//         suma += i*i;
//     }
//     return suma;
// }

// console.log(ZbirKv(1,5))
// console.log(ZbirKvneparnih(1,5))
// console.log(ZbirKvparnih(1,5))

///////////////////////////////////9.11.//////////////////////////////////////
// function faktorijel(n){
//     let faktorijel = 1;
//     for (i = 1; i<=n; i++){
//         faktorijel *= i;
//     }
//     return faktorijel;
// }

// function sumafaktorijel(n){
//     let suma = 0;
//     for (i = 1; i<=n; i++){
//             suma += faktorijel(i);
//             }
// return suma;
// }
// console.log(sumafaktorijel(5));

/////////////////////////9.12.///////////////////////////////////////////

// function faktorijel(n){
//         let faktorijel = 1;
//         for (i = 1; i<=n; i++){
//             faktorijel *= i;
//         }
//         return faktorijel;
//     }

// for (let a = 1; a <= 9; a++){
//     for (let b = 0; b <= 9; b++){
//         for (let c = 0; c <= 9; c++){
// let broj = a*100 + b*10 + c;
// if(broj === faktorijel(a) + faktorijel(b) + faktorijel(c))
// console.log(broj)
//         }
//     }
// }

//////////////////////////////9.15.///////////////////////////////////

// function prost(n){
//     for (let i = 2; i < n; i++ ){
//       if(n % i === 0);  return false;
//     }
//     return true;
// }


// for(let i = 1; i < 500; i++){
//    if(prost(i))
//    console.log(i);
// }
////////////////////////////9.17.///////////////////////////////////

    // for(let i = 100; i <= 999; i++){
    //     let broj1 = i%10;
    //     let broj2 = Math.floor((i/10)%10);
    //     let broj3 =  Math.floor((i/100)%10);
    //     if(Math.pow(broj1, 3) + Math.pow(broj2, 3) + Math.pow(broj3, 3) === i)
    //     console.log(i);
    // }

    // function sumakubova(n){
    //     let suma = 0;
    //     for(n > 0; n < 999; n++){
    //         suma += pow(n%10, 3);
    //             return suma;
    //     }
    // }

    // function amstrongovbroj(n){
    //     if(n === sumakubova){
    //         return 1;
    //     }
    //     return 0;
    // }
///////////////////////////////////9.18.//////////////////////////////

// function sumabrojeva(n){
//      return (n%10) + (Math.floor(n/10)%10) + (Math.floor(n/100)%10)
//     }

//     function nivenovbroj(n){
//         if( n % sumabrojeva(n) === 0){
//         return true;
//         return false;
//         }
//     }
//     for(let i = 101; i <= 200; i++){
//         if(nivenovbroj(i))
//         console.log(i)
      
//     }
/////////////////////////9.29./////////////////////////////////////////////    

// function faktorijel(n){
//     console.log("dobijen je broj:" + n);
//     if(n == 1){
//         console.log("program se zavrsava")
//         return 1
//     }
//     return n * faktorijel(n-1)
// }
// faktorijel(5);

/////////////////////////9.30./////////////////////////////////////////////

// function stepenovanje(broj, stepen){
//     if(stepen === 0) return true;    
//     return broj * stepenovanje(broj, stepen-1);
// }
// console.log(stepenovanje(5,3));

//////////////////////////9.31./////////////////////////////////////////////
// function suma(n){
//     if( n === 1) return true;
//     return n + suma(n-1);
// }
// console.log(suma(6));

////////////////////////////////////9.32./////////////////////////////////////
// function niz(n){
//     if (n === 2) return 1;
//     console.log(n);
//     return niz(n-1);
// }
// console.log(niz(7));

//////////////////////////////9.34.////////////////////////////////////
// function sabiranjecifara(n){
//     if( n === 0) return 0;
//     return n%10 + sabiranjecifara(Math.floor(n/10))
// }
// console.log(sabiranjecifara(456))

/////////////////////////////////////9.35.//////////////////////////////

// let niz = [1,1];
// let brojclanova = 7;

// for(let i = 2; i <= brojclanova; i++){
// niz.push(niz[i-1] + niz[i-2])
// }
// console.log(niz)

// function fibonacijevniz(n){
//     let niz = [1,1];
//     for(let i = 2; i <= n; i++){
// niz.push(niz[i-1] + niz[i-2])
// }
// return niz;
// }
// console.log(fibonacijevniz(7));

//////////////////////////////////////////////////////////////////////////