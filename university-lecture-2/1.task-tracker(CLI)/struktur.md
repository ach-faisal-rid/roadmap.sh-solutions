Jika kamu lebih suka menggunakan **JavaScript**, berikut adalah contoh kode Task Tracker CLI menggunakan **Node.js** dengan menyimpan data ke dalam file **JSON**.

node-v
npm-v

npm init
touch index.js
node index.js 


### 1. **Struktur Direktori Proyek**
```
task-tracker/
│
├── tasks.json        # File untuk menyimpan data tugas
└── task-tracker.js   # File utama CLI Task Tracker
```

### 2. **task-tracker.js** (Kode Utama)

```javascript
const fs = require('fs');
const path = require('path');

// Lokasi file penyimpanan tugas
const TASKS_FILE = path.join(__dirname, 'tasks.json');

// Muat data dari file JSON
function loadTasks() {
    if (!fs.existsSync(TASKS_FILE)) {
        return [];
    }
    const data = fs.readFileSync(TASKS_FILE, 'utf-8');
    return JSON.parse(data || '[]');
}

// Simpan data ke file JSON
function saveTasks(tasks) {
    fs.writeFileSync(TASKS_FILE, JSON.stringify(tasks, null, 2));
}

// Tambahkan tugas baru
function addTask(description) {
    const tasks = loadTasks();
    const newTask = {
        id: tasks.length + 1,
        description,
        status: 'todo',
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
    };
    tasks.push(newTask);
    saveTasks(tasks);
    console.log('Tugas berhasil ditambahkan:', newTask);
}

// Perbarui tugas berdasarkan ID
function updateTask(id, newDescription) {
    const tasks = loadTasks();
    const task = tasks.find(task => task.id === id);
    if (!task) {
        console.log('Tugas tidak ditemukan!');
        return;
    }
    task.description = newDescription;
    task.updatedAt = new Date().toISOString();
    saveTasks(tasks);
    console.log('Tugas berhasil diperbarui:', task);
}

// Hapus tugas berdasarkan ID
function deleteTask(id) {
    let tasks = loadTasks();
    tasks = tasks.filter(task => task.id !== id);
    saveTasks(tasks);
    console.log('Tugas berhasil dihapus');
}

// Ubah status tugas
function markTask(id, status) {
    const tasks = loadTasks();
    const task = tasks.find(task => task.id === id);
    if (!task) {
        console.log('Tugas tidak ditemukan!');
        return;
    }
    task.status = status;
    task.updatedAt = new Date().toISOString();
    saveTasks(tasks);
    console.log(`Tugas berhasil ditandai sebagai ${status}:`, task);
}

// List semua tugas atau tugas berdasarkan status
function listTasks(status = null) {
    const tasks = loadTasks();
    const filteredTasks = status ? tasks.filter(task => task.status === status) : tasks;
    console.log(filteredTasks);
}

// CLI Handling
const args = process.argv.slice(2);
const command = args[0];

switch (command) {
    case 'add':
        addTask(args[1]);
        break;
    case 'update':
        updateTask(parseInt(args[1]), args[2]);
        break;
    case 'delete':
        deleteTask(parseInt(args[1]));
        break;
    case 'mark-in-progress':
        markTask(parseInt(args[1]), 'in-progress');
        break;
    case 'mark-done':
        markTask(parseInt(args[1]), 'done');
        break;
    case 'list':
        listTasks(args[1] || null);
        break;
    default:
        console.log('Perintah tidak dikenal.');
}
```

### 3. **tasks.json** (Contoh Data Tugas)

```json
[
  {
    "id": 1,
    "description": "Membeli bahan makanan",
    "status": "todo",
    "createdAt": "2024-10-17T08:00:00.000Z",
    "updatedAt": "2024-10-17T08:00:00.000Z"
  }
]
```

### 4. **Cara Menjalankan**

1. Buat direktori untuk proyek.
2. Tambahkan file `task-tracker.js` dan `tasks.json` ke dalam direktori tersebut.
3. Jalankan perintah di terminal untuk mengelola tugas, seperti:

```bash
# Menambahkan tugas
node task-tracker.js add "Membeli bahan makanan"

# Mengupdate tugas
node task-tracker.js update 1 "Membeli bahan makanan dan memasak"

# Menghapus tugas
node task-tracker.js delete 1

# Menandai tugas sebagai in-progress atau done
node task-tracker.js mark-in-progress 1
node task-tracker.js mark-done 1

# Menampilkan semua tugas atau berdasarkan status
node task-tracker.js list
node task-tracker.js list done
```

### Penjelasan:

- **loadTasks**: Fungsi untuk membaca dan memuat tugas dari file JSON.
- **saveTasks**: Fungsi untuk menyimpan tugas ke file JSON.
- **addTask**, **updateTask**, **deleteTask**, **markTask**: Masing-masing berfungsi untuk menambahkan, memperbarui, menghapus, dan menandai tugas.
- **listTasks**: Menampilkan semua tugas atau berdasarkan status (`todo`, `done`, `in-progress`).
- **CLI Handling**: Mendapatkan argumen dari terminal dan memanggil fungsi yang sesuai.

Dengan ini, kamu bisa mengelola tugas langsung dari command line menggunakan **Node.js**!