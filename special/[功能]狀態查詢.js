load('nashorn:mozilla_compat.js');
importPackage(Packages.client);
importPackage(Packages.client.collectitem);
importPackage(Packages.server.battlefield);

var status = -1;

var abilityTemplate = {
    ability:0,
    str:0,
    dex:0,
    _int:0,
    luk:0,
    hp:0,
    mp:0,
    defense:0,
    cooldownprob:0,
    watkimmuneprob:0,
    sharpEyeCritical:0,
    sharpEyeDamage:0,
    expRate:0,
    dropRate:0,
    watk_normal:0,
    matk_normal:0,
    watk_boss:0,
    matk_boss:0
}

function start() {
    return action(1,0,0);
}

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
            var msg = "以下是您的所有的加總能力(不包含裝備)\r\n\r\n";
        
            var damageskin = cloneAbilityStruct();
            var chair = cloneAbilityStruct();
            var collect = cloneAbilityStruct();
            var battle = cloneAbilityStruct();

            damageskin.ability = AbilityDamageSkin.calculate(cm.getPlayer().getClient(), AbilityDamageSkin.AbilityEnum.能力值);
            damageskin.expRate = AbilityDamageSkin.calculate(cm.getPlayer().getClient(), AbilityDamageSkin.AbilityEnum.經驗值);
            damageskin.dropRate = AbilityDamageSkin.calculate(cm.getPlayer().getClient(), AbilityDamageSkin.AbilityEnum.掉落);
            damageskin.watk_normal = AbilityDamageSkin.calculate(cm.getPlayer().getClient(), AbilityDamageSkin.AbilityEnum.物攻普怪);
            damageskin.matk_normal = AbilityDamageSkin.calculate(cm.getPlayer().getClient(), AbilityDamageSkin.AbilityEnum.魔攻普怪);
            damageskin.watk_boss = AbilityDamageSkin.calculate(cm.getPlayer().getClient(), AbilityDamageSkin.AbilityEnum.物攻王);
            damageskin.matk_boss = AbilityDamageSkin.calculate(cm.getPlayer().getClient(), AbilityDamageSkin.AbilityEnum.魔攻王);
            damageskin.defense = AbilityDamageSkin.calculate(cm.getPlayer().getClient(), AbilityDamageSkin.AbilityEnum.抗性);
            damageskin.cooldownprob = AbilityDamageSkin.calculate(cm.getPlayer().getClient(), AbilityDamageSkin.AbilityEnum.無冷卻);
            damageskin.watkimmuneprob = AbilityDamageSkin.calculate(cm.getPlayer().getClient(), AbilityDamageSkin.AbilityEnum.攻擊免疫);
            damageskin.sharpEyeCritical = AbilityDamageSkin.calculate(cm.getPlayer().getClient(), AbilityDamageSkin.AbilityEnum.會心爆率);
            damageskin.sharpEyeDamage = AbilityDamageSkin.calculate(cm.getPlayer().getClient(), AbilityDamageSkin.AbilityEnum.會心爆傷);

            for(var i = 0; i < 4; i++) {
                chair.ability += AbilityChair.calculate(i, cm.getPlayer().getClient(), AbilityChair.AbilityChairEnum.能力值);
                chair.expRate += AbilityChair.calculate(i, cm.getPlayer().getClient(), AbilityChair.AbilityChairEnum.經驗值);
                chair.dropRate += AbilityChair.calculate(i, cm.getPlayer().getClient(), AbilityChair.AbilityChairEnum.掉落);
                chair.watk_normal += AbilityChair.calculate(i, cm.getPlayer().getClient(), AbilityChair.AbilityChairEnum.物攻普怪);
                chair.matk_normal += AbilityChair.calculate(i, cm.getPlayer().getClient(), AbilityChair.AbilityChairEnum.魔攻普怪);
                chair.watk_boss += AbilityChair.calculate(i, cm.getPlayer().getClient(), AbilityChair.AbilityChairEnum.物攻王);
                chair.matk_boss += AbilityChair.calculate(i, cm.getPlayer().getClient(), AbilityChair.AbilityChairEnum.魔攻王);
            }

            collect.ability = CollectAbility.getCollectAbility(cm.getPlayer());

            var battleField = BattleField.getInstance().getAccounBattleFieldEffect(cm.getPlayer());
            battle.str = battleField.str;
            battle.dex = battleField.dex;
            battle._int = battleField._int;
            battle.luk = battleField.luk;
            battle.hp = battleField.hp;
            battle.mp = battleField.mp;
            battle.defense = battleField.defense;
            battle.cooldownprob = battleField.cooldownprob;
            battle.watkimmuneprob = battleField.watkimmuneprob;
            battle.sharpEyeCritical = battleField.sharpEyeCritical;
            battle.sharpEyeDamage = battleField.sharpEyeDamage;
            battle.expRate = battleField.expIncrease;
            battle.dropRate = battleField.dropIncrease;
            battle.watk_normal = battleField.watk_normal;
            battle.matk_normal = battleField.matk_normal;
            battle.watk_boss = battleField.watk_boss;
            battle.matk_boss = battleField.matk_boss;

            msg += "全部系統獲得:\r\n";
            msg += "力量:+" + (battle.str + damageskin.ability + chair.ability + collect.ability) + "\r\n";
            msg += "敏捷:+" + (battle.dex + damageskin.ability + chair.ability + collect.ability) + "\r\n";
            msg += "智力:+" + (battle._int + damageskin.ability + chair.ability + collect.ability) + "\r\n";
            msg += "幸運:+" + (battle.luk + damageskin.ability + chair.ability + collect.ability) + "\r\n";
            msg += "最大HP:+" + battle.hp + "\r\n";
            msg += "最大MP:+" + battle.mp + "\r\n";
            msg += "抵抗異常抗性:+" + (battle.defense + damageskin.defense) + "% 機率\r\n";
            msg += "CD技能無冷卻:+" + (battle.cooldownprob + damageskin.cooldownprob) + "% 機率\r\n";
            msg += "解除物理/魔法免疫:+" + (battle.watkimmuneprob + damageskin.watkimmuneprob)/10 + "% 機率\r\n";
            msg += "受到會心之眼爆擊機率:+" + (battle.sharpEyeCritical + damageskin.sharpEyeCritical) + "% \r\n";
            msg += "受到會心之眼爆擊傷害:+" +(battle.sharpEyeDamage + damageskin.sharpEyeDamage) + "% \r\n";
            msg += "經驗值:+" + (battle.expRate + damageskin.expRate + chair.expRate + collect.expRate) + "% \r\n";
            msg += "掉寶率:+" + (battle.dropRate + damageskin.dropRate + chair.dropRate + collect.dropRate) + "% \r\n";
            msg += "物攻傷害(普怪):+" + (battle.watk_normal + damageskin.watk_normal + chair.watk_normal + collect.watk_normal) + "% \r\n";
            msg += "魔攻傷害(普怪):+" + (battle.matk_normal + damageskin.matk_normal + chair.matk_normal + collect.matk_normal) + "% \r\n";
            msg += "物攻傷害(BOSS):+" + (battle.watk_boss + damageskin.watk_boss + chair.watk_boss + collect.watk_boss) + "% \r\n";
            msg += "魔攻傷害(BOSS):+" + (battle.matk_boss + damageskin.matk_boss + chair.matk_boss + collect.matk_boss) + "% \r\n\r\n";

            msg += "透過傷害字型獲得:\r\n";
            msg += "全能力值:+" + damageskin.ability + "\r\n";
            msg += "經驗值:+" + damageskin.expRate + "% \r\n";
            msg += "掉寶率:+" + damageskin.dropRate + "% \r\n";
            msg += "物攻傷害(普怪):+" + damageskin.watk_normal + "% \r\n";
            msg += "魔攻傷害(普怪):+" + damageskin.matk_normal + "% \r\n";
            msg += "物攻傷害(BOSS):+" + damageskin.watk_boss + "% \r\n";
            msg += "魔攻傷害(BOSS):+" + damageskin.matk_boss + "% \r\n";
            msg += "抵抗異常抗性:+" + damageskin.defense + "% 機率\r\n";
            msg += "CD技能無冷卻:+" + damageskin.cooldownprob + "% 機率\r\n";
            msg += "解除物理/魔法免疫:+" + damageskin.watkimmuneprob/10 + "% 機率\r\n";
            msg += "受到會心之眼爆擊機率:+" + damageskin.sharpEyeCritical + "% \r\n";
            msg += "受到會心之眼爆擊傷害:+" + damageskin.sharpEyeDamage + "% \r\n\r\n";

            msg += "透過椅子獲得:\r\n";
            msg += "全能力值:+" + chair.ability + "\r\n";
            msg += "經驗值:+" + chair.expRate + "% \r\n";
            msg += "掉寶率:+" + chair.dropRate + "% \r\n";
            msg += "物攻傷害(普怪):+" + chair.watk_normal + "% \r\n";
            msg += "魔攻傷害(普怪):+" + chair.matk_normal + "% \r\n";
            msg += "物攻傷害(BOSS):+" + chair.watk_boss + "% \r\n";
            msg += "魔攻傷害(BOSS):+" + chair.matk_boss + "% \r\n\r\n";

            msg += "透過蒐藏冊獲得:\r\n";
            msg += "全能力值:+" + collect.ability + "\r\n\r\n";

            msg += "透過戰地系統獲得:\r\n";
            msg += "力量:+" + battle.str + "\r\n";
            msg += "敏捷:+" + battle.dex + "\r\n";
            msg += "智力:+" + battle._int + "\r\n";
            msg += "幸運:+" + battle.luk + "\r\n";
            msg += "最大HP:+" + battle.hp + "\r\n";
            msg += "最大MP:+" + battle.mp + "\r\n";
            msg += "抵抗異常抗性:+" + battle.defense + "% 機率\r\n";
            msg += "CD技能無冷卻:+" + battle.cooldownprob + "% 機率\r\n";
            msg += "解除物理/魔法免疫:+" + battle.watkimmuneprob/10 + "% 機率\r\n";
            msg += "受到會心之眼爆擊機率:+" + battle.sharpEyeCritical + "% \r\n";
            msg += "受到會心之眼爆擊傷害:+" + battle.sharpEyeDamage + "% \r\n";
            msg += "經驗值:+" + battle.expRate + "% \r\n";
            msg += "掉寶率:+" + battle.dropRate + "% \r\n";
            msg += "物攻傷害(普怪):+" + battle.watk_normal + "% \r\n";
            msg += "魔攻傷害(普怪):+" + battle.matk_normal + "% \r\n";
            msg += "物攻傷害(BOSS):+" + battle.watk_boss + "% \r\n";
            msg += "魔攻傷害(BOSS):+" + battle.matk_boss + "% \r\n\r\n";

            cm.sendOk(msg);
            cm.dispose();
            return;
        default:
            cm.dispose();
            return;
    }

    function cloneAbilityStruct() {
        return JSON.parse(JSON.stringify(abilityTemplate));
    }
}
