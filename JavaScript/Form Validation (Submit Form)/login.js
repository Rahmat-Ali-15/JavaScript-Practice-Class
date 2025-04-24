
let strage = JSON.parse(localStorage.getItem("userData"));

function loginValidation(e) {
    e.preventDefault()
    const User_Login_Email = document.querySelector("#loginemail").value;
    const User_Login_Pass = document.querySelector("#loginpassword").value;
    console.log(User_Login_Email, User_Login_Pass);
    if (strage.email === User_Login_Email && strage.password === User_Login_Pass) {
        console.log("succesfull");
    }
    else {
        console.log("Not matched");
    }
}
