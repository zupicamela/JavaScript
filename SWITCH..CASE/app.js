////////////////////////SWITCH...CASE//////////////////////////
// 7.19.

// let n = parseInt(prompt("unesi broj n"))

// switch (n){
//   case 1 :
//     console.log("ponedeljak");
//     break;
//     case 2 :
//     console.log("utorak");
//     break;
//     case 3 :
//     console.log("sreda");
//     break;
//     case 4 :
//     console.log("cetvrtak");
//     break;
//     case 5 :
//     console.log("petak");
//     break;
//     case 6 :
//     console.log("subota");
//     break;
//     case 7 :
//     console.log("nedelja");
//     break;
//     default:
//       console.log("nije dobro")
//       break;
// }

/////////////////////////////////////7.20./////////////////////////////////

// let n = prompt("unesi broj n")

// switch(n){
//   case "a" :
//     console.log("samoglasnik")
//     break;
//     case "e" :
//     console.log("samoglasnik")
//     break;
//     case "i" :
//     console.log("samoglasnik")
//     break;
//     case "o" :
//     console.log("samoglasnik")
//     break;
//     case "u" :
//     console.log("samoglasnik")
//     break;
//     default :
//     console.log("nije dobro")
//     break;

// }
/////////////////////////////////7.22.//////////////////////////////////////////////
// let a = prompt("unesi znak")
// let b = parseInt(prompt("unesi broj b"))
// let c = parseInt(prompt("unesi broj c"))

// switch(a){
//   case "+" :
//     console.log(b+c);
//     break;
//     case "-" :
//     console.log(b-c);
//     break;
//     case "*" :
//     console.log(b*c);
//     break;
//     case "/" :
//     console.log(b/c);
//     break;
// }
///////////////////////////////////////7.24.////////////////////////////////////////
// let a = parseInt(prompt("unesi godinu"));
// let b = parseInt(prompt("unesi mesec"));
// let dan;

// switch (b) {
//   case 1:
//   case 3:
//   case 5:
//   case 7:
//   case 8:
//   case 10:
//   case 12:
//     dan = 31;
//     break;

//   case 4:
//   case 6:
//   case 9:
//   case 11:
//     dan = 30;
//     break;

//   case 2:
//     dan = 28 + ((a % 4 === 0 && a % 100 === 0) || a % 400 === 0);
//     break;

//   default:
//     dan = 0;
//     break;

// case 2:
//   (a % 4 === 0 && a % 100 !==!0) || a % 400 === 0
//   ? console.log(29);
//   : console.log(28);
 
// }
// console.log(dan);

////////////////////////////////7.11//////////////////////////////////////////////
// let i;

// for(i = 1; i < 20; i++){
//     if(i % 3 === 0) continue;
//     console.log(i)
// }
///////////////////////////////7.20.////////////////////////////////////
// let n = prompt("unesi slovo n:")

// switch(n){
//     case "a" :
//         console.log("samoglasnik")
//         break;
//         case "e" :
//             console.log("samoglasnik")
//             break;
//             case "i" :
//                 console.log("samoglasnik")
//                 break;
//                 case "o" :
//                     console.log("samoglasnik")
//                     break;
//                     case "u" :
//                         console.log("samoglasnik")
//                         break;
//                         default :
//                             console.log("suglasnik")
//                             break;
// }
//////////////////////////////7.24.//////////////////////////////////////////
// let a = parseInt(prompt("unesi broj godina"))
// let b = parseInt(prompt("unesi broj mesec"))
// let dan;

// switch(b){
//     case 1:
//     case 3:
//     case 5:
//     case 7:
//     case 8:
//     case 10:
//     case 12:
//     console.log(31)
//     break;

//     case 4:
//         case 6:
//             case 9:
//                 case 11:
//                     console.log(30)
//                     break;
//                     case 2:
//                         if((a % 4 === 0 && a % 100 != 0) || a % 400 === 0){
//                             console.log(29)

//                         }
//                         else {
//                             console.log(28)
//                         }
//                         break;
// default:
// console.log("nije dobro");
// break;
// }
//////////////////////////////////////////////7.25./////////////////////////////////////
// let godina = parseInt(prompt("unesi godinu"))
// let mesec = parseInt(prompt("unesi mesec"))
// let dan = parseInt(prompt("unesi dan"))
// let d;
// switch(mesec){
//         case 1:
//         case 3:
//         case 5:
//         case 7:
//         case 8:
//         case 10:
//         case 12:
//         d=31
//         break;

//         case 4:
//         case 6:
//         case 9:
//         case 11:
//         d=30
//         break;

//         case 2:
//         if((a % 4 === 0 && a % 100 != 0) || a % 400 === 0){
//         d=29
//         }
//         else {
//         d=28
//     }
//         break;
// }
// if(dan === d){
//     dan = 1
//     mesec ++
// }
// else{
//     dan ++
// }
// if(mesec > 12){
//     mesec = 1
//     godina++
// }
// else{
//     mesec++
// }
// console.log(dan, mesec, godina)