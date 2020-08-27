const greenColor = "green"
const whiteColor = "white"

function showLoginMenu() {
    $('.ui.modal')
        .modal('show')
    ;
    document.getElementById("LoginMenuButton").style.backgroundColor = whiteColor;
    // document.getElementById("SignUpMenuButton").style.backgroundColor = whiteColor;
    showLogSinMenu(document.getElementById("LoginMenuButton"),
        document.getElementById("SignUpMenuButton"),
        "Login-Menu",
        "SignUp-Menu");
}

function showLogSinMenu(button1, button2, menu1, menu2) {
    console.log(button1.style.backgroundColor)
    if (button1.style.backgroundColor === whiteColor) {
        button1.style.backgroundColor = greenColor;
        button2.style.backgroundColor = whiteColor;
        var menu11 = document.getElementById(menu1)
        var menu12 = document.getElementById(menu2)
        console.log($(menu2))
        console.log("**********")
        console.log($(menu1))
        $(menu1).transition('fade right');
        $(menu2).transition('fade left');
    }
}