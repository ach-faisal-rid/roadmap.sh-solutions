function getRandomCharacter(characters) {
    return characters.charAt(Math.floor(Math.random() * characters.length));
}

function generatePassword() {
    const length = document.getElementById("length").value;
    const useUppercase = document.getElementById("uppercase").checked;
    const useLowercase = document.getElementById("lowercase").checked;
    const useNumbers = document.getElementById("numbers").checked;
    const useSymbols = document.getElementById("symbols").checked;

    const uppercaseCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowercaseCharacters = "abcdefghijklmnopqrstuvwxyz";
    const numberCharacters = "0123456789";
    const symbolCharacters = "!@#$%^&*()_+[]{}|;:,.<>?";

    let availableCharacters = "";
    if (useUppercase) availableCharacters += uppercaseCharacters;
    if (useLowercase) availableCharacters += lowercaseCharacters;
    if (useNumbers) availableCharacters += numberCharacters;
    if (useSymbols) availableCharacters += symbolCharacters;

    let password = "";
    for (let i = 0; i < length; i++) {
        password += getRandomCharacter(availableCharacters);
    }

    document.getElementById("password").value = password;
}

function copyToClipboard() {
    const passwordField = document.getElementById("password");
    passwordField.select();
    document.execCommand("copy");

    // Tampilkan notifikasi
    const notification = document.getElementById("notification");
    notification.textContent = "Kata sandi disalin ke clipboard!";
    notification.classList.remove("hidden");

    // Sembunyikan notifikasi setelah 2 detik
    setTimeout(() => {
        notification.classList.add("hidden");
    }, 2000);
}

document.getElementById("generate").addEventListener("click", generatePassword);
document.getElementById("copy").addEventListener("click", copyToClipboard);