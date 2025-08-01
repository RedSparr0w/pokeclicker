import { AchievementOption } from '../GameConstants';
import QuestLineState from '../quests/QuestLineState';
import { QuestLineNameType } from '../quests/QuestLineNameType';
import type { TmpQuestType } from '../TemporaryScriptTypes';

import Requirement from './Requirement';

export default class QuestLineStartedRequirement extends Requirement {
    cachedQuest: TmpQuestType;
    get quest() {
        if (!this.cachedQuest) {
            this.cachedQuest = App.game.quests.getQuestLine(this.questLineName);
        }
        return this.cachedQuest;
    }

    constructor(private questLineName: QuestLineNameType, option = AchievementOption.equal) {
        super(1, option);
    }

    public getProgress(): number {
        return +(this.quest.state() !== QuestLineState.inactive);
    }

    public hint(): string {
        return `Questline ${this.quest.displayName} needs to ${this.option !== AchievementOption.less ? 'be started' : 'not be started yet'}.`;
    }
}
