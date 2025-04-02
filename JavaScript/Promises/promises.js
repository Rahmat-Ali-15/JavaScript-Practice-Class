// step by step execution is called Syncranous
// console.log("hello");
// console.log("good morning");
// console.log("good afternoon");
// console.log("good evening");
// console.log("good night");


// console.log("hh");
// setTimeout(()=>{
//     console.log("3sec bad aana");
// },3000)

// console.log("hihihi");


// setInterval(() => {
//     console.log("3sec pe repeat krna");
// }, 3000);


// node version

// new -> new keyword object create kar k deta hai -> Object literal

// this -> invoke the current object

let ice_cream = new Promise((resolve, reject) => {
    let got_ice_cream = true; // api se aa rha hai either wo true hoga ya false
    if (got_ice_cream) {
        resolve([(status=got_ice_cream), (payload="done")]);
    }
    else {
        reject([(status=got_ice_cream), (payload="not done")]);
    }
})

// Promise(true)

// .then and .catch only handle the error -> try catch

// this is handling promis status
// console.log(ice_cream);

ice_cream.then((res) => { console.log("got ice cream in hand"); }).catch((res) => { console.log("ice cream is not available"); })


// Api call

// old version

let api = "https://jsonplaceholder.typicode.com/todos";

fetch(api).then((res) => res.json()).then((res) => { console.log(res); }).catch((err) => { console.log(err); })


// redableStream mila jo lock tha.
// unclock with prototype -> json()
