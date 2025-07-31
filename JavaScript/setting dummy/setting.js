// ACCOUNT SETTING
let openAccountSetting = document.querySelector(".account-parent");
let accountContent = document.querySelector(".account-content");
let accountArrowDown = openAccountSetting.querySelector(".fa-angle-down");
let accountArrowRight = openAccountSetting.querySelector(".fa-angle-right");

let isAccountSettingOpen = false;

openAccountSetting.addEventListener("click", () => {
    if (!isAccountSettingOpen) {
        accountContent.classList.add("open-account-content");
        accountArrowDown.style.display = "block";
        accountArrowRight.style.display = "none";
        isAccountSettingOpen = true;
    } else {
        accountContent.classList.remove("open-account-content");
        accountArrowDown.style.display = "none";
        accountArrowRight.style.display = "block";
        isAccountSettingOpen = false;
    }
});


// THEME SETTING
let openThemeSetting = document.querySelector(".theme-parent");
let themeContent = document.querySelector(".theme-content");
let themeArrowDown = openThemeSetting.querySelector(".fa-angle-down");
let themeArrowRight = openThemeSetting.querySelector(".fa-angle-right");

let isThemeOpen = false;

openThemeSetting.addEventListener("click", () => {
    if (!isThemeOpen) {
        themeContent.classList.add("open-theme-content");
        themeArrowDown.style.display = "block";
        themeArrowRight.style.display = "none";
        isThemeOpen = true;
    } else {
        themeContent.classList.remove("open-theme-content");
        themeArrowDown.style.display = "none";
        themeArrowRight.style.display = "block";
        isThemeOpen = false;
    }
});

// NOTISFICATION SETTING
let openNoticeSetting = document.querySelector(".noticefi-parent");
let notifiContent = document.querySelector(".notifi-content");
let notifiArrowDown = openNoticeSetting.querySelector(".fa-angle-down");
let notifiArrowRight = openNoticeSetting.querySelector(".fa-angle-right");

let isNotifiOpen = false;

openNoticeSetting.addEventListener("click", () => {
    if (!isNotifiOpen) {
        notifiContent.classList.add("open-notifi-content");
        notifiArrowDown.style.display = "block";
        notifiArrowRight.style.display = "none";
        isNotifiOpen = true;
    } else {
        notifiContent.classList.remove("open-notifi-content");
        notifiArrowDown.style.display = "none";
        notifiArrowRight.style.display = "block";
        isNotifiOpen = false;
    }
});
