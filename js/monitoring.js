const monitoringTable =
document.getElementById("monitoringTable");

const totalMonitoring =
document.getElementById("totalMonitoring");

function konversiMenit(jam){

    const waktu = jam.split(":");

    return (

        parseInt(waktu[0]) * 60 +

        parseInt(waktu[1])

    );

}

function tampilkanMonitoring(){

    const jadwal =
    JSON.parse(
        localStorage.getItem("jadwal")
    ) || [];

    monitoringTable.innerHTML = "";

    let praktikumBerjalan = 0;

    const sekarang =
    new Date();

    const hariSekarang = [

        "Minggu",
        "Senin",
        "Selasa",
        "Rabu",
        "Kamis",
        "Jumat",
        "Sabtu"

    ][sekarang.getDay()];

    const jamSekarang =

        sekarang.getHours() * 60 +

        sekarang.getMinutes();

    if(jadwal.length === 0){

        monitoringTable.innerHTML = `

        <tr>

            <td colspan="7"
            style="text-align:center">

                Belum ada data jadwal

            </td>

        </tr>

        `;

        totalMonitoring.innerHTML = 0;

        return;

    }

    jadwal.forEach((item,index)=>{

        const mulai =
        konversiMenit(item.mulai);

        const selesai =
        konversiMenit(item.selesai);

        let status =
        "Tersedia";

        let classStatus =
        "status-normal";

        if(

            item.hari === hariSekarang &&

            jamSekarang >= mulai &&

            jamSekarang <= selesai

        ){

            status = "Digunakan";

            classStatus =
            "status-active";

            praktikumBerjalan++;

        }

        monitoringTable.innerHTML += `

        <tr>

            <td>${index+1}</td>

            <td>${item.lab}</td>

            <td>${item.matkul}</td>

            <td>${item.kelas}</td>

            <td>${item.hari}</td>

            <td>

                ${item.mulai}
                -
                ${item.selesai}

            </td>

            <td>

                <span class="${classStatus}">

                    ${status}

                </span>

            </td>

        </tr>

        `;

    });

    totalMonitoring.innerHTML =
    praktikumBerjalan;

}

tampilkanMonitoring();

setInterval(

    tampilkanMonitoring,

    60000

);