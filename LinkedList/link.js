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

    //Insert

    printList(){

        const array = [];
        let currentNode = this.head;
        while(currentNode !== null){

            array.push(currentNode.value)
            currentNode = currentNode.next

        }
        return array
    }

    insert(index, value){
        // check params
        if (index >= this.length){
            return this.append(value)
        }
        const newNode = {
            value: value,
            next: null
        }
        const leader = this.traverseToIndex(index-1)
        const holdingPointer = leader.next
        leader.next = newNode
        newNode.next = holdingPointer
        this.length++;
        return this.printList()

    }
    traverseToIndex(index){
        let counter = 0;
        let currentNode = this.head;
        while(counter !== index){
            currentNode = currentNode.next
            counter++;
        }
        return currentNode;
    }
}

const myLinkedList = new LinkedList(10);
console.log(myLinkedList)
myLinkedList.append(5)
myLinkedList.append(16)
myLinkedList.prepend(1)
myLinkedList.insert(2, 87)
//console.log(myLinkedList) 
myLinkedList.printList();

