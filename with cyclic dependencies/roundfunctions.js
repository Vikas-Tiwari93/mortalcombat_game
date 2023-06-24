let winneryou = { 1: "", 2: "", 3: "" };
let winnerenemy = { 1: "", 2: "", 3: "" };

//round 2 start
let round2fn = () => {
  round2.style.visibility = "visible";
  time.innerHTML =
    String(Math.floor(timeval / 60)) + ":" + String(timeval % 60);
  console.log(playerhealth, enemyhealth, round);
  if (playerhealth <= 0 && round === 2) {
    timevalchange = timeval;
    round += 1;
    gamesound.src = "./sound/R2.mp3";
    gamesound.play();
    winnerenemy[1] = "Won";
    winneryou[1] = "Lost";
    playerhealth = 80;
    enemyhealth = 80;
  } else if (enemyhealth <= 0 && round === 2) {
    timevalchange = timeval;
    gamesound.src = "./sound/R2.mp3";
    gamesound.play();
    round += 1;
    winnerenemy[1] = "Lost";
    winneryou[1] = "Won";
    document.getElementById("playerprog").value = 80;
    document.getElementById("enemyprog").value = 80;
  }
  console.log(winnerenemy);

  setTimeout(() => {
    round2.style.transform = "scaleY(0)";
    round2.style.border = "0px";
  }, 2000);
};

//round 3 start
let round3fn = () => {
  time.innerHTML =
    String(Math.floor(timeval / 60)) + ":" + String(timeval % 60);

  round3.style.visibility = "visible";
  if (playerhealth <= 0 && round === 3) {
    timevalchange = timeval;
    gamesound.src = "./sound/R3.mp3";
    gamesound.play();
    round += 1;
    winnerenemy[2] = "Won";
    winneryou[2] = "Lost";
    document.getElementById("playerprog").value = 80;
    document.getElementById("enemyprog").value = 80;
  } else if (enemyhealth <= 0 && round === 3) {
    timevalchange = timeval;
    gamesound.src = "./sound/R3.mp3";
    gamesound.play();
    round += 1;
    winnerenemy[2] = "Lost";
    winneryou[2] = "Won";
    document.getElementById("playerprog").value = 80;
    document.getElementById("enemyprog").value = 80;

    setTimeout(() => {
      round3.style.transform = "scaleY(0)";
      round3.style.border = "0px";
    }, 2000);
  }
};
//times up round
let round2fntime = () => {
  round2.style.visibility = "visible";
  time.innerHTML =
    String(Math.floor(timeval / 60)) + ":" + String(timeval % 60);

  if (round === 2 && playerhealth <= enemyhealth) {
    timevalchange = timeval;
    round += 1;
    gamesound.src = "./sound/R2.mp3";
    gamesound.play();
    winnerenemy[1] = "Won";
    winneryou[1] = "Lost";
    playerhealth = 80;
    enemyhealth = 80;
  } else if (round === 2 && playerhealth > enemyhealth) {
    timevalchange = timeval;
    gamesound.src = "./sound/R2.mp3";
    gamesound.play();
    round += 1;
    winnerenemy[1] = "Lost";
    winneryou[1] = "Won";
    document.getElementById("playerprog").value = 80;
    document.getElementById("enemyprog").value = 80;
  }
  console.log(winnerenemy);

  setTimeout(() => {
    round2.style.transform = "scaleY(0)";
    round2.style.border = "0px";
  }, 2000);
};

//round 3 start
let round3fntime = () => {
  round2.style.visibility = "visible";
  time.innerHTML =
    String(Math.floor(timeval / 60)) + ":" + String(timeval % 60);
  round3.style.visibility = "visible";
  console.log("times in");
  if (timevalchange <= 1 && playerhealth <= enemyhealth) {
    timevalchange = timeval;
    gamesound.src = "./sound/R3.mp3";
    gamesound.play();
    round += 1;
    winnerenemy[2] = "Won";
    winneryou[2] = "Lost";
    document.getElementById("playerprog").value = 80;
    document.getElementById("enemyprog").value = 80;
  } else if (timevalchange <= 1 && playerhealth > enemyhealth) {
    timevalchange = timeval;
    gamesound.src = "./sound/R3.mp3";
    gamesound.play();
    round += 1;
    winnerenemy[2] = "Lost";
    winneryou[2] = "Won";
    document.getElementById("playerprog").value = 80;
    document.getElementById("enemyprog").value = 80;
  }
  setTimeout(() => {
    round3.style.transform = "scaleY(0)";
    round3.style.border = "0px";
  }, 2000);
};
