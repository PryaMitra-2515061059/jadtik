const form =
document.getElementById("labForm");

const table =
document.getElementById("labTable");

let laboratorium =
JSON.parse(
localStorage.getItem("laboratorium")
) || [];

form.addEventListener("submit",(e)=>{

    e.preventDefault();

    const data = {

        nama:
        document.getElementById("namaLab").value,

        kapasitas:
        document.getElementById("kapasitas").value,

        lokasi:
        document.getElementById("lokasi").value,

        status:
        document.getElementById("status").value

    };

    laboratorium.push(data);

    simpan();

    tampilkan();

    form.reset();

});

function simpan(){

    localStorage.setItem(
        "laboratorium",
        JSON.stringify(laboratorium)
    );

}

function tampilkan(){

    table.innerHTML = "";

    laboratorium.forEach((lab,index)=>{

        table.innerHTML += `

        <tr>

            <td>${index+1}</td>

            <td>${lab.nama}</td>

            <td>${lab.kapasitas}</td>

            <td>${lab.lokasi}</td>

            <td>${lab.status}</td>

            <td>

                <button
                onclick="hapus(${index})">

                Hapus

                </button>

            </td>

        </tr>

        `;

    });

}

function hapus(index){

    if(confirm("Hapus laboratorium?")){

        laboratorium.splice(index,1);

        simpan();

        tampilkan();

    }

}

tampilkan();