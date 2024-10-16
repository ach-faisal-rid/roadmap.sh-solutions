// Deklarasi variabel biodata
const nama = "Faisal Achmad Ridhani";
let usia = 19;
const pekerjaan = "Pelajar";
const hobi = [
    "Bermain game", 
    "Berenang", 
    "Coding", 
    "bermain gitar", 
    "bermain catur"
];

// Fungsi untuk menampilkan biodata
function tampilkanBiodata() {
    // Ambil elemen div dengan id 'biodata'
    let biodataDiv = document.getElementById('biodata');

    // Buat konten untuk ditampilkan
    let konten = `
        <p><strong>Nama:</strong> ${nama}</p>
        <p><strong>Usia:</strong> ${usia} tahun</p>
        <p><strong>Pekerjaan:</strong> ${pekerjaan}</p>
        <p><strong>Hobi:</strong> ${hobi.join(", ")}</p>
    `;

    // Masukkan konten ke dalam div
    biodataDiv.innerHTML = konten;
}

// Panggil fungsi untuk menampilkan biodata
tampilkanBiodata();

// Console log untuk debugging
console.log("Nama:", nama);
console.log("Usia:", usia);
console.log("Pekerjaan:", pekerjaan);
console.log("Hobi:", hobi);
