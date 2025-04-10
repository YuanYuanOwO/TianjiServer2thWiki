# 查询系统

>[!TIP]
>
>如果你的建筑/物品被人恶意破坏拿取
>可以使用这里的指令进行查询
>

## /co i 指令

![coi](/images/coi.png)
在开启查询模式后:
- 当你**左键任意方块**的时候，可以查询该方块被谁所放置
- 当你**右键箱子或木桶等容器方块**的时候，会为显示该方块的物品变更记录

## /co lookup 指令

![lookup](/images/lookup.png)

如果你想查询`Daylight_Yuan`在50分钟内都做了些什么

可以输入`/co lookup u:Daylight_Yuan t:50m`

这里会显示`Daylight_Yuan`50分钟内的所有操作

如果你想查询 `Daylight_Yuan` 50分钟内从容器方块中的操作记录

输入指令`/co lookup u:Daylight_Yuan t:50m a:container`

### 可用参数

| 参数 | 介绍 |
| :---: | :---: |
| `u:<user>`  | 查询玩家 |
| `t:<time>`  | 查询时间 |
| `r:<radius>`| 指定搜索范围的半径 |
| `a:<action>`| 将查询限制为特定操作 |
| `i:<include>`| 在查询中包含特定的区块/实体 |
| `e:<exclude>`| 从查询中排除区块/实体|

## /co action 指令

### 可用参数

| Action | 介绍 |
| --- | --- |
| `a:block` | 方块放置/破坏 |
| `a:+block` | 放置方块 |
| `a:-block` | 破坏方块 |
| `a:chat` | 聊天中发送的信息 |
| `a:click` | 玩家互动 |
| `a:command` | 使用的指令 |
| `a:container` | 从容器方块中取出或放入物品 |
| `a:+container` | 放入容器方块的物品 |
| `a:-container` | 取出容器方块的物品 |
| `a:inventory` | 放入或取出背包中的物品 |
| `a:+inventory` | 放入背包的物品 |
| `a:-inventory` | 取出背包的物品 |
| `a:item` | 玩家掉落、投掷、拾取、存放或收回的物品 |
| `a:+item` | 玩家拾取或收回的物品 |
| `a:-item` | 玩家掉落、投掷或存放的物品 |
| `a:kill` | 被杀死的怪物/动物|
| `a:session` | 玩家登录或登出 |
| `a:+session` | 玩家登录 |
| `a:-session` | 玩家登出 |
| `a:sign` | 在牌子上所写的信息 |
| `a:username` | 玩家用户名改变 |

## /co near 指令

输入指令`/co near`可以查询5格内所有的操作变化

![conear](/images/conear.png)

如果出现 `#chicken 击杀 #chicken` 等类似情况,是生物被挤压而死