// niz = [1,2,3,4,5,6,7,8,9]
// let niz2 = [1,2,3,4,5]
// console.log(niz.concat(niz2));

// console.log(niz.slice(0, 4));
// console.log(niz.join(""));
// console.log(niz.revese());

// let nesto = niz.push(-1,-2,-3)
// console.log(niz);
// console.log(nesto);

// let izbrisani = niz.pop()
// console.log(niz)
// console.log(izbrisani)

// let shiftovani = niz.shift();
// console.log(niz);
// console.log(shiftovani);

// niz.unshift(0)
// console.log(niz)

// delete niz[3];

// let niz = [[1,2,3], [4,5,6], [7,8,9]]
// console.log(niz.flat())

// niz = [1,2,3,4,5,6,7,8,9]

// console.log(niz.splice(3, 2, -10))


/////////////////////////////////nizovi 2. cas/////////////////////////////////////////
// niz = [0, 5, 4, 3, 7, 8, 9, 1, 6];

// niz.sort((a, b) => a-b)
// console.log(niz);

// niz.reverse()
// console.log(niz)

// console.log(Math.max(...niz))  (tri tacke znaci da otvori ceo navedeni niz)
// console.log(Math.max(...niz))
// console.log(Math.min(...niz))

// let object = {
//     "ime" : "Amela",
//     "prezime" : "Zupic"
// }
// console.log(object);

// let object = {
//     "ime" : "Amela",
//     "prezime" : "Zupic",
//     "broj godina": 16,
//     "projekti": [1,2,3,4,5],
//     "function": function nesto(){
//         return true
//     },
//     "mestostanovanja" : {
//         "grad" :"Novi Pazar",
//         "ulica" : "Pozega",
//         "brojulice" : "BB"
//     }
// }


// console.log(object);

// let object2 = {...object, "mestostanovanja" : {...object.mestostanovanja}}
// object2["broj godina"] = "17";
// object2["mestostanovanja"]["brojulice"] = "10";
// console.log(object2);

// let niz = [object, object,object]
// console.log(niz)

// let object = {
//     "ime" : "Amela1",
//     "prezime" : "Zupic",
//     "brojgodina": 16,
//     "projekti": [1,2,3,4,5],
//     "function": function nesto(){
//         return true
//     },
//     "mestostanovanja" : {
//         "grad" :"Novi Pazar",
//         "ulica" : "Pozega",
//         "brojulice" : "BB"
//     }
// }

// let object2 = {
//     "ime" : "Amela2",
//     "prezime" : "Zupic",
//     "brojgodina": 17,
//     "projekti": [1,2,3,4,5],
//     "function": function nesto(){
//         return true
//     },
//     "mestostanovanja" : {
//         "grad" :"Novi Pazar",
//         "ulica" : "Pozega",
//         "brojulice" : "BB"
//     }
// }

// let object3 = {
//     "ime" : "Amela3",
//     "prezime" : "Zupic",
//     "brojgodina": 18,
//     "projekti": [1,2,3,4,5],
//     "function": function nesto(){
//         return true
//     },
//     "mestostanovanja" : {
//         "grad" :"Novi Pazar",
//         "ulica" : "Pozega",
//         "brojulice" : "BB"
//     }
// }

// let niz = [object, object2, object3]
// console.log(niz)

// niz2.sort ((a,b) => a.brojgodina + b.brojgodina)
// console.log(niz2)

// let niz = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
// let niz3 = [...niz];

// niz3.push(10)

// console.log(niz3);
// console.log(niz);

// let niz = [3, 4, 9, 5, 0, 1, 7]
// let niz3 = [...niz].sort((a, b) => a-b)
// console.log(niz);
// console.log(niz3);



// let niz = [3, 4, 9, 5, 0, 1, 7, 0]
// for(let i = 0; i<niz.length; i++){      prvi nacin
// console.log(niz[i])
// }

// for(let clan of niz){              drugi nacin 
//     console.log(clan)
// }

// niz.forEach((clan, i, array)  => {           treci nacin
//     if(clan % 2 === 0){
//         console.log(i + " " + clan);
//     }
//     else {
//         console.log("neparni brojevi" + clan + " " + i);
//     }
//     console.log(array);
// })


// let niz = [3, 4, 9, 5, 0, 1, 7, 0]
// let niz2 = niz.map((clan) => {
//     return clan*2
// })
// console.log(niz)
// console.log(niz2)

// let niz = [3, 4, 9, 5, 0, 1, 7, 0, 8]
// let niz2 = niz.filter((clan, i) =>{
// if(clan % 2 === 0){
//     return clan
// }
// })
// console.log("niz je:" + niz2);

// let niz = [3, 4, 9, 5, 0, 1, 7, 0, 8]
// niz2 = niz.flatMap((clan) => clan + 2)
//     console.log(niz2)

// let niz = [3, 4, 9, 5, 0, 1, 7]
// let suma = niz.reduce((a,b) =>{
//     return a + b
// })
// console.log(suma);

// let niz = [3, 9, 5, 1, 7]
// let res = niz.every(clan => {
//     if(clan % 2 === 0){
//         return true
//     }
// })
// console.log(res);

// let resSome = niz.some(clan =>{
//     if(clan % 3 === 0){
//         return true
//     }
// })

// console.log(resSome)

// let niz = [3, 9, 4, 5, 1, 7]
// let res = niz.find(clan =>{
//     if(clan % 2 === 0){
//         return clan
//     }
// })

// console.log(res)

// let niz = [3, 9, 4, 5, 1, 7]
// let res = niz.find(clan =>{
//     if(clan % 3 === 0){
//         return clan
//     }
// })

// console.log(res)

///////////////////////////////10.4.//////////////////////////////////////////
// let niz = [];

// for(let i = 0; i <= 5; i++){
// let clan = (n = parseInt(prompt("unesi broj n")))
// niz.push(clan)
// }
// console.log(niz);

/////////////////////////////////////////10.5.//////////////////////////////////
// let niz = []

// for(let i = 0; i<=5; i++){
//     let clan = (n = parseInt(prompt("unesi broj n")))
// niz.push(clan)
// }
// niz.reverse()
// console.log(niz)

/////////////////////////////////////////10.7.//////////////////////////////// 10.8 i 10.9
// let brojClanova = parseInt(prompt("Unesite zeljeni broj clanova: "));
// let niz = []

// for(let i = 0; i < brojClanova; i++){
//     let broj = parseFloat(prompt("Unesite broj:"))
//     niz.push(broj)
// }

// let suma = niz.reduce((a, b) => {
//     return a + b
// })

// console.log(`Aritmeticka sredina je: ${suma/brojClanova}`);

/////////////////////////10.8.///////////////////////////////////////////////
// let brojClanova = parseInt(prompt("Unesite zeljeni broj clanova: "));         PRVI NACIN
// let niz = []

// for(let i = 0; i < brojClanova; i++){
//     let broj = parseFloat(prompt("Unesite broj:"))
//     niz.push(broj)
// }
// niz = niz.filter(clan => clan  % 3 === 0)
 
// let suma = niz[i].reduce((a, b) => {
//     return a + b
// })

// console.log(`Aritmeticka sredina je: ${suma/niz.length}`);

// let res = 0;                                                               DRUGI NACIN
// let t = 0;
// niz.forEach((clan) => {
//     if(clan % 3 === 0){
//         t++;
//         res += clan;
//     }
// });

// console.log(`Aritmeticka sredina: ${res / t}`)
////////////////////////////////////10.9.////////////////////////////////////////////////
// a)))))))))))))))))))))))))))))))))))))))))))
// let brojClanova = parseInt(prompt("Unesite zeljeni broj clanova: "));
// let niz = []

// for(let i = 0; i < brojClanova; i++){
//     let broj = parseFloat(prompt("Unesite broj:"))
//     niz.push(broj)
// }
// let rezultatParnih = 0;
// let rezultatNeparnih = 0;

// niz.forEach((clan) =>{
//     clan % 2 === 0 ? rezultatParnih += clan : rezultatNeparnih += clan
    // if(clan % 2 === 0){
    //     rezultatParnih += clan    (ovo gore je isto sto i ovo dole)
    // }
    // else{
    //     rezultatNeparnih += clan
    // }
// })

// console.log(`Zbir parnih je : ${rezultatParnih}, a neparnih je: ${rezultatNeparnih}`)

// b)))))))))))))))))))))))))))))))))))))))))))))))
// let brojClanova = parseInt(prompt("Unesite zeljeni broj clanova: "));
// let niz = []

// for(let i = 0; i < brojClanova; i++){
//     let broj = parseFloat(prompt("Unesite broj:"))
//     niz.push(broj)
// }
// let rezultatParnihindexa = 0;
// let rezultatNeparnihindexa = 0;

// niz.forEach((i) =>{
//     if(i % 2 === 0){
//         rezultatParnihindexa += i    
//     }
//     else{
//         rezultatNeparnihindexa += i
//     }
// })

// console.log(`Zbir parnih je : ${rezultatParnihindexa}, a neparnih je: ${rezultatNeparnihindexa}`)

/////////////////////////////////10.11.//////////////////////////////
// let brojClanova = parseInt(prompt("Unesite zeljeni broj clanova: "));
// let niz1 = []

// for(let i = 0; i < brojClanova; i++){
//     let broj = parseFloat(prompt("Unesite broj:"))
//     niz1.push(broj)
// }

// let brojClanova2 = parseInt(prompt("Unesite zeljeni broj clanova: "));
// let niz2 = []

// for(let i = 0; i < brojClanova; i++){
//     let broj = parseFloat(prompt("Unesite broj:"))
//     niz2.push(broj)
// }
// console.log(niz1.concat(niz2));

///////////////////////////////////10.12.///////////////////////// MAP uzima svaki clan iz datog niza i svaki se koristi posebno
// let brojClanova = parseInt(prompt("Unesite zeljeni broj clanova: "));
// let niz1 = []

// for(let i = 0; i < brojClanova; i++){
//     let broj = parseFloat(prompt("Unesite broj:"))
//     niz1.push(broj)
// }

// let brojClanova2 = parseInt(prompt("Unesite zeljeni broj clanova: "));
// let niz2 = []

// for(let i = 0; i < brojClanova; i++){
//     let broj = parseFloat(prompt("Unesite broj:"))
//     niz2.push(broj)
// }

// let niz3 = niz1.map((clan, i) => {
//         return clan + niz2[i]
//     })

//     console.log(niz3)

//////////////////////////////////10.14.////////////////////////////////////
// let brojClanova = parseInt(prompt("Unesite zeljeni broj clanova: "));
// let niz1 = []

// for(let i = 0; i < brojClanova; i++){
//     let broj = parseFloat(prompt("Unesite broj:"))
//     niz1.push(broj)
// }

// let brojClanova2 = parseInt(prompt("Unesite zeljeni broj clanova: "));
// let niz2 = []

// for(let i = 0; i < brojClanova2; i++){
//     let broj = parseFloat(prompt("Unesite broj:"))
//     niz2.push(broj)
// }

// niz2.reverse()
// let niz3 = niz1.map((clan, i) => {
//         return clan + niz2[i]
//     })

//     console.log(niz3);

/////////////////////////////////10.15./////////////////////////////////////////// 10.16.  10.17.  10.18.  10.19.
// let brojClanova = parseInt(prompt("Unesite zeljeni broj clanova: "));
// let niz = []

// for(let i = 0; i < brojClanova; i++){
//     let broj = parseFloat(prompt("Unesite broj:"))
//     niz.push(broj)
// }


// let niz2 = []
// brojClanova = parseInt(prompt("Unesite zeljeni broj clanova: "));

// for(let i = 0; i < brojClanova; i++){
//     let broj = parseFloat(prompt("Unesite broj:"))
//     niz2.push(broj)
// }
// let niz3 = niz.concat(niz2).filter((clan) => {
//     if(clan % 2 === 0){
//         return clan
//     }
// })

// console.log(niz3)

/////////////////////////////////10.16////////////////////////////////////
// let brojClanova = parseInt(prompt("Unesite zeljeni broj clanova: "));
// let niz1 = []
// let niz3 = []
// for(let i = 0; i < brojClanova; i++){
//     let broj = parseFloat(prompt("Unesite broj:"))
//     niz1.push(broj)
// }

// let brojClanova2 = parseInt(prompt("Unesite zeljeni broj clanova: "));
// let niz2 = []

// for(let i = 0; i < brojClanova2; i++){
//     let broj = parseFloat(prompt("Unesite broj:"))
//     niz2.push(broj)
// }


// for (let i = 0; i < brojClanova; i++) {
//     if (niz1[i] < niz2[i]) {
//         niz3.push(niz1[i]);
//     } else if (niz1[i] > niz2[i]) {
//         niz3.push(niz2[i]);
//     } else {
//         niz3.push(0);
//     }
// }
// console.log(niz3);

//////////////////////////////10.17////////////////////////////////////////
// let brojClanova = parseInt(prompt("Unesite zeljeni broj clanova: "));
// let niz1 = []
// let niz2 = []
// let niz3 = []
// for(let i = 0; i < brojClanova; i++){
//     let broj = parseFloat(prompt("Unesite broj:"))
//     niz1.push(broj)
// }

// for (let i = 0; i < brojClanova; i++) {
//     if (niz1[i] < 0) {
//         niz2.push(niz1[i]);
//     } else {
//         niz3.push(niz1[i]);
//     }
// }

// console.log("Negativi elementi:", niz2);
// console.log("Pozitivni elementi i nule:", niz3);

/////////////////////////////////10.18./////////////////////////////////////////
// let brojClanova = parseInt(prompt("Unesite zeljeni broj clanova: "));
// let niz1 = []
// let niz2 = []
// let AritmetickaSredina = 0;
// for(let i = 0; i < brojClanova; i++){
//     let broj = parseFloat(prompt("Unesite broj:"))
//     niz1.push(broj)
// }

// for (let i = 0; i < brojClanova; i++) {
//     AritmetickaSredina += niz1[i];
// }
// AritmetickaSredina /= brojClanova;



// for (let i = 0; i < brojClanova; i++) {
//     if (niz1[i] > AritmetickaSredina) {
//         niz2.push(niz1[i]);
//     }
// }

// console.log(niz2);

////////////////////////////////10.16. DRUGI  NACIN///////////////////////////////////////////
// let brojClanova = parseInt(prompt("Unesite zeljeni broj clanova: "));
// let niz1 = []
// for(let i = 0; i < brojClanova; i++){
//     let broj = parseFloat(prompt("Unesite broj:"))
//     niz1.push(broj)
// }


// let niz2 = []

// for(let i = 0; i < brojClanova; i++){
//     let broj = parseFloat(prompt("Unesite broj:"))
//     niz2.push(broj)
// }

// let niz3 = niz2.map((el, i) => {
//     return el > niz[i] ? el : niz[i]
// })
// console.log(niz3)

/////////////////////////////////////10.17. DRUGI NACIN///////////////////////////////////////////////////
// let brojClanova = parseInt(prompt("Unesite zeljeni broj clanova: "));
// let niz1 = []
// let niz2 = []
// let niz3 = []
// for(let i = 0; i < brojClanova; i++){
//     let broj = parseFloat(prompt("Unesite broj:"))
//     niz1.push(broj)
// }

// for(let clan of niz){
//     clan >= 0 ? niz2.push(clan) : niz3.push(clan)
// }

// console.log(`Niz za pozitivne ${niz2} i za negativne ${niz3}`)

////////////////////////////////////10.18. DRUGI NACIN//////////////////////////////////////////////////
// let brojClanova = parseInt(prompt("Unesite zeljeni broj clanova: "));
// let niz1 = []

// for(let i = 0; i < brojClanova; i++){
//     let broj = parseFloat(prompt("Unesite broj:"))
//     niz1.push(broj)
// }

// let suma = niz1.reduce((a,b) => {
//     return a + b
// })
// let AritmetickaSredina = suma / niz1.length

// let niz2 = niz1.filter((clan) => {                   FILTER NE VRACA SVAKI CLAN DOK MAP VRACA SVAKI CLAN
//      if(clan > AritmetickaSredina){
//         return clan
//     }
// })

// console.log(niz2)

///////////////////////////////////////////////10.19.///////////////////////////////////////////////////////
// let brojClanova = parseInt(prompt("Unesite zeljeni broj clanova: "));
// let niz1 = []

// for(let i = 0; i < brojClanova; i++){
//     let broj = parseFloat(prompt("Unesite broj:"))
//     niz1.push(broj)
// }
// let pom = 0;

// let niz2 = niz1.map((clan) => {
//     pom += clan
//     return pom 
// })

// console.log(niz2)

////////////////////////////////////////////10.22////////////////////////////////////////////////////////
// let brojClanova = parseInt(prompt("Unesite zeljeni broj clanova: "));
// let niz1 = []

// for(let i = 0; i < brojClanova; i++){
//     let broj = parseFloat(prompt("Unesite broj:"))
//     niz1.push(broj)
// }

// function numberOfUnique(niz1){
// let set = new Set(niz1)
// return set.size
// } 
// console.log(numberOfUnique(niz1))

// drugi nacin:
// let pom = niz1.filter((value, index, self) => {
//     return self.indexOf(value) === index
// });
// console.log(pom);

/////////////////////////////////////////////10.23./////////////////////////////////////////////////////// 10.24. 10.26.

// let brojClanova = parseInt(prompt("Unesite zeljeni broj clanova: "));
// let main = [];

// for (let i = 0; i < brojClanova; i++) {
//   let broj = parseFloat(prompt("Unesite broj:"));
//   main.push(broj);
// }


// function avgGrade(niz){
//   let suma = niz.reduce((a,b) => {
//     return a+b
//   })

//   return suma / niz.length
// }

// function avgGradeSuccess(niz){
//   return avgGrade(niz.filter(clan => {
//     if(clan > 5)
//     return clan
//   }))
// }

// function numOfSuccess(niz){
//   return niz.filter(clan => {
//     if(clan > 5)
//     return clan
//   }).length
// }


// function numOfFail(niz){
//   return niz.filter(clan => {
//     if(clan === 5)
//     return clan
//   }).length
// }

// function numOfAvgSuccess(niz){
//   let avg = avgGrade(niz)
//   return niz.filter((clan) => {
//     if(clan > avg){
//       return clan
//     }
//   }).length
// }

// console.log(avgGrade(main));
// console.log(avgGradeSuccess(main));
// console.log(numOfSuccess(main));
// console.log(numOfFail(main));
// console.log(numOfAvgSuccess(main));

