namespace SpriteKind {
    export const dilf = SpriteKind.create()
}
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    music.playTone(988, music.beat(BeatFraction.Quarter))
    timer.after(100, function () {
        arrow = sprites.createProjectileFromSprite(assets.image`Right`, boyfriend, 50, 0)
    })
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.dilf, function (sprite, otherSprite) {
    info.changeScoreBy(-3)
})
controller.combos.attachCombo("bbaudda+b", function () {
    game.splash("reminder:", "This update is still a WIP and does not function properly")
    scene.setBackgroundImage(assets.image`train`)
    tiles.setCurrentTilemap(tilemap`picomap`)
    pico_follow = sprites.create(assets.image`micro`, SpriteKind.Food)
    pico = sprites.create(assets.image`go pico`, SpriteKind.Enemy)
    pico.follow(pico_follow, 70)
    info.startCountdown(120)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    music.playTone(740, music.beat(BeatFraction.Quarter))
    timer.after(100, function () {
        arrow = sprites.createProjectileFromSprite(assets.image`Left`, boyfriend, -50, 0)
    })
})
sprites.onOverlap(SpriteKind.dilf, SpriteKind.Projectile, function (sprite2, otherSprite2) {
    info.changeScoreBy(1)
    sprites.destroyAllSpritesOfKind(SpriteKind.Projectile)
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
info.onScore(100, function () {
    scene.centerCameraAt(0, 0)
    tiles.setCurrentTilemap(tilemap`level2`)
    sprites.destroyAllSpritesOfKind(SpriteKind.Player)
    mySprite2 = sprites.create(assets.image`penis`, SpriteKind.Food)
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
let pico: Sprite = null
let pico_follow: Sprite = null
let arrow: Sprite = null
let boyfriend: Sprite = null
tiles.setCurrentTilemap(tilemap`spawn`)
scene.setBackgroundImage(assets.image`open`)
pause(2000)
scene.setBackgroundImage(assets.image`newgrounds`)
pause(3000)
scene.setBackgroundImage(assets.image`open0`)
pause(300)
game.splash("Friday night funkin 2")
game.splash("Friday night funkin 2", "Don't take it seriously")
let mySprite = sprites.create(assets.image`asset3`, SpriteKind.Food)
mySprite.setPosition(84, 38)
animation.runImageAnimation(
mySprite,
assets.animation`myAnim`,
200,
true
)
let logo = sprites.create(assets.image`asset2`, SpriteKind.Food)
logo.setPosition(2, 15)
animation.runImageAnimation(
logo,
assets.animation`logo`,
150,
true
)
let press = sprites.create(assets.image`asset`, SpriteKind.Food)
press.setPosition(30, 101)
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
info.setLife(3)
boyfriend = sprites.create(assets.image`boyfriend`, SpriteKind.Player)
controller.moveSprite(boyfriend, 99, 98)
mySprite3.follow(boyfriend, 90)
scene.centerCameraAt(0, 0)
forever(function () {
    if (tiles.tileAtLocationEquals(tiles.getTileLocation(0, 0), assets.tile`otherthing`)) {
        sprites.destroyAllSpritesOfKind(SpriteKind.dilf)
        for (let index = 0; index < 10; index++) {
            pico_follow.setVelocity(randint(-100, 100), randint(-100, 100))
            pause(1000)
            pico.follow(pico_follow, 70)
            effects.clearParticles(pico_follow)
        }
        pico_follow.follow(boyfriend, 200)
        pico.follow(boyfriend, 200)
        pause(100)
        sprites.destroyAllSpritesOfKind(SpriteKind.Food)
        pico_follow = sprites.create(assets.image`micro`, SpriteKind.Food)
    }
})
forever(function () {
    if (tiles.tileAtLocationEquals(tiles.getTileLocation(0, 0), assets.tile`tile`)) {
        daddy = sprites.create(assets.image`alert`, SpriteKind.dilf)
        daddy.setFlag(SpriteFlag.Ghost, true)
        daddy.setPosition(randint(0, 160), randint(0, 120))
        pause(750)
        daddy.setImage(assets.image`daddy`)
        daddy.setFlag(SpriteFlag.Ghost, false)
        pause(1500)
        sprites.destroyAllSpritesOfKind(SpriteKind.dilf)
        pause(200)
    }
})
forever(function () {
    music.playSoundEffect(music.createSoundEffect(WaveShape.Noise, 891, 1825, 255, 0, 2000, SoundExpressionEffect.None, InterpolationCurve.Linear), SoundExpressionPlayMode.InBackground)
    music.playMelody("E G F C D E E E ", 120)
})
