# 💻 Website Cek Laptop

Pada proyek ini, kita akan membuat sebuah **Website Cek Laptop** yang memungkinkan pengguna untuk mengetahui spesifikasi laptop mereka, termasuk merek dan detail perangkat keras.

### 🔍 Fitur Utama:

- **Deteksi Merek Laptop**: Website akan mendeteksi apakah laptop tersebut adalah Lenovo, Dell, HP, atau merek lainnya.
- **Informasi Spesifikasi Hardware**:
  - **RAM**: Kapasitas memori yang terpasang pada laptop.
  - **Processor**: Jenis dan kecepatan prosesor yang digunakan.
  - **Storage**: Jenis dan kapasitas penyimpanan (HDD atau SSD).
  - **Grafik**: Kartu grafis yang terpasang di laptop.
  - **Sistem Operasi**: Versi sistem operasi yang berjalan di laptop.
- **Tampilan Dinamis**: Informasi ditampilkan secara real-time setelah mendeteksi perangkat yang digunakan.

### 📚 Teknologi yang Digunakan:

- **HTML**: Untuk struktur halaman dan elemen form.
- **CSS**: Untuk gaya dan tata letak yang menarik.
- **JavaScript**: Untuk mendeteksi spesifikasi hardware melalui browser API atau sumber lain, serta untuk menampilkan data secara dinamis.

Dengan proyek ini, pengguna bisa dengan mudah memeriksa spesifikasi lengkap laptop mereka tanpa harus mencari secara manual di pengaturan sistem.

Penjelasan:

    HTML: Menggunakan struktur sederhana dengan beberapa elemen <p> untuk menampilkan hasil spesifikasi laptop. Elemen-elemen ini diisi dengan hasil yang diperoleh dari JavaScript.
    JavaScript:
        Menggunakan navigator.userAgentData, navigator.platform, navigator.userAgent, dan navigator.deviceMemory untuk mendapatkan informasi tentang merek, model, sistem operasi, dan jumlah RAM.
        Tombol "Cek Laptop" memicu pengecekan dan menampilkan hasil di halaman.