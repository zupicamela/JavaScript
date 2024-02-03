///////////////////////////10.24.////////////////
// let fibonaci = (n) => {
//     let niz = [1, 1];
//     for(let i = 2; i < n; i++){
//         niz.push([i - 1] + niz[i - 2])
//         }
//         return niz
// }

// function ispisi(niz){
//     console.log(`fibonacijev niz je ${niz}`)
// }

// let brojclanova = parseInt(prompt("unesi broj clanova"));

// let rezultat = fibonaci(brojclanova);

// ispisi(rezultat);

////////////////////////10.23.//////////////////////

// let brojClanova = parseInt(prompt("unesi broj clanova"))
// let niz = []

// for(let i = 0; i < brojClanova; i++){
//     let broj = parseInt(prompt("unesi broj"))
//     niz.push(broj);
// }

// function prosecnaOcena(niz){
// let suma = niz.reduce((a,b) => {
//     return a + b
// })
// return suma / niz.length
// }


// function polozeni(niz){
//     return niz.filter(clan => {
//       if(clan > 5)
//       return clan
//     }).length
//   }
  
  
//   function nisuPolozeni(niz){
//     return niz.filter(clan => {
//       if(clan === 5)
//       return clan
//     }).length
//   }
  

//   console.log(prosecnaOcena(niz))
//   console.log(polozeni(niz))
//   console.log(nisuPolozeni(niz))
  
/////////////////////////////////

// let key = "7dfa3ce8f2msh8833c147edfedd9p1b8b42jsn71a7f9103f5c";

// localStorage.setItem("api_key", key);

// async function coins(){
    
//     let lalalala = localStorage.getItem("api_key")

//     const url = 'https://coinranking1.p.rapidapi.com/coins?referenceCurrencyUuid=yhjMzLPhuIDl&timePeriod=24h&tiers%5B0%5D=1&orderBy=marketCap&orderDirection=desc&limit=50&offset=0';
// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': '7dfa3ce8f2msh8833c147edfedd9p1b8b42jsn71a7f9103f5c',
// 		'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
// 	}
// };

// try {
// 	const response = await fetch(url, options);
// 	const result = await response.text();
// 	console.log(result);
// } catch (error) {
// 	console.error(error);
// }
// }
// coins()

// let key = "7dfa3ce8f2msh8833c147edfedd9p1b8b42jsn71a7f9103f5c"
// localStorage.setItem("api_key", key)

// async function translate(){
    
//     let lalalala = localStorage.getItem("api_key")

//     const url = 'https://google-translate113.p.rapidapi.com/api/v1/translator/text';
// const options = {
// 	method: 'POST',
// 	headers: {
// 		'content-type': 'application/x-www-form-urlencoded',
// 		'X-RapidAPI-Key': '7dfa3ce8f2msh8833c147edfedd9p1b8b42jsn71a7f9103f5c',
// 		'X-RapidAPI-Host': 'google-translate113.p.rapidapi.com'
// 	},
// 	body: new URLSearchParams({
// 		from: 'auto',
// 		to: 'en',
// 		text: 'xin chào'
// 	})
// };

// try {
// 	const response = await fetch(url, options);
// 	const result = await response.text();
// 	console.log(result);
// } catch (error) {
// 	console.error(error);
// }
// }
// translate()