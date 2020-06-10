// script.js
// Weekly Assignment No. 6

/*
* All of the code must be adequetely commented.
* This includes the code that you write and the code that was provided.
*/

// create class named PlayingCard
class PlayingCard {
    // Use the function to creat properties for element, suit, face
    constructor(element, face, suit) {
        this.element = element
        this.suit = suit
        this.face = face
        // state (set this to 0)
        this.state = 0
        // setting img variable
        this.img = `img/${face}_of_${suit}.png`

        this.element.addEventListener('click', () => {
            if (this.state == 0) {
                this.element.src = this.img
                this.state = 1
            } else if (this.state == 1){
                this.element.src = 'img/back.jpg'
                this.state = 0
            }
            /*
            - The event listener should be for a click event
            - The event listener should have logic to switch out the this.element.src
            - It should also change the state if the card is flipped (this.state 0 or 1)
            - To show the back of the card use 'img/back.png'
            */

            // your code goes here (remove this comment once you have added your code)
        })
    }

    
    // shows the faces of the card
    showFaces() {
        this.element.src = this.img
    }

    // shows the back of the card
    showBacks() {
        this.element.src = 'img/back.jpg'
    }
}

function createCardImage() {
    // Create a constant named img and have it create a new img element
    const img = document.createElement('img')
    // Set the src property of the img to 'img/back.png'
    img.src = 'img/back.jpg'
    // return the img
    return img
}

function displayDeck() {
    deck.forEach(card=>{
        container.appendChild(card.element)
    })
    /*
    - Create a loop that iterates through each card in the deck array
    - in the loop, append the card.element to the container
    - Use a forEach with an arrow function
    */

    // your code goes here (remove this comment once you have added your code)
}

function shuffleDeck() {
    for (let i = 0; i < 1000; i++) {
        deck.sort(() => Math.random() - 0.5)
    }
}

function removeCard() {
    // if the deck of cards is not = 0
    if (deck.length != 0) {
        // find the card that was clicked on 
        card = document.querySelector('img')
        // remove it form the DOM (first image in the array)
        card.remove()
        // shift the deck of cards
        deck.shift()
        if (deck.length == 0) {
            actions.innerHTML = 'No cards left in the deck. :-('
        }
    }
}

function buildDeck() {
    const suits = ['hearts', 'spades', 'diamonds', 'clubs']
    const faces = ['ace', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'jack', 'queen', 'king']

    suits.forEach(suit => {
        faces.forEach(face => {
            // Calling the createImage function and assigning the return img to const image
            const image = createCardImage()
            // Set the id attribute of the image to `${face}_of_${suit}.png`
            image.setAttribute('id', `${face}_of_${suit}.png`)
            // Pus the object in the empty array
            deck.push(new PlayingCard(image, face, suit))
        })
    })
}

function clearActions() {
    actions.innerHTML = ''
}

let deck = []

// get the handle of the ID's
const container = document.querySelector('#container')
const actions = document.querySelector('#actions')
const shuffleBtn = document.querySelector('#shuffle')
const removeBtn = document.querySelector('#remove')
const newDeckBtn = document.querySelector('#newdeck')
const showFacesBtn = document.querySelector('#showfaces')
const showBacksBtn = document.querySelector('#showbacks')

shuffleBtn.addEventListener('click', () => {
    actions.innerHTML = 'The deck of cards has been shuffled.'
    container.innerHTML = ''
    shuffleDeck()
    setTimeout(displayDeck, 500)
    setTimeout(clearActions, 5000)
})

removeBtn.addEventListener('click', () => {
    actions.innerHTML = 'A card was removed.'
    // calls the remove card function
    removeCard()
    // calls clear actions(the message display) and executes in 5 seconds
    setTimeout(clearActions, 5000)
})

newDeckBtn.addEventListener('click', () => {
    actions.innerHTML = 'A new deck of cards has been created.'
    deck = []
    container.innerHTML = ''
    buildDeck()
    setTimeout(displayDeck, 500)
    setTimeout(clearActions, 5000)
})

showFacesBtn.addEventListener('click', () => {
    actions.innerHTML = 'All card faces are now showing.'
    deck.forEach(card => {
        card.showFaces()
    })
})

showBacksBtn.addEventListener('click', () => {
    actions.innerHTML = 'All card backs are now showing.'
    deck.forEach(card => {
        card.showBacks()
    })
})

buildDeck()
shuffleDeck()
displayDeck()