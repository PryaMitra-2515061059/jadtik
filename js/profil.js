document.getElementById(
"namaProfil"
).innerHTML =

localStorage.getItem("nama")
|| "Administrator";

function logout(){

    localStorage.removeItem("isLogin");

    window.location.href =
    "index.html";

}