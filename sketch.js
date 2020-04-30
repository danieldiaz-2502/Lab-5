console.log('entro');
let pantalla;
let pasar;
let numero;
let cuadradoAzul = [];
let num = numero;

function setup() {
    createCanvas(700, 400);
    pantalla = 0;
    pasar = false;
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
            break;
    }
}

function mousePressed() {
    if (pantalla == 1) {
        agregar();
    }
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
    for (let i = 0; i < numero; i++) {
        cuadradoAzul.push(new Azul());
    }
}

function agregar() {
    if (numero < 10) {
        for (var i = 0; i < cuadradoAzul.length; i++) {
            var cosas = cuadradoAzul[i];
            cosas++;
        }
    } else {
        try {

            throw new MyException('No puedes agregar mas elemento');

        } catch (e) {
            console.log(e);
        };

    }

}
