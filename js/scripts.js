// Carousel page événement //

const items = document.querySelectorAll('.slider_carousel img');
const textes = document.querySelectorAll('.slider_carousel .texte');
const nbSlide = items.length;
const suivant = document.querySelector('.right');
const precedent = document.querySelector('.left');
let count = 0;

function updateText() {
    textes.forEach((texte, index) => {
        if (index === count) {
            texte.classList.add('active');
        } else {
            texte.classList.remove('active');
        }
    });
}

function slideSuivante(){
    items[count].classList.remove('active');
    textes[count].classList.remove('active');
   
    if(count < nbSlide - 1){
        count++;
    } else {
        count = 0;
    }

    items[count].classList.add('active');
    updateText();
    console.log(count);
}

suivant.addEventListener('click', slideSuivante);

function slidePrecedente(){
    items[count].classList.remove('active');
    textes[count].classList.remove('active');

    if (count > 0){
        count--;
    } else {
        count = nbSlide - 1;
    }

    items[count].classList.add('active');
    updateText();
}

precedent.addEventListener('click', slidePrecedente);

function keyPress(e){
    if(e.keyCode === 37){
        slidePrecedente();
    } else if(e.keyCode === 39){
        slideSuivante();
    }
}

document.addEventListener('keydown', keyPress);

// Initial call to display the correct text for the first image
updateText();

// fin Carousel page événement //





