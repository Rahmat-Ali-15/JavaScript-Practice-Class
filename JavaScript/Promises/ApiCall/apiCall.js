//  async function apiCall() {
//     let div = document.getElementById("main")
//     let api = "https://jsonplaceholder.typicode.com/todos";
//     /* fetch(api)
//          .then((res) => res.json())
//          .then((res) => console.log(res))
//          .catch((err) => console.log(err))
//          */
//     let data;

//     try {
//         let res = await fetch(api);
//         data = await res.json();
//         console.log(data);
//     } catch (error) {
//         console.log(error);
//     }

//     data.map((el, id) => {
//         console.log(el);
//         let ids = document.createElement("h1");
//         ids.innerText = el.id;
//         let title = document.createElement("h1");
//         title.innerText = el.title;

//         div.append(ids, title)
//     })


// }
// apiCall()



/* async function api2() {
    let div=document.getElementById("main")
    let api2="https://jsonplaceholder.typicode.com/posts";
    let data2;
    try{
        let res=await fetch(api2);
        data2=await res.json();
        console.log(data2);
    }catch(error){
        console.log(error);
    }
    data2.map((el,id)=>{
        let ids=document.createElement("h5");
        ids.innerText=el.id;
        let title=document.createElement("p");
        title.innerText=el.title;

        div.append(ids,title)
    })
}
api2()   */



// fetching API

let url = "https://jsonplaceholder.typicode.com/todos"
fetch(url).then(res => res.json()).then((data) => { console.log(data) }).catch((err) => { console.log(err) });