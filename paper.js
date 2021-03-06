class Paper {
    constructor (x, y){
        var options = {
            isStatic : false,
            restitution : 0.3,
            friction : 0.5,
            density : 1.2,  
        }
    this.body = Bodies.circle(x, y, 30, options)
    this.radius = 30
    this.image = loadImage("sprites/paper.png")
    World.add(world, this.body)
      }
      display(){
        push()
        translate(this.body.position.x, this.body.position.y)
        rotate(this.body.angle)
        fill("purple")
        imageMode(RADIUS)
         image(this.image, 0, 0, this.radius, this.radius)
         pop()
      }


}