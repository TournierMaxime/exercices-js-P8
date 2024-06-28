const calculate = (x, y, op) => {

    x = Number(x);
    y = Number(y);

    if (isNaN(x) || isNaN(y)) {
        return 'Invalid input';
    }

    let result;
    switch (op) {
        case '+':
            result = x + y;
            break;
        case '-':
            result = x - y;
            break;
        case '*':
            result = x * y;
            break;
        case '/':
            if (y === 0) {
                return "Division by zero is not allowed";
            }
            result = x / y;
            break;
        default:
            return 'Invalid operator';
    }
    return result;
}

// Exemples d'utilisation de la fonction
console.log(calculate(5, 3, '+'));   // Affiche 8
console.log(calculate(10, 4, '-'));  // Affiche 6
console.log(calculate(7, 2, '*'));   // Affiche 14
console.log(calculate(12, 3, '/'));  // Affiche 4
console.log(calculate(8, 0, '/'));   // Affiche "Division by zero is not allowed"
console.log(calculate(4, 5, '%'));   // Affiche "Invalid operator"
console.log(calculate('5', '3', '+'));  // Affiche 8

export default calculate;
