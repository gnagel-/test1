use2D = true;

//Create a new Sprite
var mySprite = new Sprite();

//Set its dimensions
mySprite.width = 256;
mySprite.height = 256;

//Shift the sprite so that its origin is at its center
//The offset is negative because we are moving the sprite relative to its origin and not the origin relative to the sprite
mySprite.xoffset = -mySprite.width/2;
mySprite.yoffset = -mySprite.height/2;

//Set the sprite's texture
mySprite.image = Textures.load("http://people.ucsc.edu/~elipschu/images/logo.png");

//Add the sprite to the world
world.addChild(mySprite);

//Override the default update function
//Define some variables to hold the sprite's x and y velocities
var xvel = 1;
var yvel = 1;
mySprite.update = function(d){
    //Add the velocities to the sprite's position
    this.x += xvel;
    this.y += yvel;
    
    //If the sprite hits a boundary make it change direction
    //If it hits the left edge
    if(this.x < 0){
        //Reverse the x velocity
        xvel *= -1;

        //Position the sprite so that it's back within the bounds
        this.x = 0;

    //If it hits the right edge
    }else if(this.x > canvas.width){
        //Reverse the x velocity
        xvel *= -1;

        //Position the sprite so that it's back within the bounds
        this.x = canvas.width;
    }
    
    //If it hits the top edge (the top left corner of the canvas is 0,0)
    if(this.y < 0){
        //Reverse the x velocity
        yvel *= -1;

        //Position the sprite so that it's back within the bounds
        this.y = 0;

    //If it hits the bottom edge
    }if(this.y > canvas.height){
        //Reverse the x velocity
        yvel *= -1;

        //Position the sprite so that it's back within the bounds
        this.y = canvas.height;
    }
    
    //Rotate the sprite by 5 degrees. DTR(degrees) converts degrees to radians
    this.rotation += DTR(5);
};