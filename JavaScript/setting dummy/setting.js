// getting elements from html
let openAccountSetting = document.querySelector(".account-parent");
let accountContent = document.querySelector(".account-content");
let accountArrowDown = openAccountSetting.querySelector(".fa-angle-down");
let accountArrowRight = openAccountSetting.querySelector(".fa-angle-right");

let openNoticeSetting = document.querySelector(".notifi-parent");
let notifiContent = document.querySelector(".notifi-content");
let notifiArrowDown = openNoticeSetting.querySelector(".fa-angle-down");
let notifiArrowRight = openNoticeSetting.querySelector(".fa-angle-right");

let appearanceParent = document.querySelector(".appearance-parent");
let appearanceArrowDown = appearanceParent.querySelector(".fa-angle-down");
let appearanceArrowRight = appearanceParent.querySelector(".fa-angle-right");

let themeParent = document.querySelector(".theme")
let openThemeSetting = document.querySelector(".theme-parent");
let themeContent = document.querySelector(".theme-content");
let themeArrowDown = openThemeSetting.querySelector(".fa-angle-down");
let themeArrowRight = openThemeSetting.querySelector(".fa-angle-right");

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

// APPEARANCE SETTING

let isAppearance = false;

appearanceParent.addEventListener("click", () => {
    if(!isAppearance){
        appearanceArrowDown.style.display = "block";
        appearanceArrowRight.style.display = "none";
        themeParent.style.display = "flex";
        isAppearance = true;
    }
    else{
        appearanceArrowDown.style.display = "none";
        appearanceArrowRight.style.display = "block";
        themeParent.style.display = "none";
        isAppearance = false;
    }
})


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





