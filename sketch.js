let pantalla;
let numero;
let cuadradoAzul = [];
let num = numero;
let cosasDcosas;
let algo;

function setup() {
    createCanvas(700, 400);
    pantalla = 0;
    numero = 0;
    for (var i = 0; i < numero; i++) {
        numero = num[i];
    }
}

function draw() {
    background(250);
    text("X" + mouseX + "Y" + mouseY, mouseX, mouseY);
    switch (pantalla) {
        case 0:
            fill(250);
            rect(100, 370, 100, 20);
            fill(0);
            textSize(10);
            text("Continuar", 125, 385);
            fill(0, 0, 250);
            rect(10, 170, 100, 20);
            fill(0);
            textSize(10);
            text("Aumentar", 35, 185);
            fill(250, 0, 0);
            rect(120, 170, 100, 20);
            fill(0);
            textSize(10);
            text("Disminuir", 145, 185);
            textSize(20);
            text(numero, 50, 50);
            break;
        case 1:
            crearCuadrados();
            fill (0);
            rect(30,30,100,30);
            rect(140,30,100,30);
            rect(250,30,100,30);
            rect(360,30,100,30);
            fill(250);
            text('Agregar',45,50);
            text('Eliminar',155,50);
            text('Doblar',270,50);
            text('Circulos',375,50);
            break;
    }
}

function mousePressed() {
    switch (pantalla) {
        case 0:
            if (mouseX >= 100 && mouseX <= 200 && mouseY >= 370 && mouseY <= 390) {
                continuar();
                if (numero <= 10 && numero >= 1) {
                    arreglo();
                }
            }
            //aumentar
            if (mouseX >= 10 && mouseX <= 110 && mouseY >= 170 && mouseY <= 190) {
                numero++;
            }
            //disminuir
            if (mouseX >= 120 && mouseX <= 220 && mouseY >= 170 && mouseY <= 190) {
                numero--;
            }
            break;
        case 1:
            if (numero < 10 && mouseX > 30 && mouseX < 130 && mouseY > 30 && mouseY < 60) {
                cuadradoAzul.push(new Azul());
            }
            break;
    }
}


function continuar() {
    try {
        validateInputs(numero);
    } catch (e) {
        console.log(e);
        alert("Error");
    };
}

function validateInputs(numero) {
    if (numero > 10) {
        throw new MyException('El numero es mayor de 10');
    }
    if (numero < 1) {
        throw new MyException('El numero es menor de 1');
    }
    if (numero <= 10 && numero >= 1) {
        pantalla = 1;
    }
}

function crearCuadrados() {
    // Create objects
    for (let i = 0; i < cuadradoAzul.length; i++) {
        cuadradoAzul[i].display();
        cuadradoAzul[i].move();
    }
}

function arreglo() {
    algo = numero;

    for (let i = 0; i < algo.length; i++) {
        numero = algo[i];
    }
    for (let i = 0; i < algo; i++) {
        cuadradoAzul.push(new Azul());
    }
}



