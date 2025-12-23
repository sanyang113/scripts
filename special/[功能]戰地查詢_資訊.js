load('nashorn:mozilla_compat.js');
importPackage(Packages.server.battlefield);

var status = -1;
var battleField;

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
            var msg = "請選擇查看的職業\r\n\r\n";
            battleField = BattleField.getInstance();
            msg += "#L112##b英雄#k\r\n";
            msg += "#L122##b聖騎士#k\r\n";
            msg += "#L132##b黑騎士#k\r\n";
            msg += "#L212##b大魔導士(火、毒)#k\r\n";
            msg += "#L222##b大魔導士(冰、雷)#k\r\n";
            msg += "#L232##b主教#k\r\n";
            msg += "#L312##b箭神#k\r\n";
            msg += "#L322##b神射手#k\r\n";
            msg += "#L412##b夜使者#k\r\n";
            msg += "#L422##b暗影神偷#k\r\n";
            msg += "#L512##b拳霸#k\r\n";
            msg += "#L522##b槍神#k\r\n";
            cm.sendNext(msg);
            break;
        case 1:
            var info = battleField.all[selection];
            if(info == null) {
                cm.sendOk("查無結果");
                cm.dispose();
                return;
            }
            var msg = "該職業查詢結果如下：\r\n\r\n";
            var iter = info.effectMap.entrySet().iterator();
            while (iter.hasNext()) {
                var entry = iter.next();
                var level = entry.getKey();
                var effect = entry.getValue();
                msg += "等級:" + level + "\r\n";
                if(effect.str != 0)msg += "力量:+" + effect.str + " ";
                if(effect.dex != 0)msg += "敏捷:+" + effect.dex + " ";
                if(effect._int != 0)msg += "智力:+" + effect._int + " ";
                if(effect.luk != 0)msg += "幸運:+" + effect.luk;
                msg += "\r\n";
                if(effect.hp != 0)msg += "最大HP:+" + effect.hp + " ";
                if(effect.mp != 0)msg += "最大MP:+" + effect.mp;
                msg += "\r\n";
                if(effect.defense != 0)msg += "全異常抗性:+" + effect.defense + "%\r\n";
                if(effect.sharpEyeCritical != 0)msg += "受到會心爆擊機率:+" + effect.sharpEyeCritical + "%\r\n";
                if(effect.sharpEyeDamage != 0)msg += "受到會心爆擊傷害:+" + effect.sharpEyeDamage + "%\r\n";
                if(effect.cooldownprob != 0)msg += "冷卻技能無冷卻機率:+" + effect.cooldownprob + "%\r\n";
                if(effect.watkimmuneprob != 0)msg += "解除怪物物理免疫:+" + effect.watkimmuneprob + "%\r\n";
                if(effect.matkimmuneprob != 0)msg += "解除怪物魔法免疫:+" + effect.matkimmuneprob + "%\r\n";
                if(effect.expIncrease != 0)msg += "經驗值:+" + effect.expIncrease + "%\r\n";
                if(effect.dropIncrease != 0)msg += "掉寶率:+" + effect.dropIncrease + "%\r\n";
                if(effect.watk_normal != 0)msg += "普通怪物額外增傷:+" + effect.watk_normal + "%\r\n";
                if(effect.watk_boss != 0)msg += "BOSS怪物額外增傷:+" + effect.watk_boss + "%\r\n\r\n";
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