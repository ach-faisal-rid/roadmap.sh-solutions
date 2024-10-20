const starPattern = document.getElementById('star-pattern');

let rows = 10; // Jumlah baris bintang
let pattern = '';

for (let i = 1; i <= rows; i++) {
    pattern += '*'.repeat(i) + '\n'; // Menambahkan bintang sebanyak 'i'
}

starPattern.textContent = pattern; // Tampilkan pola pada div