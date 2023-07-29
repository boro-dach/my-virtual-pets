document.getElementsByClassName('butt')[0].addEventListener('click', addPet)

// defining variables
let score = 0;
let activeButtons = 0;

document.getElementsByClassName('score')[0].innerText = `Your score is: ${score}`

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