// LENGTH = DUZINA
// let recenica = "Ana voli Milovana";
// console.log(recenica[5], recenica.length);
/////////////////////////////////////////////

// SLICE = PRESECE (ima negativne brojeve)
// let recenica = "Ana voli Milovana";
// console.log(recenica.slice(8));
// console.log(recenica.slice(0, 8));
// console.log(recenica.slice(-17, -8));
//////////////////////////////////////////////

// SUBSTRING = KAO SLICE (nema negativne brojeve)

// SUBSTR = 
// let recenica = "Ana voli Milovana";
// console.log(recenica.substr(2, 5));
///////////////////////////////////////////

// REPLACE = ZAMENA
// let recenica = "Ana voli Milovana";
// console.log(recenica.replace("Ana", "Amina"));
// let recenica = "Ana Ana Ana voli Milovana";
// console.log(recenica.replaceAll("Ana", "Amina"));
////////////////////////////////////////////////

// toLowerCase = sve mala slova
// let recenica = "Ana voli Milovana";
// console.log(recenica.toLowerCase());
//////////////////////////////////////

// toUpperCase = sve velika slova
// let recenica = "Ana voli Milovana";
// console.log(recenica.toUpperCase());
/////////////////////////////////////////

// concat = spoji dva stringa
// let recenica = "Ana voli Milovana";
// let recenica2 = "Osisao se Amin";
// console.log(recenica2 + " " + recenica);
// console.log(recenica2.concat(recenica))
////////////////////////////////////////

// trim = skrati (trimStart manke razmak na pocetku, trimEnd makne razmak na kraju)
// let trimRecenica = "  Tarik je prof  ";
// console.log(trimRecenica.trim());
/////////////////////////////////////////////////

// padStart, padEnd
// let primer = "5";
// console.log(primer.padStart(4, "0"));
// console.log(primer.padEnd(4, "0"));
/////////////////////////////////////////////////

// CharAt, CharCodeAt, []

// let recenica = "Hasane ostavi telefon"
// console.log(recenica[2]);
// console.log(recenica.charAt(2));
////////////////////////////////////

// split = odvaja reci od razmaka do razmaka
// let recenica = "Ana voli Milovana";
// let niz = []
// for(let i = 0; i < recenica.length; i++){
//     console.log(recenica[i])
//     niz.push(recenica[i])
// }
// console.log(niz);

// let recenica = "Ana voli Milovana";
// let niz = recenica.split("A");
// console.log(niz);
////////////////////////////////////////////////

// SPLICE = 
// let recenica = "Ana voli Milovana";
// console.log(recenica.split(" ").splice(0, 3, "NESTO").join());
/////////////////////////////////////////////////////

// indexOf, match, matchAll, includes()

// let recenica = "Ana Ana Ana Ana voli Milovana";
// console.log(recenica.indexOf("vol"));
// console.log(recenica.lastIndexOf("Ana"));
/////////////////////////////////////////////////

// INCLUDES = proverava da li ta rec ima u recenici
// let recenica = "Ana Ana Ana Ana voli Milovana";
// console.log(recenica.includes("Milovana"));
// console.log(recenica.includes("Amela"));
/////////////////////////////////////////


//////////////////////Sastavi program za ispisivanje broja reci koje ce korisnik da unese////////////////////////////
// let recenica = prompt("unesi recenicu");
// console.log(recenica.split(" ").length);

/////////////////////////8.6.///////////////////////

// while(true){
//     let brsamoglasnici = 0;
//     let suglasnici = 0;

//     let rec = prompt("unesi rec")
//     for(let i = 0; i < rec.length; i++)
//     if(samoglasnici.includes(rec[i]))
//     {
//         brsamoglasnici++
    
//     }
//     else{
//         suglasnici++
//     }
// console.log(`Ima ${suglasnici}suglasnika, i ${brsamoglasnici} samoglasnika`)
// }

// DRUGI NACIN:
// while(true){
//     let brsamoglasnici = 0;
//     let suglasnici = 0;
//     let rec = prompt("unesi rec")
//     if(rec === "0")
//     break
// for(let i = 0; i < rec.length; i++)
// if(rec[i] === "a" || rec[i] === "e" || rec[i] === "i" || rec[i] === "o" || rec[i] === "u" )
// {
//     brsamoglasnici++
// }
// else{
//     suglasnici++
// }
// console.log(`Ima ${suglasnici}suglasnika, i ${brsamoglasnici} samoglasnika`)
// }


////////////////////////////////////////////8.7.///////////////////////////////////////////////////
// while(true){
//     let veliko = 0;
//     let malo = 0;
//     let recenica = prompt("unesi recenicu")
//     if(rececenica === "0")
//     break
// for(let i = 0; i < recenica.length; i++)
// if(recenica[i] === recenica[i].toUpperCase()){
//     veliko++;
// }
// else {
//     malo++;
// }
// console.log(`Velika slova ${veliko} i mala slova ${malo}, broj karaktera je ${recenica.length}`)
// }

// //////////////////////8.8.////////////////////////////////
// while(true){
//     let slovoA = 0;
//     let recenica = prompt("unesi recenicu")
//     if(recenica === "0")
//     break;
//     for(let i = 0; i < recenica.length; i++)
//     if(recenica[i] === "a" ){
//         slovoA ++
//     }
//     console.log(`Ima ${slovoA} slova A`)
// }

//////////////////////////8.9.///////////////////////////////////
// while(true){
//     let znaci = 0;
//     let razmak = 0;
//     let rec = prompt("unesi recenicu")
//     if(rec === "0")
//     break;
// for(let i = 0; i < rec.length; i++)
// if( rec[i] === "/" || rec[i] === ";" || rec[i] === ":" || rec[i] === "," || rec[i] === "." || rec[i] === "<" || rec[i] === ">" || rec[i] === "[" || rec[i] === "]"){
//      znaci++
// }
// else if(rec[i] === " "){
//     razmak++
// }
// console.log(`Ima ${znaci} znaka i ${razmak} razmaka`);
// }

////////////////////8.12./////////////////////////////////////////////
// let zagrada = prompt("unesi recenicu")
// let otvorene = 0;
// zatvorene = 0;

// for(let karakter of zagrada) {
//     if(karakter === "("){
//         otvorene++
//     } else if (karakter === ")") {
//         zatvorene++
//     }
// }

// if(zatvorene === otvorene)
// console.log("dobro je")
// else console.log("nije dobro")

/////////////////////////////////8.13////////////////////////////////////
// let recenica = prompt("unesi recenicu")
// console.log(recenica.toLowerCase());

/////////////////////////////8.14///////////////////////////////////////
// let rec = prompt("unesi recenicu")
// console.log(rec.toUpperCase());

////////////////////////8.15///////////////////////////////////////
// let recenica = prompt("unesi recenicu")

// for(let i = 0; i < recenica.length; i++){
//     console.log(recenica[i])
//     if(i === 0){
//        recenica[i] = recenica[i].toUpperCase()
//     }
//     else{
//         recenica[i] = recenica[i].toLowerCase
//     }
// }
// console.log(recenica);

////////////////////////8.16///////////////////////////////
// let input = prompt("unesi recenicu"), output = " ";

// for(let i = 0; i < input.length; i++){
//     if(input[i] === " "){
//         if(output[output.length-1] !== " ")
//         output += input[i]
//         }
//         else{
//             output += input[i]
//     }
// }
// console.log(output)

/////////////////////8.17.//////////////////////////////////////
// let input = prompt("unesi recenicu") ;
// let inputArray = input.split(" ")

// for(let word of inputArray){
//     console.log(word)
// }


// console.log("nesto \n jos nesto \n jos nesto \n")

// console.log("nesto \t jos nesto \t jos nesto \t")

////////////////////////////////////////////////////////////

