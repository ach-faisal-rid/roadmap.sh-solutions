### Theme
Tema yang saya ambil berasal dari **Bootstrap** yang disimpan di `localStorage`. Ini merupakan peningkatan dari proyek sebelumnya. Kali ini, saya memiliki studi kasus terbaru yang akan saya bahas.

---

### Accessible Form UI

Dalam proyek ini, Anda diharuskan membuat UI formulir hanya dengan menggunakan HTML dan CSS. Formulir tersebut akan menyertakan kolom untuk nama lengkap, email, kata sandi, dan konfirmasi kata sandi, bersama dengan tombol untuk mengubah visibilitas teks kata sandi. Selain itu, formulir akan menampilkan bilah kemajuan kelengkapan dan daftar persyaratan yang harus dipenuhi agar formulir mencapai kelengkapan 100%. Meskipun versi formulir ini tidak berfungsi, formulir ini akan menjadi komponen UI statis yang dapat ditingkatkan dengan JavaScript di masa mendatang.

**Tujuan Proyek:**

Tujuan dari proyek ini adalah untuk tidak hanya membantu Anda berlatih HTML dan CSS tetapi juga fokus pada pembuatan formulir yang dapat diakses dan mudah digunakan oleh semua pengguna, termasuk penyandang disabilitas. Diberikan di bawah ini adalah mockup kasar dari formulir UI yang perlu Anda buat:

![testimonial card](image/form-components-7t4b3.png)

Kamu bebas menggunakan konten dan gambar apa pun yang kamu suka untuk Accessible Form UI tersebut.

---

**Pedoman Aksesibilitas**

Anda harus membaca pedoman aksesibilitas dan praktik terbaik sebelum memulai proyek ini. Namun, berikut beberapa poin penting yang perlu diingat saat membuat UI formulir yang dapat diakses:

    1. Pelabelan: Pastikan setiap bidang formulir memiliki elemen <label> terkait yang secara jelas terkait dengan bidang tersebut menggunakan atribut for.
    2. Status Fokus: Menata status fokus setiap kolom masukan sehingga pengguna yang bernavigasi dengan keyboard dapat dengan mudah melihat kolom mana yang sedang aktif.
    3. Pesan Kesalahan: Pertimbangkan untuk menambahkan ruang untuk pesan kesalahan yang dapat ditampilkan ketika pengguna memasukkan data yang tidak valid. Pesan-pesan ini harus secara jelas dikaitkan dengan kolom masukan yang relevan.
    4. Atribut ARIA: Gunakan atribut ARIA (Aplikasi Internet Kaya yang Dapat Diakses) jika diperlukan, seperti aria-required untuk bidang yang wajib diisi dan aria-invalid untuk bidang yang memiliki kesalahan.
    5. Kontras Warna: Pastikan kontras warna antara teks dan latar belakang cukup untuk memenuhi standar WCAG (Pedoman Aksesibilitas Konten Web), sehingga formulir dapat dibaca oleh pengguna tunanetra.
    6. Elemen Interaktif: Pastikan tombol untuk menampilkan/menyembunyikan kata sandi dapat diakses melalui keyboard dan pembaca layar, memberikan umpan balik yang jelas tentang keadaan saat ini (misalnya, “Kata sandi disembunyikan” atau “Kata sandi terlihat”).

**Hasil yang Diharapkan:**

Meskipun versi ini tidak berfungsi, versi ini akan memberikan dasar yang kuat untuk membuat pemilih tanggal interaktif di proyek mendatang.