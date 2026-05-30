document
.getElementById("loginForm")
.addEventListener("submit", function(e){

    e.preventDefault();

    const username =
    document.getElementById("username").value;

    const password =
    document.getElementById("password").value;

    const message =
    document.getElementById("message");

    if(
        username === "admin" &&
        password === "admin123"
    ){

        message.style.color = "green";
        message.innerHTML = "Login berhasil";

        setTimeout(() => {

            window.location.href =
            "dashboard.html";

        },1000);

    }else{

        message.style.color = "red";
        message.innerHTML =
        "Username atau Password salah";

    }

});