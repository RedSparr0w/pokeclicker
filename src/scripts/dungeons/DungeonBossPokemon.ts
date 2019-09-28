class DungeonBossPokemon {
    name: string;
    baseHealth: number;
    level: number;

    constructor(name: string, maxHealth: number, level: number) {
        this.name = name;
        this.baseHealth = Math.floor(maxHealth * Prestige.getTypeMultiplier());
        this.level = level;
    }
}
