class EffectEngineRunner {
    public static counter = 0;

    public static tick() {
        this.counter = 0;
        const timeToReduce = 1;
        for (const itemName in GameConstants.BattleItemType) {
            const timeRemaining = player.effectList[itemName]();
            if (timeRemaining > 0) {
                player.effectList[itemName](Math.max(0, timeRemaining - timeToReduce));
                this.updateFormattedTimeLeft(itemName);
            }
            if (player.effectList[itemName]() == 5) {
                Notifier.notify({ message: `The ${GameConstants.humanifyString(itemName)}s effect is about to wear off!`, type: GameConstants.NotificationOption.warning, sound: GameConstants.NotificationSound.battle_item_timer, setting: GameConstants.NotificationSetting.battle_item_timer });
            }
        }
    }

    public static getEffect(itemName: string) {
        if (!player) {
            return 0;
        }
        return player.effectList[itemName]();
    }

    public static addEffect(itemName: string, amount: number) {
        player.effectList[itemName](Math.max(0, player.effectList[itemName]() + (GameConstants.ITEM_USE_TIME * amount)));
        this.updateFormattedTimeLeft(itemName);
    }

    public static updateFormattedTimeLeft(itemName: string) {
        const times = GameConstants.formatTime(player.effectList[itemName]()).split(':');
        if (+times[0] > 0) {
            return player.effectTimer[itemName]('60:00+');
        }
        times.shift();
        player.effectTimer[itemName](times.join(':'));
    }

    public static getMoneyMultiplier() {
        return this.isActive(GameConstants.BattleItemType.Lucky_incense)() ? 1.5 : 1;
    }

    public static getDungeonTokenMultiplier() {
        return this.isActive(GameConstants.BattleItemType.Token_collector)() ? 1.5 : 1;
    }


    public static isActive(itemName: string): KnockoutComputed<boolean> {
        return ko.pureComputed(() => {
            if (!player) {
                return false;
            }
            return !!player.effectList[itemName]();
        });
    }
}
