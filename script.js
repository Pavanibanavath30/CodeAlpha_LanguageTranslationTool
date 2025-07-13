function translateText() {
    const inputText = document.getElementById('inputText').value;
    const sourceLang = document.getElementById('sourceLang').value;
    const targetLang = document.getElementById('targetLang').value;

    const url = `https://api.mymemory.translated.net/get?q=${encodeURIComponent(inputText)}&langpair=${sourceLang}|${targetLang}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            document.getElementById('outputText').innerText = data.responseData.translatedText;
        })
        .catch(error => {
            console.error('Error:', error);
            document.getElementById('outputText').innerText = 'Translation failed.';
        });
}
