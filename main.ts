namespace SpriteKind {
    export const dilf = SpriteKind.create()
}
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    music.playTone(988, music.beat(BeatFraction.Double))
    timer.after(2, function () {
        arrow = sprites.createProjectileFromSprite(assets.image`Right`, boyfriend, 50, 0)
    })
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.dilf, function (sprite, otherSprite) {
    info.changeScoreBy(-27)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    music.playTone(740, music.beat(BeatFraction.Whole))
    timer.after(1111, function () {
        arrow = sprites.createProjectileFromSprite(assets.image`Left`, boyfriend, -50, 0)
    })
})
controller.combos.attachCombo("a+b", function () {
    boyfriend.sayText("hey guys, it's me, boyfriend!!!!", 5000, false)
    timer.after(5000, function () {
        boyfriend.sayText("from friday night funkin!!!", 5000, false)
        timer.after(5000, function () {
            boyfriend.sayText("bo pee baa!!!!", 5000, false)
            timer.after(5000, function () {
                boyfriend.sayText("today i'll be teaching you the rules!!!!", 5000, false)
                timer.after(5000, function () {
                    boyfriend.sayText("press A or B to shoot a note...", 5000, false)
                    timer.after(5000, function () {
                        boyfriend.sayText("...to kill my girlfriends stupid ugly virgin dad!!!!", 5000, false)
                        timer.after(5000, function () {
                            boyfriend.sayText("dont touch the dad!!!", 5000, false)
                            timer.after(5000, function () {
                                boyfriend.sayText("he will hgurt me!!!", 5000, false)
                                timer.after(5000, function () {
                                    boyfriend.sayText("ouch!!!!!", 5000, false)
                                    timer.after(5000, function () {
                                        boyfriend.sayText("says a slur", 100, false)
                                        timer.after(100, function () {
                                            boyfriend.sayText("get 100 points to win!!!!!!", 5000, false)
                                            timer.after(5000, function () {
                                                boyfriend.sayText("and get a special sex scene with my gf :smirk:", 5000, false)
                                                timer.after(5000, function () {
                                                    boyfriend.sayText("yippee!!!!!!", 5000, false)
                                                })
                                            })
                                        })
                                    })
                                })
                            })
                        })
                    })
                })
            })
        })
    })
})
sprites.onOverlap(SpriteKind.dilf, SpriteKind.Projectile, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    sprites.destroyAllSpritesOfKind(SpriteKind.Projectile)
})
info.onScore(100, function () {
    scene.centerCameraAt(0, 0)
    tiles.setCurrentTilemap(tilemap`level5`)
    sprites.destroyAllSpritesOfKind(SpriteKind.Player)
    mySprite2 = sprites.create(assets.image`boyfriend`, SpriteKind.Food)
    sex = sprites.create(assets.image`penis`, SpriteKind.Food)
    scene.cameraFollowSprite(null)
    mySprite2.setPosition(73, 48)
    sex.setPosition(73, 54)
    animation.runImageAnimation(
    mySprite2,
    assets.animation`sex 1`,
    100,
    true
    )
    mySprite2.sayText("you win!!! now we have sex!!!!!")
})
let daddy: Sprite = null
let sex: Sprite = null
let mySprite2: Sprite = null
let arrow: Sprite = null
let boyfriend: Sprite = null
tiles.setCurrentTilemap(tilemap`spawn`)
scene.setBackgroundImage(assets.image`open`)
pause(2000)
scene.setBackgroundImage(assets.image`newgrounds`)
pause(3000)
scene.setBackgroundImage(assets.image`open0`)
pause(300)
game.splash("steve jobs")
game.splash("steve jobs", "died of ligma")
let mySprite = sprites.create(assets.image`asset`, SpriteKind.Food)
mySprite.setPosition(103, 53)
animation.runImageAnimation(
mySprite,
assets.animation`myAnim`,
200,
true
)
let logo = sprites.create(assets.image`asset2`, SpriteKind.Food)
logo.setPosition(24, 33)
animation.runImageAnimation(
logo,
assets.animation`logo`,
150,
true
)
let press = sprites.create(assets.image`asset3`, SpriteKind.Food)
press.setPosition(34, 107)
animation.runImageAnimation(
press,
assets.animation`startr`,
200,
true
)
scene.setBackgroundImage(assets.image`title`)
pause(5000)
animation.stopAnimation(animation.AnimationTypes.All, logo)
animation.stopAnimation(animation.AnimationTypes.All, press)
animation.stopAnimation(animation.AnimationTypes.All, mySprite)
mySprite.destroy(effects.confetti, 1000)
logo.destroy(effects.spray, 500)
press.destroy(effects.fire, 5000)
scene.setBackgroundImage(assets.image`stagr`)
let mySprite3 = sprites.create(assets.image`micro`, SpriteKind.Player)
scene.cameraFollowSprite(mySprite3)
info.setLife(3)
boyfriend = sprites.create(assets.image`boyfriend`, SpriteKind.Player)
controller.moveSprite(boyfriend, 99, 98)
boyfriend.setPosition(4, 20)
mySprite3.follow(boyfriend, 90)
forever(function () {
    music.playSoundEffect(music.createSoundEffect(WaveShape.Noise, 891, 1825, 255, 0, 2000, SoundExpressionEffect.None, InterpolationCurve.Linear), SoundExpressionPlayMode.InBackground)
    music.playMelody("E G F C D E E E ", 120)
})
forever(function () {
    daddy = sprites.create(assets.image`daddy`, SpriteKind.dilf)
    tiles.placeOnRandomTile(daddy, assets.tile`tile`)
    pause(2000)
    sprites.destroyAllSpritesOfKind(SpriteKind.dilf)
})
