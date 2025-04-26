function myValidation(event) {
    event.preventDefault();

    // Get values
    let User_Email = document.querySelector(".user_email").value;
    let User_Pass = document.querySelector(".user_pass").value;

    // Get error span elements
    let email_error = document.getElementById("error_email");
    let password_error = document.getElementById("pass_error");

    // email validation
    if (User_Email === "") {
        error_email.textContent = "Please enter email.";
    }
    else if (User_Email.indexOf("@") <= 0) {
        email_error.textContent = "email must contain @";
    }
    else if (
        User_Email.charAt(User_Email.length - 4) === "." ||
        User_Email.charAt(User_Email.length - 3) === "."
    ) {
        email_error.textContent ="Valid email...";
    }
    else {
        email_error.textContent ="Inavlid email please check???";
    }

    // password validation

    // rahmat9262@gmail.com
    // rahmat9262@gmail.in


    if (User_Pass.trim() === "") {
        console.log("please enter the password.");
    }
    else if (User_Pass.length <= 8 || User_Pass.length > 20) {
        password_error.textContent = "password must be equal to 8 or less than 20 characters.";
    }
    else {
        const hasUpeerCase = /[A-Z]/.test(User_Pass);
        const hasLowerCase = /[a-z]/.test(User_Pass);
        const hasNumber = /[0-9]/.test(User_Pass);
        const hasSpacialChar = /[!@#$%^&*(),./?";:{}|<>]/.test(User_Pass);
        if (!hasUpeerCase) {
            password_error.textContent = "password must include at least one uppercase letter.";
        }
        else if (!hasLowerCase) {
            password_error.textContent = "password must include at least one lowercase letter.";
        }
        else if (!hasNumber) {
            password_error.textContent = "password must include at least one number.";
        }
        else if (!hasSpacialChar) {
            password_error.textContent = "password must include at least one special charater.";
        }
        else {
            password_error.textContent = "Valid password";
        }
    }
}