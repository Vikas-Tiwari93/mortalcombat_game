// enemy and player class // bg class
import { gravity, c } from "./js.js";
export class bgsprite {
  constructor(position, imgsrc, scale, framemax, offset) {
    this.position = position;
    this.img = new Image();
    this.img.src = imgsrc;
    this.scale = scale;
    this.framemax = framemax; // for cropping
    this.currentframe = 0; // for next crop in  frame
    this.frameelapsed = 0; //framespeed
    this.framehold = 5; //framespeed
    this.offset = offset;
  }
  draw() {
    c.drawImage(
      this.img,
      this.currentframe * (this.img.width / this.framemax),
      0,
      this.img.width / this.framemax,
      this.img.height,
      this.position.x - this.offset.x,
      this.position.y - this.offset.y,
      (this.img.width / this.framemax) * this.scale,
      this.img.height * this.scale
    );
  }
  animateframes() {
    this.frameelapsed++;
    if (this.frameelapsed % this.framehold === 0) {
      if (this.currentframe < this.framemax - 1) {
        this.currentframe++;
      } else {
        this.currentframe = 0;
      }
    }
  }
  updatedraw() {
    this.draw();
    this.animateframes();
  }
}
export class sprite extends bgsprite {
  constructor(
    position,
    velocity,
    color,
    imgsrc,
    scale,
    framemax,
    offset,
    spritestate
  ) {
    super(
      position,
      imgsrc, // dont get mistaken again
      scale,
      framemax,
      offset
    );

    this.velocity = velocity;
    this.height = 130;
    this.width = 40;
    this.isattacking = false;
    this.isdefending = false;
    this.spritestate = spritestate;

    //for attack radius
    this.attackbox = {
      position: { x: this.position.x, y: this.position.y },
      width: 200,
      height: 50,
    };
    this.color = color;
    this.currentframe = 0; // repeat(error as not passed as argument)
    this.frameelapsed = 0; //repeat(error as not passed as argument)
    this.framehold = 5; //repeat(error as not passed as argument)
    //insert new images for sprite and set source src
    for (var elm in this.spritestate) {
      spritestate[elm].img = new Image();
      spritestate[elm].img.imgsrc = elm.src;
    }
  }
  // old code....
  // draw() {
  //   c.fillStyle = this.color;
  //   c.fillRect(this.position.x, this.position.y, this.width, this.height);

  //   c.fillStyle = "green";
  //   c.fillRect(
  //     this.attackbox.position.x,
  //     this.attackbox.position.y,
  //     this.attackbox.width,
  //     this.attackbox.height
  //   );
  // }
  updatedraw() {
    this.draw();
    this.animateframes();

    this.attackbox.position.x = this.position.x - this.offset.x;
    this.attackbox.position.y = this.position.y;
    this.position.y += this.velocity.y;
    this.position.x += this.velocity.x;
    if (this.position.y + 100 >= 540) {
      this.velocity.y = 0;
    } else this.velocity.y += gravity;
  }
  attack() {
    this.isattacking = true;

    setTimeout(() => {
      this.isattacking = false;
    }, 200);
  }
  defend() {
    this.isdefending = true;

    setTimeout(() => {
      this.isdefending = false;
    }, 200);
  }
}
