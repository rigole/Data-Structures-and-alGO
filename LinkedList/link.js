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

// Create
class LinkedList {
    constructor(value) {
        this.head = {
            value: value,
            next: null
        }
        this.tail = this.head;
        this.length = 1;
    }

    //Append

    append(value) {

        const newNode = {
            value : value,
            next: null
        }

        this.tail.next = newNode
        this.tail = newNode
        this.length++;
        return this;

    }

    //Prepend(value) 
    prepend(value){
        const newNode = {
            value: value,
            next: null
        }
        newNode.next = this.head
        this.head = newNode
        this.length++
        return this
    }
}

const myLinkedList = new LinkedList(10);
console.log(myLinkedList)
myLinkedList.append(5)
myLinkedList.append(16)
myLinkedList.prepend(1)
console.log(myLinkedList) 

