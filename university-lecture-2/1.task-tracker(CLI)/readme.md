
---

## Task Tracker

**Bangun aplikasi CLI untuk melacak tugas dan mengelola daftar to-do Anda.**

Task Tracker adalah sebuah proyek yang digunakan untuk melacak dan mengelola tugas Anda. Dalam tugas ini, Anda akan membangun antarmuka baris perintah (CLI) sederhana untuk melacak apa yang perlu Anda lakukan, apa yang telah Anda selesaikan, dan apa yang sedang Anda kerjakan. Proyek ini akan membantu Anda berlatih keterampilan pemrograman, termasuk bekerja dengan filesystem, menangani input pengguna, dan membangun aplikasi CLI sederhana.

---

### Persyaratan

Aplikasi ini harus berjalan dari baris perintah, menerima tindakan dan input pengguna sebagai argumen, dan menyimpan tugas-tugas dalam file JSON. Pengguna harus dapat melakukan hal-hal berikut:

- Menambah, memperbarui, dan menghapus tugas.
- Menandai tugas sebagai **sedang dikerjakan** atau **selesai**.
- Melihat semua tugas.
- Melihat tugas berdasarkan status: 
  - Tugas yang **sudah selesai**.
  - Tugas yang **belum selesai** (to-do).
  - Tugas yang **sedang dikerjakan**.

---

### Batasan

Berikut adalah beberapa batasan untuk membimbing implementasi Anda:

- Anda dapat menggunakan bahasa pemrograman apapun untuk membangun proyek ini.
- Gunakan **positional arguments** di command line untuk menerima input pengguna.
- Simpan tugas dalam **file JSON** di direktori saat ini.
- File JSON harus dibuat jika tidak ada.
- Gunakan modul filesystem bawaan dari bahasa pemrograman Anda untuk berinteraksi dengan file JSON.
- Jangan gunakan library atau framework eksternal untuk membangun proyek ini.
- Pastikan menangani kesalahan dan edge case dengan baik.

---

### Contoh Perintah

Berikut adalah beberapa contoh perintah dan penggunaannya:

```bash
# Menambahkan tugas baru
task-cli add "Beli bahan makanan"
# Output: Tugas berhasil ditambahkan (ID: 1)

# Memperbarui dan menghapus tugas
task-cli update 1 "Beli bahan makanan dan masak makan malam"
task-cli delete 1

# Menandai tugas sebagai sedang dikerjakan atau selesai
task-cli mark-in-progress 1
task-cli mark-done 1

# Melihat semua tugas
task-cli list

# Melihat tugas berdasarkan status
task-cli list done
task-cli list todo
task-cli list in-progress
```

---

### Properti Tugas

Setiap tugas harus memiliki properti berikut:

- `id`: Identifikasi unik untuk tugas.
- `description`: Deskripsi singkat tentang tugas.
- `status`: Status tugas (todo, in-progress, done).
- `createdAt`: Tanggal dan waktu saat tugas dibuat.
- `updatedAt`: Tanggal dan waktu saat tugas terakhir diperbarui.

Properti ini harus ditambahkan ke file JSON ketika menambahkan tugas baru dan diperbarui sesuai saat mengubah tugas.

---

### Memulai

Berikut adalah beberapa langkah untuk membantu Anda memulai proyek Task Tracker CLI:

#### Menyiapkan Lingkungan Pengembangan
- Pilih bahasa pemrograman yang Anda kuasai (misalnya, Python, JavaScript, dll.).
- Pastikan Anda memiliki editor kode atau IDE yang terpasang (misalnya, VSCode, PyCharm).

#### Inisialisasi Proyek
- Buat direktori proyek baru untuk Task Tracker CLI Anda.
- Inisialisasi sistem kontrol versi (misalnya, Git) untuk mengelola proyek Anda.

#### Mengimplementasikan Fitur
- Mulailah dengan membuat struktur dasar CLI untuk menangani input pengguna.
- Implementasikan setiap fitur satu per satu, uji dengan cermat sebelum melanjutkan ke fitur berikutnya:
  - Implementasikan fungsi menambahkan tugas terlebih dahulu.
  - Implementasikan fungsi melihat tugas setelahnya.
  - Lanjutkan dengan memperbarui, menandai sebagai sedang dikerjakan atau selesai, dan seterusnya.

#### Pengujian dan Debugging
- Uji setiap fitur secara individual untuk memastikan semuanya berjalan dengan baik.
- Verifikasi tugas disimpan dengan benar dalam file JSON.
- Debug masalah yang muncul selama pengembangan.

---

### Menyelesaikan Proyek
- Pastikan semua fitur diimplementasikan dan diuji dengan baik.
- Bersihkan kode Anda dan tambahkan komentar di mana diperlukan.
- Tulis README yang baik yang menjelaskan cara menggunakan Task Tracker CLI Anda.

---

Dengan menyelesaikan proyek ini, Anda akan mengembangkan alat praktis yang dapat membantu Anda atau orang lain mengelola tugas dengan efisien. Proyek ini memberikan dasar yang kuat untuk proyek pemrograman yang lebih maju dan aplikasi dunia nyata.

**Selamat coding!**

--- 