let canvas = document.querySelector("canvas");
const c = canvas.getContext("2d");
console.log(canvas.style.width);
c.fillRect(0, 0, 1200, 800);
//player creation
const gravity = 0.4;
class sprite {
  constructor(position, velocity, color, attackbox) {
    this.position = position;
    this.velocity = velocity;

    //for attack radius
    this.attackbox = {
      position: this.position,
      width: 120,
      height: 50,
    };
    this.color = color;
  }
  draw() {
    c.fillStyle = this.color;
    c.fillRect(this.position.x, this.position.y, 40, 100);
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
    this.position.y += this.velocity.y;
    this.position.x += this.velocity.x;
    if (this.position.y + 100 >= 580) {
      this.velocity.y = 0;
    } else this.velocity.y += gravity;
  }
}
const keys = {
  a: false,
  d: false,
  " ": false,
  w: false,
};
const player = new sprite({ x: 60, y: 0 }, { x: 0, y: 0 }, "red");
const enemy = new sprite({ x: 1100, y: 0 }, { x: 0, y: 0 }, "blue");

function animation() {
  window.requestAnimationFrame(animation);
  c.fillStyle = "black";
  c.fillRect(0, 0, 1200, 800);
  player.updatedraw();
  enemy.updatedraw();
  player.velocity.x = 0;
  //player movement
  if (keys.d === true) {
    player.velocity.x = 3;
  }
  if (keys.a === true) {
    player.velocity.x = -3;
  }
  if (keys[" "] === true) {
    player.velocity.y = -10;
  }

  //enemy movement
  enemy.velocity.x = 0;
  if (keys.d === true || enemy.position.x - player.position.x >= 150) {
    enemy.velocity.x = 3;
  }
  if (keys.a === true || enemy.position.x - player.position.x >= 150) {
    enemy.velocity.x = -3;
  }
}
animation();

window.addEventListener("keydown", (e) => {
  if (e.key === "d") {
    console.log(e.key);
    keys.d = true;
  } else if (e.key === "a") {
    console.log(e.key);
    keys.a = true;
  } else if (e.key === " " && player.position.y >= 450) {
    console.log(e.key);
    keys[" "] = true;
  } else if (e.key === " " && player.position.y <= 450) {
    console.log(e.key);
    keys[" "] = "no jump";
  }
});
window.addEventListener("keyup", (e) => {
  if (e.key === "d") {
    console.log(e.key);
    keys.d = false;
  } else if (e.key === "a") {
    console.log(e.key);
    keys.a = false;
  } else if (e.key === " ") {
    console.log(e.key);
    keys[" "] = false;
  }
});
