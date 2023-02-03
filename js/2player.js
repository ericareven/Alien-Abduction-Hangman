document.addEventListener("DOMContentLoaded", function(){

    // no words have duplicate letters 
    // const wordBank = ['alien', 'alive', 'alpha', 'awful', 'anger', 'adopt', 'after', 'bears', 'bounce', 'blink', 'baker', 'bikes', 'blame', 'break', 'brave',
    // 'cream', 'crash', 'count', 'crush', 'chase', 'cheap', 'chalk', 'clean', 'chore', 'crave', 'drops', 'drain', 'dance', 'diner', 'dirty', 'doubt', 'dream',
    // 'earth', 'elbow', 'extra', 'entry', 'eight', 'exist', 'edits', 'front', 'forks', 'frogs', 'faint', 'focus', 'flare', 'fancy', 'faces', 'frown', 'found', 'farms', 
    // 'gamer', 'grape', 'gazed', 'ghost', 'girly', 'given', 'great', 'haste', 'holes', 'hound', 'hasty','hours', 'habit', 'haunt', 'harsh', 'idols', 'image', 'imply', 'index',
    // 'jokes', 'jeans', 'joint', 'juice', 'labor', 'laces', 'laser', 'latex', 'large', 'lemur', 'learn', 'leaky', 'lefty', 'layer', 'legit', 'lemon', 'liver',
    // 'money', 'monks', 'mango', 'nacho', 'night', 'nicer', 'noble', 'noisy', 'ocean', 'older', 'ogres', 'olive', 'plane', 'piano', 'paint', 'pools', 'party', 
    // 'peach', 'paced', 'pound', 'quits', 'quirk', 'quick', 'queso', 'rocks', 'ramen', 'rapid', 'reach', 'razor', 'remix', 'rhyme', 'rhino', 'ridge', 'roast',
    // 'stain', 'salon', 'sadly', 'sauce', 'savor' ,'table', 'tangy', 'traps', 'taxis', 'teary', 'thank', 'tempo', 'under', 'unzip', 'until', 'vague', 'vapor', 'vegan', 'venom',
    // 'white', 'weary', 'wagon', 'waist', 'wacky', 'yacht', 'yeast', 'yelps', 'zebra']
    
    // console.log(wordBank.length) // 148 words
    

const secretWord = prompt(`Please type a 5 letter word to stump player 2`).toUpperCase()
const randomWordId = document.querySelector('#randomWord')
randomWordId.innerHTML = `${secretWord}`
    
    // let answer = '';
    let guessed = [];
    let wordStatus = null;
    let mistakesLeft = 8;
    
    // Play & Instruction Buttons
    // function play() {
    //     document.getElementsByClassName("play").style.visibility = hidden
    //     document.getElementsByClassName("instructions").style.visibility = hidden
    //     document.getElementById("letter").cursor = allowed
    //     // document.getElementsByClassName("letter-buttons").style.visibility = visible
    // }
    
    // let playButton = document.querySelector(".play")
    
    // playButton.addEventListener("click", play)
    
    function instruct() {
        alert('Use the alphabet below to guess each letter in the hidden 5-letter word. But be careful, 8 wrong guesses and your cow will be abducted!')
    }
    
    let insButton = document.querySelector(".instructions")
    
    insButton.addEventListener("click", instruct)
    
    
    // // random word selection
    // function randomWord() {
    //     answer = wordBank[Math.floor(Math.random() * wordBank.length)].toUpperCase();
    //     // document.querySelector('#randomWord').innerHTML = answer
    // }
    
    // randomWord()

    let wordsArr = secretWord.split('')
    console.log(wordsArr)
    
    
    function updateGameboard() {
        console.log(guessed)
        wordStatus = secretWord.split('').map(letter => (guessed.indexOf(letter) >= 0 ? ` ${letter} ` : ' _ ')).join('');
        document.querySelector('#randomWord').innerHTML = wordStatus
    }
    
    updateGameboard()
    
    
    // console.log(randomWord)
    let letterButton
    const buttonElements = document.querySelectorAll('#letter');
    
    function checkLetters(){
        if (wordsArr.includes(letterButton)) {
            guessed.push(letterButton)
            // console.log('y')
            updateGameboard()
            checkIfGameWon()
        } else {
            mistakesLeft -= 1
            document.getElementById("guesses").innerHTML = `Guesses: ${mistakesLeft}`
            buildSpaceship()
                if(mistakesLeft === 0) {
                    setTimeout(() => { // so that the spaceship can be completely built before game
                        gameOver()
                }, 1000)
                }
        }
    }
    
    function gameOver() {
        alert(`Player One Won! The tricky word was ${secretWord}`)
        reset()
    }
    
    function checkIfGameWon() {
        if (guessed.length === 5) {
            setTimeout(()=> { // so that the alert and reset come after the full word is displayed
                alert(`Player Two Won! I guess the secret word wasn't tricky enough`)
                reset()
            }, 1000)
        }
    }
    
    function reset() {
        document.location.replace("/Users/erica.reven/Desktop/seir-eustoma/projects/project1/Alien-Abduction/2player.html")
    }
    
    // Build space ship with each wrong guess
    function buildSpaceship(){
        if(mistakesLeft === 7) {
            document.getElementById('pic-one').style.visibility = 'visible'
        } else if(mistakesLeft === 6) {
            document.getElementById('pic-two').style.visibility = 'visible'
        } else if(mistakesLeft === 5) {
            document.getElementById('pic-three').style.visibility = 'visible'
        } else if(mistakesLeft === 4) {
            document.getElementById('pic-four').style.visibility = 'visible'
        } else if(mistakesLeft === 3) {
            document.getElementById('pic-five').style.visibility = 'visible'
        } else if(mistakesLeft === 2) {
            document.getElementById('pic-six').style.visibility = 'visible'
        } else if(mistakesLeft === 1) {
            document.getElementById('pic-seven').style.visibility = 'visible'
        } else if(mistakesLeft === 0) {
            document.getElementById('pic-eight').style.visibility = 'visible'
            document.getElementById('pic-nine').style.visibility = 'visible'
        }
    }
    
    
    // Button event listener
    buttonElements.forEach((element) => {
        element.addEventListener('click', function() {
            letterButton = element.attributes["data-key"].value
            console.log(letterButton)
            // element.style.backgroundColor = 'red';
            checkLetters()
            element.disabled = true;
        })
    })
    
// // Get the modal
// let modal = document.getElementById("myModal");

// // Get the button that opens the modal
// let btn = document.getElementById("myBtn");

// // Get the <span> element that closes the modal
// let span = document.getElementsByClassName("close")[0];

// // When the user clicks on the button, open the modal
// btn.onclick = function() {
//   modal.style.display = "block";
// }

// // When the user clicks on <span> (x), close the modal
// span.onclick = function() {
//   modal.style.display = "none";
// }

// // When the user clicks anywhere outside of the modal, close it
// window.onclick = function(event) {
//   if (event.target == modal) {
//     modal.style.display = "none";
//   }
// }

function onePlayer() {
    document.location.replace("/Users/erica.reven/Desktop/seir-eustoma/projects/project1/Alien-Abduction/index.html")
}

let one = document.querySelector(".one-player")

one.addEventListener("click", onePlayer)
    
    
    
})