document.getElementById(
"namaProfil"
).innerHTML =

localStorage.getItem("nama")
|| "Administrator";

function bukaLogout(){

    document.getElementById(
        "logoutModal"
    ).style.display = "flex";

}

function tutupLogout(){

    document.getElementById(
        "logoutModal"
    ).style.display = "none";

}

function logout(){

    const konfirmasi =
    confirm(
        "Yakin ingin logout?"
    );

    if(konfirmasi){

        localStorage.removeItem(
            "loginUser"
        );

        window.location.href =
        "index.html";

    }

}