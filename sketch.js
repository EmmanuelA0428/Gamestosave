let xPos = 100;
let yPos = 350;
let Size = 50;
let speed = 5;

TrashArray = [];

let clickedToStart = false;

function setup() {
    rectMode(CENTER);
    let myCanvas = createCanvas(600, 400);
    background(255,100,50);
    myCanvas.parent('TrashGame');

    for (let i = 0; i < 2; i++) {

        let temp = new Square(random(500), 0, random(255), random(255), random(255), random(1,2), random(10, 20));

        TrashArray.push(temp);

    }
}

function draw() {
    background(255,100,50);

    if (clickedToStart == false) {

        fill(0, 102, 153);
        textSize(50);
        text("Double Click To Start!", 80, 100);
    } else if (clickedToStart == true) {

        fill(100,100,100);;
        rect(xPos,yPos,Size,Size);

        if (keyIsDown(LEFT_ARROW)) {

            xPos -= speed;
            if (xPos < 25) {
                xPos = 25;
            }

        }   

        if (keyIsDown(RIGHT_ARROW)) {

            xPos += speed;
            if (xPos > 575) {
                xPos = 575;
            }


        }  

        if (TrashArray.length == 0) {
            for (let i = 0; i < 2; i++) {

                let temp2 = new Square(random(500), 0, random(255), random(255), random(255), random(1,2), random(10, 20));
                TrashArray.push(temp2);
                
            }
        }

        for (let i = 0; i < TrashArray.length; i++) {

            let tempsquare = TrashArray[i];

            fill(tempsquare.redValue, tempsquare.greenValue, tempsquare.blueValue)

            rect(tempsquare.xPos, tempsquare.yPos, tempsquare.sizeValue, tempsquare.sizeValue)

            tempsquare.yPos += tempsquare.speedValue;

            if (tempsquare.yPos+(tempsquare.sizeValue/2) > yPos-(Size/2) && (tempsquare.xPos+(tempsquare.sizeValue/2) > xPos+(Size/2) || tempsquare.xPos-(tempsquare.sizeValue/2) < xPos-(Size/2))) {

                TrashArray.splice(i, 1);

            }

            if (tempsquare.yPos+(tempsquare.sizeValue/2) > yPos+(Size/2)) {

                TrashArray.splice(i, 1);

            }

        }

    }
    
}

function doubleClicked() {
    
    clickedToStart = true;

}


class Square {

    constructor(x, y, r, g, b, speed, size) {

        this.xPos = x;
        this.yPos = y;
        this.redValue = r;
        this.greenValue = g;
        this.blueValue = b;
        this.speedValue = speed;
        this.sizeValue = size;

        
    }

}
