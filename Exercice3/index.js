const calculateAverage = (numbers) => {

    if (!numbers || numbers.length === 0) {
        return 'No numbers to calculate average';
    }

    numbers = numbers.map(num => Number(num));

    if (numbers.some(isNaN)) {
        return 'Invalid input in array';
    }

    const sum = numbers.reduce((acc, curr) => acc + curr, 0);

    const average = sum / numbers.length;
    return average;
}

// Exemples d'utilisation de la fonction
console.log(calculateAverage([5, 10, 15])) // retourne 10
console.log(calculateAverage([10, 20, 30, 20])) // retourne 20
console.log(calculateAverage()) // No numbers to calculate average

export default calculateAverage
