// Call Stack + Memory Heap
const number = 610; // allocate memory for number
const string = 'some string'; // allocate memory for string
const human = { // allocate memory for an object.... and it's values
    first: 'Juan Petterson',
    last: 'Heberle'

};

function subtractTwo(num) {
    return num - 2;
}

function calculate() {
    const sumTotal = 4 + 5;
    return subtractTwo(sumTotal);
}

calculate();

// Call Stack - first in, last out
// subtractTwo 🔽
// calculate 🔽
// anonymous (global execution context)