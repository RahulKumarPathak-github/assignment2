const calculator = {
    add(a, b) {
        return a + b;
    },
    subtract(a, b) {
        return a - b;
    },
    multiply(a, b) {
        return a * b;
    },

    // 2. Implement the calculate method
    calculate(operation, a, b) {
        if (this[operation]) {
            return this[operation](a, b);
        } else {
            return 'Invalid operation';
        }
    }
};