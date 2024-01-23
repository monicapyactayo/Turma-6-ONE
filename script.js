function processText() {
    const inputText = document.getElementById('inputText').value.toLowerCase();
    const encryptionOption = document.getElementById('encryptionOption').value;
    let outputText = '';

    if (encryptionOption === 'encrypt') {
        outputText = encryptText(inputText);
    } else if (encryptionOption === 'decrypt') {
        outputText = decryptText(inputText);
    }

    document.getElementById('outputText').value = outputText;
}

function encryptText(text) {
    return text.replace(/e/g, 'enter')
               .replace(/i/g, 'imes')
               .replace(/a/g, 'ai')
               .replace(/o/g, 'ober')
               .replace(/u/g, 'ufat');
}

function decryptText(text) {
    return text.replace(/enter/g, 'e')
               .replace(/imes/g, 'i')
               .replace(/ai/g, 'a')
               .replace(/ober/g, 'o')
               .replace(/ufat/g, 'u');
}

function copyToClipboard() {
    const outputText = document.getElementById('outputText');
    outputText.select();
    document.execCommand('copy');
    alert('Texto copiado al portapapeles');
}
