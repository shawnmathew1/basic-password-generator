const lengthInput = document.getElementById('length');
const lowercaseCheckbox = document.getElementById('lowercase');
const uppercaseCheckbox = document.getElementById('uppercase');
const numbersCheckbox = document.getElementById('numbers');
const symbolsCheckbox = document.getElementById('symbols');
const generateButton = document.getElementById('generateButton');
const resultDiv = document.getElementById('result');
const copyButton = document.getElementById('copyButton');


const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const numberChars = '0123456789';
const symbolChars = '!@#$%^&*()_+[]{}<>?,./';


function generatePassword() {
    const length = parseInt(lengthInput.value);
    let chars = '';

    if (lowercaseCheckbox.checked) chars += lowercaseChars;
    if (uppercaseCheckbox.checked) chars += uppercaseChars;
    if (numbersCheckbox.checked) chars += numberChars;
    if (symbolsCheckbox.checked) chars += symbolChars;

    if (chars.length === 0) {
        resultDiv.textContent = 'Please select at least one character type!';
        return;
    }   

    let password = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * chars.length);
        password += chars[randomIndex];
    }

    resultDiv.textContent = password;

}


generateButton.addEventListener('click', generatePassword);

copyButton.addEventListener('click', () => {
    const password = resultDiv.textContent;
    if (!password || password === 'Please select at least one character type!') {
        alert('Generate a password first!');
        return;
    }

    navigator.clipboard.writeText(password)
        .then(() => {
            alert('Password copied to clipboard!');
        })
        .catch(err => {
            console.error('Failed to copy:', err);
        });
});