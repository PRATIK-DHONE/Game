const canvas = document.getElementById("canvas1")
const ctx = canvas.getContext('2d')
const CANVAS_WIDTH = canvas.width = 800
const CANVAS_HEIGHT = canvas.height = 700
let gameSpeed = 5
//let gameframe = 0

const backgroungLayer1 = new Image()
backgroungLayer1.src = "layer-1.png"
const backgroungLayer2= new Image()
backgroungLayer2.src = "layer-2.png"
const backgroungLayer3 = new Image()
backgroungLayer3.src = "layer-3.png"
const backgroungLayer4 = new Image()
backgroungLayer4.src = "layer-4.png"
const backgroungLayer5 = new Image()
backgroungLayer5.src = "layer-5.png"


window.addEventListener("load", function(){
    
const slider = document.getElementById("slider")
slider.value = gameSpeed
const showGameSpeed = document.getElementById('showGameSpeed')
showGameSpeed.innerHTML = gameSpeed
slider.addEventListener("change",function(e){
    gameSpeed = e.target.value
    showGameSpeed.innerHTML = gameSpeed
})

//let x = 0
//let x2 = 2400
class Layer{
    constructor(image, speedModidier){
        this.x = 0
        this.y = 0
        this.width = 2400
        this.height = 700
        //this.x2 = this.width
        this.image = image
        this.speedModidier = speedModidier
        this.speed = gameSpeed * this.speedModidier
    }
    update(){ 
        this.speed = gameSpeed * this.speedModidier
        if(this.x <= -this.width){
            this.x = 0
        }
        this.x = this.x - this.speed
        // if(this.x2 <= -this.width){
        //     this.x2 = this.width + this.x - this.speed
        // }
        //this.x = Math.floor(this.x - this.speed)
        //this.x2 = Math.floor(this.x2 - this.speed)
        //this.x = gameframe * this.speed % this.width
    }
    draw(){
        ctx.drawImage(this.image, this.x, this.y, this.width, this.height)
        ctx.drawImage(this.image, this.x + this.width, this.y, this.width, this.height)
        //ctx.drawImage(this.image, this.x2, this.y, this.width, this.height)
    }

}

const layer1 = new Layer(backgroungLayer1, 0.2)
const layer2 = new Layer(backgroungLayer2, 0.4)
const layer3 = new Layer(backgroungLayer3, 0.6)
const layer4 = new Layer(backgroungLayer4, 0.8)
const layer5 = new Layer(backgroungLayer5, 1)

const gameobjects = [layer1, layer2, layer3, layer4, layer5]

function animate(){
    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT)
    // ctx.drawImage(backgroungLayer4 ,x ,0)
    // ctx.drawImage(backgroungLayer4 ,x2 ,0)
    // if(x < -2400) x = 2400
    // else x -= gameSpeed
    // if(x2 < -2400) x = 2400
    // else x2 -= gameSpeed
    // layer4.update()
    // layer4.draw()
    // layer5.update()
    // layer5.draw()

    gameobjects.forEach(object=>{
        object.update()
        object.draw()
    })
    //gameframe -- 
    requestAnimationFrame(animate)
}
animate()

})

