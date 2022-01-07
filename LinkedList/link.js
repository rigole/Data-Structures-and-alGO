/*const obj1 = { a: true }
const obj2 = obj1

obj1.a = 'booya'
console.log(obj1)
console.log(obj2) */

/*let myLinkedList = {

    head:{
        value: 10,
        next: {
            value: 5,
            next: {
                value: 16,
                next: null
            }
        }
    }
}*/

class LinkedList {
    constructor(value) {
        this.head = {
            value: value,
            next: null
        }
        this.tail = this.head;
        this.length = 1;
    }
}

