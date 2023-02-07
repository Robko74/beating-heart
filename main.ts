input.onLogoEvent(TouchButtonEvent.Touched, function () {
    music.playMelody("C5 G B A F A C5 B ", 120)
})
input.onButtonPressed(Button.B, function () {
    for (let index = 0; index < 20; index++) {
        basic.pause(500)
        music.playTone(277, music.beat(BeatFraction.Whole))
        basic.showIcon(IconNames.SmallHeart)
        basic.pause(500)
        basic.showIcon(IconNames.Heart)
    }
})
