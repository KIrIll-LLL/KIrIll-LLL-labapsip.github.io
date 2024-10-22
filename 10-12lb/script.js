function calculate() {
    let x = document.getElementById("x").value;
    let y = document.getElementById("y").value;

    try {
        if (x == 2 || x == -2) throw "Ошибка: деление на ноль.";
        if (x < -2 || x > 2) throw "Ошибка: корень из отрицательного числа.";
        
        let result = (1 + y) * ((2 * x + Math.sqrt(y) - (x + y)) / (y + (1 / (Math.pow(x, 2) - 4))));
        document.getElementById("result").innerHTML = "Результат: " + result;
    } 
    catch(err) {
        alert(err);
    }
}

function BEL(){
    let s1 = "Я люблю Беларусь";
let s2 = "Я учусь в Политехническом колледже";

// Определение длины строки и вывод в элемент <p>
document.getElementById("lengthS1").innerHTML = `Длина строки s1: ${s1.length}`;
document.getElementById("lengthS2").innerHTML = `Длина строки s2: ${s2.length}`;

// Проверка, встречается ли в строке s1 слово "Минск" и вывод в элемент <p>
document.getElementById("isMinskInS1").innerHTML = `Слово "Минск" встречается в строке s1: ${s1.includes("Минск")}`;

// Выделение 8-го символа в строке s2, определение его ASCII кода и вывод в элемент <p>
let eighthChar = s2.charAt(7);
document.getElementById("eighthCharS2").innerHTML = `8-й символ в строке s2: ${eighthChar}`;
document.getElementById("asciiEighthCharS2").innerHTML = `ASCII код 8-го символа в строке s2: ${eighthChar.charCodeAt(0)}`;
}