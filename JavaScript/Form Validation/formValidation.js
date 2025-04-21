function myValidation(event){
    event.preventDefault();
    let user_email = document.querySelector(".user_email").value;
    let user_pass = document.querySelector(".user_pass").value;


// email validation

    if(user_email === ""){
        console.log("please enter email...");
    }
    else if(user_email.indexOf("@") <= 0){
        console.log("the given email is invalid");
    }
    else if (
        user_email.charAt(user_email.length - 4) === "." || 
        user_email.charAt(user_email.length - 3) === "."
    ) {
        console.log("Valid email...");
    }
    else{
        console.log("Inavlid email please check???");
    }

// password validation

// rahmat9262@gmail.com
// rahmat9262@gmail.in


    if(user_pass !== null){
        if(user_pass.trim()=== ""){
            console.log("please enter the password.");
        }
        else if (user_pass.length <=8 || user_pass.length > 20){
            console.log("password must be equal to 8 or less than 20 characters.");
        }
        else{
            const hasUpeerCase = /[A-Z]/.test(user_pass);
            const hasLowerCase = /[a-z]/.test(user_pass);
            const hasNumber = /[0-9]/.test(user_pass);
            const hasSpacialChar = /[!@#$%^&*(),./?";:{}|<>]/.test(user_pass);

            if(!hasUpeerCase){
                console.log("password must include at least one uppercase letter.");
            }
            else if (!hasLowerCase){
                console.log("password must include at least one lowercase letter.");
            }
            else if (!hasNumber){
                console.log("password must include at least one number.");
            }
            else if (!hasSpacialChar){
                console.log("password must include at least one special charater.");
            }
            else{
                console.log("Valid password");
            }
        }
    }
}