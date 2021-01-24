console.log('1')

// will be moved to web api stack
// after finish the execution will be moved to callback queue
// after event loop confirm if the callstack is empty it will me moved to the callstack
// PS: doesnt matter how fast it will be executed, console will print after all synchronous code
setTimeout(() => {
    console.log('2')
}, 1000);

console.log('3')

// output 1,3,2