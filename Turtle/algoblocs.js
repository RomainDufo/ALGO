/*
//A1
// Initialisation

setPos(300,300);
changeColor(color.red);
faceDown();
setLineWidth(10);

// Réalisation

forward(100);
faceRight();
forward(50);


//A2
// Initialisation 

setPos(300,300);
changeColor(color.yellow);
faceLeft();
setLineWidth(10);

// Réalisation

forward(50);
left(90);
forward(50);
left(90);
forward(100);
left(90);
forward(100);


//A3
// Initialisation 

setPos(300,300);
changeColor(color.red);
faceLeft();
setLineWidth(10); 

// Réalisation

forward(50);
faceRight();
forward(100);
faceLeft();
forward(50);
faceUp();
forward(50);
faceDown();
forward(100);


//A4
// Initialisation 

setPos(300,500);
changeColor(color.red);
faceRight();
setLineWidth(10);

// Réalisation

forward(100);
arcLeft(50,90);
arcLeft(50,90);
forward(50);
arcRight(50,90);
arcRight(50,90);
forward(100);


//A5
// Initialisation

setPos(300,200);
changeColor(color.red);
faceRight();
setLineWidth(10);

// Réalisation

arcRight(50,90);
arcRight(50,90);
arcLeft(50,90);
arcLeft(50,90);
arcLeft(100,180);
arcLeft(100,180);


//A6
// Initialisation

setPos(300,450);
changeColor(color.blue);
faceUp();
setLineWidth(10);

// Réalisation

forward(50);
up();
forward(50);
down();
forward(150);


//A7
// Initialisation

setPos(200,260);
changeColor(color.green);
faceDown();
setLineWidth(10);

//Réalisation

forward(100);
arcLeft(50,180);
forward(50);
up();
forward(50);
down();
forward(100);
arcLeft(50,180);
forward(50); 


//A8
// Initialisation

setPos(230,300);
changeColor(color.red);
faceUp();
setLineWidth(10);

//Réalisation

forward(50);
faceRight();
forward(100);
faceDown();
forward(200);
faceLeft();
forward(50);
up();
forward(50);
faceUp();
forward(50);
down();
forward(50);


//B1
// Initialisation 

setPos(100,100);
faceRight();
setLineWidth(10);
changeColor(color.green);

// Réalisation

for(let i=0; i<4; i++){
    forward(100);
    faceDown();
    forward(100);
    faceRight();
}


//B2
// Initialisation

setPos(100, 350);
faceUp();
setLineWidth(10);
changeColor(color.red); 

// Réalisation

for(let i=0; i<4; i++){
    forward(50);
    faceRight();
    forward(50);
    faceDown();
    forward(50);
    faceRight();
    forward(50);
    faceUp();
}


//B3
// Initialisation

setPos(250,300);
faceRight();
setLineWidth(10);
changeColor(color.red);

// Réalisation

for(let i=0; i<4; i++){
    forward(100);
    right(180-90);
    
}

//B4
// Initialisation

setPos(200,350);
faceRight();
setLineWidth(10);
changeColor(color.blue);

// Réalisation

for(let i=0; i<3; i++){
    forward(100);
    left(180-60);
}


//B5
// Initialisation

setPos(250,350);
faceUp();
setLineWidth(10);
changeColor(color.red);

// Réalisation

forward(100);
for(let i=0; i<3; i++){
    forward(50);
    right(180-60);
}


//B6
// Initialisation

setPos(100,400);
faceRight();
setLineWidth(10);
changeColor(color.red);

// Réalisation

for(let i=0; i<2; i++){
    forward(50);
    faceUp();
    forward(50);
    faceRight();

}
changeColor(color.green);
for(let i=0; i<3; i++){
    forward(50);
    faceDown();
    forward(50);
    faceRight();
    
}


//B7
// Initialisation

setPos(200,300);
faceRight();
setLineWidth(10);
changeColor(color.red);

// Réalisation

for(let i=0; i<4; i++){
    forward(100);
    right(180-90);
}

for(let i=0; i<3; i++){
    forward(100);
    left(180-60);
}


//B8
// Initialisation

setPos(200,300);
faceRight();
setLineWidth(10);
changeColor(color.red);

// Réalisation

for(let i=0; i<8; i++){
    forward(150);
    right(180-45);
}


//B9
// Initialisation

setPos(200,300);
faceRight();
setLineWidth(10);
changeColor(color.red);

// Réalisation

forward(50);
up();
forward(50);
down();

for(let i=0; i<3; i++){
    forward(100);
    right(180-60);
}


//B10
// Initialisation

setPos(50,300);
faceRight();
setLineWidth(10);
changeColor(color.blue);

// Réalisation

for(let i=0; i<8; i++){
    forward(100);
    right(180-45);
}

up();
changeColor(color.yellow);
forward(250);
down();

for(let i=0; i<8; i++){
    forward(200);
    left(180-45);
}

right(180-90);
up();
changeColor(color.red);
forward(150);
down();

for(let i=0; i<8; i++){
    forward(100);
    right(180-45);
}


//B11
// Initialisation

setPos(200,300);
faceRight();
setLineWidth(10);
changeColor(color.red);

// Réalisation

for(let i=0; i<4; i++){
    forward(50);
    left(180-90);
    forward(50);
    right(180-90);
    forward(50);
    right(180-90);
}


//B12
// Initialisation

setPos(350,300);
faceRight();
setLineWidth(10);
changeColor(color.green);

// Réalisation

for(let i=0; i<3; i++){
    left(180-90);
    forward(100);
}

up();
forward(50);
changeColor(color.red);
down();

for(let i=0; i<3; i++){
    forward(100);
    left(180-90);
}


//C1
// Initialisation

setPos(100,300);
faceRight();
setLineWidth(10);
changeColor(color.blue);

// Réalisation 

for(let i=0; i<4; i++){

    for(let j=0; j<3; j++){
        forward(100);
        right(180-60);
    }
    
    forward(100);
}


//C2
// Initialisation

setPos(200,550);
faceUp();
setLineWidth(10);
changeColor(color.red);

//Réalisation

for(let i=0; i<5; i++){
    
    for(let j=0; j<4; j++){
        forward(50);
        right(180-90);
    }
    up();
    forward(100);
    down();
}

//C3
// Initialisation

setPos(50,300);
faceRight();
setLineWidth(10);
shiftColor(0.33);

//Réalisation

for(let i=0; i<3; i++){
    for(let j=0; j<8; j++){
        forward(100);
        left(180-45);
    }
    up();
    forward(200);
    down();
    shiftColor(0.1);
}


//C4
// Initialisation

setPos(50,300);
faceRight();
setLineWidth(10);
changeColor(color.red);

// Réalisation

for(let i=0; i<5; i++){
    for(let j=0; j<3; j++){
        changeColor(color.red);
        forward(50);
        left(180-60);
    }
    for(let j=0; j<4; j++){
        changeColor(color.yellow);
        forward(50);
        right(180-90);
    }
    up();
    forward(100);
    down();
}

//C5
// Initialisation

setPos(250,300);
faceRight();
setLineWidth(10);
shiftColor(0.16);

// Réalisation

for(let i=0; i<4; i++){
    for(let j=0; j<8; j++){
        forward(200);
        left(180-45);
    }
    shiftColor(0.2);
    right(180-90);
}


//C6
// Initialisation

setPos(300,400);
faceRight();
setLineWidth(10);
changeColor(color.yellow);

// Réalisation

for(let i=0; i<3; i++){
    for(let j=0; j<4; j++){
        forward(100);
        left(180-60);
    }
    forward(100);
}


//C7
// Initialisation

setPos(300,450);
faceRight();
setLineWidth(10);
changeColor(color.red);

// Réalisation

for(let i=0; i<8; i++){
    for(let j=0; j<4; j++){
        forward(50);
        right(180-60);
    }
    right(180-345);
}


//C8
// Initialisation

setPos(300,550);
faceUp();
setLineWidth(10);
changeColor(color.green);

// Réalisation

forward(200);
right(180-135);
for(let i=0; i<4; i++){
    changeColor(color.red);
    for(let j=0; j<3; j++){
        forward(100);
        right(180-60);
    }
    changeColor(color.yellow);
    forward(100);
    left (180-90);
}

//C9
// Initialisation

setPos(400,400);
faceRight();
setLineWidth(10);
changeColor(color.green);

// Réalisation

for(let i=0; i<3; i++){
    for(let j=0; j<3; j++){
        forward(50);
        right(180-60);
        for(let k=0; k<4; k++){
            right(180-90);
            forward(50);
        }
    }
    left(180-60);
    forward(200);
}


//C10
// Initialisation

setPos(300,50);
faceDown();
setLineWidth(10);
changeColor(color.red);

// Réalisation

for(let i=0; i<4; i++){
    for(let j=0; j<4; j++){
        forward(50);
        for(let k=0; k<4; k++){
            left(180-90);
            forward(25);
        }
        right(180-90);
    }
     forward(100);
}


//D1
// Initialisation

let longueurD1;
setPos(250,200);
setLineWidth(10);
faceRight();
changeColor(color.red);

// Réalisation

longueurD1 = 100
for(let i=0; i<8; i++){
    forward(longueurD1);
    right(180-135);
}

//D9
// Initialisation

setPos(300,250);
setLineWidth(10);
faceRight();
changeColor(color.blue);
let longueurD9;

// Réalisation

longueurD9 = 50;
for(let i=0; i<6; i++){
    forward(longueurD9);
    right(180-60);
    longueurD9 = longueurD9 + 50;
}


//D10
// Initialisation

setPos(250,250);
setLineWidth(10);
faceRight();
changeColor(color.yellow);
let longueurD10;

// Réalisation 

longueurD10 = 50;
for(let i=0; i<10; i++){
    forward(longueurD10);
    right(180-90);
    longueurD10 = longueurD10 + 25;
}


//D11
// Initialisation

setPos(50,250);
setLineWidth(10);
faceRight();
changeColor(color.yellow);
let longueurD11;

// Réalisation

longueurD11 = 150;
for(let i=0; i<5; i++){
    for(let j=0; j<3; j++){
        forward(longueurD11);
        left(180-60);
    }
    forward(longueurD11);
    longueurD11 = longueurD11 - 25;
}

//D12
// Initialisation

setPos(250,250);
setLineWidth(10);
faceRight();
changeColor(color.green);
let longueurD12;

// Réalisation

longueurD12 = 50;
for(let i=0; i<6; i++){
    for(let j=0; j<4; j++){
        forward(longueurD12);
        left(180-60);
    }
    left(180-240);
    longueurD12 = longueurD12 + 25;
}


//D13 
// Initialisation

setPos(200,300);
setLineWidth(10);
faceRight();
changeColor(color.red);
let longueurD13;

// Réalisation

longueurD13 = 50;
for(let i=0; i<8; i++){
    
    up();
    forward(25);
    down();
    longueurD13 = longueurD13 + 25;
}

// !!!!! PAS FINI !!!!! //


//Bonus1
// Initialisation

setPos(50,300);
setLineWidth(2);
faceRight();
shiftColor(0.01);
let longueurBonus1

// Réalisation

for(let i=0; i<8; i++){
    forward(50);
    shiftColor(0.2);
}


//Bonus6
// Initialisation

setPos(50,250);
setLineWidth(10);
faceUp();
changeColor(color.red);

// Réalisation 

for(let i=0; i<3; i++){
    right(180-60);
    forward(110);
}
up();
faceRight();
forward(150);
down();
forward(70);

for(let i=0; i<2; i++){
    faceLeft();
    forward(70);
    faceDown();
    forward(50);
    faceRight();
    forward(70);
}

up();
forward(100);
down();

left(180-70)
forward(120);

up();
faceRight();
forward(80);
down();
right(180-70);
forward(120);

*/

