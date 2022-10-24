let Tep = 80
let Pauza = Tep / 60
Pauza = 1 / Pauza
Pauza = Pauza / 2
Pauza = Pauza * 1000
basic.forever(function () {
    basic.showIcon(IconNames.Heart)
    basic.pause(Pauza)
    basic.showLeds(`
        . . . . .
        . # . # .
        . # # # .
        . . # . .
        . . . . .
        `)
    basic.pause(Pauza)
})
