import { player, enemy } from "./js.js";
export const keys = {
  ArrowLeft: false,
  ArrowRight: false,
  " ": false,
  z: false, //attack
  x: false, // special attack
  c: false, //defend
};
export const enemykeys = {
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
  } else if (e.key === " " && player.position.y >= 440) {
    keys[" "] = true;
    setTimeout(() => {
      keys[" "] = false;
    }, 100);
  } else if (e.key === "z") {
    keys.z = true;
    player.attack();
  } else if (e.key === "c") {
    keys.c = true;
  } else if (e.key === "x") {
    keys.x = true;
    player.defend();
  }
});
window.addEventListener("keyup", (e) => {
  if (e.key === "ArrowRight") {
    setTimeout(() => {
      keys.ArrowRight = false;
    }, 200);
  } else if (e.key === "ArrowLeft") {
    setTimeout(() => {
      keys.ArrowLeft = false;
    }, 200);
  } else if (e.key === " ") {
    keys[" "] = false;
  } else if (e.key === "z") {
    setTimeout(() => {
      keys.z = false;
    }, 210);
  } else if (e.key === "c") {
    setTimeout(() => {
      keys.c = false;
    }, 500);
  } else if (e.key === "x") {
    setTimeout(() => {
      keys.x = false;
    }, 200);
  }
});
