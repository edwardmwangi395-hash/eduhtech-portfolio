function welcome() {
    document.getElementById("message").innerHTML =
        "Welcome to my website! ";
}


function sendMessage() {
    let name = document.getElementById("name").value;

    document.getElementById("contactMessage").innerHTML =
        "Thank you, " + name + "! Your message has been received. ";
}
function darkMode() {
    document.body.classList.toggle("dark-mode");
}
