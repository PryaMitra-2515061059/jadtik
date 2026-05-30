const userForm = document.getElementById("userForm");
const userTable = document.getElementById("userTable");

let users =
JSON.parse(localStorage.getItem("users")) || [];

userForm.addEventListener("submit", function (e) {

    e.preventDefault();

    const user = {

        nama:
        document.getElementById("namaUser").value,

        email:
        document.getElementById("emailUser").value,

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

function simpanData() {

    localStorage.setItem(
        "users",
        JSON.stringify(users)
    );

}

function tampilkanData() {

    userTable.innerHTML = "";

    users.forEach((user, index) => {

        userTable.innerHTML += `

        <tr>

            <td>${index + 1}</td>

            <td>${user.nama}</td>

            <td>${user.email}</td>

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

function hapusUser(index) {

    const konfirmasi =
    confirm("Yakin ingin menghapus pengguna ini?");

    if (konfirmasi) {

        users.splice(index, 1);

        simpanData();

        tampilkanData();

    }

}

function editUser(index) {

    document.getElementById("namaUser").value =
    users[index].nama;

    document.getElementById("emailUser").value =
    users[index].email;

    document.getElementById("role").value =
    users[index].role;

    document.getElementById("statusUser").value =
    users[index].status;

    users.splice(index, 1);

    simpanData();

    tampilkanData();

}

tampilkanData();