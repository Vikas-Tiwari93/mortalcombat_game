import { bgsprite, sprite } from "./canvas.js";
import { keys, enemykeys } from "./eventlisteners.js";
import { changesprites, enemysprites } from "./changingsprites.js";
import { enemymodel } from "./enemymodel.js";
let canvas = document.querySelector("canvas");
export const c = canvas.getContext("2d");

c.fillRect(0, 0, 1200, 800);
//player creation
export const gravity = 0.4;

const background = new bgsprite(
  { x: 0, y: 0 },
  "./images/The Dawn/building_woods_light.png",
  1.15,
  1,
  { x: 0, y: 0 },
  0
);
export const player = new sprite(
  { x: 60, y: 0 },
  { x: 0, y: 0 },
  "red",
  "./mysprites/huntress(1)/Idle.png",
  2.5,
  8,
  {
    x: 100,
    y: 150,
  },
  {
    run: { src: "./mysprites/huntress(1)/Run.png", frames: 8 },
    jump: { src: "./mysprites/huntress(1)/Jump.png", frames: 2 },
    fall: { src: "./mysprites/huntress(1)/Fall.png", frames: 2 },
    idle: { src: "./mysprites/huntress(1)/Idle.png", frames: 8 },
    attack: { src: "./mysprites/huntress(1)/Attack2.png", frames: 5 },
    specialAttack: { src: "./mysprites/huntress(1)/Attack3.png", frames: 7 },
    block: { src: "./mysprites/huntress(1)/Attack1.png", frames: 5 },
    attacked: { src: "./mysprites/huntress(1)/Take hit.png", frames: 3 },
    death: { src: "./mysprites/huntress(1)/Death.png", frames: 8 },
  }
);
export const enemy = new sprite(
  { x: 800, y: 0 },
  { x: 0, y: 0 },
  "blue",

  "mysprites/wizard(3)/Idle.png",
  1.5,
  8,
  {
    x: -80,
    y: 160,
  },
  {
    run: { src: "./mysprites/wizard(3)/Run.png", frames: 8 },
    jump: { src: "./mysprites/wizard(3)/Jump.png", frames: 2 },
    fall: { src: "./mysprites/wizard(3)/Fall.png", frames: 2 },
    idle: { src: "./mysprites/wizard(3)/Idle.png", frames: 8 },
    attack: { src: "./mysprites/wizard(3)/Attack2.png", frames: 8 },
    specialAttack: { src: "./mysprites/wizard(3)/Attack3.png", frames: 7 },
    block: { src: "./mysprites/wizard(3)/Attack1.png", frames: 8 },
    attacked: { src: "./mysprites/wizard(3)/Take hit.png", frames: 3 },
    death: { src: "./mysprites/wizard(3)/Death.png", frames: 8 },
  }
  // { run: "", jump: "", idle: "", attack: "", specialAttack: "", block: "" }
);

function animation() {
  window.requestAnimationFrame(animation);
  c.fillStyle = "black";
  c.fillRect(0, 0, 1200, 800);
  background.updatedraw();
  player.updatedraw();
  enemy.updatedraw();

  player.velocity.x = 0;
  //player movement
  changesprites("idle");
  if (keys.ArrowRight === true) {
    changesprites("run");
    player.velocity.x = 5;
  }
  if (keys.ArrowLeft === true) {
    changesprites("run");
    player.velocity.x = -5;
  }
  if (keys.z === true) {
    changesprites("attack");
    player.velocity.x = 3;
  }
  if (keys.x === true) {
    changesprites("block");
    player.velocity.x = 0;
  }
  if (keys.c === true) {
    changesprites("special");
    player.velocity.x = 1;
  }
  if (keys[" "] === true) {
    changesprites("jump");
    player.velocity.y = -10;
  }
  if (player.velocity.y > 0) {
    changesprites("fall");
  }
  enemy.velocity.x = 0;
  //enemy movement
  enemysprites("idle");
  if (enemykeys.ArrowRight === true) {
    enemysprites("run");
    enemy.velocity.x = -5;
  }
  if (enemykeys.ArrowLeft === true) {
    enemysprites("run");
    enemy.velocity.x = 5;
  }
  if (enemykeys.z === true) {
    enemysprites("attack");
    enemy.velocity.x = -3;
  }
  if (enemykeys.x === true) {
    enemysprites("block");
    enemy.velocity.x = 0;
  }
  if (enemykeys.c === true) {
    enemysprites("special");
    enemy.velocity.x = -1;
  }
  if (enemykeys[" "] === true) {
    enemysprites("jump");
    enemy.velocity.y = -10;
  }
  if (enemy.velocity.y > 0) {
    enemysprites("fall");
  }
  //relative attack position
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
    document.getElementById("playerprog").value = playerhealth - 10;
  }
  // next round new states
  if (
    document.getElementById("enemyprog").value === 0 ||
    document.getElementById("timer").innerText === "0:0"
  ) {
    setTimeout(() => {
      player.position.x = 60;
      player.velocity.y = 0;
      player.position.y = -50;
      enemy.position.x = 800;
      enemy.velocity.y = 0;
      enemy.position.y = -50;
    }, 2000);
  }
  enemymodel();
}
animation();
