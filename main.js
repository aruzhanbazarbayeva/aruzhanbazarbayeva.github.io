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

function openHamburger() {
    var logo = document.getElementById("logo");
    var x = document.getElementById("nav__tabs");
    var show = document.getElementById("nav-show");
    var close = document.getElementById("nav-close");
    if (x.style.display === "flex") {
        x.style.display = "none";
        logo.style.display = "block";
        close.style.display = "none";
        show.style.display = "block";
    } else {
        x.style.display = "flex";
        logo.style.display = "none";
        close.style.display = "block";
        show.style.display = "none";
    }
}