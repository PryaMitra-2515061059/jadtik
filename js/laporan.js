const laporanTable =
document.getElementById(
    "laporanTable"
);

const previewTable =
document.getElementById(
    "previewLaporan"
);

const hariIni = new Date();

document.getElementById(
    "tanggalCetak"
).innerHTML =

hariIni.toLocaleDateString(
    "id-ID",
    {
        day:"2-digit",
        month:"long",
        year:"numeric"
    }
);

let jadwal =
JSON.parse(
    localStorage.getItem("jadwal")
) || [];

function hitungBentrok(){

    let totalBentrok = 0;

    function menit(jam){

        const waktu =
        jam.split(":");

        return (
            parseInt(waktu[0]) * 60 +
            parseInt(waktu[1])
        );

    }

    for(let i=0;i<jadwal.length;i++){

        for(let j=i+1;j<jadwal.length;j++){

            const mulai1 =
            menit(jadwal[i].mulai);

            const selesai1 =
            menit(jadwal[i].selesai);

            const mulai2 =
            menit(jadwal[j].mulai);

            const selesai2 =
            menit(jadwal[j].selesai);

            if(

                jadwal[i].hari ===
                jadwal[j].hari &&

                jadwal[i].lab ===
                jadwal[j].lab &&

                mulai1 < selesai2 &&

                selesai1 > mulai2

            ){

                totalBentrok++;

            }

        }

    }

    return totalBentrok;

}

function tampilkanLaporan(data){

    laporanTable.innerHTML = "";

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

function tampilkanPreview(data){

    if(!previewTable) return;

    previewTable.innerHTML = "";

    data.forEach((item,index)=>{

        previewTable.innerHTML += `

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

    const hasil =
    jadwal.filter(item =>

        item.matkul
        .toLowerCase()
        .includes(keyword)

    );

    tampilkanLaporan(hasil);

    tampilkanPreview(hasil);

}

function hitungStatistik(){

    const laboratorium =
    JSON.parse(
        localStorage.getItem(
            "laboratorium"
        )
    ) || [];

    document
    .getElementById(
        "totalJadwal"
    ).innerHTML =
    jadwal.length;

    document
    .getElementById(
        "totalLab"
    ).innerHTML =
    laboratorium.length;

    document
    .getElementById(
        "totalBentrok"
    ).innerHTML =
    hitungBentrok();

}

function cetakLaporan(){

    const { jsPDF } = window.jspdf;

    const doc = new jsPDF();

    doc.setFontSize(16);

    doc.text(
        "LAPORAN JADWAL PRAKTIKUM",
        20,
        20
    );

    doc.setFontSize(10);

    doc.text(
        "Sistem Penjadwalan Praktikum JadTik",
        20,
        28
    );

    let y = 45;

    doc.text("No",10,y);
    doc.text("Praktikum",25,y);
    doc.text("Lab",90,y);
    doc.text("Hari",130,y);
    doc.text("Jam",160,y);

    y += 10;

    jadwal.forEach((item,index)=>{

        doc.text(
            String(index + 1),
            10,
            y
        );

        doc.text(
            item.matkul,
            25,
            y
        );

        doc.text(
            item.lab,
            90,
            y
        );

        doc.text(
            item.hari,
            130,
            y
        );

        doc.text(
            item.mulai +
            "-" +
            item.selesai,
            160,
            y
        );

        y += 10;

        if(y > 270){

            doc.addPage();

            y = 20;

        }

    });

    doc.save(
        "Laporan_JadTik.pdf"
    );

}

function cetakLaporan(){

    document
    .getElementById(
        "popupCetak"
    )
    .style.display =
    "flex";

}

function tutupPopup(){

    document
    .getElementById(
        "popupCetak"
    )
    .style.display =
    "none";

}

function prosesCetak(){

    document
    .getElementById(
        "popupCetak"
    )
    .style.display =
    "none";

    window.print();

}

tampilkanLaporan(jadwal);

tampilkanPreview(jadwal);

hitungStatistik();