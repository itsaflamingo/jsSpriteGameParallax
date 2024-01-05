const canvas = document.getElementById('canvas1')
const ctx = canvas.getContext('2d')

const CANVAS_WIDTH = canvas.width = 800
const CANVAS_HEIGHT = canvas.height = 700

let gameSpeed = 15

const backgroundLayer1 = new Image()
backgroundLayer1.src = 'layer-1.png'
const backgroundLayer2 = new Image()
backgroundLayer2.src = 'layer-2.png'
const backgroundLayer3 = new Image()
backgroundLayer3.src = 'layer-3.png'
const backgroundLayer4 = new Image()
backgroundLayer4.src = 'layer-4.png'
const backgroundLayer5 = new Image()
backgroundLayer5.src = 'layer-5.png'

// let x = 0
// 2nd copy of background img
// let x2 = 2400 

// Create many similar objects - background img
class Layer {
    constructor(image, speedModifier) {
        this.x = 0
        this.y = 0
        this.width = 2400
        this.height = 700
        this.x2 = this.width
        this.image = image
        this.speedModifier = speedModifier
        this.speed = gameSpeed * this.speedModifier
    }
    // updates background position based on game speed
    update() {
        this.speed = gameSpeed * this.speedModifier
        // Check if either copy of the background image is completely off the left side of the canvas. If true, reset its position to the right side of the other copy, creating a continuous scrolling effect.
        if(this.x <= -this.width) {
            this.x = this.width + this.x2 - this.speed
        }
        if(this.x2 <= -this.width) {
            this.x2 = this.width + this.x - this.speed
        }
        this.x = Math.floor(this.x - this.speed)
        this.x2 = Math.floor(this.x2 - this.speed)
    }
    draw() {
        ctx.drawImage(this.image, this.x, this.y, this.width, this.height)
        ctx.drawImage(this.image, this.x2, this.y, this.width, this.height)
    }
}

const layer1 = new Layer(backgroundLayer1, 0.5)
const layer2 = new Layer(backgroundLayer2, 0.5)
const layer3 = new Layer(backgroundLayer3, 0.5)
const layer4 = new Layer(backgroundLayer4, 0.5)
const layer5 = new Layer(backgroundLayer5, 1)

function animate() {
    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT)
    // // Since this is an infinite loop, drawImage is infinitely rendered. Params are (img, x, y). We can add update x each time to make it look like image is moving.
    // ctx.drawImage(backgroundLayer4, x, 0)
    // ctx.drawImage(backgroundLayer4, x2, 0)

    // // if image is to the left of 0 (x) then reset 
    // if(x < -2400) x=2400 + x2 - gameSpeed
    // // We update the location of each render each time the loop is called.
    // x -= gameSpeed

    // if(x2 < -2400) x2=2400 + x - gameSpeed
    // // We update the location of each render each time the loop is called.
    // x2 -= gameSpeed
    layer4.update()
    layer4.draw()
    
    requestAnimationFrame(animate)
}

animate()