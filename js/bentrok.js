const bentrokTable =
document.getElementById("bentrokTable");

const statusBentrok =
document.getElementById("statusBentrok");

function konversiMenit(jam){

    const waktu = jam.split(":");

    return (
        parseInt(waktu[0]) * 60 +
        parseInt(waktu[1])
    );

}

function cekBentrok(){

    const jadwal =
    JSON.parse(
        localStorage.getItem("jadwal")
    ) || [];

    let bentrok = [];

    bentrokTable.innerHTML = "";

    for(let i=0;i<jadwal.length;i++){

        for(let j=i+1;j<jadwal.length;j++){

            const mulai1 =
            konversiMenit(
                jadwal[i].mulai
            );

            const selesai1 =
            konversiMenit(
                jadwal[i].selesai
            );

            const mulai2 =
            konversiMenit(
                jadwal[j].mulai
            );

            const selesai2 =
            konversiMenit(
                jadwal[j].selesai
            );

            if(

                jadwal[i].hari ===
                jadwal[j].hari &&

                jadwal[i].lab ===
                jadwal[j].lab &&

                mulai1 < selesai2 &&

                selesai1 > mulai2

            ){

                bentrok.push({

                    praktikum1:
                    jadwal[i],

                    praktikum2:
                    jadwal[j]

                });

            }

        }

    }

    localStorage.setItem(

        "jadwalBentrok",

        JSON.stringify(bentrok)

    );

    if(bentrok.length > 0){

        statusBentrok.innerHTML =

        `⚠ ${bentrok.length}
        bentrok jadwal ditemukan`;

        statusBentrok.style.background =
        "#fee2e2";

        statusBentrok.style.color =
        "#dc2626";

    }else{

        statusBentrok.innerHTML =

        "✓ Tidak ada bentrok jadwal";

        statusBentrok.style.background =
        "#dcfce7";

        statusBentrok.style.color =
        "#15803d";

    }

    bentrok.forEach((item,index)=>{

        bentrokTable.innerHTML += `

        <tr>

            <td>${index + 1}</td>

            <td>

                ${item.praktikum1.matkul}

                <br>

                (${item.praktikum1.mulai}
                -
                ${item.praktikum1.selesai})

            </td>

            <td>

                ${item.praktikum2.matkul}

                <br>

                (${item.praktikum2.mulai}
                -
                ${item.praktikum2.selesai})

            </td>

            <td>

                ${item.praktikum1.lab}

            </td>

            <td>

                ${item.praktikum1.hari}

            </td>

            <td>

                <span class="status-bentrok">

                    Bentrok

                </span>

            </td>

        </tr>

        `;

    });

}

cekBentrok();