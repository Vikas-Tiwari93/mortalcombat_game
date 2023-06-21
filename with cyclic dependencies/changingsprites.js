import { player, enemy } from "./js.js";
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
export function enemysprites(action) {
  if (action === "run") {
    // flicker remover (as if previous img was in 2nd/3rd/4th frame)
    enemy.framemax = enemy.spritestate.run.frames;
    enemy.img.src = enemy.spritestate.run.src;
  } else if (action === "idle") {
    enemy.framemax = enemy.spritestate.idle.frames;
    enemy.img.src = enemy.spritestate.idle.src;
  } else if (action === "jump") {
    enemy.currentframe = 0;
    enemy.framemax = enemy.spritestate.jump.frames;
    enemy.img.src = enemy.spritestate.jump.src;
  } else if (action === "fall") {
    enemy.currentframe = 0;
    enemy.framemax = enemy.spritestate.fall.frames;
    enemy.img.src = enemy.spritestate.fall.src;
  } else if (action === "attack") {
    enemy.framemax = enemy.spritestate.attack.frames;
    enemy.img.src = enemy.spritestate.attack.src;
  } else if (action === "block") {
    enemy.framemax = enemy.spritestate.block.frames;
    enemy.img.src = enemy.spritestate.block.src;
  } else if (action === "special") {
    enemy.framemax = enemy.spritestate.specialAttack.frames;
    enemy.img.src = enemy.spritestate.specialAttack.src;
  }
}
