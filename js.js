let canvas = document.querySelector("canvas");
const c = canvas.getContext("2d");
console.log(canvas.style.width);
c.fillRect(0, 0, 1200, 800);
//player creation
const gravity = 0.4;
class sprite {
  constructor(position, velocity, color, offset) {
    this.position = position;
    this.velocity = velocity;
    this.height = 100;
    this.width = 40;
    this.isattacking = false;
    this.isdefending = false;
    this.offset = offset;
    //for attack radius
    this.attackbox = {
      position: { x: this.position.x, y: this.position.y },
      width: 120,
      height: 50,
    };
    this.color = color;
  }
  draw() {
    c.fillStyle = this.color;
    c.fillRect(this.position.x, this.position.y, this.width, this.height);

    c.fillStyle = "green";
    c.fillRect(
      this.attackbox.position.x,
      this.attackbox.position.y,
      this.attackbox.width,
      this.attackbox.height
    );
  }
  updatedraw() {
    this.draw();
    this.attackbox.position.x = this.position.x - this.offset.x;
    this.attackbox.position.y = this.position.y;
    this.position.y += this.velocity.y;
    this.position.x += this.velocity.x;
    if (this.position.y + 100 >= 580) {
      this.velocity.y = 0;
    } else this.velocity.y += gravity;
  }
  attack() {
    this.isattacking = true;
    console.log("i attacked");
    setTimeout(() => {
      this.isattacking = false;
      console.log("i stop");
    }, 200);
  }
  defend() {
    this.isdefending = true;
    console.log("i defend");
    setTimeout(() => {
      this.isdefending = false;
    }, 200);
  }
}
const keys = {
  ArrowLeft: false,
  ArrowRight: false,
  " ": false,
  z: false, //attack
  x: false, // special attack
  c: false, //defend
};
const player = new sprite({ x: 60, y: 0 }, { x: 0, y: 0 }, "red", {
  x: 0,
  y: 0,
});
const enemy = new sprite({ x: 800, y: 0 }, { x: 0, y: 0 }, "blue", {
  x: 80,
  y: 0,
});

function animation() {
  window.requestAnimationFrame(animation);
  c.fillStyle = "black";
  c.fillRect(0, 0, 1200, 800);
  player.updatedraw();
  enemy.updatedraw();
  player.velocity.x = 0;
  //player movement
  if (keys.ArrowRight === true) {
    player.velocity.x = 3;
  }
  if (keys.ArrowLeft === true) {
    player.velocity.x = -3;
  }
  if (keys[" "] === true) {
    player.velocity.y = -10;
  }

  //enemy movement

  enemy.velocity.x = 0;
  // if (keys.ArrowRight === true && enemy.position.x - player.position.x >= 120) {
  //   enemy.velocity.x = 3;
  // }
  // if (keys.ArrowLeft === true || enemy.position.x - player.position.x >= 120) {
  //   // enemy.velocity.x = -3;
  // }
  //detect collision for pointsreduction
  if (
    player.attackbox.position.x + player.attackbox.width >= enemy.position.x &&
    player.attackbox.position.x <= enemy.position.x + enemy.width &&
    player.attackbox.position.y + player.attackbox.height >= enemy.position.y &&
    player.attackbox.position.y <= enemy.position.y + enemy.height &&
    player.isattacking
  ) {
    player.isattacking = false;
    let enemyhealth = document.getElementById("enemyprog").value;
    document.getElementById("enemyprog").value = enemyhealth;
  }

  if (
    enemy.attackbox.position.x + enemy.attackbox.width >= player.position.x &&
    enemy.attackbox.position.x <= player.position.x + player.width &&
    enemy.attackbox.position.y + enemy.attackbox.height >= player.position.y &&
    enemy.attackbox.position.y <= player.position.y + player.height &&
    enemy.isattacking
  ) {
    enemy.isattacking = false;
    let playerhealth = document.getElementById("playerprog").value;
    document.getElementById("playerprog").value = playerhealth - 10;
  }
  //enemy movement with players movement
}
animation();

window.addEventListener("keydown", (e) => {
  if (e.key === "ArrowRight") {
    keys.ArrowRight = true;
  } else if (e.key === "ArrowLeft") {
    keys.ArrowLeft = true;
  } else if (e.key === " " && player.position.y >= 450) {
    keys[" "] = true;
  } else if (e.key === " " && player.position.y <= 450) {
    keys[" "] = false;
  } else if (e.key === "z") {
    keys.z = true;
    player.attack();
    enemy.attack();
  } else if (e.key === "c") {
    keys.c = true;
    player.defend();
  }
});
window.addEventListener("keyup", (e) => {
  if (e.key === "ArrowRight") {
    keys.ArrowRight = false;
  } else if (e.key === "ArrowLeft") {
    keys.ArrowLeft = false;
  } else if (e.key === " ") {
    keys[" "] = false;
  } else if (e.key === "z") {
    keys.z = false;
  } else if (e.key === "c") {
    keys.c = false;
  }
});
