const txtElement = ['Apa...?', 'Siapa...?', 'Mengapa...?', 'Di mana...?', 'Bagaimana...?'];
let count = 0;
let txtIndex = 0;
let currentTxt = '';
let words = '';

(function mesintik() {

    if (count == txtElement.length) {
        count = 0;
    }

    currentTxt = txtElement[count];

    words = currentTxt.slice(0, ++txtIndex);
    document.querySelector('.ngetik').textContent = words;

    if (words.length == currentTxt.length) {
        count++;
        txtIndex = 0;
    }

    setTimeout(mesintik, 500);

})();