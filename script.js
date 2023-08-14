document.getElementsByClassName('butt')[0].addEventListener('click', addPet)

// defining variables
let score = 0;
let activeButtons = 0;

document.getElementsByClassName('score')[0].innerText = `Your score is: ${score}`

// defining pets//
const pig = document.getElementsByClassName('pig_pet')[0];
const dog = document.getElementsByClassName('dog_pet')[0];
const penguin = document.getElementsByClassName('penguin_pet')[0];
const duck = document.getElementsByClassName('duck_pet')[0];
//end//

const petStat = document.querySelector('.pet_status')

petStat.style.display = 'none';

// making pet buttons responsive//
document.getElementsByClassName('pig')[0].addEventListener('click', selectPig)
document.getElementsByClassName('dog')[0].addEventListener('click', selectDog)
document.getElementsByClassName('penguin')[0].addEventListener('click', selectPenguin)
document.getElementsByClassName('duck')[0].addEventListener('click', selectDuck)
//end//

//defining def stats//
//for pig:
let pigFood = 100
let pigWater = 100
let pigHealth = 100
//for dog:
let dogFood = 80
let dogWater = 80
let dogHealth = 80
//for penguin:
let penguinFood = 60
let penguinWater = 60
let penguinHealth = 40
//for duck:
let duckFood = 10
let duckWater = 19
let duckHealth = 45
//end//

//setting default pet names//
let pigName = 'popa'
let dogName = 'popa'
let penguinName = 'popa'
let duckName = 'popa'
//end//

//pet adding button//
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
        document.getElementsByClassName('error_overflow')[0].style.display = 'block';
        setTimeout(() => {
            document.getElementsByClassName('error_overflow')[0].style.display = 'none';
        }, 2000)
    }
}
//end//

//pet selecting//
function selectPig(){
    if (pigName === 'popa')
    {
        pigName = prompt('Please enter name for this pet:');
        document.getElementsByClassName('selected_pet__name')[0].innerText = pigName
    }
    else{
        document.getElementsByClassName('selected_pet__name')[0].innerText = pigName
    }
    dog.style.display = 'none';
    penguin.style.display = 'none';
    duck.style.display = 'none';
    pig.style.display = 'flex';
    petStat.style.display = 'block';
    petStat.id = 'pig';
    document.getElementById('food').style.width = `${pigFood}%`
    document.getElementById('water').style.width = `${pigWater}%`
    document.getElementById('health').style.width = `${pigWater}%`
}
function selectDog(){
    if (dogName === 'popa')
    {
        dogName = prompt('Please enter name for this pet:');
        document.getElementsByClassName('selected_pet__name')[1].innerText = dogName
    }
    else{
        document.getElementsByClassName('selected_pet__name')[1].innerText = dogName
    }
    penguin.style.display = 'none';
    duck.style.display = 'none';
    pig.style.display = 'none';
    dog.style.display = 'flex';
    petStat.style.display = 'block';
    petStat.id = 'dog';
    document.getElementById('food').style.width = `${dogFood}%`
    document.getElementById('water').style.width = `${dogWater}%`
    document.getElementById('health').style.width = `${dogHealth}%`
}
function selectPenguin(){
    if (penguinName === 'popa')
    {
        penguinName = prompt('Please enter name for this pet:');
        document.getElementsByClassName('selected_pet__name')[2].innerText = penguinName
    }
    else{
        document.getElementsByClassName('selected_pet__name')[2].innerText = penguinName
    }
    duck.style.display = 'none';
    pig.style.display = 'none';
    dog.style.display = 'none';
    penguin.style.display = 'flex';
    document.getElementById('food').style.width = `${penguinFood}%`
    document.getElementById('water').style.width = `${penguinWater}%`
    document.getElementById('health').style.width = `${penguinHealth}%`
}
function selectDuck(){
    if (duckName === 'popa')
    {
        duckName = prompt('Please enter name for this pet:');
        document.getElementsByClassName('selected_pet__name')[3].innerText = duckName
    }
    else{
        document.getElementsByClassName('selected_pet__name')[3].innerText = duckName
    }
    pig.style.display = 'none';
    dog.style.display = 'none';
    penguin.style.display = 'none';
    duck.style.display = 'flex';
    document.getElementById('food').style.width = `${duckFood}%`
    document.getElementById('water').style.width = `${duckWater}%`
    document.getElementById('health').style.width = `${duckHealth}%`
}
//end//

