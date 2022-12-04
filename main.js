function animateScrolling(location) {
    console.log(location);
    if (location === 'about') {
        var myElement = document.getElementById('about');
    } else {
        var myElement = document.getElementById('contact');
    }
    var topPos = myElement.offsetTop;   
    document.getElementById('body').scrollTop = topPos;
}

function guessWord() {
    const guessedWord = document.getElementById("word").value;
    switch(guessedWord) {
        case 'Asar':
            alert("Hey, you almost there!");
            break;
        case 'Ume':
            alert("Hey, you almost there!");
            break;
        case 'Asar-Ume':
            alert("Hey, you have guessed word! Congrats!!")
            break;
        default:
            alert("Try Again!")
    }
}