let luz = 0
servos.P2.setAngle(0)
basic.forever(function () {
    luz = pins.analogReadPin(AnalogPin.P0)
    if (luz < 62) {
        servos.P2.setAngle(90)
        basic.pause(20)
    } else {
        servos.P2.setAngle(0)
        basic.pause(20)
    }
})
