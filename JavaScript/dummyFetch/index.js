const api = `https://api-server-zecj.onrender.com/Home`;

const myData = async () =>{
    try {
        const res = await fetch(api);
        const data = await res.json();
        console.log(data);
    } 
    catch (error) {
        console.log(error);
    }
}
myData()