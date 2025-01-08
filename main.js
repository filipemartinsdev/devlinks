const switchButton = document.querySelector(".switch-head");
const switchBody = document.querySelector(".switch-body");

const iconSun = document.querySelector(".icon-sun");
const iconMoon = document.querySelector(".icon-moon");

const body = document.querySelector("body");
const buttons = document.querySelectorAll(".button-link > button")

// const footerText = document.querySelector(".footer-")

const changeTheme = () => {
    console.log("Theme changed");

    body.classList.toggle("light-bg");

    switchButton.classList.toggle("switch-off");
    switchButton.classList.toggle("switch-on");
    switchButton.classList.toggle("light-switch");

    iconMoon.classList.toggle("hidden");
    iconSun.classList.toggle("hidden");

    for(let button of buttons){
        button.classList.toggle("light-button");
    }

    console.log(buttons)
}

switchButton.addEventListener("click", changeTheme);