// for(let i=0; i<100; i++){         i++ laksi nacin da definisemo petlju
//     console.log("nesto")           i<100 bukv if u petlji
// }

// for( let i=1; i<=10; i++){
//     console.log(i)
// }

// for( let i=1; i<=10; i+=2){
//     console.log(i)
// }
// for(let i=1; i<10; i++ ){
//     if( i % 2 === 1)
//     console.log(i)
// }
// for(let i = 10; i>=1; i--){
//     console.log(i)
// }




// let n = parseInt(prompt("Unesite n:"))

// let max = 0;

// for(let i = 1; i <= n; i++){
//     let broj = parseFloat(prompt(`Unesite broj ${i}:`))
//     if(max < broj){
//         max = broj
//     }
// }

// console.log(max);


// let suma = 0;

// for(let i = 0; i <= 100; i++){
//     if(i % 6 === 0){
//         console.log(i);
//         suma+=i
//     }
// }

// console.log(suma);



//////////////////////////////////
// 4.14
//  for(a=1; a<=9; a++)
//  for(b=3; b<=9; b++)
//  for(c=4; c<=9; c++)
//  if(b == a+2 && c == b+1)
//  console.log("%d%d%d\n", a, b, c);

///////////////////////////////////
// 4.15
// for(let i= 100; i<=1000; i++){
//     let a = Math.floor(i/100)
//     let b = Math.floor((i % 100)/10)
    // let c = i % 10

//     if(Math.pow(a,3) + Math.pow(b,3) + Math.pow(c,3) ===1)
//     console.log(i)
// }
 

//////////////////////////////
// 4.16

// for(let i= 100; i<=1000; i++) {
//     let dvecifre= Math.floor(i/100)
//     let c = i % 10

//     if(Math.pow(dvecifre,2) - Math.pow(c,2) === 1)
//     console.log(i)
// }


///////////////////////////////
// 4.17
 


// for(let a= 1; a<=9; a++){
//     for(let b = 0; b<=9; b++){
//     for(let c = 0; c<=9; c++){
//     broj = a*100 + b*10 + c;
//     let dvecifre = a*10 + c;

//     if(broj% dvecifre ===0 )
//     console.log(broj)
//     }
// }
// }

///////////////////////
// 4.18
// let n = 0;
// let suma = 0;
// for(let a= 1; a<=9; a++){
//         for(let b = 0; b<=9; b++){
//         for(let c = 0; c<=9; c++){ 
//             if ( a + b + c === 5 ){
//                 suma += a*100 + b *10 + c
//                 n++;
//                 console.log("suma je ", suma);
//                 console.log("broj je ", n);

//             }
//         }
//     }
// }



///////////////////
// 4.19

// let broj = parseInt(prompt("unesite broj"))
// console.log("Delioci broja su")
// for (let i = 1; i<= broj; i++){
//     if(broj % i ===0 )
//     console.log(i)
// }

///////////////////
// 4.20

// let n 
// let i
// let suma = 0
// let broj = parseInt(prompt("unesite broj"))
// console.log("broj =");
// for ( i=1; i<broj; i++){
//     if(broj%i==0)
//     suma += i;
// }
// if (suma==broj){
// console.log("broj je savrsen ", broj);
// }


//////////////////////////////
// 4.21

// let n = parseInt(prompt("broj ucenika"))
// let jedinica = 0
// let ocena = 0

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

////////////////////////         4.26 do 4.30
// 4.22

// let n = parseInt(prompt("unesi broj"))

// for(sat=0; sat<=23; sat++){
// for(min=0; min<=59; min++){
// for(sec=0; sec<=59; sec++){
//     if(n==(sat / 10 + sat % 10 + min / 10 + min % 10 + sec / 10 + sec % 10)) 
    // console.log('$(sat)': )
    
// }
// }
// }

/////////////////////////// domaci ////////////////////////////////////////////////////////////////////////
// 4.26
// aaaaaaaaaaaaaaaa
// let n = parseInt(prompt("unesi broj n:"))

// for(i=0; i<n; i++){
//     for(z=0; z<10; z++)
//     console.log("*")
//     console.log("")
// }


// bbbbbbbbbbbbbbbb
// let n = parseInt(prompt("unesi broj n:"))

// for(i=0; i<n; i++){
//     let rowInput = ''
//     for(z=0; z<10; z++){
//         rowInput += '${z}'
//     }
//     console.log(rowInput)
// }

//////////////////////////
// // 4.27
// let m = parseInt(prompt("unesi broj m:"))
// let n = parseInt(prompt("unesi broj n:"))
// let ASCII = parseInt(prompt("unesi broj ASCII:"))

// for(i=0; i<n; i++){
//  for (z=0; z<m; z++){
//  console.log(z)             
//     }
//     console.log("/n")
// }

 //////////////////////////////////
// 4.28
// aaaaaaaaaaa
// let n = parseInt(prompt("unesi broj n:"))

// for(let i=1; i<=5; i++){
//     for(z=1; z<=5; z++)
//     console.log("*")
//     console.log("")
// }


// bbbbbbbbbbbbbb
// let n = parseInt(prompt("unesi broj redova:"))
// let m = parseInt(prompt("unesi broj kolona:"))

// for(let i=1; i<=n; i++){
//     let rowOutput = '';
//     for(let j = 0; j<=m; j++){
//         if(i === 1 || i === n){
//             rowOutput += "*"
//         }
//         else{
//             if(j === 1 || j === m){
//                 rowOutput += "*"
//             }
//             else{
//                 rowOutput += ""
//             }
//         }
//     }
//  console.log(rowOutput);
// }


// vvvvvvvvvv
// let n = parseInt(prompt("unesi broj n:"))

// for( let i=1; i<=5; i++){
//     for(z=1; z<=i; z++)
//     console.log("*")
// console.log("")
// }

///////////////// dddddddddddddddd
// let n = parseInt(prompt("unesi broj n"))

// for( let i=1; i<=5; i++){
//     for(z=n; z>=i; z--)
//     console.log("*")  if (i>=j){}
// console.log("")
// }
 
//////////////////////// ggggggggggg
// let n = parseInt(prompt("unesi broj n:"))
// let m = parseInt(prompt("unesi broj m:"))

// for( let i = 1; i<=n; i++ ){
//     let rowOutput = '';
//     for( let j = 1; j <= m; j++){
//             if(i === n){

//                 prepisi sa git huba    
//                 DOMACI OSTATAK
//         }
//     }
// }





////////////////////
// 4.29
// let n = parseInt(prompt("unesi broj n:"))
// for(i=1; i<=5; i++){
//     for(Z=0; z>i; z--){
//         console.log("");
//         for(s=0; s<i; s++)
//         console.log("")
//     }
// }




    








