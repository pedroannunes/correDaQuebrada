const images = Array.from(document.querySelectorAll('.img'));
const descripciones = document.querySelectorAll('.descripciones');
const lastIndex = images.length-1;
const pipsParent = document.querySelector('.pips');

let currentIndex = 0;
let carrouselRunning = true;

generatePips();

setInterval(() => {
    if(carrouselRunning) {
        showNextCard();
    }
}, 4000)

function showNextCard() {
    if(currentIndex === lastIndex) 
    {
        currentIndex = 0
    }
    else {
        currentIndex++;
    }
    updateState(currentIndex);
}
function updateState(index){
    currentIndex = index;
    updatePips();
    updateCarouselPosition();
}

function updateCarouselPosition() {
    images.forEach(img => img.classList.remove("current"));
    descripciones.forEach(texto => texto.classList.remove("current"));
    
    images[currentIndex].classList.add("current");
    descripciones[currentIndex].classList.add("current");
}

function generatePips() {
    for(var i = 0; i <= lastIndex; i++) {
        let li = document.createElement("li");
        li.classList.add("pip");
        li.dataset.index = i;
        pipsParent.appendChild(li);
    }
    
    updatePips();
    
}

function updatePips() {
    const pips = document.querySelectorAll('.pip');
    pips.forEach(pips => pips.classList.remove("current"));
    pips[currentIndex].classList.add("current");
}

function showFromPips(e, index) {
    if(!e.target.matches("li")) return;
        carrouselRunning = false;
        updateState(parseInt(index));
            setTimeout(() => {
                carrouselRunning = true;
            }, 3000);

}
pipsParent.addEventListener('click', (e) => showFromPips(e, e.target.dataset.index))