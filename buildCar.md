### @flyoutOnly true
### @hideIteration true
### @hideIteration true

# car-dealer

## ロボットに車をつくってもらおう！

プログラムをうまくつくったあと、みぎしたの![](https://raw.githubusercontent.com/camp-minecraft/TechkidsCampTutorial/master/images/playbutton.png)をおしたあと、tキーをおしてgoとrunをいれてプログラムをうごかしてみよう！

```ghost
player.onItemInteracted(DIAMOND_AXE, function () {
	custom.makeWheel()
    custom.makeDoor()
    custom.makeGlass()
    custom.makeUpBody(halfBlocks.SMOOTH_STONE)
    custom.makeBody(GRASS)
    custom.makeBottomBody(halfBlocks.SMOOTH_STONE)
})
```

```template
player.onItemInteracted(DIAMOND_AXE, function () {

})
```