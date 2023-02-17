joystickbit.initJoystickBit()
radio.setGroup(1)
basic.forever(function () {
    if (joystickbit.getRockerValue(joystickbit.rockerType.X) < 200) {
        radio.sendNumber(4)
    } else if (joystickbit.getRockerValue(joystickbit.rockerType.X) > 800) {
        radio.sendNumber(3)
    } else if (joystickbit.getRockerValue(joystickbit.rockerType.Y) < 200) {
        radio.sendNumber(2)
    } else if (joystickbit.getRockerValue(joystickbit.rockerType.Y) > 800) {
        radio.sendNumber(1)
    } else if (joystickbit.getButton(joystickbit.JoystickBitPin.P12)) {
        radio.sendNumber(5)
    } else if (joystickbit.getButton(joystickbit.JoystickBitPin.P13)) {
        radio.sendNumber(6)
    } else if (!(joystickbit.getButton(joystickbit.JoystickBitPin.P13))) {
        radio.sendNumber(0)
    } else if (!(joystickbit.getButton(joystickbit.JoystickBitPin.P12))) {
        radio.sendNumber(0)
    } else {
        radio.sendNumber(0)
    }
})
