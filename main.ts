input.onGesture(Gesture.Shake, function () {
    if (randint(1, 2) == 1) {
        basic.showString("sim")
    } else {
        basic.showString("nao")
    }
    basic.showLeds(`
        . # # # .
        # . . . #
        . . . # .
        . . # . .
        . . # . .
        `)
    basic.pause(2000)
    basic.showIcon(IconNames.Diamond)
})
basic.showLeds(`
    . # # # .
    # . . . #
    . . . # .
    . . # . .
    . . # . .
    `)
basic.pause(2000)
basic.showIcon(IconNames.Diamond)
basic.forever(function () {
	
})
