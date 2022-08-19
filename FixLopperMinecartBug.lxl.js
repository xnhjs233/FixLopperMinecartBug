colorLog("red","刷物修复插件已启动");
mc.listen("onJoin",function(pl){
    if (jf){
        pl.tell("§4刷物品方法已被修复");
    }
})
mc.listen("onHopperSearchItem",function (pos, isMinecart) {
        if (isMinecart) {
            if (kzt){
                var pos1 = pos;
                colorLog("red","在" + pos1 + "发现疑似刷物品行为");
            }
            return false;
        }
})
function isMenu(player) {
    let cd = mc.newSimpleForm();
    cd.setTitle("防刷物插件菜单");
    cd.addButton("玩家进服提示选项");
    cd.addButton("控制台输出选项");
    player.sendForm(cd, (player, id) => {
        if (id != null) {
            switch (id) {
                case 0:
                    let cd = mc.newSimpleForm();
                    cd.setTitle("防刷物插件菜单");
                    cd.addButton("开启进服提示");
                    cd.addButton("关闭进服提示");
                    player.sendForm(cd, (player, id) => {
                        if (id != null) {
                            switch (id) {
                                case 0:
                                    jf = true;
                                    break;
                                case 1:
                                    jf = false;
                                    break;
                            }
                        }
                    }
                )
                case 1:
                    let cd1 = mc.newSimpleForm();
                    cd1.setTitle("防刷物插件菜单");
                    cd1.addButton("开启控制台提示");
                    cd1.addButton("关闭控制台提示");
                    player.sendForm(cd1, (player,id) => {
                        if (id != null) {
                            switch (id){
                                case 0:
                                    kzt = true;
                                    break;
                                case 1:
                                    kzt = false;
                                    break;
                                    }
                            }
                        }
                    )
                }
            }
        }
    )
}
mc.regPlayerCmd("fsw", "防刷物插件菜单", isMenu,1);
function jf(){};
function pos1(){};
function kzt(){};