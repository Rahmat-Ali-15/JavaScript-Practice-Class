function myValidation(event) {
    event.preventDefault();

    let User_Email = document.getElementById("email").value;
    let User_Password = document.getElementById("password").value;
    let User_Confirm_Password = document.getElementById("c_password").value;
    let User_Contact = document.getElementById("contact").value;

    // Add error
    let Contact_Error = document.querySelector(".contact_error");
    let Email_Error = document.querySelector(".email_error");
    let Password_Error = document.querySelector(".password_error")
    let Confirm_Password_Error = document.querySelector(".confirm_password_error");

    // Remove Previous Error
        Contact_Error.textContent = "";
        Email_Error.textContent = "";
        Password_Error.textContent = "";
        Confirm_Password_Error.textContent = "";

    let object = {
        email: User_Email,
        password: User_Password,
        confirm_password: User_Confirm_Password,
        contact: User_Contact,
    }
    localStorage.setItem("userData", JSON.stringify(object));


    if(User_Email=== "" || User_Password === "" || User_Confirm_Password === "" || User_Contact === ""){
        alert("All fields are mendatory!")
        return false;
    }

    // Email validation

    if (User_Email.indexOf("@") <= 0){
        console.log("The given email is invalid");
        return false;
    }
    else if (User_Email.charAt(User_Email.length - 4) === "." || User_Email.charAt(User_Email.length - 3 ) === "."){
        return false;
    }
    else{
        Email_Error.textContent= "Invalid email! Please check??";
    }

    // Password validation

    if(User_Password.trim() === ""){
        Password_Error.textContent = "Please enter the password";
    }
    else if (User_Password.length < 8 || User_Password.length > 20){
        Password_Error.textContent = "password must lies between 8 to 20 charector";
    }
    else if (User_Password !== User_Confirm_Password){
        Confirm_Password_Error.textContent = "Password must be same.";
    }
    else{
        const hasUpperCase = /[A-Z]/.test(User_Password);
        const hasLowerCase = /[a-z]/.test(User_Password);
        const hasNumber = /[0-9]/.test(User_Password);
        const hasSpecialChar = /[!@#$%^&*()|\/;:<>?]/.test(User_Password);
        if(!hasUpperCase){
            Password_Error.textContent = "password must include at least one uppercase letter!"
        }
        else if(!hasLowerCase){
            Password_Error.textContent = "password must include at least one lowercase letter!"
        }
        else if(!hasNumber){
            Password_Error.textContent = "password must include at least one number!"
        }
        else if(!hasSpecialChar){
            Password_Error.textContent = "password must include at least one special letter!"
        }
        else{
            alert("password created successfully!");
        }
    }


    // Contact validation

    if(User_Contact.length< 10 || User_Contact.length > 10){
        Contact_Error.textContent = "Number Should be of 10 Digits!"
    }
    else if (isNaN(User_Contact)){
        Contact_Error.textContent = "Only Numbers are allowed!"
    }

}