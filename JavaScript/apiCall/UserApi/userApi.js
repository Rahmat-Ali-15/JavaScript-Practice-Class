let userUrl = "https://jsonplaceholder.typicode.com/users"

async function userApi() {
    try {
        let res = await fetch(userUrl);
        let userData = await res.json();
        // console.log(userData);
        append(userData)
    } catch (error) {
        console.log(error);
    }
}
userApi()

function append(value){

    value.forEach((el)=>{
        let main = document.getElementById("container");
        let div = document.createElement("div");

        let id = document.createElement("p");
        let name = document.createElement("p");
        let userName = document.createElement("p");
        let email = document.createElement("p");
        let address = document.createElement("p");
        let pNum = document.createElement("p");
        let website = document.createElement("p");
        let company = document.createElement("p");

        id.innerText = `Id:- ${el.id}`;
        name.innerText = `Name:- ${el.name}`;
        userName.innerText = `UserName:- ${el.username}`;
        email.innerText = `Email:- ${el.email}`;
        address.innerText = `\street:- ${el.address.street}\nsuite:- ${el.address.suite}\ncity:- ${el.address.city}\nzipcode:- ${el.address.zipcode}\nLat:- ${el.address.geo.lat}\nLng:- ${el.address.geo.lng}`;
        pNum.innerText = `Phone:- ${el.phone}`;
        website.innerText = `Website:- ${el.website}`;
        company.innerText = `Name:- ${el.company.name}\nCatchphrase:- ${el.company.catchPhrase}\nBs:- ${el.company.bs}`;

        div.append(id,name,userName,email,address,pNum,website,company);
        main.append(div)

    })
    
}
