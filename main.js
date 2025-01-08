const body = document.querySelector("body");
const photo = document.querySelector(".filipe-photo");
const switchButton = document.querySelector(".switch-head");
const switchBody = document.querySelector(".switch-body");
const iconSun = document.querySelector(".icon-sun");
const iconMoon = document.querySelector(".icon-moon");
const buttons = document.querySelectorAll(".button-link > button")
const footerLinks = document.querySelectorAll(".footer-links-item");

const allText = [];
allText.push(document.querySelector(".image-label"));
allText.push(document.querySelector(".footer-text"));
// const footerText = document.querySelector(".footer-")

const changeTheme = () => {
    console.log("Theme changed");

    body.classList.toggle("light-bg");
    photo.classList.toggle("light-photo");

    switchButton.classList.toggle("switch-off");
    switchButton.classList.toggle("switch-on");
    switchButton.classList.toggle("light-switchhead");
    switchBody.classList.toggle("light-switchbody");

    iconMoon.classList.toggle("hidden");
    iconSun.classList.toggle("hidden");

    // console.log(footerLinks)
    for(let item of footerLinks){
        item.classList.toggle("light-footerlinks");
        // console.log(item);
    }

    for(let button of buttons){
        button.classList.toggle("light-button");
    }

    for(let text of allText){
        text.classList.toggle("light-text");
    }

}

switchButton.addEventListener("click", changeTheme);