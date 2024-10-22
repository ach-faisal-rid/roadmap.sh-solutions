// Menyimpan status mode di localStorage agar persist saat reload
window.onload = function () {
    let isDarkMode = localStorage.getItem("isDarkMode");
    if (isDarkMode === "true") {
        document.body.classList.add("dark");
    }
};

function darkMode() {
    let body = document.body;
    let isDarkMode = body.classList.contains("dark");

    if (isDarkMode) {
        // Jika dark mode aktif, simpan sebagai "false"
        localStorage.setItem("isDarkMode", "false");
    } else {
        // Jika dark mode tidak aktif, simpan sebagai "true"
        localStorage.setItem("isDarkMode", "true");
    }
}
