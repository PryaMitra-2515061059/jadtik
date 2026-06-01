const totalJadwal =
document.getElementById("totalJadwal");

const totalLab =
document.getElementById("totalLab");

const totalUser =
document.getElementById("totalUser");

const totalBentrok =
document.getElementById("totalBentrok");

function hitungBentrok(data){

    let jumlah = 0;

    for(let i=0;i<data.length;i++){

        for(let j=i+1;j<data.length;j++){

            if(

                data[i].hari === data[j].hari &&
                data[i].lab === data[j].lab

            ){

                jumlah++;

            }

        }

    }

    return jumlah;

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

    document.getElementById(
        "totalUser"
    ).innerHTML =
    users.length;

    totalJadwal.innerHTML =
    jadwal.length;

    totalLab.innerHTML =
    laboratorium.length;

    totalBentrok.innerHTML =
    hitungBentrok(jadwal);

}

function tampilkanJadwalHariIni(){

    const jadwal =
    JSON.parse(
        localStorage.getItem("jadwal")
    ) || [];

    const tabel =
    document.getElementById(
        "jadwalHariIni"
    );

    if(!tabel) return;

    tabel.innerHTML = "";

    if(jadwal.length === 0){

        tabel.innerHTML = `

        <tr>

            <td colspan="3"
            style="text-align:center">

                Belum ada jadwal

            </td>

        </tr>

        `;

        return;

    }

    jadwal.forEach(item=>{

        tabel.innerHTML += `

        <tr>

            <td>
                ${item.mulai}
                -
                ${item.selesai}
            </td>

            <td>
                ${item.matkul}
            </td>

            <td>
                ${item.lab}
            </td>

        </tr>

        `;

    });

}

function tampilkanStatusLab(){

    const tabel =
    document.getElementById(
        "statusLabTable"
    );

    const laboratorium =
    JSON.parse(
        localStorage.getItem(
            "laboratorium"
        )
    ) || [];

    tabel.innerHTML = "";

    if(laboratorium.length === 0){

        tabel.innerHTML = `

        <tr>

            <td colspan="3"
            style="text-align:center">

                Belum ada laboratorium

            </td>

        </tr>

        `;

        return;

    }

    laboratorium.forEach(lab=>{

        const statusClass =
        lab.status === "Digunakan"
        ? "status-used"
        : "status-active";

        tabel.innerHTML += `

        <tr>

            <td>${lab.nama}</td>

            <td>${lab.kapasitas}</td>

            <td>

                <span class="${statusClass}">

                    ${lab.status}

                </span>

            </td>

        </tr>

        `;

    });

}

loadDashboard();
tampilkanJadwalHariIni();
tampilkanStatusLab();

console.log(
    JSON.parse(
        localStorage.getItem("jadwal")
    )
);