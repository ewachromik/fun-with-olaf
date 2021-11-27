namespace SpriteKind {
    export const Evil = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Evil, function (sprite, otherSprite) {
    game.over(false, effects.blizzard)
})
function Change_Level (Level_Number: number) {
    if (Level_Number == 1) {
        tiles.setTilemap(tilemap`level1`)
        scene.setBackgroundColor(0)
        tiles.placeOnRandomTile(Olaf, assets.tile`myTile26`)
        for (let index = 0; index < 10; index++) {
            Fire = sprites.create(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . 5 . . . . . . . . 
                . . . . . . 5 5 . . . . . . . . 
                . . . . . . 5 5 5 . . . . . . . 
                . . . . . 5 5 5 5 5 5 . . . . . 
                . . . . . 5 5 5 5 5 5 . . . . . 
                . . . . 5 5 5 4 4 5 5 . . . . . 
                . . . . 5 5 4 4 4 5 5 5 . . . . 
                . . . 5 5 5 4 4 4 5 5 5 . . . . 
                . . . 5 5 4 4 4 4 4 5 5 . . . . 
                . . 5 5 5 4 4 2 4 4 5 5 5 . . . 
                . . 5 5 4 4 4 2 2 4 4 5 5 5 . . 
                . 5 5 5 4 4 2 2 2 4 4 4 5 5 . . 
                . 5 5 4 4 4 2 2 2 2 4 4 5 5 5 . 
                . 5 5 4 4 2 2 2 2 2 2 4 5 5 5 . 
                . 5 5 4 4 2 2 2 2 2 2 4 5 5 5 . 
                `, SpriteKind.Enemy)
            tiles.placeOnRandomTile(Fire, assets.tile`myTile34`)
            animation.runMovementAnimation(
            Fire,
            animation.animationPresets(animation.easeDown),
            5000,
            true
            )
        }
    } else if (Level_Number == 2) {
        tiles.setTilemap(tilemap`level2`)
        scene.setBackgroundColor(6)
        tiles.placeOnRandomTile(Olaf, assets.tile`myTile36`)
        for (let index = 0; index < 2; index++) {
            fire_ball = sprites.create(img`
                . . . . . . . . . . . . . . . . 
                . . . . 2 2 2 2 2 2 2 . . . . . 
                . . . 2 2 2 2 2 2 2 2 2 . . . . 
                . . 2 2 4 4 4 4 4 4 4 2 2 . . . 
                . 2 2 4 4 4 4 4 4 4 4 4 2 2 . . 
                . 2 2 4 4 4 4 4 4 4 4 4 2 2 . . 
                . 2 2 4 4 4 5 5 5 4 4 4 2 2 . . 
                . 2 2 4 4 4 5 5 5 4 4 4 2 2 . . 
                . 2 2 4 4 4 5 5 5 4 4 4 2 2 . . 
                . 2 2 4 4 4 4 4 4 4 4 4 2 2 . . 
                . 2 2 4 4 4 4 4 4 4 4 4 2 2 . . 
                . . 2 2 4 4 4 4 4 4 4 2 2 . . . 
                . . . 2 2 2 2 2 2 2 2 2 . . . . 
                . . . . 2 2 2 2 2 2 2 . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `, SpriteKind.Enemy)
            tiles.placeOnRandomTile(fire_ball, assets.tile`myTile39`)
            fire_ball.setBounceOnWall(true)
            animation.runMovementAnimation(
            fire_ball,
            animation.animationPresets(animation.easeLeft),
            5000,
            true
            )
        }
        for (let index = 0; index < 1; index++) {
            fire_ball = sprites.create(img`
                . . . . . . . . . . . . . . . . 
                . . . . 2 2 2 2 2 2 2 . . . . . 
                . . . 2 2 2 2 2 2 2 2 2 . . . . 
                . . 2 2 4 4 4 4 4 4 4 2 2 . . . 
                . 2 2 4 4 4 4 4 4 4 4 4 2 2 . . 
                . 2 2 4 4 4 4 4 4 4 4 4 2 2 . . 
                . 2 2 4 4 4 5 5 5 4 4 4 2 2 . . 
                . 2 2 4 4 4 5 5 5 4 4 4 2 2 . . 
                . 2 2 4 4 4 5 5 5 4 4 4 2 2 . . 
                . 2 2 4 4 4 4 4 4 4 4 4 2 2 . . 
                . 2 2 4 4 4 4 4 4 4 4 4 2 2 . . 
                . . 2 2 4 4 4 4 4 4 4 2 2 . . . 
                . . . 2 2 2 2 2 2 2 2 2 . . . . 
                . . . . 2 2 2 2 2 2 2 . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `, SpriteKind.Enemy)
            tiles.placeOnRandomTile(fire_ball, assets.tile`myTile38`)
            fire_ball.setBounceOnWall(true)
            animation.runMovementAnimation(
            fire_ball,
            animation.animationPresets(animation.easeRight),
            5000,
            true
            )
        }
        for (let index = 0; index < 3; index++) {
            fire_ball = sprites.create(img`
                . . . . . . . . . . . . . . . . 
                . . . . 2 2 2 2 2 2 2 . . . . . 
                . . . 2 2 2 2 2 2 2 2 2 . . . . 
                . . 2 2 4 4 4 4 4 4 4 2 2 . . . 
                . 2 2 4 4 4 4 4 4 4 4 4 2 2 . . 
                . 2 2 4 4 4 4 4 4 4 4 4 2 2 . . 
                . 2 2 4 4 4 5 5 5 4 4 4 2 2 . . 
                . 2 2 4 4 4 5 5 5 4 4 4 2 2 . . 
                . 2 2 4 4 4 5 5 5 4 4 4 2 2 . . 
                . 2 2 4 4 4 4 4 4 4 4 4 2 2 . . 
                . 2 2 4 4 4 4 4 4 4 4 4 2 2 . . 
                . . 2 2 4 4 4 4 4 4 4 2 2 . . . 
                . . . 2 2 2 2 2 2 2 2 2 . . . . 
                . . . . 2 2 2 2 2 2 2 . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `, SpriteKind.Enemy)
            tiles.placeOnRandomTile(fire_ball, assets.tile`myTile40`)
            fire_ball.setBounceOnWall(true)
            animation.runMovementAnimation(
            fire_ball,
            animation.animationPresets(animation.easeDown),
            5000,
            true
            )
        }
        for (let index = 0; index < 2; index++) {
            fire_ball = sprites.create(img`
                . . . . . . . . . . . . . . . . 
                . . . . 2 2 2 2 2 2 2 . . . . . 
                . . . 2 2 2 2 2 2 2 2 2 . . . . 
                . . 2 2 4 4 4 4 4 4 4 2 2 . . . 
                . 2 2 4 4 4 4 4 4 4 4 4 2 2 . . 
                . 2 2 4 4 4 4 4 4 4 4 4 2 2 . . 
                . 2 2 4 4 4 5 5 5 4 4 4 2 2 . . 
                . 2 2 4 4 4 5 5 5 4 4 4 2 2 . . 
                . 2 2 4 4 4 5 5 5 4 4 4 2 2 . . 
                . 2 2 4 4 4 4 4 4 4 4 4 2 2 . . 
                . 2 2 4 4 4 4 4 4 4 4 4 2 2 . . 
                . . 2 2 4 4 4 4 4 4 4 2 2 . . . 
                . . . 2 2 2 2 2 2 2 2 2 . . . . 
                . . . . 2 2 2 2 2 2 2 . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `, SpriteKind.Enemy)
            tiles.placeOnRandomTile(fire_ball, assets.tile`myTile41`)
            fire_ball.setBounceOnWall(true)
            animation.runMovementAnimation(
            fire_ball,
            animation.animationPresets(animation.easeUp),
            5000,
            true
            )
        }
    }
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile37`, function (sprite, location) {
    game.over(true, effects.hearts)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile30`, function (sprite, location) {
    Current_Level += 1
    Change_Level(Current_Level)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    game.over(false, effects.blizzard)
})
let fire_ball: Sprite = null
let Fire: Sprite = null
let Current_Level = 0
let Olaf: Sprite = null
Olaf = sprites.create(assets.image`Kee`, SpriteKind.Player)
controller.moveSprite(Olaf)
scene.cameraFollowSprite(Olaf)
Current_Level = 1
Change_Level(1)
forever(function () {
    music.playTone(294, music.beat(BeatFraction.Half))
    for (let index = 0; index < 3; index++) {
        music.playTone(330, music.beat(BeatFraction.Whole))
    }
    for (let index = 0; index < 3; index++) {
        music.playTone(330, music.beat(BeatFraction.Half))
    }
    music.playTone(294, music.beat(BeatFraction.Half))
    music.playTone(262, music.beat(BeatFraction.Half))
    music.playTone(262, music.beat(BeatFraction.Whole))
    for (let index = 0; index < 2; index++) {
        music.playTone(262, music.beat(BeatFraction.Half))
    }
    music.playTone(294, music.beat(BeatFraction.Half))
    music.playTone(294, music.beat(BeatFraction.Double))
    music.playTone(262, music.beat(BeatFraction.Half))
    music.playTone(247, music.beat(BeatFraction.Half))
    music.playTone(220, music.beat(BeatFraction.Double))
    music.playTone(220, music.beat(BeatFraction.Half))
    music.playTone(294, music.beat(BeatFraction.Half))
    for (let index = 0; index < 2; index++) {
        music.playTone(330, music.beat(BeatFraction.Half))
    }
    music.playTone(330, music.beat(BeatFraction.Whole))
    for (let index = 0; index < 2; index++) {
        music.playTone(392, music.beat(BeatFraction.Half))
    }
    music.playTone(330, music.beat(BeatFraction.Half))
    music.playTone(330, music.beat(BeatFraction.Double))
    music.playTone(262, music.beat(BeatFraction.Half))
    for (let index = 0; index < 2; index++) {
        music.playTone(294, music.beat(BeatFraction.Half))
    }
    music.playTone(330, music.beat(BeatFraction.Whole))
    music.playTone(294, music.beat(BeatFraction.Half))
    music.playTone(262, music.beat(BeatFraction.Half))
    music.playTone(294, music.beat(BeatFraction.Breve))
    for (let index = 0; index < 2; index++) {
        music.playTone(294, music.beat(BeatFraction.Whole))
    }
    for (let index = 0; index < 2; index++) {
        music.playTone(392, music.beat(BeatFraction.Whole))
    }
    for (let index = 0; index < 2; index++) {
        music.playTone(294, music.beat(BeatFraction.Whole))
    }
    for (let index = 0; index < 2; index++) {
        music.playTone(440, music.beat(BeatFraction.Whole))
    }
    for (let index = 0; index < 2; index++) {
        music.playTone(440, music.beat(BeatFraction.Half))
        music.playTone(392, music.beat(BeatFraction.Half))
        music.playTone(440, music.beat(BeatFraction.Whole))
    }
    music.playTone(494, music.beat(BeatFraction.Whole))
    music.playTone(523, music.beat(BeatFraction.Whole))
    for (let index = 0; index < 2; index++) {
        music.playTone(494, music.beat(BeatFraction.Whole))
    }
    for (let index = 0; index < 2; index++) {
        music.playTone(294, music.beat(BeatFraction.Whole))
    }
    for (let index = 0; index < 2; index++) {
        music.playTone(392, music.beat(BeatFraction.Whole))
    }
    for (let index = 0; index < 2; index++) {
        music.playTone(294, music.beat(BeatFraction.Whole))
    }
    music.playTone(440, music.beat(BeatFraction.Whole))
    music.playTone(440, music.beat(BeatFraction.Breve))
    music.playTone(392, music.beat(BeatFraction.Whole))
    music.playTone(440, music.beat(BeatFraction.Whole))
    music.playTone(494, music.beat(BeatFraction.Whole))
    music.playTone(523, music.beat(BeatFraction.Breve))
    music.playTone(440, music.beat(BeatFraction.Half))
    music.playTone(494, music.beat(BeatFraction.Half))
    music.playTone(523, music.beat(BeatFraction.Double))
    for (let index = 0; index < 2; index++) {
        music.playTone(392, music.beat(BeatFraction.Half))
    }
    music.playTone(587, music.beat(BeatFraction.Double))
    music.playTone(523, music.beat(BeatFraction.Whole))
    for (let index = 0; index < 2; index++) {
        music.playTone(440, music.beat(BeatFraction.Half))
    }
    for (let index = 0; index < 2; index++) {
        music.playTone(440, music.beat(BeatFraction.Whole))
    }
    music.playTone(494, music.beat(BeatFraction.Whole))
    music.playTone(523, music.beat(BeatFraction.Double))
    music.playTone(440, music.beat(BeatFraction.Half))
    music.playTone(494, music.beat(BeatFraction.Half))
    music.playTone(523, music.beat(BeatFraction.Double))
    music.playTone(392, music.beat(BeatFraction.Half))
    music.playTone(659, music.beat(BeatFraction.Half))
    music.playTone(587, music.beat(BeatFraction.Double))
    music.playTone(523, music.beat(BeatFraction.Half))
    music.playTone(587, music.beat(BeatFraction.Half))
    for (let index = 0; index < 2; index++) {
        music.playTone(659, music.beat(BeatFraction.Whole))
    }
    music.playTone(698, music.beat(BeatFraction.Half))
    music.playTone(659, music.beat(BeatFraction.Half))
    music.playTone(587, music.beat(BeatFraction.Half))
    music.playTone(523, music.beat(BeatFraction.Half))
    music.playTone(587, music.beat(BeatFraction.Whole))
    music.playTone(523, music.beat(BeatFraction.Double))
    music.playTone(784, music.beat(BeatFraction.Double))
    music.playTone(659, music.beat(BeatFraction.Whole))
    music.playTone(587, music.beat(BeatFraction.Double))
    for (let index = 0; index < 2; index++) {
        music.playTone(523, music.beat(BeatFraction.Whole))
    }
    music.playTone(784, music.beat(BeatFraction.Double))
    music.playTone(659, music.beat(BeatFraction.Whole))
    music.playTone(523, music.beat(BeatFraction.Double))
    for (let index = 0; index < 2; index++) {
        music.playTone(523, music.beat(BeatFraction.Half))
    }
    music.playTone(494, music.beat(BeatFraction.Double))
    music.playTone(392, music.beat(BeatFraction.Half))
    music.playTone(392, music.beat(BeatFraction.Double))
    for (let index = 0; index < 2; index++) {
        music.playTone(349, music.beat(BeatFraction.Whole))
    }
    for (let index = 0; index < 2; index++) {
        music.playTone(349, music.beat(BeatFraction.Half))
        music.playTone(330, music.beat(BeatFraction.Half))
    }
    music.playTone(349, music.beat(BeatFraction.Whole))
    music.playTone(349, music.beat(BeatFraction.Half))
    music.playTone(330, music.beat(BeatFraction.Half))
    music.playTone(262, music.beat(BeatFraction.Breve))
})
