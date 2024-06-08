# bot4lucky
a bot for luckygames.io / luckygames.app
the strategy script must be coded in javascript, and not Lua script. (Dice, Balls)

# Videos: <br /> 
 <br />

# Info: <br />
Please favourite the repo in case you liked/used it. Thank you!

<b>Discord</b>: fisk_992 <br />
<b>Stake</b>: poky1084 <br />
<b>Telegram:</b>: @poky_1084


# Use: <br />

<b>functions:</b> `resetstats(), log('text'), start(), stop(), resetAll(), resetChart(), deleteLogs()`

!!the strategy must be in `dobet()` method, and `dobet()` must be declared as shown below!!
```javascript
nextbet = 0.00001 //in crypto format, not USD
chance = 98

dobet = function(){
 //strategy code
}

or:

function dobet(){
 //strategy code
}
```

<b>Balls:</b>
```javascript
game = "balls"
numbers = [0,1,2,3,4,5,6,7,8]
```

<b>Dice:</b>
```javascript
game = "dice"
chance = 49.5
nextbet = 0
bethigh = false
 ```



