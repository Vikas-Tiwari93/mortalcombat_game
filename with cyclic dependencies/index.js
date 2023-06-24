//value updation in dom//

// timer in dom
let gameover = document.getElementById("gameover");
let youwin = document.getElementById("youwin");
let round = 1;
let round1 = document.getElementById("round1");
let round2 = document.getElementById("round2");
let round3 = document.getElementById("round3");
let sound = document.getElementById("music");
let sound2 = document.getElementById("music2");
let gamesound = document.getElementById("gamesound");
let time = document.getElementById("timer");
let timeval = 6;
let timevalchange = timeval;
let userimg = document.getElementById("userimg");
let playerhealth = document.getElementById("playerprog").value;
let enemyhealth = document.getElementById("enemyprog").value;
let enemyimg = {
  1: "./images/pngegg.png",
  2: "./images/pngegg (1).png",
  3: "./images/pngegg (2).png",
  4: "./images/pngegg (3).png",
  5: "./images/pngegg (4).png",
  6: "./images/pngegg (5).png",
};

let randomenemy = Math.floor(1 + Math.random() * 6);
let warcry;

onemin = (e) => {
  timeval = 60;
  timevalchange = timeval;
  time.innerText = `1:00`;
  document.getElementById("selected").removeAttribute("id");
  e.target.id = "selected";
};

twomin = (e) => {
  timeval = 120;
  timevalchange = timeval;
  time.innerText = `2:00`;
  document.getElementById("selected").removeAttribute("id");
  e.target.id = "selected";
};
threemin = (e) => {
  timeval = 180;
  timevalchange = timeval;
  time.innerText = `3:00`;
  document.getElementById("selected").removeAttribute("id");
  e.target.id = "selected";
};
playfn = () => {
  sound.play();
  sound2.play();
  gamesound.play();
  round1.style.visibility = "visible"; //round 1
  //image rendering
  document.getElementById("playgame").style.visibility = "hidden";
  document.getElementById("enemyimg").style.visibility = "visible";

  document.getElementById("userimgplay").style.visibility = "visible";
  document.getElementById("enemyimg").src = enemyimg[randomenemy];
  warcry = document.getElementById("warcry").value;
  // for disappearing of round 1 only
  setTimeout(() => {
    round1.style.transform = "scaleY(0)";
    round1.style.border = "0px";
    round += 1;
  }, 1000);
  // for time management

  var id;
  setTimeout(() => {
    id = setInterval(() => {
      playerhealth = document.getElementById("playerprog").value;
      enemyhealth = document.getElementById("enemyprog").value;

      if (timevalchange > 1) {
        if (playerhealth <= 0 && round === 2) {
          setTimeout(round2fn, 1000);
        } else if (playerhealth <= 0 && round === 3) {
          setTimeout(round3fn, 1000); //round3 start management
        } else if (playerhealth <= 0 && round > 3) {
          gameover.append(" ", document.getElementById("fightername").value);
          gameover.style.visibility = "visible";
          clearInterval(id);
        } else if (enemyhealth <= 0 && round === 2) {
          console.log("i am in round 2");

          setTimeout(round2fn, 1000); //round2 start management
        } else if (enemyhealth <= 0 && round === 3) {
          console.log("i am in round 3");

          setTimeout(round3fn, 1000); //round3 start management}
        } else if (enemyhealth <= 0 && round > 3) {
          youwin.append(" ", document.getElementById("warcry").value);
          youwin.style.visibility = "visible";
          clearInterval(id);
        }

        timevalchange += -1;
        time.innerHTML =
          String(Math.floor(timevalchange / 60)) +
          ":" +
          String(timevalchange % 60);
      } else if (timevalchange <= 1) {
        if (round === 2) {
          setTimeout(round2fntime, 1000);
          // document
          //   .getElementById("youwin")
          //   .append(document.getElementById("warcry").value);

          // document.getElementById("youwin").style.visibility = "visible";
          // clearInterval(id);
        } else if (round === 3) {
          console.log("i am here js", round);

          setTimeout(round3fntime, 900);
          // document;

          // document.getElementById("gameover").style.visibility = "visible";
          // clearInterval(id);
        } else {
          console.log("round 3 ends", round);

          document.getElementById("gameover").style.visibility = "visible";
          clearInterval(id);
        }
        timevalchange += -1;
        time.innerHTML =
          String(Math.floor(timevalchange / 60)) +
          ":" +
          String(timevalchange % 60);
      }
    }, 1000);
  }, 1000);

  console.log(id);
};

// for avatars

avatarfn = () => {
  document.getElementById("selectavatar").style.visibility = "visible";
};

selectfn1 = () => {
  userimg.src = "./images/pngegg.png";
  document.getElementById("selectavatar").style.visibility = "hidden";
  document.getElementById("userimgplay").src = "./images/pngegg.png";
};
selectfn2 = () => {
  userimg.src = "./images/pngegg (1).png";
  document.getElementById("selectavatar").style.visibility = "hidden";
  document.getElementById("userimgplay").src = "./images/pngegg (1).png";
};
selectfn3 = () => {
  userimg.src = "./images/pngegg (2).png";
  document.getElementById("selectavatar").style.visibility = "hidden";
  document.getElementById("userimgplay").src = "./images/pngegg (2).png";
};
selectfn4 = () => {
  userimg.src = "./images/pngegg (3).png";
  document.getElementById("selectavatar").style.visibility = "hidden";
  document.getElementById("userimgplay").src = "./images/pngegg (3).png";
};
selectfn5 = () => {
  userimg.src = "./images/pngegg (4).png";
  document.getElementById("selectavatar").style.visibility = "hidden";
  document.getElementById("userimgplay").src = "./images/pngegg (4).png";
};
selectfn6 = () => {
  userimg.src = "./images/pngegg (5).png";
  document.getElementById("selectavatar").style.visibility = "hidden";
  document.getElementById("userimgplay").src = "./images/pngegg (5).png";
};
