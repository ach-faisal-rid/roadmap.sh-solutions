# 🔐 Web Generator Password

Pada proyek ini, kita akan membuat **Web Generator Password** yang sederhana namun efektif menggunakan **HTML**, **CSS** saya pakai tailwinds aja ya biar cepat, dan **JavaScript**. Aplikasi ini akan memungkinkan pengguna untuk menghasilkan kata sandi yang kuat dan aman dengan mudah.

### 📋 Fitur Utama:

- **Kustomisasi Panjang Kata Sandi**: Pengguna dapat menentukan berapa panjang kata sandi yang ingin dihasilkan.
- **Pilih Karakter**: Memungkinkan pengguna untuk memilih jenis karakter yang ingin dimasukkan, seperti huruf besar, huruf kecil, angka, dan simbol.
- **Tombol Salin**: Menyediakan tombol untuk menyalin kata sandi yang dihasilkan ke clipboard dengan mudah.

### 📚 Teknologi yang Digunakan:

- **HTML**: Untuk membuat struktur dasar halaman web.
- **CSS**: Untuk memberikan gaya dan tampilan yang menarik pada aplikasi.
- **JavaScript**: Untuk menangani logika pembuatan kata sandi, termasuk manipulasi elemen DOM dan interaksi pengguna.

Dengan proyek ini, kamu akan belajar bagaimana menggabungkan HTML, CSS, dan JavaScript untuk membuat aplikasi web yang bermanfaat dan interaktif.

### struktur folder

```markdown
web-generator-password/
├── index.html
└── script.js
```

Penjelasan Kode:

    HTML:
        Menggunakan Tailwind CSS untuk styling.
        Input untuk panjang kata sandi dan pilihan karakter (huruf besar, huruf kecil, angka, simbol).
        Tombol untuk menghasilkan dan menyalin kata sandi.

    CSS:
        Anda bisa menambahkan gaya tambahan jika diperlukan, tetapi dengan Tailwind, banyak styling sudah ter-cover.

    JavaScript:
        `generatePassword()`: Menghasilkan kata sandi berdasarkan kriteria yang dipilih pengguna.
        `copyToClipboard()`: Menyalin kata sandi yang dihasilkan ke clipboard dan memberi tahu pengguna.