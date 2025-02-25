const Bee = require('./Bee');
const Grub = require('./Grub');

class ForagerBee extends Bee {
  // TODO..
  constructor(age, job, color, food, eat, canFly, treasureChest) {

    super();

    this.age = 10;
    this.job = 'find pollen';
    this.canFly = true;
    this.treasureChest = [];

  }

  forage(item) {
    this.treasureChest.push(item);
  };

}

module.exports = ForagerBee;
