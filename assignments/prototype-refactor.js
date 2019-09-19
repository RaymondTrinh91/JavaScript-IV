/* 

Prototype Refactor

1. Copy and paste your code or the solution from yesterday

2. Your goal is to refactor all of this code to use ES6 Classes. The console.log() statements should still return what is expected of them.

*/

class GameObject{
    constructor(object){
        this.createdAt = object.createdAt;
        this.name = object.name;
        this.dimensions = object.dimensions;  
    }
    destroy(){
        return `${this.name} was removed from the game.`;
    }
}

class CharacterStats extends GameObject{
    constructor(stats){
        super(stats);
        this.healthPoints = stats.healthPoints;
    }
    takeDamage(){
        return `${this.name} took damage.`;
    }
}

class Humanoid extends CharacterStats{
    constructor(char){
        super(char);
        this.team = char.team;
        this.weapons = char.weapons;
        this.language = char.language;
    }
    greet(){
        return `${this.name} offers a greeting in ${this.language}`;
    }
}

class Hero extends Humanoid{
    constructor(hero){
        super(hero);
        this.blessing = hero.blessing;
    }
    attack(){
        let dmg = Math.floor(Math.random() * (7 - 1) + 1);
        let eHp = demonLord.healthPoints;
        let sHp = eHp - dmg;
        if (sHp <= 0){
            return demonLord.destroy();
        }
        demonLord.healthPoints = sHp;
        console.log(demonLord.healthPoints)
        return demonLord.takeDamage();
    };

    holyStrike(){
        let holyDmg = Math.floor(Math.random() * (15 - 3) + 3);
        let eHp = demonLord.healthPoints;
        let sHp = eHp - holyDmg;
        if (sHp <= 0){
            return demonLord.destroy();
        }
        demonLord.healthPoints = sHp;
        console.log(demonLord.healthPoints)
        return demonLord.takeDamage();
    };

    holyShield(){
        heroOfLegend.healthPoints += 50;
        console.log(heroOfLegend.healthPoints);
        return `A Shield of Light wraps around ${heroOfLegend.name}`;
    };
}

class Villian extends Humanoid{
    constructor(badGuy){
        super(badGuy);
            this.curse = badGuy.curse;        
    }
    punch = function(){
        let dmg = Math.floor(Math.random() * (1000 - 800) + 800);
        let eHp = heroOfLegend.healthPoints;
        let sHp = eHp - dmg;
        if (sHp <= 0){
            return heroOfLegend.destroy();
        }
        heroOfLegend.healthPoints = sHp;
        console.log(heroOfLegend.healthPoints)
        return heroOfLegend.takeDamage();
    };
}

// Character's objects

const mage = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 2,
      width: 1,
      height: 1,
    },
    healthPoints: 5,
    name: 'Bruce',
    team: 'Mage Guild',
    weapons: [
      'Staff of Shamalama',
    ],
    language: 'Common Tongue',
  });

const swordsman = new Humanoid({
    createdAt: new Date(),
    dimensions: {
        length: 2,
        width: 2,
        height: 2,
    },
    healthPoints: 15,
    name: 'Sir Mustachio',
    team: 'The Round Table',
    weapons: [
        'Giant Sword',
        'Shield',
    ],
    language: 'Common Tongue',
    });

const archer = new Humanoid({
    createdAt: new Date(),
    dimensions: {
        length: 1,
        width: 2,
        height: 4,
    },
    healthPoints: 10,
    name: 'Lilith',
    team: 'Forest Kingdom',
    weapons: [
        'Bow',
        'Dagger',
    ],
    language: 'Elvish',
    });

const heroOfLegend = new Hero({
    createdAt: new Date(),
    dimensions:{
        length:2,
        width:2,
        height:2,
    },
    healthPoints:35,
    name: 'Mars',
    team: 'Justice',
    weapons:[
        'Icecaliberg',
        'Ceaser\'s Shal\'d', 
    ],
    language: 'Common Tongue',
    blessing: 'Blessed by Fairies',
});

const demonLord = new Villian({
    createdAt: new Date(),
    dimensions:{
        length: 4,
        width: 3,
        height: 5,
    },
    healthPoints: 50,
    name: 'Bob',
    team: 'Team Bob',
    weapons: [
        'Left Fist',
        'Right Fist',
    ],
    language: 'English',
    curse: 'Where am I? How did I get here?',
});

console.log(mage.createdAt); // Today's date
console.log(archer.dimensions); // { length: 1, width: 2, height: 4 }
console.log(swordsman.healthPoints); // 15
console.log(mage.name); // Bruce
console.log(swordsman.team); // The Round Table
console.log(mage.weapons); // Staff of Shamalama
console.log(archer.language); // Elvish
console.log(archer.greet()); // Lilith offers a greeting in Elvish.
console.log(mage.takeDamage()); // Bruce took damage.
console.log(swordsman.destroy()); // Sir Mustachio was removed from the game.
console.log(heroOfLegend.attack());
console.log(heroOfLegend.holyStrike());
console.log(heroOfLegend.holyShield());
console.log(heroOfLegend.holyStrike());
console.log(demonLord.punch());