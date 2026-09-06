const loginForm = document.getElementById("loginForm");

const username = document.getElementById("username");
const password = document.getElementById("password");

const loginButton = document.getElementById("loginButton");

const message = document.getElementById("message");

const showPassword = document.getElementById("showPassword");

const forgotPassword = document.getElementById("forgotPassword");


/*
   SHOW / HIDE PASSWORD
*/

showPassword.addEventListener("click", function () {

    if (password.type === "password") {

        password.type = "text";

        showPassword.textContent = "◉";

    } else {

        password.type = "password";

        showPassword.textContent = "○";
    }

});


/*
   LOGIN
*/

loginForm.addEventListener("submit", function (event) {

    event.preventDefault();

    window.location.href = "dashboard.html";

    message.textContent = "";

    const usernameValue = username.value.trim();
    const passwordValue = password.value;


    if (usernameValue === "" || passwordValue === "") {

        message.textContent =
            "Please enter your username and password.";

        message.style.color = "#dc2626";

        return;
    }


    loginButton.disabled = true;

    loginButton.innerHTML =
        "Signing in...";


    /*
       DEMO LOGIN

       Later we will replace this
       with your backend API.
    */

    setTimeout(function () {

        message.textContent =
            "Demo login successful.";


        message.style.color = "#16a34a";

        loginButton.disabled = false;

        loginButton.innerHTML =
            'Sign In <span>→</span>';

    }, 1000);

});


/*
   FORGOT PASSWORD
*/

forgotPassword.addEventListener("click", function (event) {

    event.preventDefault();

    message.textContent =
        "Password recovery will be available soon.";

    message.style.color = "#2563eb";

});