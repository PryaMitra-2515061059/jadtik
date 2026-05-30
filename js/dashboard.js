const totalJadwal =
document.getElementById("totalJadwal");

const totalLab =
document.getElementById("totalLab");

const totalUser =
document.getElementById("totalUser");

const totalBentrok =
document.getElementById("totalBentrok");

const alertBox =
document.getElementById(
"alertBentrok"
);

const jumlahBentrok =
hitungBentrok(jadwal);

if(jumlahBentrok > 0){

    alertBox.innerHTML =

    "⚠ Terdapat "
    + jumlahBentrok +
    " jadwal bentrok";

}else{

    alertBox.innerHTML =

    "✓ Tidak ada jadwal bentrok";

}

function loadDashboard(){

    const jadwal =
    JSON.parse(
    localStorage.getItem("jadwal")
    ) || [];

    const laboratorium =
    JSON.parse(
    localStorage.getItem("laboratorium")
    ) || [];

    const users =
    JSON.parse(
    localStorage.getItem("users")
    ) || [];

    totalJadwal.innerHTML =
    jadwal.length;

    totalLab.innerHTML =
    laboratorium.length;

    totalUser.innerHTML =
    users.length;

    totalBentrok.innerHTML =
    hitungBentrok(jadwal);

}

function hitungBentrok(data){

    let jumlah = 0;

    for(let i=0;i<data.length;i++){

        for(let j=i+1;j<data.length;j++){

            if(
                data[i].lab === data[j].lab &&
                data[i].hari === data[j].hari
            ){
                jumlah++;
            }

        }

    }

    return jumlah;

}

loadDashboard();