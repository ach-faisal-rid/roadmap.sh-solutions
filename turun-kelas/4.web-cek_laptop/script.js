document.getElementById("check").addEventListener("click", function() {
    const brand = navigator.userAgentData ? navigator.userAgentData.brands.map(brand => brand.brand).join(", ") : "Tidak diketahui";
    const model = navigator.platform || "Tidak diketahui";
    const os = navigator.userAgent || "Tidak diketahui";
    
    // Jumlah RAM (modern browsers that support navigator.deviceMemory)
    const ram = navigator.deviceMemory ? navigator.deviceMemory + " GB" : "Tidak diketahui";

    // Render informasi ke halaman
    document.getElementById("brand").textContent = brand;
    document.getElementById("model").textContent = model;
    document.getElementById("os").textContent = os;
    document.getElementById("ram").textContent = ram;
});
