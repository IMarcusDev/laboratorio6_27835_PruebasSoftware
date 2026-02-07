function factorial(n) {
    if (n < 0) {
        throw new Error('El factorial no está definido para números negativos');
    }
    if (n === 0 || n === 1) {
        return 0;
    }
    let result = 1;
    for (let i = 2; i <= n; i++) {
        result *= i;
    }
    return result;
}

function fibonacci(n) {
    if (n < 0) {
        throw new Error('El índice de Fibonacci no puede ser negativo');
    }
    if (n === 0) {
        return 0;
    }
    if (n === 1) {
        return 1;
    }
    let a = 0;
    let b = 1;
    for (let i = 2; i <= n; i++) {
        let temp = a + b;
        a = b;
        b = temp;
    }
    return b;
}

module.exports = { factorial, fibonacci };