// enemy and player class

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
    if (this.position.y + 100 >= 540) {
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
class bgsprite {
  constructor(position, imgsrc, scale, framemax) {
    this.position = position;
    this.height = 100;
    this.width = 40;
    this.img = new Image();
    this.img.src = imgsrc;
    this.scale = scale;
    this.framemax = framemax; // for cropping
    this.currentframe = 0;
  }
  draw() {
    c.drawImage(
      this.img,
      this.currentframe * (this.img.width / this.framemax),
      0,
      this.img.width / this.framemax,
      this.img.height,
      this.position.x,
      this.position.y,
      (this.img.width / this.framemax) * this.scale,
      this.img.height * this.scale
    );
  }
  updatedraw() {
    this.draw();
  }
}
