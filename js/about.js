window.setTimeout(editText, 4000);

function editText () {
    let header = document.querySelector("h1");
    let editedHeader = fixText(header.innerHTML);
    header.innerHTML = editedHeader;

    let paragraph = document.querySelectorAll("p");

    var i;
    for (i = 0; i < paragraph.length; i++) {
        let editedParagraph = fixText(paragraph[i].innerHTML);
        paragraph[i].innerHTML = editedParagraph;
    }
}

function fixText(text) {
    let newText = text.replace("The", "Replaced");
    newText = newText.replace("the", "replaced");

    return newText;

   
}

console.log(fixText("the blabla The blabla"));

