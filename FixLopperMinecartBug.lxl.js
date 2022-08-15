colorLog("red","刷物修复插件已启动")
mc.listen("onJoin",function(pl){
    pl.tell('§4刷物品方法已被修复')
    mc.listen("onHopperSearchItem",function(pos,isMinecart){
        if (isMinecart){
            colorLog("red",'在'+ pos.dim + '坐标' + pos.x + ',' + pos.y + ',' + pos.z + '发现疑似刷物品行为');
            return false
        }
})})