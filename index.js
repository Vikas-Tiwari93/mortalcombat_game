//value updation in dom//

// timer in dom
let time = document.getElementById("timer");
let timeval = 0;

onemin = (e) => {
  timeval = 13;
  time.innerText = `1:00`;
  document.getElementById("selected").removeAttribute("id");
  e.target.id = "selected";
};

twomin = (e) => {
  timeval = 120;
  time.innerText = `2:00`;
  document.getElementById("selected").removeAttribute("id");
  e.target.id = "selected";
};
threemin = (e) => {
  timeval = 180;
  time.innerText = `3:00`;
  document.getElementById("selected").removeAttribute("id");
  e.target.id = "selected";
};
playfn = (e) => {
  document.getElementById("playgame").style.visibility = "hidden";

  var id = setInterval(() => {
    let playerhealth = document.getElementById("playerprog").value;
    let enemyhealth = document.getElementById("enemyprog").value;
    console.log(id);
    if (timeval > 0) {
      if (playerhealth <= 0) {
        document.getElementById("gameover").style.visibility = "visible";
        clearInterval(id);
      } else if (enemyhealth <= 0) {
        document.getElementById("youwin").style.visibility = "visible";
        clearInterval(id);
      }
      timeval += -1;
      time.innerHTML =
        String(Math.floor(timeval / 60)) + ":" + String(timeval % 60);
      console.log(timeval);
    } else if (playerhealth >= enemyhealth) {
      document.getElementById("youwin").style.visibility = "visible";
      clearInterval(id);
    } else {
      document.getElementById("gameover").style.visibility = "visible";
      clearInterval(id);
    }
  }, 1000);
  console.log(id);
};
