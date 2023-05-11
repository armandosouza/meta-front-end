class Character {
	constructor(name, weapon) {
		this.name = name
		this.weapon = weapon
		this.health = 100
		this.power = 100
	}

	getHealth() {
		return this.health
	}

	attack(char1, char2) {
		if(char1.power >= 10 && char2.health >= 10) {
			char2.health -= 10
			char1.power -= 10
		} else if(char1.power < 10) {
			return "Your power is too low!"
		} else if(char2.health < 10) {
			char2.health = 0
			return `${char2.name} is dead!`
		}
	}
}


class Warrior extends Character {
	constructor(super_attack, name, weapon) {
		super(name, weapon)
		this.super_attack = super_attack
	}

	super_attack(char) {
		if(char.health <= 20) {
			char.health = 0
			return `${char.name} is dead!`
		}
		char.health -= 20
	}
}


var gardener = new Character("John", "knife")
var warrior = new Warrior("Super Punch", "Bruce", "sword")
gardener.attack(gardener, warrior)
console.log(warrior.health)