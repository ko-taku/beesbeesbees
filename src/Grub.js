class Grub {
  // TODO..
  constructor(age, color, food) {
    this.age = 0;
    this.color = 'pink';
    this.food = 'jelly'

  }

  eat() {
    return `Mmmmmmmmm ${this.food}`;
  }

}

let grub = new Grub();

grub.eat();

module.exports = Grub;
