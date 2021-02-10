// head -> body -> tail
// 10 -> 5 -> 16

// let linkedList = {
//     head: {
//         value: 10,
//         next: {
//             value: 5,
//             next: {
//                 value: 16,
//                 next: null
//             }
//         }
//     }
// }

class LinkedList {
    constructor(value) {
        this.head = { 
            value: value, 
            next: null
        }

        this.tail = this.head;
        this.length = 1;
    }

    append(value) {
        const newNode = {
            value: value,
            next: null
        }

        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;

        return this;
    }
}

const newLinkedList = new LinkedList(10);
newLinkedList.append(5);
newLinkedList.append(16);

console.log(newLinkedList);