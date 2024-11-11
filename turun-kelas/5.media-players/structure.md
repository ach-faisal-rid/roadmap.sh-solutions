Berikut adalah contoh kode untuk membuat website media player sederhana dengan fitur streaming dari YouTube, dukungan file lokal, serta kontrol pemutaran dasar. 

### Struktur File
1. `index.html`: Halaman utama.
2. `style.css`: CSS untuk tampilan.
3. `script.js`: JavaScript untuk mengatur fungsionalitas media player.

---

#### `index.html`

```html

```

---

#### `style.css`

```css

```

---

#### `script.js`

```javascript


```

---

### Penjelasan Fitur:

1. **Streaming dari YouTube**:
   - Pengguna memasukkan URL YouTube, lalu ID video diekstrak dari URL tersebut untuk dibuatkan URL `embed` sehingga bisa diputar pada elemen video.

2. **Dukungan File Lokal**:
   - Pengguna memilih file lokal (audio atau video), lalu `URL.createObjectURL()` digunakan untuk menghasilkan URL sementara yang dapat diputar di elemen video.

3. **Kontrol Pemutaran**:
   - Tombol `playPause()` untuk mengontrol pemutaran (play/pause).
   - `volumeControl` memungkinkan pengguna untuk mengubah tingkat volume dari media yang sedang diputar.

Dengan kode di atas, Anda sudah dapat membuat media player yang mendukung streaming dari YouTube dan memutar file lokal.