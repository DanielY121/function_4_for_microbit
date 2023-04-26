input.onButtonPressed(Button.A, function () {
    click += -1
})
input.onButtonPressed(Button.AB, function () {
    basic.showNumber(randint(0, click))
})
input.onButtonPressed(Button.B, function () {
    click += 1
})
let click = 0
click = 0
basic.forever(function () {
    basic.showNumber(click)
})
