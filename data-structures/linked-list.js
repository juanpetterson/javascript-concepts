class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }


}
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
        const newNode = new Node(value);

        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;

        return this;
    }

    preppend(value) {
        const newNode = new Node(value);
        newNode.next = this.head;

        this.head = newNode;
        this.length++;

        return this;
    }

    insert(index, value) {
        const newNode = new Node(value);

        if(index >= this.length) {
            return this.append(value);
        }

        const leaderNode = this.traverseToIndex(index - 1);

        newNode.next = holdingPointer;
        leaderNode.next = newNode;

        this.length++;
        return this;
    }

    remove(index) {
        if(index >= this.length) {
            throw new Error('Index out of bounds');
        }

        const leaderNode = this.traverseToIndex(index - 1);
        const removeNode = leaderNode.next;
        leaderNode.next = removeNode.next;

        this.length--;
        return this;
    }

    pop() {
        const leaderNode = this.traverseToIndex(this.length - 2);
        const removeNode = leaderNode.next;
        leaderNode.next = removeNode.next;

        this.length--;
        return removeNode;
    }

    shift() {
        const removeNode = this.head;
        this.head = removeNode.next;

        this.length--;
        return removeNode;
    }

    // [ 1, 2, 3 ,4 ,5 ]

    reverse() {
        if(!this.head.next) return this.head;

        let firstNode = this.head; // 1 - 2
        this.tail = this.head; // 1 - 2
        let secondNode = firstNode.next; // 2 - 3

        while(secondNode) {
            const tempNode = secondNode.next; // 3 - 4

            secondNode.next = firstNode; // 1 - 2
            firstNode = secondNode; // 2 - 3

            secondNode = tempNode; // 3 - 4
        }

        this.head.next = null;
        this.head = firstNode; // 3 - 4

        return this;
    }

    traverseToIndex(index) {
        let count = 0;
        let currentNode = this.head;

        while(count < index) {
            currentNode = currentNode.next;
            count++;
        }

        return currentNode;
    }

    toArray() {
        const array = [];
        let currentNode = this.head;

        while(currentNode){
            array.push(currentNode.value);
            
            currentNode = currentNode.next;
        }
            

        return array;
    }

    toString() {
        return JSON.stringify(this);
    }
}

const myLinkedList = new LinkedList(10);
myLinkedList.append(5);
myLinkedList.append(15);
myLinkedList.append(25);
// myLinkedList.preppend(0);
// myLinkedList.remove(2);
myLinkedList.insert(4, 14);
myLinkedList.reverse();
// const popped = myLinkedList.pop();
// const shiftted = myLinkedList.shit();

// console.log(myLinkedList.toString());
console.log(myLinkedList.toArray());
// console.log(popped);