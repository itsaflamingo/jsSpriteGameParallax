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

let x = 0
let x2 = 2400

function animate() {
    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT)
    // Since this is an infinite loop, drawImage is infinitely rendered. Params are (img, x, y). We can add update x each time to make it look like image is moving.
    ctx.drawImage(backgroundLayer4, x, 0)
    ctx.drawImage(backgroundLayer4, x2, 0)

    // if image is to the left of 0 (x) then reset 
    if(x < -2400) x=2400 + x2 - gameSpeed
    // We update the location of each render each time the loop is called.
    x -= gameSpeed

    if(x2 < -2400) x2=2400 + x - gameSpeed
    // We update the location of each render each time the loop is called.
    x2 -= gameSpeed
    
    requestAnimationFrame(animate)
}

animate()