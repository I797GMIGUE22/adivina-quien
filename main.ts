class Contador {
    numero: number
    constructor(initial: number = 0) {
        this.numero = initial
    }
    
    public move(): number {
        this.numero += 1
        return this.numero
    }
    
}

input.onButtonPressed(Button.B, function moveRight() {
    if (k.y() == 0 && k.x() == 4 || k.y() == 1 && k.x() == 4 || k.y() == 2 && k.x() == 4 || k.y() == 3 && k.x() == 4 || k.y() == 4 && k.x() == 4) {
        k.set(LedSpriteProperty.X, k.x() - 4)
    } else {
        k.move(1)
    }
    
})
input.onButtonPressed(Button.A, function moveLeft() {
    if (k.y() == 0 && k.x() == 0 || k.y() == 1 && k.x() == 0 || k.y() == 2 && k.x() == 0 || k.y() == 3 && k.x() == 0 || k.y() == 4 && k.x() == 0) {
        k.set(LedSpriteProperty.X, k.x() + 4)
    } else {
        k.move(-1)
    }
    
})
input.onButtonPressed(Button.AB, function moveDown() {
    if (k.y() == 4 && k.x() == 0 || k.y() == 4 && k.x() == 1 || k.y() == 4 && k.x() == 2 || k.y() == 4 && k.x() == 3 || k.y() == 4 && k.x() == 4) {
        k.set(LedSpriteProperty.Y, k.y() - 4)
    } else {
        k.change(LedSpriteProperty.Y, 1)
    }
    
})
input.onLogoEvent(TouchButtonEvent.Touched, function moveUp() {
    if (k.y() == 0 && k.x() == 0 || k.y() == 0 && k.x() == 1 || k.y() == 0 && k.x() == 2 || k.y() == 0 && k.x() == 3 || k.y() == 0 && k.x() == 4) {
        k.set(LedSpriteProperty.Y, k.y() + 4)
    } else {
        k.change(LedSpriteProperty.Y, -1)
    }
    
})
let k = game.createSprite(0, 0)
let point = game.createSprite(randint(1, 4), randint(1, 8))
let death = game.createSprite(randint(1, 4), randint(1, 8))
let counter = new Contador()
basic.forever(function on_forever() {
    function alert() {
        basic.showNumber(counter.move())
    }
    
    if (k.x() == point.x() && k.y() == point.y()) {
        alert()
        point.set(LedSpriteProperty.X, randint(1, 4))
        point.set(LedSpriteProperty.Y, randint(1, 8))
        k.set(LedSpriteProperty.X, 0)
        k.set(LedSpriteProperty.Y, 0)
    } else if (k.x() == death.x() && k.y() == death.y()) {
        game.setScore(counter.numero)
        game.gameOver()
    }
    
})
