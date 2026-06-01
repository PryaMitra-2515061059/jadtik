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

    const users =
    JSON.parse(
        localStorage.getItem("users")
    ) || [];

    const user =
    users.find(item =>

        item.username === username &&
        item.password === password &&
        item.status === "Aktif"

    );

    if(user){

        localStorage.setItem(

            "loginUser",

            JSON.stringify(user)

        );

        message.style.color =
        "green";

        message.innerHTML =
        "Login berhasil";

        setTimeout(() => {

            window.location.href =
            "dashboard.html";

        },1000);

    }else{

        message.style.color =
        "red";

        message.innerHTML =
        "Username atau Password salah";

    }

});