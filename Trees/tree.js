class Node {
    constructor(value){
        this.left = null;
        this.right = null;
        this.value = value;
    }
}

class BinaryTreeNode {

    constructor(){
        this.root = null;
    }
    insert(value){
        const newNode = new Node(value);
        if (this.root ===  null) {
            this.root = newNode;
        } else{
            let currentNode = this.root;
            while(true){
                if(value < currentNode.value){
                    // left 
                    if(!currentNode.left){
                        currentNode.left = newNode;
                        return this;
                    }
                    currentNode =  currentNode.left
                } else {
                    // right
                    if(!currentNode.right) {
                        currentNode.right = newNode;
                        return this;
                    }
                    currentNode = currentNode.right;
                }
            }
        }

    }
    lookup(value){
        if(!this.root){

            return false;
        }
        let currentNode = this.root;
        while(currentNode){
            if (value < currentNode.value) {
                currentNode = currentNode.left;
            } else if (value > currentNode.value){
                    currentNode = currentNode.right;
            } else if (currentNode.value === value){
                return currentNode;
            }
        }
        return false;
    }

    remove(value){

        if(!this.root){
            return false;
        }
        let currentNode = this.root;
        let parentNode = null;

        while (currentNode) {
            if (value < currentNode.value) {

                parentNode = currentNode;
                currentNode = currentNode.left;
                
            } else if (value > currentNode.value) {

                parentNode = currentNode;
                currentNode = currentNode.right;

            } else if (currentNode.value === value){

                if (currentNode.right === null){
                    if (parentNode == null){
                         this.root = currentNode.left;
                    }else {

                        if(currentNode.value < parentNode.value){
                            parentNode.left = currentNode.left;
                        } else if (currentNode.value > parentNode.value){
                            parentNode.right = currentNode.left;
                        }
                    }
                    
                }else if (currentNode.right.left === null){
                    if (parentNode === null) {
                        
                        this.root = currentNode.left;
                    } else {
                        
                    }

                } else {

                }
            return true;
            }
        }
    }
}

//Level 0: 2^0 =1;

const tree = new BinaryTreeNode();
tree.insert(9);
tree.insert(4);
tree.insert(6);
tree.insert(20);
tree.insert(170);
tree.insert(15);
tree.insert(1);
tree.lookup(9);
JSON.stringify(traverse(tree.root))

function traverse(node) {
    const tree = { value: node.value };

    tree.left = node.left === null ? null :
    traverse(node.left);

    tree.right = node.right === null ? null :
    traverse(node.right);
    return tree;
}