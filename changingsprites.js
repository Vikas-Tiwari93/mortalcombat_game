import { player } from "./js2.js";
export function changesprites(action) {
  if (action === "run") {
    // flicker remover (as if previous img was in 2nd/3rd/4th frame)
    player.framemax = player.spritestate.run.frames;
    player.img.src = player.spritestate.run.src;
  } else if (action === "idle") {
    player.framemax = player.spritestate.idle.frames;
    player.img.src = player.spritestate.idle.src;
  } else if (action === "jump") {
    player.currentframe = 0;
    player.framemax = player.spritestate.jump.frames;
    player.img.src = player.spritestate.jump.src;
  } else if (action === "fall") {
    player.currentframe = 0;
    player.framemax = player.spritestate.fall.frames;
    player.img.src = player.spritestate.fall.src;
  } else if (action === "attack") {
    player.framemax = player.spritestate.attack.frames;
    player.img.src = player.spritestate.attack.src;
  } else if (action === "block") {
    player.framemax = player.spritestate.block.frames;
    player.img.src = player.spritestate.block.src;
  } else if (action === "special") {
    player.framemax = player.spritestate.specialAttack.frames;
    player.img.src = player.spritestate.specialAttack.src;
  }
}
export function enemysprites(action) {}
