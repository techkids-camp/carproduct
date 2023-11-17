### @flyoutOnly true
### @hideIteration true
### @hideIteration true

# car-dealer

## ロボットに道路をつくってもらおう！

プログラムをうまくつくったあと、みぎしたの![](https://raw.githubusercontent.com/camp-minecraft/TechkidsCampTutorial/master/images/playbutton.png)をおしたあと、tキーをおしてgoとrunをいれてプログラムをうごかしてみよう！

```ghost
player.onItemInteracted(DIAMOND_AXE, function () {
    road.makeroad()
    road.reset()
    road.makeLeftPaint(paintblocks.YELLOW_CARPET)
    road.makeLigthPaint(paintblocks.YELLOW_CARPET)
    road.makeMiddlePaint(paintblocks.YELLOW_CARPET)
})
```