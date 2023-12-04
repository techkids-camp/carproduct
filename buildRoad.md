### @flyoutOnly true
### @hideIteration true
### @hideIteration true

# car-dealer

## ロボットに道をつくってもらおう！

プログラムをうまくつくったあと、みぎしたの![](https://raw.githubusercontent.com/camp-minecraft/TechkidsCampTutorial/master/images/playbutton.png)をおしたあと、tキーをおしてgoとrunをいれてプログラムをうごかしてみよう！

```ghost
player.onItemInteracted(DIAMOND_AXE, function () {
	road.makeroad()
    road.reset()
    road.makeLeftPaint()
    road.makeLigthPaint()
    road.makeMiddlePaint()
})
```

```template
player.onItemInteracted(DIAMOND_AXE, function () {

})
```
