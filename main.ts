let SettingsMax = 0
let strip: neopixel.Strip = null
let Setting = 0
SettingsMax = 3
strip = neopixel.create(DigitalPin.P0, 180, NeoPixelMode.RGB)
basic.showIcon(IconNames.Happy)
basic.pause(2000)
basic.clearScreen()
// strip.showRainbow(1, 360)
basic.forever(function () {
    input.onButtonPressed(Button.A, function () {
        if (Setting > 1) {
            Setting += -1
            basic.showNumber(Setting)
        } else {
            basic.showString("X")
        }
    })
input.onButtonPressed(Button.B, function () {
        if (Setting < SettingsMax) {
            Setting += 1
            basic.showNumber(Setting)
            basic.pause(2000)
            basic.clearScreen()
        } else {
            basic.showString("X")
            basic.pause(2000)
            basic.clearScreen()
        }
    })
input.onButtonPressed(Button.AB, function () {
        if (Setting == 1) {
            strip.showRainbow(1, 360)
            strip.show()
            strip.rotate(10)
            pause(10)
        }
        if (Setting == 2) {
            strip.showColor(neopixel.colors(NeoPixelColors.Red))
            strip.show()
        }
        if (Setting == 3) {
            strip.showColor(neopixel.colors(NeoPixelColors.Green))
            strip.show()
        }
    })
})
