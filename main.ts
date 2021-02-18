let time = 0
let strip = neopixel.create(DigitalPin.P7, 8, NeoPixelMode.RGB)
serial.redirectToUSB()
serial.setBaudRate(BaudRate.BaudRate115200)
let start = input.runningTime()
let newtime = 0
basic.forever(function () {
	
})
basic.forever(function () {
    time = Math.round((start - input.runningTime()) / 10)
    strip.showColor(neopixel.rgb(pins.map(
    pins.analogReadPin(AnalogPin.P3),
    0,
    1023,
    0,
    255
    ), time, 255 - time))
    pins.servoWritePin(AnalogPin.P5, pins.map(
    pins.analogReadPin(AnalogPin.P3),
    0,
    1023,
    -180,
    180
    ))
    pins.servoWritePin(AnalogPin.P6, pins.map(
    pins.analogReadPin(AnalogPin.P3),
    0,
    1023,
    -180,
    180
    ))
    pins.servoWritePin(AnalogPin.P13, pins.map(
    pins.analogReadPin(AnalogPin.P3),
    0,
    1023,
    0,
    180
    ))
    serial.writeNumber(pins.analogReadPin(AnalogPin.P3))
    serial.writeLine("")
})
