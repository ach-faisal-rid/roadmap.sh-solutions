// Ambil elemen modal
const modal = document.getElementById("videoModal");
const thumbnail = document.getElementById("thumbnail");
const closeBtn = document.getElementsByClassName("close")[0];
const youtubeVideo = document.getElementById("youtubeVideo");

// URL video YouTube yang ingin ditampilkan

// Ganti YOUR_VIDEO_ID dengan ID video YouTube kamu
const videoUrl = "https://www.youtube.com/embed/qfJa8kl7zBw?si=MYDykaqg1i8ezOIs"; 

// Ketika thumbnail di klik, buka modal dan set URL video
thumbnail.onclick = function() {
    modal.style.display = "block";
    // Set URL video ke iframe
    youtubeVideo.src = videoUrl; 
}

// Ketika pengguna menutup modal
closeBtn.onclick = function() {
    modal.style.display = "none";
    // Hentikan video ketika modal ditutup
    youtubeVideo.src = ""; 
}

// Ketika pengguna mengklik di luar modal
window.onclick = function(event) {
    if (event.target === modal) {
        modal.style.display = "none";
        // Hentikan video ketika modal ditutup
        youtubeVideo.src = ""; 
    }
}
