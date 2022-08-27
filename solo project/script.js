
let homeStoreEl = document.getElementById("home-current-score")



let guestScoreAdd1 = document.getElementById("guest-score-btn-1")
let guestStoreEl = document.getElementById("guest-current-score");

let homeScore = 0
let guestScore = 0

console.log(homeScore)
console.log(guestScore)

function add1ToHomeScore (){
    homeScore += 1 
homeStoreEl.textContent = homeScore
}

function add2ToHomeScore () {
    homeScore += 2;
    homeStoreEl.textContent = homeScore;
}

function add3ToHomeScore (){
    homeScore += 3;
    homeStoreEl.textContent = homeScore;
}


function add1ToGuestScore() {
  guestScore += 1;
  guestStoreEl.textContent = guestScore;
}

function add2ToGuestScore() {
  guestScore += 2;
  guestStoreEl.textContent = guestScore;
}

function add3ToGuestScore() {
  guestScore += 3;
  guestStoreEl.textContent = guestScore;
}

function reset(){
    homeStoreEl.textContent =  0
  guestStoreEl.textContent = 0 

}