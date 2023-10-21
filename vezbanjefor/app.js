//////////////////////////// 2.26. /////////////////////////
// let a
// let b
// let c
// let s
// let p
// let xa = 1
// let xb = 1
// let xc = 2
// let ya = 1
// let yb = 4
// let yc = 5

// a = Math.sqrt(Math.pow(xb-xc, 2) + Math.pow(yb-yc, 2));

// b = Math.sqrt(Math.pow(xc-xa, 2) + Math.pow(yc-ya, 2));

// c = Math.sqrt(Math.pow(xa-xb, 2) + Math.pow(ya-yb, 2));

// s = (a+b+c)/2;

// p = Math.sqrt(s*(s-a)*(s-b)*(s-c));

// console.log(p);

///////////////// 2.27//////////////////////////////////////////
// let n = parseInt(prompt("unesi broj n"));
// let a = Math.floor(n/100);
// let b = Math.floor((n/10)%10);
// let c = Math.floor((n%10));

// let i = a+b+c;

// console.log(i);

////////////////////// 2.28. ///////////////////////////////////
// let n = parseInt(prompt("unesi broj n"));
// let a = Math.floor(n / 500);
// let b = Math.floor((n - (a * 500)) / 100);
// let c = Math.floor((n - (a * 500)) % 100);

// console.log(a);
// console.log(b);
// console.log(c);

////////////////////// domaci: 2.29. 2.30. 3.1. 3.2. 3.3. 3.4. 3.5. ////////////////////////////////////
// 2.29.
// let n = parseInt(prompt("unesi broj n:"));
// let sat;
// let min;
// let dan;
// let sek;

// dan = sat % 24;
// sat = sat % 24;
// sat = min / 60;
// min = min % 60;
// min = sek / 60;
// sek = sek % 60;

//  console.log(dan, sat, min, sek);

/////////////////////////////// 3.1. //////////
// let n = parseInt(prompt("unesi broj n:"));
// let a;
// if ( a%2 == 0){
//     console.log("broj je paran");
// }
// else (a%2 = 0)
//  {
//     console.log("broj je neparan");
// }

///////////////////////////// 3.2. ////////
// let n = parseInt(prompt("unesi broj n:"));
// let a
// if (a > 0){
//     console.log("pozitivan je");
// }
// else if (a < 0) {
//     console.log("negativan je");
// }
// else if (a===0) {
//     console.log("jednak je nuli");
// }

///////////////////////////// 3.3. //////////////
// let n = parseInt(prompt("unesi broj n:"));
// let m = parseInt(prompt("unesi broj m:"));

// if(n > m){
//     console.log("n je vece od m")
// }
// else (n < m)
// {
//  console.log("n je manje od m")
// }

////////////////////////////// 2.30.//////////////

// let radijani = parseFloat(prompt("unesi broj n"))
// radijani = radijani * 180 / Math.PI;

// let stepeni = Math.floor(radijani);

// radijani = radijani - stepeni;

// let minuti = Math.floor(radijani * 60);

// console.log(radijani)

// console.log(stepeni, minuti, sekunda)
/////////////////////////////////////////////////////

///////////////////////// 3.7. ////////////////////

// let n = parseInt(prompt( "Unesite broj n"));

// if(n <= 50){
//     console.log("ocena je 5");
// }
// else if (n <= 60){
//     console.log("ocena je 6");
// }
// else if (n <= 70){
//     console.log("ocena je 7");
// }
// else if (n <= 80){
//     console.log("ocena je 8");
// }
// else if (n <= 90){
//     console.log("ocena je 9");
// }
// else if (n <= 100){
//     console.log("ocena je 10");
// }

/////////////////////// 3.8.///////////////////

// let a = parseInt(prompt("unesi broj a:"));
// let b = parseInt(prompt("unesi broj b:"));
// let c = parseInt(prompt("unesi broj c"));

// if((a <= Math.pow(c,2)) && (b >= Math.pow(c,2))){
//     console.log("pripada");
// }
// else
// console.log("ne pripada");

////////////////////////////3.9.//////////////////////////

// let a = parseInt(prompt("unesi broj a:"));
// let b = parseInt(prompt("unesi broj b:"));

// if(a>b) {

//     console.log("rezultat je", a-b);
// }

// else (a<b)
// console.log("rezultat je", b-a)
//////////////////////////3.13./////////////////////////////

// let a = parseInt(prompt("unesi broj a:"));
// let b = parseInt(prompt("unesi broj b:"));
// let c = parseInt(prompt("unesi broj c"));
// let s;
// let p;

// if (a+b>c && a+c>b && b+c>a) {
//     s = (a+b+c)/2;
// p = Math.sqrt(s*(s-a)*(s-b)*(s-c));

// console.log("formira trougao");
// }

// else
// console.log("ne formira se trougao");
//                  ili
// console.log(p || "ne formira se trougao")

////////////////////////////////4.5.////////////////////////////////////////////////////////

// let n = parseInt(prompt("unesi broj n:"));
// let suma = 0;

// for ( let i = 0; i<n; i++){
//     let broj = parseFloat(prompt(`unesite ${i+1} element:`))
//     suma += broj
// }

// console.log(`Suma je ${suma} a vrednost je: ${suma/n}`);
////////////////////////////////4.6./////////////////////////////////////////////

// let n = parseInt(prompt("unesi broj n:"));
// let f = 1;

// for(let i=1; i<=n; i++) {
//     let broj = parseFloat(prompt(`unesite ${i+1} element:`));
//     f *= broj;
// }
// console.log(`faktorijel je ${f}`);

///////////////////////////////4.12.///////////////////////////////////////

// let n = parseFloat(prompt("unesi broj n"))
// let  max = 0;
// let broj;

// for(let i = 0; i<=n; i++){
//     let broj = parseFloat(prompt(`unesi ${i} element`))
//     if(max < broj){
//         max = broj;
//     }
// }
// console.log(max);

////////////////////////////////4.13.////////////////////////////////////////////
// let suma = 0;

// for (let i = 1; i <= 100; i++) {
//   if (i % 6 == 0) {
//     suma = suma + i;
//     console.log(i);
//   }
// }

// console.log("suma je ", suma);

//////////////////////////4.14./////////////////////////////////////////

// let a;
// let b;
// let c;

// for(a=1; a<=9; a++){
//     for(b=1; b<=9; b++){
//         for(c=1; c<=9; c++){
//             if(b === a+2 && c === b+1 ){
//                 console.log(a,b,c)
//             }
            
//         }
//     }
// }

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





//////////////////////////////////////////////////4.37.////////////////////
// let n = parseInt(prompt("unesi broj n:"))

// let rowOutput = "+";


// for (let i = 0; i < n-2; i++){
//     rowOutput += "-"
// }
// rowOutput += "+"
// console.log(rowOutput)

// for(let j = 0; j < n-2; j ++){
//     rowOutput = ""
// for (let i = 1; i <= n ; i++){
//     if(i === 1 || i === n ){
//         rowOutput += "|"
//     }
//     else{
//         rowOutput += " " 
//     }
// }

// console.log("")
// console.log(rowOutput)
// }

// rowOutput = "+";


// for (let i = 0; i < n-2; i++){
//     rowOutput += "-"
// }
// rowOutput += "+"
// console.log(rowOutput)


///////////////////////////////////////////////////4.36/////////////

// let n = parseInt(prompt("unesi broj n:"))

// let rowOutput = "+";


// for (let i = 0; i < n-2; i++){
//     rowOutput += "-"
// }
// rowOutput += "+"
// console.log(rowOutput)

// for(let j = 0; j < n-2; j ++){
//     rowOutput = ""
// for (let i = 1; i <= n ; i++){
//     if(i === 1 || i === n ){
//         rowOutput += "|"
//     }
//     else{
//         if( i === j+2 ){
//             rowOutput += "/"
//         }
//         rowOutput += " " 
        
//     }
// }

// console.log("")
// console.log(rowOutput)
// }

// rowOutput = "+";


// for (let i = 0; i < n-2; i++){
//     rowOutput += "-"
// }
// rowOutput += "+"
// console.log(rowOutput)


////////////////////////////////////////////4.35///////////////////////////////

// let n = parseInt(prompt("unesi broj n:"))

// let rowOutput = "+";


// for (let i = 0; i < n-2; i++){
//     rowOutput += "-"
// }
// rowOutput += "+"
// console.log(rowOutput)

// for(let j = 0; j < n-2; j ++){
//     rowOutput = ""
// for (let i = 1; i <= n ; i++){
//     if(i === 1 || i === n ){
//         rowOutput += "|"
//     }
//     else if (j+2 === Math.ceil(n/2) ){
//         if(i === Math.ceil(n/2) && j+2 === Math.ceil(n/2)){
//             rowOutput += "+"
//         }
//         else{
//             rowOutput += "-"
//         }
//     }
//     else if (i === Math.ceil(n/2)){
//         rowOutput += "|"
//     }
//     else{
        
//         rowOutput += " " 
//     }    


// }

// console.log("")
// console.log(rowOutput)
// }

// rowOutput = "+";


// for (let i = 0; i < n-2; i++){
//     rowOutput += "-"
// }
// rowOutput += "+"
// console.log(rowOutput)

//////////////////////////////////4.34.//////////////////////////////
// let n = parseInt(prompt("unesite broj n"));
// let rowOutput = "+";

// for (let i = 0; i < n-5; i++){
//     rowOutput += "-"
// }
// rowOutput += "+"
// for (let i = 0; i < n-5; i++){
//     rowOutput += "-"
// }
// rowOutput += "+"
// console.log(rowOutput)



// for(let j = 0; j < n-2; j ++){
//     rowOutput = ""
// for (let i = 1; i <= n ; i++){
//     if(i === 1 || i === n ){
//         rowOutput += "|"
//     }
    
    
//     else if (i  === Math.ceil(n/2)){
//         rowOutput += "|"
//     }
//     else{
//         rowOutput += " "
//     }
    

// }

// console.log("")
// console.log(rowOutput)
// }

























