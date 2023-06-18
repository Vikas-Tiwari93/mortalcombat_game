//value updation in dom//

// timer in dom

let time = document.getElementById("timer");
let timeval = 60;
let userimg = document.getElementById("userimg");
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
  document.getElementById("enemyimg").style.visibility = "visible";

  document.getElementById("userimgplay").style.visibility = "visible";
  document.getElementById("enemyimg").src = enemyimg[randomenemy];
  warcry = document.getElementById("warcry").value;
  console.log(warcry);
  var id = setInterval(() => {
    let playerhealth = document.getElementById("playerprog").value;
    let enemyhealth = document.getElementById("enemyprog").value;
    console.log(id);
    if (timeval > 0) {
      if (playerhealth <= 0) {
        document
          .getElementById("gameover")
          .append(" ", document.getElementById("fightername").value);
        document.getElementById("gameover").style.visibility = "visible";
        clearInterval(id);
      } else if (enemyhealth <= 0) {
        document
          .getElementById("youwin")
          .append(" ", document.getElementById("warcry").value);
        document.getElementById("youwin").style.visibility = "visible";
        clearInterval(id);
      }
      timeval += -1;
      time.innerHTML =
        String(Math.floor(timeval / 60)) + ":" + String(timeval % 60);
      console.log(timeval);
    } else if (playerhealth >= enemyhealth) {
      document
        .getElementById("youwin")
        .append(document.getElementById("warcry").value);

      document.getElementById("youwin").style.visibility = "visible";
      clearInterval(id);
    } else {
      document;

      document.getElementById("gameover").style.visibility = "visible";
      clearInterval(id);
    }
  }, 1000);
  console.log(id);
};

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
