// let pom = {
//     employees: [
//       { firstName: "John", lastName: "Doe" },
//       { firstName: "Anna", lastName: "Smith" },
//       { firstName: "Peter", lastName: "Jones" },
//     ],
//   };

//   let text =
//     '{ "employees" : [' +
//     '{ "firstName":"John" , "lastName":"Doe" },' +
//     '{ "firstName":"Anna" , "lastName":"Smith" },' +
//     '{ "firstName":"Peter" , "lastName":"Jones" } ]}';

//   let obj = JSON.parse(text);

// ////////////////////////

// function one() {
//   setTimeout(() => {
//     console.log("one");
//   }, 3000);
//   console.log("two");
//   setTimeout(() => {
//     console.log("three");
//   }, 1000);
// }

// one();

// setInterval(() => {
//     console.log("nesto");
//   }, 1000);

  //////////////////////////

// let promise = new Promise(function (resolve, reject) {
//   // a mock async action using setTimeout
//   setTimeout(function () {
//     resolve("Promise resolved");
//   }, 3000);
// });

// promise.then(
//   function (value) {
//     console.log(value);
//   },
//   function (reason) {
//     console.log(reason);
//   }
// );

// https://catfact.ninja/fact

// //Get i Delete
// {
//   "header"= {
//     "Content-Type": "application/json",
//   }
// }

// //Post i Put

// {
//   "header"= {
//     "Content-Type": "application/json",
//   }
//   "body"= {
//     "fact": "A cat's tail contains nearly 10 percent of all the bones in its body.",
//     "length": 67
//   }
// }

// let data = {};

// fetch("https://catfact.ninja/fact")
//   .then((response) => {
//     return response.json();
//   })
//   .then((res) => {
//     console.log(res);
//     data = res;
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// let div = document.createElement("div");
// div.innerHTML = data.fact;

// document.body.appendChild(div);

// function showFacts(data) {
//     let div = document.createElement("div");
//     div.innerHTML = data.fact;
  
//     document.body.appendChild(div);
//   }
//   async function getFacts() {
//     try {
//       let data = await fetch("https://catfact.ninja/fact");
//       let res = await data.json();
//       console.log(res);
//       showFacts(res);
//     } 
//     catch (err) {
//       console.log(err);
//     }
//   }
//   getFacts();
  /////////////////////////////////////////

// function showFacts(data) {
//     let div = document.createElement("div");
//     div.innerHTML = data.fact;
  
//     document.body.appendChild(div);
//   }
//   async function getFacts() {
//     try {
//       let data = await fetch("https://catfact.ninja/facts?max_length=100&limit=10");
//       let res = await data.json();
//       console.log(res);
//       showFacts(res);
//     } 
//     catch (err) {
//       console.log(err);
//     }
//   }
//   getFacts();

/////////////////////////////////////////////////////// 

