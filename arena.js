class Character {
    constructor(name, health, power) {
        this.name = name;
        this.health = health;
        this.power = power;
    }

    get name() { return this._name; }
    set name(value) {
        if (typeof value !== 'string' || value.trim() === '') {
            throw new TypeError('Name must be a non-empty string.');
        }
        this._name = value;
    }

    get health() { return this._health; }
    set health(value) {
        if (typeof value !== 'number' || value < 0) {
            throw new TypeError('Health must be a non-negative number.');
        }
        this._health = value;
    }

    get power() { return this._power; }
    set power(value) {
        if (typeof value !== 'number' || value < 0) {
            throw new TypeError('Power must be a non-negative number.');
        }
        this._power = value;
    }

    describe() {
        return `${this.name} | HP: ${this.health} | Power: ${this.power}`;
    }

    [Symbol.toPrimitive](hint) {
        if (hint === 'number') return this.health;
        if (hint === 'string' || hint === 'default') return this.describe();
        return null;
    }

    static battle(character1, character2) {
        const getAttackDamage = (hero) => {
            if (hero instanceof Warrior) return hero.attack();
            if (hero instanceof Mage) return hero.castSpell();
            if (hero instanceof Archer) return hero.shoot();
            throw new Error('Unknown hero type.');
        };

        const damage1 = getAttackDamage(character1);
        const damage2 = getAttackDamage(character2);

        if (damage1 > damage2) return `Winner: ${character1.name}`;
        if (damage2 > damage1) return `Winner: ${character2.name}`;
        return "Draw!";
    }
}


class Warrior extends Character {
    constructor(name, health, power, shield = 0) {
        super(name, health, power);
        this.shield = shield;
    }

    get shield() { return this._shield; }
    set shield(value) {
        if (typeof value !== 'number' || value < 0) {
            throw new TypeError('Shield must be a non-negative number.');
        }
        this._shield = value;
    }

    attack() { return this.power + (this.shield * 0.5); }
}


class Mage extends Character {
    constructor(name, health, power, mana = 0) {
        super(name, health, power);
        this.mana = mana;
    }

    get mana() { return this._mana; }
    set mana(value) {
        if (typeof value !== 'number' || value < 0) {
            throw new TypeError('Mana must be a non-negative number.');
        }
        this._mana = value;
    }

    castSpell() {
        if (this.mana >= 10) {
            this.mana -= 10;
            return this.power * 2;
        }
        return 0;
    }
}


class Archer extends Character {
    constructor(name, health, power, arrows = 0) {
        super(name, health, power);
        this.arrows = arrows;
    }

    get arrows() { return this._arrows; }
    set arrows(value) {
        if (typeof value !== 'number' || value < 0) {
            throw new TypeError('Arrows must be a non-negative number.');
        }
        this._arrows = value;
    }

    shoot() {
        if (this.arrows > 0) {
            this.arrows -= 1;
            return this.power;
        }
        return 0;
    }
}


// Yoxla

try {
    const g = new Mage('Gandalf', 80, 40);
    g.mana = 10;

    const a = new Warrior('Aragorn', 100, 30); 
    a.shield = 20;

    const legolas = new Archer('Legolas', 90, 35, 2);

    console.log(Character.battle(g, a)); 
    console.log(`${a}`, +g); 
    console.log(Character.battle(a, legolas)); 

} catch (error) {
    console.error("Error:", error.message);
}