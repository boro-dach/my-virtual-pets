document.getElementsByClassName('butt')[0].addEventListener('click', addPet)

// defining variables
let score = 0;
let activeButtons = 0;

document.getElementsByClassName('score')[0].innerText = `Your score is: ${score}`



// defining pets
const pig = document.getElementsByClassName('pig_pet')[0];
const dog = document.getElementsByClassName('dog_pet')[0];
const penguin = document.getElementsByClassName('penguin_pet')[0];
const duck = document.getElementsByClassName('duck_pet')[0];

// making pet buttons responsive
document.getElementsByClassName('pig')[0].addEventListener('click', selectPig)
document.getElementsByClassName('dog')[0].addEventListener('click', selectDog)
document.getElementsByClassName('penguin')[0].addEventListener('click', selectPenguin)
document.getElementsByClassName('duck')[0].addEventListener('click', selectDuck)

function addPet(){
    if(activeButtons === 0){
        document.getElementsByClassName('pig')[0].style.display = 'block';
        activeButtons = activeButtons + 1;
    }
    else if(activeButtons === 1){
        document.getElementsByClassName('dog')[0].style.display = 'block';
        activeButtons = activeButtons + 1;
    }
    else if(activeButtons === 2){
        document.getElementsByClassName('penguin')[0].style.display = 'block';
        activeButtons = activeButtons + 1;
    }
    else if(activeButtons === 3){
        document.getElementsByClassName('duck')[0].style.display = 'block';
        activeButtons = activeButtons + 1;
    }
    else if(activeButtons === 4){
        document.getElementsByClassName('error_message')[0].style.display = 'block';
        setTimeout(() => {
            document.getElementsByClassName('error_message')[0].style.display = 'none';
        }, 2000)
    }
}

function selectPig(){
    dog.style.display = 'none';
    penguin.style.display = 'none';
    duck.style.display = 'none';
    pig.style.display = 'flex';
}
function selectDog(){
    penguin.style.display = 'none';
    duck.style.display = 'none';
    pig.style.display = 'none';
    dog.style.display = 'flex';
}
function selectPenguin(){
    duck.style.display = 'none';
    pig.style.display = 'none';
    dog.style.display = 'none';
    penguin.style.display = 'flex';
}
function selectDuck(){
    pig.style.display = 'none';
    dog.style.display = 'none';
    penguin.style.display = 'none';
    duck.style.display = 'flex';
}