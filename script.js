function generatePassword() {
    const passwordLength = 12;
    const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_-+=";

    let password = "";
    for (let i = 0; i < passwordLength; i++) {
        const randomIndex = Math.floor(Math.random() * charset.length);
        password += charset[randomIndex];
    }

    const passwordOutput = document.getElementById("passwordOutput");
    const copyButton = document.getElementById("copyButton");

    passwordOutput.value = password;
    copyButton.disabled = false;
}

function copyToClipboard() {
    const passwordOutput = document.getElementById("passwordOutput");

    passwordOutput.select();
    document.execCommand("copy");

    alert("Password copied to clipboard");

}