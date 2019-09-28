class GymPokemon {
    name: string;
    maxHealth: number;
    level: number;

    constructor(name: string, maxHealth: number, level: number) {
        this.name = name;
        this.maxHealth = Math.floor(maxHealth * Prestige.getTypeMultiplier());
        this.level = level;
    }
}
