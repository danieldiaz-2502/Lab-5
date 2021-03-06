let pantalla;
let numero;
let cuadradoAzul = [];
let circulos = [];
let num = numero;
let aparecer;
let algo;;
let eliminado;
let diametro;

function setup() {
    createCanvas(700, 400);
    pantalla = 0;
    numero = 0;
    for (var i = 0; i < numero; i++) {
        numero = num[i];
    }
    diametro = 30;
    aparecer = false;
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
            textSize(50);
            text(numero, 50, 50);
            break;
        case 1:
            for (let i = 0; i < circulos.length; i++) {
                circulos[i].display();
                circulos[i].move();
            }
            textSize(20);
            crearCuadrados();
            fill(0);
            rect(30, 30, 100, 30);
            rect(140, 30, 100, 30);
            rect(250, 30, 100, 30);
            rect(360, 30, 100, 30);
            fill(250);
            text('Agregar', 45, 50);
            text('Eliminar', 155, 50);
            text('Doblar', 270, 50);
            text('Circulos', 375, 50);
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
            if (mouseX > 30 && mouseX < 130 && mouseY > 30 && mouseY < 60) {
                cuadradoAzul.push(new Azul(random(width), 100, 1, diametro, 2));
                if (aparecer== true){
                    circulos.push(new Circulo(random(width), 300, 1, diametro, 2));
                }
            }
            if (mouseX > 140 && mouseX < 240 && mouseY > 30 && mouseY < 60) {
                cuadradoAzul.pop(eliminado);
                if (aparecer== true){
                    circulos.pop(eliminado);
                }
            }
            if (mouseX > 250 && mouseX < 350 && mouseY > 30 && mouseY < 60) {
                cuadradoAzul.forEach(doblar);
                if (aparecer== true){
                    circulos.forEach(doblar);
                }
            }
            if (mouseX > 360 && mouseX < 460 && mouseY > 30 && mouseY < 60) {
                cuadradoAzul.map(agregarCirculos);
                aparecer = true;
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
        cuadradoAzul.push(new Azul(random(width), 100, 1, diametro, 2));
    }
}
function agregarCirculos(element,index,array){

    circulos.push(new Circulo(random(width)*index, 300, 1, diametro, 2));


}

function doblar(element, index, array) {
    array[index].setDiameter(array[index].getDiameter() * 2);
}



