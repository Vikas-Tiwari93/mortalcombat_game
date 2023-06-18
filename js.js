let canvas = document.querySelector("canvas");
const c = canvas.getContext("2d");
console.log(canvas.style.width);
c.fillRect(0, 0, 1200, 800);
//player creation
const gravity = 0.4;

const background = new bgsprite(
  { x: 0, y: 0 },
  "./images/The Dawn/building_woods_light.png",
  1.15,
  1
);
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
  background.updatedraw();
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
    document.getElementById("enemyprog").value = enemyhealth - 10;
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
    document.getElementById("playerprog").value = playerhealth;
  }
  //enemy movement with players movement
}
animation();
