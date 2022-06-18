let homeScore = 0
let guestScore = 0
let foulsHome = 0
let foulsGuest = 0
let quarter = 1
let homeDisplay = document.querySelector("#home-display")
let guestDisplay = document.querySelector("#guest-display")
let homeFouls = document.querySelector("#home-fouls")
let guestFouls = document.querySelector("#guest-fouls")
let period = document.querySelector("#period")

period.textContent = quarter
function plusOne() {
homeScore += 1
homeDisplay.textContent = homeScore
winner()
}

function plusTwo() {
    homeScore += 2
    homeDisplay.textContent = homeScore
    winner()
}

function plusThree() {
    homeScore += 3
    homeDisplay.textContent = homeScore
    winner()
}

function homeFoul() {
    foulsHome +=1
    homeFouls.textContent = foulsHome
}

function plusOneGuest() {
    guestScore += 1
    guestDisplay.textContent = guestScore
    winner()
    }
    
    function plusTwoGuest() {
        guestScore += 2
        guestDisplay.textContent = guestScore
        winner()
    }
    
    function plusThreeGuest() {
        guestScore += 3
        guestDisplay.textContent = guestScore
        winner()
    }

    function guestFoul() {
        foulsGuest +=1
        guestFouls.textContent = foulsGuest
    }

    function newGame() {
        homeScore = 0
        foulsHome = 0
        guestScore = 0
        foulsGuest = 0
        quarter = 1
        homeDisplay.textContent = homeScore
        homeFouls.textContent = foulsHome
        guestDisplay.textContent = guestScore
        guestFouls.textContent = foulsGuest
        period.textContent = quarter

    }

    function nextQuarter() {
        period.textContent = quarter += 1
        if (quarter > 4) {
            return period.textContent = 4
        }
    }
    