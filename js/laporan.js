const laporanTable =
document.getElementById("laporanTable");

let jadwal =
JSON.parse(
localStorage.getItem("jadwal")
) || [];

const bentrok =
JSON.parse(
    localStorage.getItem(
        "jadwalBentrok"
    )
) || [];

document.getElementById(
    "totalBentrok"
).innerText =
bentrok.length;

function tampilkanLaporan(data){

    laporanTable.innerHTML = "";

    if(data.length === 0){

        laporanTable.innerHTML = `

        <tr>

            <td colspan="6"
            style="text-align:center">

                Tidak ada data

            </td>

        </tr>

        `;

        return;

    }

    data.forEach((item,index)=>{

        laporanTable.innerHTML += `

        <tr>

            <td>${index+1}</td>

            <td>${item.matkul}</td>

            <td>${item.kelas}</td>

            <td>${item.lab}</td>

            <td>${item.hari}</td>

            <td>

                ${item.mulai}
                -
                ${item.selesai}

            </td>

        </tr>

        `;

    });

}

function filterLaporan(){

    const keyword =
    document
    .getElementById("filterMatkul")
    .value
    .toLowerCase();

    const hasil = jadwal.filter(item=>

        item.matkul
        .toLowerCase()
        .includes(keyword)

    );

    tampilkanLaporan(hasil);

}

function hitungStatistik(){

    const laboratorium =
    JSON.parse(
        localStorage.getItem("laboratorium")
    ) || [];

    document
    .getElementById("totalJadwal")
    .innerHTML =
    jadwal.length;

    document
    .getElementById("totalLab")
    .innerHTML =
    laboratorium.length;

    document
    .getElementById("totalBentrok")
    .innerHTML =
    bentrok.length;

}

function cetakLaporan(){

    window.print();

}

tampilkanLaporan(jadwal);

hitungStatistik();