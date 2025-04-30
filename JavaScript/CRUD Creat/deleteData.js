async function deleteData(e){
    e.preventDefault();

    const id = document.querySelector("#user-id").value;

    const api = `https://api-server-zecj.onrender.com/user/${id}`;


    try {
        let response = await fetch(api,{
            method : "DELETE",
            headers: {
                "Content-type": "application/json"
            },
        })
        console.log(`Data has been deleted successfully ${id}`);
    } catch (error) {
        console.log(error);
    }
}