input.onButtonPressed(Button.A, function () {
    click += -1
})
input.onGesture(Gesture.Shake, function () {
    click = 0
})
input.onButtonPressed(Button.AB, function () {
    basic.showNumber(randint(0, click))
    basic.pause(3000)
})
input.onButtonPressed(Button.B, function () {
    click += 1
})
let click = 0
click = 0
basic.forever(function () {
    basic.showNumber(click)
})
