/*const strings = ['a', 'b', 'c', 'd']

console.log(strings[2])

//push

strings.push('e')
console.log(strings)

// Pop

strings.pop()
strings.pop()

console.log(strings)

strings.unshift('x')
console.log(strings)*/


/*class MyArray{
	constructor(){
		this.length = 0;
		this.data = {};
	}

	get(index){

		return this.data[index]
	}

	push(item) {
 
	this.data[this.length] = item
	this.length++
	return this.length
}

	pop() {
		const lastItem = this.data[this.length - 1]
		delete this.data[this.length-1]
		this.length--
		return lastItem

	}

	delete(index) {
		const item = this.data[index]
		this.shiftItems(index)
		return lastItem
	}

	shiftItems(index){
		for (var i = index; i < this.length - 1; i++) {
			this.data[i] = this.data[i+1]
		}
		delete this.data[this.length-1]
		this.length--
	}
}



const newArray = new MyArray()
newArray.push('Hi')
newArray.push('You')
newArray.push("abruti")
newArray.pop()
newArray.delete(1)
newArray.push('abruti')




console.log(newArray)
*/


// Rreverse a string exercice 
/*function reverse(str){

	// Checking the input
	if (!str || str.length < 2 || typeof str !== 'string') {

		return 'hmm that is not good'
	}

	const backwards = []
 
	const totalItems = str.length - 1 

	for (var i = totalItems ; i  >= 0; i--) {
		backwards.push(str[i])
	}

	console.log(backwards)

	return backwards.join('')
}*/

/*function reverse2(str){
	return str.split('').reverse().join('')
}
reverse2("I am Placide FOLEU")*/



// Merge sorted Arrays


function mergeSortedArrays(array1, array2){
	const mergedArray = []
	let array1Item = array1[0]
	let array2Item = array2[0]
	let i = 1
	let j= 1


	// Check input 
	if (array1.length === 0) {
		return array2;
	}
	if (array2.length === 0) {
		return array1;
	}

	while (array1Item || array2Item) {
		console.log(array1Item, array2Item)

		if (!array2Item || array1Item < array2Item) {
			mergedArray.push(array1Item)
			array1Item = array1[i]
			i++

		} else {
			mergedArray.push(array2Item)
			array2Item = array2[j]
			j++
		} 
	}



	return mergedArray;
}

mergeSortedArrays([0,3,4,31], [4,6,30]);