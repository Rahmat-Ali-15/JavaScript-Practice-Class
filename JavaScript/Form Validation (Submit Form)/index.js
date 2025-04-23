function myValidation(){

    let User_Email = document.getElementById("email").value;
    let User_Password = document.getElementById("password").value;
    let User_Confirm_Password = document.getElementById("c_password").value;
    let User_Contact = document.getElementById("contact").value;

    if(User_Email==="" || User_Password === "" || User_Confirm_Password === "" || User_Contact === ""){
        alert("All fields are mendatory!")
        return false;
    }
    else{
        true;
    }

    // Email validation

    if (User_Email.indexOf("@") <= 0){
        console.log("The given email is invalid");
    }
    else if (User_Email.charAt(User_Email.length - 4) === "." || User_Email.charAt(User_Email.length - 3 ) === "."){
        console.log("Valid email");
    }
    else{
        console.log("Invalid email! Please check??");
    }

    // Password validation

    if(User_Password === null){
        if(User_Password !== User_Confirm_Password){
            
        }
        else if(User_Password.trim() === ""){
            console.log("Please enter the password");
        }
        else if (User_Password !== User_Confirm_Password){
            console.log("Password must be same.");
        }
    }


}