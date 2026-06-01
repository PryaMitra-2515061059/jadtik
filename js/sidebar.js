const toggleSidebar =
document.getElementById(
"toggleSidebar"
);

const sidebar =
document.querySelector(
".sidebar"
);

if(toggleSidebar){

    toggleSidebar.addEventListener(
        "click",
        () => {

            sidebar.classList.toggle(
                "collapse"
            );

        }
    );

}