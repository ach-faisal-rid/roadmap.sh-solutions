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