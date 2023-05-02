radio.onReceivedNumber(function (receivedNumber) {
    a = 4 - receivedNumber
    basic.clearScreen()
})
input.onButtonPressed(Button.A, function () {
    if (x > 0) {
        x = x - 1
        radio.sendNumber(x)
        basic.clearScreen()
    }
})
input.onButtonPressed(Button.AB, function () {
    if (!(juega)) {
        radio.sendString("¿JUEGAS?")
    } else {
        if (a == x) {
            radio.sendString("GANO")
            juega = false
            basic.clearScreen()
            basic.showIcon(IconNames.Happy)
        }
    }
})
radio.onReceivedString(function (receivedString) {
    if (receivedString == "¿JUEGAS?") {
        reiniciar()
        radio.sendString("OK")
    }
    if (receivedString == "OK") {
        reiniciar()
    }
    if (receivedString == "GANO") {
        juega = false
        basic.clearScreen()
        basic.showIcon(IconNames.Sad)
    }
})
input.onButtonPressed(Button.B, function () {
    if (x < 4) {
        x = x + 1
        radio.sendNumber(x)
        basic.clearScreen()
    }
})
function reiniciar () {
    a = 0
    b = 0
    x = 4
    y = 4
    juega = true
    basic.clearScreen()
}
let y = 0
let b = 0
let x = 0
let a = 0
let juega = false
radio.setGroup(1)
juega = false
basic.forever(function () {
    if (juega) {
        led.plot(a, b)
        led.plot(x, y)
    }
})
