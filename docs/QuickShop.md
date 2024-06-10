---
sidebar_position: 13
---
# QuickShop
天际服所使用的是由 Ghost-chu 主要开发维护的 [QuickShop-Hikari](https://modrinth.com/plugin/quickshop-hikari)  
### 普通玩家命令列表
```yaml
QuickShop 帮助 在服务器中输入 /qs 即可查看
/qs about - 显示QuickShop信息
/qs amount - 设置物品数量(在有聊天问题时有用)
/qs benefit - 设置商店所有者和其他玩家之间的利益分配
/qs buy - 切换到 收购 模式
/qs create - 在目标箱子创建商店
/qs currency - 设置或移除该商店的货币类型设置
/qs discord - 管理QuickShop的Discord设置
/qs fetchmessage - 获取未读的商店交易日志
/qs find - 在附近寻找具有指定物品名称的商店
/qs help - 显示QuickShop帮助
/qs history - 查看商店的历史交易记录
/qs item - 改变商店物品
/qs list - 列出自己或其他玩家拥有的所有商店
/qs name - 将商店命名为特定名称
/qs permission - 商店权限管理
/qs price - 修改 收购/出售 的价格
/qs remove - 删除您正看向的商店
/qs sell - 切换到 出售 模式
/qs sign - 更改商店的告示牌类型
/qs staff - 管理商店助手
/qs suggestprice - 根据其他商店的情况, 为商店提出建议价格
/qs toggledisplay - 切换商店是否显示悬浮物
/qs transferall - 将某人的所有商店转移给其他人
/qs transferownership - 将正在看向的商店转让给其他玩家
```
### 如何创建一个商店?
主手中拿着你想要交易的物品,左键容器方块(箱子或者是木桶)后按照提示输入价格就OK了
![](_images/shopinfo.png)  
不知道该商店交易的是什么物品时，推荐点击`[物品预览]`
### 如何查看商店交易记录?想查看谁在我的商店购买次数最多
如果您有指定权限，右键打开商店的控制面板，点击预览可以查询当前商店的交易记录历史  
图例中，为输入`/qs history owned`后的查询结果，查询当前服务器上商店所有者为您的商店交易记录  
![](_images/shophistory.png)
### 如何让其它玩家也可以打开我的商店/帮助我的商店补货
可以输入`/qs staff add 玩家id`  
例如`/qs staff add Karma`就是在当前商店给予助手权限  
