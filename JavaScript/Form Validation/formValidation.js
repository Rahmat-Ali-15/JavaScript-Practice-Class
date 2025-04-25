function myValidation(event) {
    event.preventDefault();
    let User_Email = document.querySelector(".user_email").value;
    let User_Pass = document.querySelector(".user_pass").value;


    // email validation

    if (User_Email === "") {
        console.log("please enter email...");
    }
    else if (User_Email.indexOf("@") <= 0) {
        console.log("the given email is invalid");
    }
    else if (
        User_Email.charAt(User_Email.length - 4) === "." ||
        User_Email.charAt(User_Email.length - 3) === "."
    ) {
        console.log("Valid email...");
    }
    else {
        console.log("Inavlid email please check???");
    }

    // password validation

    // rahmat9262@gmail.com
    // rahmat9262@gmail.in


    if (User_Pass.trim() === "") {
        console.log("please enter the password.");
    }
    else if (user_pass.length <= 8 || user_pass.length > 20) {
        console.log("password must be equal to 8 or less than 20 characters.");
    }
    else {
        const hasUpeerCase = /[A-Z]/.test(User_Pass);
        const hasLowerCase = /[a-z]/.test(User_Pass);
        const hasNumber = /[0-9]/.test(User_Pass);
        const hasSpacialChar = /[!@#$%^&*(),./?";:{}|<>]/.test(User_Pass);
        if (!hasUpeerCase) {
            console.log("password must include at least one uppercase letter.");
        }
        else if (!hasLowerCase) {
            console.log("password must include at least one lowercase letter.");
        }
        else if (!hasNumber) {
            console.log("password must include at least one number.");
        }
        else if (!hasSpacialChar) {
            console.log("password must include at least one special charater.");
        }
        else {
            console.log("Valid password");
        }
    }
}