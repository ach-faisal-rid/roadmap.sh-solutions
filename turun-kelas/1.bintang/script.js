const starPattern = document.getElementById('star-pattern');

let rows = 9; // Jumlah baris bintang
let pattern = '';

for (let i = 1; i <= rows; i++) {
    pattern += '*'.repeat(i) + '\n'; // Menambahkan bintang sebanyak 'i'
}

// Tampilkan pola pada div
starPattern.textContent = pattern; 