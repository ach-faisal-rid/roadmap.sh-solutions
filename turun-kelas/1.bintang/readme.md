saya ingin buat kode mengunakan html, css, dan javascript tentang membuat * bertingkat atau menghasilkan * seperti ini

Kita akan membuat pola bintang bertingkat menggunakan HTML, CSS, dan JavaScript. Pola ini akan menampilkan bintang (*) yang bertambah jumlahnya dari satu bintang di baris pertama, dua bintang di baris kedua, dan seterusnya.

1. HTML (Kerangka Utama Halaman)

HTML adalah bahasa yang kita gunakan untuk membuat struktur dasar halaman web.

```html

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Pola Bintang Bertingkat</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div id="star-pattern"></div> <!-- Tempat bintang akan muncul -->
    <script src="script.js"></script> <!-- Menghubungkan dengan JavaScript -->
</body>
</html>
```
Penjelasan:

    1. <!DOCTYPE html>: Memberitahu browser bahwa kita sedang membuat halaman HTML5.
    2. <link rel="stylesheet" href="style.css"> : dipakai untuk memanggil style custom yang kita buat agar tampilan lebih menarik.
    3. <div id="star-pattern"></div>: Tempat di mana pola bintang nanti akan muncul di halaman.
    4. <script src="script.js"></script>: Memanggil file JavaScript yang akan menampilkan bintang.

2. CSS (Optional untuk styling)

```css
body {
    font-family: Arial, sans-serif;
    background-color: #f4f4f4;
    text-align: center;
    padding-top: 50px;
}

#star-pattern {
    font-size: 24px;
    line-height: 1.5;
    white-space: pre;
}
```
Penjelasan:
    1. font-family: Mengatur jenis huruf menjadi Arial.
    2. background-color: Mengubah warna latar belakang halaman.
    3. text-align: Mengatur agar teks di tengah halaman.
    4. #star-pattern: Mengatur gaya khusus untuk bagian yang menampilkan bintang.

3. javascript

```javascript
const starPattern = document.getElementById('star-pattern');

let rows = 5; // Jumlah baris bintang
let pattern = '';

for (let i = 1; i <= rows; i++) {
    pattern += '*'.repeat(i) + '\n'; // Menambahkan bintang sebanyak 'i'
}

starPattern.textContent = pattern; // Tampilkan pola pada div
```

Penjelasan:

    1. const starPattern: Mencari elemen HTML dengan id star-pattern untuk tempat menampilkan bintang.
    2. let rows = 5: Menentukan jumlah baris yang ingin kita buat (misalnya, 5 baris bintang).
    3. for (let i = 1; i <= rows; i++): Pengulangan untuk menambahkan bintang setiap kali.
    4. pattern += '*'.repeat(i) + '\n': Menambahkan bintang sebanyak nilai i (misalnya, 1 bintang di baris pertama, 2 bintang di baris kedua, dan seterusnya).
    5. starPattern.textContent = pattern: Menampilkan hasil bintang di halaman.

hasil yang mau kita dapatkan :

```markdown
*
**
***
****
*****

```