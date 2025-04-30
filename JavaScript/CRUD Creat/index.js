async function formDataStore(e){
    e.preventDefault();

    const api = `https://api-server-zecj.onrender.com/user` ;

    const userName = document.querySelector("#user-name").value;
    const userEmail = document.querySelector("#user-email").value;
    const userPassword = document.querySelector("#user-password").value;

    const userDetails = {
        id: Date.now(),
        name: userName,
        email: userEmail,
        password: userPassword,
    }


    try {

        // get request use fetch by default get request excute krta hai.

        // fetch takes two para first upi-url and second its method-data
        let response = await fetch(api,{
            method: "POST",
            body: JSON.stringify(userDetails),
            headers: {
                "Content-type": "application/json",
            },
        });
        let data = await response.json();
        console.log(data);
    } catch (error) {
        console.log(error);
    }

}