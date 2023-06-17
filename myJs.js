let homeScore = document.getElementById("home-score")
let guestScore = document.getElementById("guest-score")

let hScore = 0
let gScore = 0

/**
 * we want the countdown to be from 60:00 to 00:00 so we 
 * calculate the duration 60min * 60sec and we update the display every second.
 */
function startTimer() {

    const duration = 60 * 60
    let display = document.getElementById("countdown")

    

    let timer = duration, minutes, seconds
    setInterval(function () {
      minutes = parseInt(timer / 60, 10)
      seconds = parseInt(timer % 60, 10)

      minutes = minutes < 10 ? "0" + minutes : minutes
      seconds = seconds < 10 ? "0" + seconds : seconds

      display.textContent = minutes + ":" + seconds

      if (--timer < 0) {
        timer = duration
      }
    }, 1000)

    homeScore.textContent = "0"
    guestScore.textContent  = "0"

  }



  /**
   * who : to determine on which side we gonna add the score
   * 0: to home team
   * 1: to guest team
   * */
  function scoreCalculator(who,x)
  {
      if  (who==0)
      {
          hScore+=x
          homeScore.textContent=String(hScore);
      }else
      {
        gScore+=x
        guestScore.textContent=String(gScore)
      }
  
  }