const monitoringTable =
document.getElementById("monitoringTable");

const jadwal =
JSON.parse(
localStorage.getItem("jadwal")
) || [];

function tampilkanMonitoring() {

    monitoringTable.innerHTML = "";

    if (jadwal.length === 0) {

        monitoringTable.innerHTML = `

        <tr>

            <td colspan="7"
            style="text-align:center">

            Belum ada data jadwal

            </td>

        </tr>

        `;

        return;

    }

    jadwal.forEach((item,index)=>{

        monitoringTable.innerHTML += `

        <tr>

            <td>${index+1}</td>

            <td>${item.lab}</td>

            <td>${item.matkul}</td>

            <td>${item.kelas}</td>

            <td>${item.hari}</td>

            <td>${item.mulai} - ${item.selesai}</td>

            <td>

                <span class="status-active">

                    Digunakan

                </span>

            </td>

        </tr>

        `;

    });

}

tampilkanMonitoring();