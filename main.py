class Contador():
    def __init__(self, initial = 0):
        self.numero = initial
    def move(self):
        self.numero += 1
        return self.numero

def moveRight():
    if (k.y() == 0 and k.x() == 4 or k.y() == 1 and k.x() == 4 or k.y() == 2 and k.x() == 4 or k.y() == 3 and k.x() == 4 or k.y() == 4 and k.x() == 4):
        k.set(LedSpriteProperty.X, k.x() - 4)
    else:
        k.move(1)
input.onButtonPressed(Button.B, moveRight)

def moveLeft():
    if (k.y() == 0 and k.x() == 0 or k.y() == 1 and k.x() == 0 or k.y() == 2 and k.x() == 0 or k.y() == 3 and k.x() == 0 or k.y() == 4 and k.x() == 0):
        k.set(LedSpriteProperty.X, k.x() + 4)
    else:
        k.move(-1)
input.on_button_pressed(Button.A, moveLeft)

def moveDown():
    if (k.y() == 4 and k.x() == 0 or k.y() == 4 and k.x() == 1 or k.y() == 4 and k.x() == 2 or k.y() == 4 and k.x() == 3 or k.y() == 4 and k.x() == 4):
        k.set(LedSpriteProperty.Y, k.y() - 4)
    else:
        k.change(LedSpriteProperty.Y, 1)
input.onButtonPressed(Button.AB, moveDown)

def moveUp():
    if (k.y() == 0 and k.x() == 0 or k.y() == 0 and k.x() == 1 or k.y() == 0 and k.x() == 2 or k.y() == 0 and k.x() == 3 or k.y() == 0 and k.x() == 4):
        k.set(LedSpriteProperty.Y, k.y() + 4)
    else:
        k.change(LedSpriteProperty.Y, -1)
input.onLogoEvent(TouchButtonEvent.Touched, moveUp)

k = game.createSprite(0, 0)
point = game.create_sprite(randint(1, 4), randint(1, 8))
death = game.create_sprite(randint(1, 4), randint(1, 8))
counter = Contador()

def on_forever():
    def alert():
        basic.showNumber(counter.move());
    if (k.x() == point.x() and k.y() == point.y()):
        alert()
        point.set(LedSpriteProperty.X, randint(1, 4))
        point.set(LedSpriteProperty.Y, randint(1, 8))
        k.set(LedSpriteProperty.X, 0)
        k.set(LedSpriteProperty.Y, 0)
    elif (k.x() == death.x() and k.y() == death.y()):
        game.set_score(counter.numero)
        game.game_over()
basic.forever(on_forever)
