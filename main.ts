input.onButtonPressed(Button.A, function () {
    Tæller += -1
    basic.showNumber(Tæller)
})
input.onButtonPressed(Button.B, function () {
    Tæller += 1
    basic.showNumber(Tæller)
})
let Tæller = 0
Tæller = 9
basic.forever(function () {
    basic.pause(6000)
    Tæller += -1
})
basic.forever(function () {
    basic.showNumber(Tæller)
    basic.pause(5000)
    for (let index = 0; index < 4; index++) {
        basic.showLeds(`
            . . # . .
            . . # . .
            . # # # .
            # # # # #
            . . # . .
            `)
        basic.pause(200)
        basic.showLeds(`
            . . . . .
            . . # . .
            . # # # .
            # # # # #
            . . # . .
            `)
        basic.pause(200)
    }
})
