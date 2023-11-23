function calculateNumber(a, b, type) {
    const numA = Math.round(a);
    const numB = Math.round(b);
    let numC = 0;
    switch (type) {
        case 'SUM':
            numC = numA + numB;
            break;
        case 'SUBTRACT':
            numC = numA - numB;
            break;
        case 'DIVIDE':
            if (numB === 0) {
                numC = "Error";
            } else {
                numC = numA / numB;
            }
            break;
    }
    return numC
}

module.exports = calculateNumber;