load('nashorn:mozilla_compat.js');
importPackage(Packages.server.battlefield);

var status = -1;

function action(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else if (mode == 0) {
        cm.dispose();
        return;
    } else {
        cm.dispose();
        return;
    }

    switch(status) {
        case 0:
            var msg = "以下是您的戰地能力值";
            var effect = BattleField.getInstance().getAccounBattleFieldEffect(cm.getPlayer());
            var details = BattleField.getInstance().getAccountBattleFieldDetailInfo(cm.getPlayer());

            msg += "戰地系統獲得總能力:\r\n";
            if(effect.str != 0) msg += "力量:+" + effect.str + " ";
            if(effect.dex != 0) msg += "敏捷:+" + effect.dex + " ";
            if(effect._int != 0) msg += "智力:+" + effect._int + " ";
            if(effect.luk != 0) msg += "幸運:+" + effect.luk;
            msg += "\r\n";

            if(effect.hp != 0) msg += "最大HP:+" + effect.hp + " ";
            if(effect.mp != 0) msg += "最大MP:+" + effect.mp;
            if(effect.hp != 0 || effect.mp != 0) {
                msg += "\r\n";
            }

            if(effect.defense) msg += "抵抗異常抗性:+" + effect.defense + "% 機率\r\n";
            if(effect.sharpEyeCritical) msg += "受到會心之眼爆擊機率:+" + effect.sharpEyeCritical + "% \r\n";
            if(effect.sharpEyeDamage) msg += "受到會心之眼爆擊傷害:+" + effect.sharpEyeDamage + "% \r\n";
            if(effect.cooldownprob) msg += "冷卻技能無冷卻機率:+" + effect.cooldownprob + "% 機率 \r\n";
            if(effect.watkimmuneprob) msg += "解除怪物傷害免疫:+" + (effect.watkimmuneprob / 10) + "% 機率\r\n";
            if(effect.expIncrease) msg += "經驗值:+" + effect.expIncrease + "% \r\n";
            if(effect.dropIncrease) msg += "掉寶率:+" + effect.dropIncrease + "% \r\n";
            if(effect.watk_normal) msg += "普通怪物額外增傷:+" + effect.watk_normal + "%\r\n";
            if(effect.watk_boss) msg += "BOSS怪物額外增傷:+" + effect.watk_boss + "%\r\n\r\n";

            var iter = details.entrySet().iterator();
            while (iter.hasNext()) {
                var entry = iter.next();
                var jobid = entry.getKey();
                var battleFieldDetailInfo = entry.getValue();
                effect = battleFieldDetailInfo.effect;
                if(effect == null) continue;
                msg += "(" + getMapping(jobid) + ")  ";
                msg += "角色名稱:" + battleFieldDetailInfo.name + "   ";
                msg += "角色等級:" + battleFieldDetailInfo.level + "\r\n";

                if(effect.str != 0) msg += "力量:+" + effect.str + " ";
                if(effect.dex != 0) msg += "敏捷:+" + effect.dex + " ";
                if(effect._int != 0) msg += "智力:+" + effect._int + " ";
                if(effect.luk != 0) msg += "幸運:+" + effect.luk;
                msg += "\r\n";

                if(effect.hp != 0) msg += "最大HP:+" + effect.hp + " ";
                if(effect.mp != 0) msg += "最大MP:+" + effect.mp;
                msg += "\r\n";

                if(effect.defense) msg += "抵抗異常抗性:+" + effect.defense + "% 機率\r\n";
                if(effect.sharpEyeCritical) msg += "受到會心之眼爆擊機率:+" + effect.sharpEyeCritical + "% \r\n";
                if(effect.sharpEyeDamage) msg += "受到會心之眼爆擊傷害:+" + effect.sharpEyeDamage + "% \r\n";
                if(effect.cooldownprob) msg += "冷卻技能無冷卻機率:+" + effect.cooldownprob + "% 機率\r\n";
                if(effect.watkimmuneprob) msg += "解除怪物傷害免疫:+" + (effect.watkimmuneprob / 10) + "% 機率\r\n";
                if(effect.expIncrease) msg += "經驗值:+" + effect.expIncrease + "% \r\n";
                if(effect.dropIncrease) msg += "掉寶率:+" + effect.dropIncrease + "% \r\n";
                if(effect.watk_normal) msg += "一般怪物傷害:+" + effect.watk_normal + "%\r\n";
                if(effect.watk_boss) msg += "BOSS怪物傷害:+" + effect.watk_boss + "%\r\n\r\n";
            }
            cm.sendOk(msg);
            cm.dispose();
            return;
        default:
            cm.dispose();
            return;
    }
}

function getMapping(jobid) {
    switch(jobid) {
        case 112:
            return "英雄";
        case 122:
            return "聖騎士";
        case 132:
            return "黑騎士";
        case 212:
            return "大魔島士(火、毒)";
        case 222:
            return "大魔島士(冰、雷)";
        case 232:
            return "主教";
        case 312:
            return "箭神";
        case 322:
            return "神射手";
        case 412:
            return "夜使者";
        case 422:
            return "暗影神偷";
        case 512:
            return "拳霸";
        case 522:
            return "槍神";
        case 1112:
            return "聖魂劍士";
        case 1212:
            return "烈焰巫師";
        case 1312:
            return "破風使者";
        case 1412:
            return "暗夜行者";
        case 1512:
            return "閃雷悍將";
        case 2112:
            return "狂狼勇士";
        case 900:
            return "GM";
    }
    return "未定義";
}