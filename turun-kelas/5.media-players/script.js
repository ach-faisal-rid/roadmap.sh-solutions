let youtubePlayer;

// Fungsi untuk inisialisasi pemutar YouTube
function onYouTubeIframeAPIReady() {
    youtubePlayer = new YT.Player('youtubePlayer', {
        height: '315',
        width: '560',
        videoId: '',
        playerVars: { 'autoplay': 1, 'controls': 1 },
        events: {
            'onError': onPlayerError
        }
    });
}

// Menangani error pada player
function onPlayerError(event) {
    alert("Video tidak dapat diputar. Silakan cek URL atau coba video lain.");
}

// Memutar video dari URL YouTube
function playYouTube() {
    const youtubeUrl = document.getElementById('youtubeUrl').value;
    const videoId = youtubeUrl.split('v=')[1]?.split('&')[0]; // Mendapatkan ID video YouTube

    if (videoId) {
        youtubePlayer.loadVideoById(videoId);
        document.getElementById('youtubePlayer').style.display = 'block';
        document.getElementById('localMediaPlayer').style.display = 'none';
    } else {
        alert("URL YouTube tidak valid");
    }
}

// Memutar file lokal
function playLocalFile() {
    const file = document.getElementById('localFile').files[0];
    const localMediaPlayer = document.getElementById('localMediaPlayer');

    if (file) {
        const fileURL = URL.createObjectURL(file);
        localMediaPlayer.src = fileURL;
        localMediaPlayer.style.display = 'block';
        localMediaPlayer.load();
        localMediaPlayer.play();
        
        // Menyembunyikan player YouTube
        document.getElementById('youtubePlayer').style.display = 'none';
    } else {
        alert("Pilih file untuk diputar");
    }
}

// Play/Pause kontrol
function playPause() {
    const localMediaPlayer = document.getElementById('localMediaPlayer');
    if (localMediaPlayer.style.display === 'block') {
        if (localMediaPlayer.paused) {
            localMediaPlayer.play();
        } else {
            localMediaPlayer.pause();
        }
    } else if (youtubePlayer) {
        const state = youtubePlayer.getPlayerState();
        if (state === YT.PlayerState.PLAYING) {
            youtubePlayer.pauseVideo();
        } else {
            youtubePlayer.playVideo();
        }
    }
}

// Mengatur volume
function setVolume() {
    const volume = document.getElementById('volumeControl').value;
    const localMediaPlayer = document.getElementById('localMediaPlayer');
    if (localMediaPlayer.style.display === 'block') {
        localMediaPlayer.volume = volume;
    } else if (youtubePlayer) {
        youtubePlayer.setVolume(volume * 100);
    }
}
