//sleep function//
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
//end//

//pet adding button//
document.getElementsByClassName('butt')[0].addEventListener('click', addPet)
//end//

// defining variables
let score = 5;
let activeButtons = 0;
let pigActivated = false
let dogActivated = false
let penguinActivated = false
let duckActivated = false
//end//

//score logics//
//show score
function showScore(){
    document.getElementsByClassName('score__value')[0].innerText = `Your score is: ${score}`
}
//pets cost:
const pigCost = 0
const dogCost = 100
const penguinCost = 500
const duckCost = 1000
//if bought?
let pigBought = false
let dogBought = false
let penguinBought = false
let duckBought = false
////pets stats decreasing
//pig:
async function pigStatsDowner(){
    pigActivated = true
    while (pigFood > 5 && pigWater > 5 && pigHealth > 5){
        if(petStat.id === 'pig'){
            await sleep(5000)
            pigFood = pigFood - 5
            pigWater = pigWater - 5
            pigHealth = pigHealth - 5
            pigShowStats()
            console.log(petStat.id)
        }
        else{
            await sleep(5000)
            pigFood = pigFood - 5
            pigWater = pigWater - 5
            pigHealth = pigHealth - 5
        }
    }
}
//dog
async function dogStatsDowner(){
    while (dogFood > 5 && dogWater > 5 && dogHealth > 5){
        if(petStat.id === 'dog'){
            dogFood = dogFood - 5
            dogWater = dogWater - 5
            dogHealth = dogHealth - 5
            dogShowStats()
            console.log(petStat.id)
            await sleep(5000)
        }
        else{
            await sleep(5000)
            dogFood = dogFood - 5
            dogWater = dogWater - 5
            dogHealth = dogHealth - 5
        }
    }
}
//penguin
async function penguinStatsDowner(){
    while (penguinFood > 5 && penguinWater > 5 && penguinHealth > 5){
        if(petStat.id === 'penguin'){
            await sleep(5000)
            penguinFood = penguinFood - 5
            penguinWater = penguinWater - 5
            penguinHealth = penguinHealth - 5
            penguinShowStats()
            console.log(petStat.id)
        }
        else{
            await sleep(5000)
            penguinFood = penguinFood - 5
            penguinWater = penguinWater - 5
            penguinHealth = penguinHealth - 5
        }
    }
}
//duck
async function duckStatsDowner(){
    while (duckFood > 5 && duckWater > 5 && duckHealth > 5){
        if(petStat.id === 'duck'){
            await sleep(5000)
            duckFood = duckFood - 5
            duckWater = duckWater - 5
            duckHealth = duckHealth - 5
            duckShowStats()
            console.log(petStat.id)
        }
        else{
            await sleep(5000)
            duckFood = duckFood - 5
            duckWater = duckWater - 5
            duckHealth = duckHealth - 5
        }
        
    }
}
////show stats
//for pig
function pigShowStats(){
    document.getElementById('food').style.width = `${pigFood}%`
    document.getElementById('water').style.width = `${pigWater}%`
    document.getElementById('health').style.width = `${pigHealth}%`
}
//for dog
function dogShowStats(){   
    document.getElementById('food').style.width = `${dogFood}%`
    document.getElementById('water').style.width = `${dogWater}%`
    document.getElementById('health').style.width = `${dogHealth}%`
}
//for penguin
function penguinShowStats(){   
    document.getElementById('food').style.width = `${penguinFood}%`
    document.getElementById('water').style.width = `${penguinWater}%`
    document.getElementById('health').style.width = `${penguinHealth}%`
}
//for duck
function duckShowStats(){   
    document.getElementById('food').style.width = `${duckFood}%`
    document.getElementById('water').style.width = `${duckWater}%`
    document.getElementById('health').style.width = `${duckHealth}%`
}
//end//

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
let dogFood = 100
let dogWater = 100
let dogHealth = 100
//for penguin:
let penguinFood = 100
let penguinWater = 100
let penguinHealth = 100
//for duck:
let duckFood = 100
let duckWater = 100
let duckHealth = 100
//end//

//setting default pet names//
let pigName = 'HONekzT6fqO6639izmoaUq13BMkGhclytYHQhqXv5jasa5XnBA'
let dogName = 'HONekzT6fqO6639izmoaUq13BMkGhclytYHQhqXv5jasa5XnBA'
let penguinName = 'HONekzT6fqO6639izmoaUq13BMkGhclytYHQhqXv5jasa5XnBA'
let duckName = 'HONekzT6fqO6639izmoaUq13BMkGhclytYHQhqXv5jasa5XnBA'
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
    if (pigName === 'HONekzT6fqO6639izmoaUq13BMkGhclytYHQhqXv5jasa5XnBA')
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
    pigShowStats()
    pigBought = true
    pigStatsDowner()
}
function selectDog(){
    if (dogName === 'HONekzT6fqO6639izmoaUq13BMkGhclytYHQhqXv5jasa5XnBA')
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
    dogShowStats()
    dogBought = true
    dogStatsDowner()
}
function selectPenguin(){
    if (penguinName === 'HONekzT6fqO6639izmoaUq13BMkGhclytYHQhqXv5jasa5XnBA')
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
    pigShowStats()
    penguinBought = true
    penguinStatsDowner()
}
function selectDuck(){
    if (duckName === 'HONekzT6fqO6639izmoaUq13BMkGhclytYHQhqXv5jasa5XnBA')
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
    dogShowStats()
    duckBought = true
    duckStatsDowner()

}
//end//