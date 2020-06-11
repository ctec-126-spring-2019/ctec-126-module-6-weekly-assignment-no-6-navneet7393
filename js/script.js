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

        // addEventListener to the element for a click event to change the state if the card is switched 
        this.element.addEventListener('click', () => {
            if (this.state == 0) {
                // To switch out the this.element.src to face up 
                this.element.src = this.img
                this.state = 1
            } else if (this.state == 1) {
                // To show the back of the card use 'img/back.png'
                this.element.src = 'img/back.jpg'
                this.state = 0
            }
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
    // A loop that iterates through each card in the deck array
    deck.forEach(card => {
        // append the card.element to the container
        container.appendChild(card.element)
    })
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

// create build deck functions
function buildDeck() {
    // assign array of card names to the constant suits
    const suits = ['hearts', 'spades', 'diamonds', 'clubs']
    // assign array of card type to the constant faces
    const faces = ['ace', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'jack', 'queen', 'king']

    // create an array to go in the suits array
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

// create clear actions function
function clearActions() {
    // make the inner html of the action div to the following message
    actions.innerHTML = 'Click on a card to turn it over.'
}

// make a empty deck array 
let deck = []

// get the handle of the ID's
const container = document.querySelector('#container')
const actions = document.querySelector('#actions')
const shuffleBtn = document.querySelector('#shuffle')
const removeBtn = document.querySelector('#remove')
const newDeckBtn = document.querySelector('#newdeck')
const showFacesBtn = document.querySelector('#showfaces')
const showBacksBtn = document.querySelector('#showbacks')

// add eventListenr to the shuffle button
shuffleBtn.addEventListener('click', () => {
    // Display in the action div which has a id of actions
    actions.innerHTML = 'The deck of cards has been shuffled.'
    // clear the container html
    container.innerHTML = ''
    //shuffle the deck
    shuffleDeck()
    // display deck with a timeout of .5 seconds
    setTimeout(displayDeck, 500)
    // clear actions with the time out of 3 seconds
    setTimeout(clearActions, 5000)
})

// add eventListener to the remove button with a click event
removeBtn.addEventListener('click', () => {
    actions.innerHTML = 'A card was removed.'
    // calls the remove card function
    removeCard()
    // calls clear actions(the message display) and executes in 5 seconds
    setTimeout(clearActions, 5000)
})

// add event listener to the new deck button to a click event
newDeckBtn.addEventListener('click', () => {
    // change the inner html of the actions to the message 
    actions.innerHTML = 'A new deck of cards has been created.'
    // empty deck array
    deck = []
    // clear container
    container.innerHTML = ''
    // call the build deck function
    buildDeck()
    // setting timeout of display deck to .5
    setTimeout(displayDeck, 500)
    // setting timeout of display deck to 5 seconds
    setTimeout(clearActions, 5000)
})

// addEventListener to showface button fr
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

// call the functions
buildDeck()
shuffleDeck()
displayDeck()