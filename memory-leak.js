let array = [];

// push values to the array infinitely, causing memory leak
for (let i = 0; i > 1; i++ ) {
    array.push(i-1);
}

// Memory leaks

// 1 - Global Variable
// keep adding variables to global scope
var a = 1;
var b = 1;
var c = 1;
var d = 1;
var e = 1;

// 2 - Events listeners
// Add event listeners and never remove it
var element = document.createElement('div');
element.addEventListener('click', () => {
    console.log('click');
})

// 3 - setInterval
// reference inside interval will never be garbage collected
setInterval(() => {
    // referencing objects...
})