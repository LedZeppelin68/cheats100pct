function hexadecimal() {
    let text = document.querySelector('.hex');
    let re1 = /[\dA-F]{8}/g;
    text.innerHTML = text.innerHTML.replace(re1, "<span id='offset' >" + '$&' + "</span>");
}