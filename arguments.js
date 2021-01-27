function marry(person1, person2) {
    console.log('arguments: ', arguments);
    console.log(Array.from(arguments));

    return `${person1} is now married to ${person2}`;
}

function marry2(...args) {
    console.log('arguments: ', args);
    return `${args[0]} is now married to ${args[1]}`;
}

marry('Tim', 'Tina');