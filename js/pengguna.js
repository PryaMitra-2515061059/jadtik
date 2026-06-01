const userForm =
document.getElementById("userForm");

const userTable =
document.getElementById("userTable");

let users =
JSON.parse(
    localStorage.getItem("users")
) || [];

if(users.length === 0){

    users.push({

        nama:"Administrator",

        username:"admin",

        password:"admin123",

        role:"Admin",

        status:"Aktif"

    });

    localStorage.setItem(

        "users",

        JSON.stringify(users)

    );

}

userForm.addEventListener("submit", function(e){

    e.preventDefault();

    const user = {

        nama:
        document.getElementById("namaUser").value,

        username:
        document.getElementById("usernameUser").value,

        password:
        document.getElementById("passwordUser").value,

        role:
        document.getElementById("role").value,

        status:
        document.getElementById("statusUser").value

    };

    users.push(user);

    simpanData();

    tampilkanData();

    userForm.reset();

});

function simpanData(){

    localStorage.setItem(

        "users",

        JSON.stringify(users)

    );

}

function tampilkanData(){

    userTable.innerHTML = "";

    users.forEach((user,index)=>{

        userTable.innerHTML += `

        <tr>

            <td>${index+1}</td>

            <td>${user.nama}</td>

            <td>${user.username}</td>

            <td>${user.password}</td>

            <td>${user.role}</td>

            <td>${user.status}</td>

            <td>

                <button
                class="btn-edit"
                onclick="editUser(${index})">

                    Edit

                </button>

                <button
                class="btn-delete"
                onclick="hapusUser(${index})">

                    Hapus

                </button>

            </td>

        </tr>

        `;

    });

}

function hapusUser(index){

    if(confirm(
        "Yakin ingin menghapus pengguna ini?"
    )){

        users.splice(index,1);

        simpanData();

        tampilkanData();

    }

}

function editUser(index){

    document.getElementById("namaUser").value =
    users[index].nama;

    document.getElementById("usernameUser").value =
    users[index].username;

    document.getElementById("passwordUser").value =
    users[index].password;

    document.getElementById("role").value =
    users[index].role;

    document.getElementById("statusUser").value =
    users[index].status;

    users.splice(index,1);

    simpanData();

    tampilkanData();

}

tampilkanData();