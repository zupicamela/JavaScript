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

// split = 
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
//     if(recenica[i] === "A" ){
//         slovoA ++
//     }
//     console.log(`Ima ${slovoA} slova A`)
// }

//////////////////////////8.9.///////////////////////////////////
while(true){
    let znaci = 0;
    let razmak = 0;
    let rec = prompt("unesi recenicu")
    if(rec === "0")
    break;
for(let i = 0; i < rec.length; i++)
if(rec[i] === " " || rec[i] === "/" || rec[i] === ";" || rec[i] === ":" || rec[i] === "," || rec[i] === "." || rec[i] === "<" || rec[i] === ">" || rec[i] === "[" || rec[i] === "]"){
     znaci++
        razmak++
}
console.log(`Ima ${znaci} znaka i ${razmak} razmaka`);
}