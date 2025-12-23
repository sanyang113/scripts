var status = -1

function action(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else {
        cm.dispose();
        return;
    }

    switch (status) {
        case 0:
            var msg = "若您有不想要掉落的物品，可以透過設定清單來進行排除物品的掉落";
            msg += "\r\n#r#e※BOSS不受到掉落物排除影響唷！！#k#n\r\n";
            msg += "#b#L1#查看或移除掉落物排除清單#l\\n#L2#新增物品到掉落物排除清單#l\\n#L3#清空掉落物清單#l";
            cm.sendOk(msg)
            break
        case 1:
            switch (selection) {
                case 1:
                    var msg = '這是目前不會掉落的物品(點擊可移除): \\n#b'
                    cm.sendSimple(msg + cm.getExcludedDropItemList())
                    status = 100
                    break
                case 2:
                    cm.sendGetText('請輸入掉落物')
                    status = 200
                    break
                case 3:
                    cm.removeAllFromExcludedDropList()
                    cm.sendOk("清單已清除")
                    cm.dispose()
                    break
            }
            break

        // -------------------查看及移除----------------------------
        case 101:
            if (selection == -1) {
                cm.dispose()
                return
            }
            cm.removeFromExcludedDropList(selection)
            var msg = '#v' + selection + '# #z' + selection + '# 已移除'
            cm.sendOk(msg)
            cm.dispose()
            break

        // -------------------新增----------------------------
        case 201:
            list = cm.searchDataRestrict("1", cm.getText())
            cm.sendOk(list);
            if (list == "搜尋不到此道具" || cm.getText() == "") {
                cm.dispose()
                return
            }
            break;
        case 202:
            cm.addExcludedDropItem(selection)
            cm.sendOk('#v' + selection + '# #z' + selection + '# 添加成功')
            cm.dispose()
            return

        default:
            cm.sendOk('有東西出問題了')
            cm.dispose()
    }
}