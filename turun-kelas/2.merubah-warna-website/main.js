// Ambil elemen-elemen yang diperlukan dari DOM
const body = document.body;
const info = document.getElementById("info");
const modeButton = document.getElementById("mode");

const darkLimit = 5;
let darkCounter = parseInt(localStorage.getItem("darkCounter")) || 0;
let darkRemainingLeft = darkLimit - darkCounter;

// Mengecek apakah dark mode aktif sebelumnya
window.onload = function () {
    const isDarkMode = localStorage.getItem("isDarkMode") === "true";
    if (isDarkMode) {
        body.classList.add("dark");
    }
    updateInfo();
};

function toggleDarkMode() {
    // Cek apakah dark mode sudah dipakai sebanyak batas maksimum
    if (darkRemainingLeft === 0) {
        info.textContent = "💥 JATAH FITUR DARKMODE ANDA SUDAH HABIS 💥";
        modeButton.style.display = "none"; // Sembunyikan tombol "MODE" jika limit habis
        return;
    }

    // Toggle mode gelap dan terang
    body.classList.toggle("dark");

    // Update counter jika dark mode aktif
    if (body.classList.contains("dark")) {
        darkCounter++;
    }
    darkRemainingLeft = darkLimit - darkCounter;

    // Simpan status ke localStorage
    localStorage.setItem("isDarkMode", body.classList.contains("dark").toString());
    localStorage.setItem("darkCounter", darkCounter.toString());

    // Perbarui informasi tampilan
    updateInfo();
}

function resetDarkMode() {
    // Reset counter dan sisa dark mode
    darkCounter = 0;
    darkRemainingLeft = darkLimit;
    localStorage.setItem("darkCounter", darkCounter.toString());
    localStorage.removeItem("isDarkMode");

    // Hapus class dark jika aktif
    body.classList.remove("dark");
    modeButton.style.display = "inline"; // Tampilkan kembali tombol mode jika disembunyikan

    // Perbarui informasi tampilan
    updateInfo();
}

function updateInfo() {
    info.textContent = `Darkmode dipakai ${darkCounter}x, tersisa ${darkRemainingLeft}`;
}
