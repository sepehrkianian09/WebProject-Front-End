const greenColor = "green"
const whiteColor = "white"
var onLoginPage = false;
const loginButton = document.getElementById("LoginMenuButton")
const signupButton = document.getElementById("SignUpMenuButton")
const signupMenu = document.getElementById("SignUp-Menu")
const LoginMenu = document.getElementById("Login-Menu")

function loginMenu() {
    if (onLoginPage) return;
    onLoginPage = true;
    change(greenColor, whiteColor, "none", "block");
}

function change(color1, color2, display1, display2) {
    loginButton.style.backgroundColor = color1;
    signupButton.style.backgroundColor = color2;
    signupMenu.style.display = display1;
    LoginMenu.style.display = display2;
    console.log(signupMenu.style.display)
    console.log(signupMenu)
    console.log(LoginMenu)
}

function showLoginMenu() {
    $('.ui.modal')
        .modal('show')
    ;
    loginMenu();
}

function signUpMenu() {
    if (!onLoginPage) {
        return
    }
    onLoginPage = false;
    change(whiteColor, greenColor, "block", "none");
}