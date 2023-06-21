import { player, enemy } from "./js2.js";
export const keys = {
  ArrowLeft: false,
  ArrowRight: false,
  " ": false,
  z: false, //attack
  x: false, // special attack
  c: false, //defend
};
window.addEventListener("keydown", (e) => {
  if (e.key === "ArrowRight") {
    keys.ArrowRight = true;
  } else if (e.key === "ArrowLeft") {
    keys.ArrowLeft = true;
  } else if (e.key === " " && player.position.y >= 410) {
    keys[" "] = true;
  } else if (e.key === " " && player.position.y <= 410) {
    keys[" "] = false;
  } else if (e.key === "z") {
    keys.z = true;
    player.attack();
    enemy.attack();
  } else if (e.key === "c") {
    keys.c = true;
    enemy.attack();
  } else if (e.key === "x") {
    keys.x = true;
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
  } else if (e.key === "x") {
    keys.x = false;
  }
});
