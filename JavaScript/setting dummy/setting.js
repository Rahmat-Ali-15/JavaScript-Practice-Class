// getting elements from html
let openAccountSetting = document.querySelector(".account-parent");
let accountContent = document.querySelector(".account-content");
let accountArrowDown = openAccountSetting.querySelector(".fa-angle-down");
let accountArrowRight = openAccountSetting.querySelector(".fa-angle-right");

let openThemeSetting = document.querySelector(".theme-parent");
let themeContent = document.querySelector(".theme-content");
let themeArrowDown = openThemeSetting.querySelector(".fa-angle-down");
let themeArrowRight = openThemeSetting.querySelector(".fa-angle-right");

let openNoticeSetting = document.querySelector(".noticefi-parent");
let notifiContent = document.querySelector(".notifi-content");
let notifiArrowDown = openNoticeSetting.querySelector(".fa-angle-down");
let notifiArrowRight = openNoticeSetting.querySelector(".fa-angle-right");

let accountSettingChild = document.querySelector(".account-setting-child");

let editProfileBtn = document.querySelector(".edit-profile");

let editProfileContainer = document.querySelector(".edit-profile-container");

let changePass = document.querySelector(".change-pass");
let changePassParent = document.querySelector(".change-pass-parent");

// ACCOUNT SETTING

let isAccountSettingOpen = false;

openAccountSetting.addEventListener("click", () => {
    if (!isAccountSettingOpen) {
        accountContent.classList.add("open-account-content");
        accountArrowDown.style.display = "flex";
        accountArrowRight.style.display = "none";
        accountSettingChild.style.display = "flex";
        editProfileContainer.style.display= "none";
        isAccountSettingOpen = true;
    } 
    else {
        accountContent.classList.remove("open-account-content");
        accountArrowDown.style.display = "none";
        accountArrowRight.style.display = "flex";
        accountSettingChild.style.display = "flex";
        editProfileContainer.style.display= "none"
        changePassParent.style.display = "none";
        isAccountSettingOpen = false;
    }
});


// THEME SETTING

let isThemeOpen = false;

openThemeSetting.addEventListener("click", () => {
    if (!isThemeOpen) {
        themeContent.classList.add("open-theme-content");
        themeArrowDown.style.display = "flex";
        themeArrowRight.style.display = "none";
        isThemeOpen = true;
    } else {
        themeContent.classList.remove("open-theme-content");
        themeArrowDown.style.display = "none";
        themeArrowRight.style.display = "flex";
        isThemeOpen = false;
    }
});

// NOTISFICATION SETTING

let isNotifiOpen = false;

openNoticeSetting.addEventListener("click", () => {
    if (!isNotifiOpen) {
        notifiContent.classList.add("open-notifi-content");
        notifiArrowDown.style.display = "flex";
        notifiArrowRight.style.display = "none";
        isNotifiOpen = true;
    } else {
        notifiContent.classList.remove("open-notifi-content");
        notifiArrowDown.style.display = "none";
        notifiArrowRight.style.display = "flex";
        isNotifiOpen = false;
    }
});

// Displaying edit profile by clicking edit profile button

editProfileBtn.addEventListener("click", () => {
        accountSettingChild.style.display = "none";
        editProfileContainer.style.display= "flex"
        changePassParent.style.display = "none";
});

// Change password

changePass.addEventListener("click", () => {
    changePassParent.style.display = "flex";
    editProfileContainer.style.display= "none";
})

// Eye button 
// const toggleIcons = document.querySelectorAll('i#togglePassword');

// toggleIcons.forEach(icon => {
//   // Set initial state as eye-slash (for hidden password)
//   icon.classList.remove("fa-eye");
//   icon.classList.add("fa-eye-slash");

//   icon.addEventListener('click', () => {
//     const input = icon.previousElementSibling;

//     if (input && input.type === "password") {
//       input.type = "text";
//       icon.classList.remove("fa-eye-slash");
//       icon.classList.add("fa-eye"); // 👁️ Show when visible
//     } else if (input) {
//       input.type = "password";
//       icon.classList.remove("fa-eye");
//       icon.classList.add("fa-eye-slash"); // 🙈 Show when hidden
//     }
//   });
// });



