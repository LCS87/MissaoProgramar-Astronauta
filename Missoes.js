
var num1 = window.prompt("Digite um numero: ");
var num2 = window.prompt("Digite outro numero: ");
var num3 = (num1 / num2);

alert("Missao Terra")

document.write("Missão Terra" + "</br>");
document.write("Resultado é: " + num3 + "</br>" + "</br>");



//--------------------MARTE ------------------------------------//


var cal1 = (-5) + 8 * 6;
var cal2 = (55 + 9) % 9;
var cal3 = 20 + (-3) * 5 / 8;
var cal4 = 5 + 15 / 3 * 2 - 8 % 3;

alert("Missao Marte")
document.write("Missão Marte" + "</br>");
document.write("Resultado é: " + cal1 + "</br>");
document.write("Resultado é: " + cal2 + "</br>");
document.write("Resultado é: " + Math.ceil(cal3) + "</br>");
document.write("Resultado é: " + cal4 + "</br>" + "</br>");


//------------------Venus-----------------------------



alert("Missao Venus")
document.write("Missão Venus" + "</br>");
var num4 = window.prompt("Digite o numero 25: ");
var num5 = window.prompt("Digite o numero 5: ");
var mult = (num4 * num5);

document.write("O Produto é: " + mult + "</br>" + "</br>")

//-----------------saturno--------------------------------

alert("Missao Saturno")





for (var Primo = 0; Primo <= 100; Primo++) {
    if ((Primo % 2) != 0) {
        document.write(Primo + "</br>")

    }
}
document.write("-------------------------------------- " + ("</br>"));

//------------------------- Netuno-----------------------------

alert("Missao Netuno")

var num6 = Number(window.prompt("Missao Netuno - Digite um numero: "));

if (num6 % 2 == 0) {

    document.write("Numero:" + num6 + " " + " é Par! " + "</br>" + ("</br>"))
} else {
    document.write("Numero:" + num6 + " " + " é Impar! " + "</br>" + ("</br>"))
}

//-----------------------Jupiter------------------------------

alert("Missao Jupiter")

var num7 = Number(window.prompt("Missao Jupiter - A Tabuada de: " + " é "));
var cont = 1



do {

    document.write("Tabuada" + " " + "=" + " " + num7 + "x" + cont + "=" + " " + num7 * cont + "</br>");
    cont++;

    if (num7 < 0)
        document.write("Digite Numero Valido!!! ")('<br>');

} while (cont < 11 && cont > 0)("</br>");
document.write("-------------------------------------- " + ("</br>"));



//---------------------Mercurio----------------------

alert("Missao Mercurio!")

var sal5
var sal10
var sal20
var sal15
var salario = window.prompt("Missao Mercurio - Digite Seu Salario: ");

if (salario <= 280) {
    sal20 = salario * 1.2;
    document.write("O Salario Antes do Reajuste: " + salario + "</br>");
    document.write(" Percentual de Ajuste: 20%" + "</br>");
    document.write(" Valor do Aumento: " + (sal20 - salario) + "</br>");
    document.write(" Novo Salario: " + sal20 + "</br>");
    document.write("--------------------------------------" + ("</br>"))
}
if ((salario > 280) && (salario <= 700)) {
    sal15 = salario * 1.15;
    document.write("O Salario Antes do Reajuste: " + salario + "</br>");
    document.write(" Percentual de Ajuste: 15%" + "</br>");
    document.write(" Valor do Aumento: " + (sal15 - salario) + "</br>");
    document.write(" Novo Salario: " + sal15 + "</br>");
    document.write("--------------------------------------  " + ("</br>"))
}
if ((salario > 700) && (salario <= 1500)) {
    sal10 = salario * 1.1;
    document.write("O Salario Antes do Reajuste: " + salario + "</br>");
    document.write(" Percentual de Ajuste: 10%" + "</br>");
    document.write(" Valor do Aumento: " + (Math.round(sal10) - salario) + "</br>")
    document.write(" Novo Salario: " + Math.round(sal10) + "</br>");
    document.write("--------------------------------------" + ("</br>"))
}
if (salario > 1500) {
    sal5 = salario * 1.05;
    document.write("O Salario Antes do Reajuste: " + salario + "</br>");
    document.write(" Percentual de Ajuste: 5%" + "</br>");
    document.write(" Valor do Aumento: " + (sal5 - salario) + "</br>");
    document.write(" Novo Salario: " + sal5 + "</br>");
    document.write("--------------------------------------" + ("</br>"))
}

//----------------------------Escarlate------------------------------

alert("Missao Escarlate!")

var prec1 = Number(window.prompt("Digite o 1º preço: "));
var prec2 = Number(window.prompt("Digite 0 2º preço: "));
var prec3 = Number(window.prompt("Digite o 3º preço: "));

if ((prec1 < prec2) && (prec1 < prec3))
    document.write(" O mais Barato é o primeiro produto cujo o valor é:  " + prec1 + ("</br>"))

else if ((prec2 < prec3) && (prec2 < prec1))
    document.write(" O mais Barato é o segundo produto cujo o valor é:  " + prec2 + ("</br>"))

if((prec3 < prec1) && (prec3 < prec2))
document.write(" O mais Barato é o terceiro produto cujo o valor é: " + prec3 + ("</br>"))





//----------------------------Make Make----------------------------------------

alert("missão Make Make")

var nota1 = Number(window.prompt(" Digite a Primeira nota: "));
var nota2 = Number(window.prompt(" Digite a Segunda nota: "));
var med = ((nota1 + nota2) / 2);


if (med == 10) {
    document.write("Aprovado com distição!!!" + ('<br>'))

}
if ((med >= 7) && (med <= 9.9)) {
    document.write(" Aprovado!!" + ('<br>'))
} else if (med < 7)
    document.write("Reprovado!" + ('<br>'))

    document.write("--------------------------------------" + ("</br>"))

//----------------missão Haumea ------------------------------------

alert("missão Missão HAumea")

var oct = Number(window.prompt("Digite um numero: "));
document.write(" resultado é " + oct.toString(8) + ('<br>'));
document.write("--------------------------------------" + ("</br>"));






//----------------missão Eris ------------------------------------

alert("missão Missão Eris");

alert("Responda somente sim ou nao!");


var possicrime = 0

possicrime1 = window.prompt("Telefonou para a vítima?: ")
if (possicrime1 == "sim")
    possicrime++;

possicrime2 = window.prompt("Esteve no local do crime?: ")
if (possicrime2 == "sim") {
    possicrime++;
}

possicrime3 = window.prompt("Mora perto da vítima?: ")
if (possicrime3 == "sim") {
    possicrime++;
}

possicrime4 = window.prompt("Devia para a vítima?: ")
if (possicrime4 == "sim") {
    possicrime++;
}

possicrime5 = window.prompt("Já trabalhou com a vítima?: ")
if (possicrime5 == "sim") {
    possicrime++;
}



if (possicrime <= 2)
    document.write("inocente" + ('<br>'));


else if (possicrime > 2 && possicrime <= 4)
    document.write("cumplice" + ('<br>'));
else
    document.write("Assasino" + ('<br>'));

    document.write("--------------------------------------" + ("</br>"));


//----------------------Missão XO-3B--------------------------

alert("Missão XO-3B")


var letra = window.prompt("Digite uma Letra: ");

switch (letra) {
    case 'a':
        document.write("Essa letra é uma vogal!" +
            ('<br>'))
        break;
    case 'e':
        document.write("Essa letra é uma vogal!" + ('<br>'))
        break;
    case 'i':
        document.write("Essa letra é uma vogal!" + ('<br>'))
        break;
    case 'o':
        document.write("Essa letra é uma vogal!" + ('<br>'))
        break;
    case 'u':
        document.write("Essa letra é uma vogal!" + ('<br>'))
        break;

    default:
        document.write("Essa letra é uma consoante!" + ('<br>'));

}
document.write("--------------------------------------" + ("</br>"));

//------------------Missão XO-5----------------------------------

alert("Missão XO-5")

var inver = window.prompt('Digite um texto!');

function inverter(inver) {
    return inver.split('').reverse().join('');
}
document.write(inverter(inver) + ('<br>'));
