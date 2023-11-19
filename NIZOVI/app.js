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








