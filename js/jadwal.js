const form = document.getElementById("jadwalForm");
const table = document.getElementById("jadwalTable");

let jadwalList =
JSON.parse(
localStorage.getItem("jadwal")
) || [];

let editIndex = -1;

form.addEventListener("submit", function(e){

    e.preventDefault();

    const data = {

        matkul:
        document.getElementById("matkul").value,

        kelas:
        document.getElementById("kelas").value,

        lab:
        document.getElementById("lab").value,

        hari:
        document.getElementById("hari").value,

        mulai:
        document.getElementById("jamMulai").value,

        selesai:
        document.getElementById("jamSelesai").value

    };

    if(editIndex === -1){

        if(editIndex === -1){

            jadwalList.push(data);

        }else{

            jadwalList[editIndex] = data;

            editIndex = -1;

        }

    }else{

        jadwalList[editIndex] = data;

        editIndex = -1;

    }

    simpanData();

    tampilkanData();

    form.reset();

});

function simpanData(){

    localStorage.setItem(
        "jadwal",
        JSON.stringify(jadwalList)
    );

}

function tampilkanData(){

    table.innerHTML = "";

    jadwalList.forEach((item,index)=>{

        table.innerHTML += `

        <tr>

            <td>${index+1}</td>

            <td>${item.matkul}</td>

            <td>${item.kelas}</td>

            <td>${item.lab}</td>

            <td>${item.hari}</td>

            <td>${item.mulai} - ${item.selesai}</td>

            <td>

                <button
                class="btn-edit"
                onclick="editData(${index})">

                Edit

                </button>

                <button
                class="btn-delete"
                onclick="hapusData(${index})">

                Hapus

                </button>

            </td>

        </tr>

        `;

    });

}

function hapusData(index){

    if(confirm("Hapus jadwal ini?")){

        jadwalList.splice(index,1);

        simpanData();

        tampilkanData();

    }

}

function editData(index){

    const data = jadwalList[index];

    document.getElementById("matkul").value =
    data.matkul;

    document.getElementById("kelas").value =
    data.kelas;

    document.getElementById("lab").value =
    data.lab;

    document.getElementById("hari").value =
    data.hari;

    document.getElementById("jamMulai").value =
    data.mulai;

    document.getElementById("jamSelesai").value =
    data.selesai;

    editIndex = index;

}

tampilkanData();