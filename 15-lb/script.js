const car = {
    make: 'Toyota',
    model: 'Corolla',
    year: 2020,
    color: 'red'
};

function Q(){
    alert(car.make);
    alert(car['model']);
};

function W(){
    delete car.color;
    alert(car.color);// Вывод: undefined
};

function E(){
    alert('make' in car);// Вывод: true
    alert(car.hasOwnProperty('model'));// Вывод: true
};

function R(){
    for (let key in car) {
    if (car.hasOwnProperty(key)) {
        alert(`${key}: ${car[key]}`);
    }
}
// Вывод:
// make: Toyota
// model: Corolla
// year: 2020
}


