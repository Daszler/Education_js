// const tempC = parseInt(prompt('Введите температуру в градусах Цельсия'));
// const tempF= (9 / 5 * tempC) + 32;
// alert (`Цельсий: ${tempC}, Фаренгейт: ${tempF.toFixed(1)}`);

function conversion(a, b) {
    return b = (a * 9 / 5) + 32;
};
const tempC = parseInt(prompt('Введите температуру в градусах Цельсия'));
alert(`Цельсий: ${tempC}, Фаренгейт: ${conversion(tempC, tempC)}`);
//Почему при использовании функции не нужен метод toFixed()?