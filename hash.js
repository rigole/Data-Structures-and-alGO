/*let user ={

	age: 29,
	name: "Rigole",
	magic: true,
	scream: function () {
		console.log("Billionaire")
	}

}

user.age
user.spell = "Money"
user.scream()*/

//CReate hastables

/*class Hashtable {

	constructor(size) {

		this.data = new Array(size);
	}

	_hash(key) {

		let hash = 0;

		for(let i = 0; i < key.length; i++){

			hash = (hash + key.charCodeAt(i) * i) % this.data.length
		}

		return hash;
	}

	set(key, value){

		let address = this._hash(key)

		if(!this.data[address]){

			 this.data[address] = []
 
		}

		 this.data[address].push([key, value])

		 return this.data
	}


	get(key){

		let address =  this._hash(key)

		const currentBucket =  this.data[address]

		if (currentBucket){

			for(let i = 0; i < currentBucket.length; i++){

				if(currentBucket[i][0] === key){

					return currentBucket[i][1]
				}
			}

		}

		return undefined
	}

	keys(){ 

	const keysArray = []

	for (let i = 0;  i < this.data.length; i++) {

				if (this.data[i]) {

					keysArray.push(this.data[i][0][0])

			}

		}

		return keysArray

	}

}

const myHashTable = new Hashtable(2)

myHashTable.set('grapes', 10000)

myHashTable.set('Tomatoes', 500)

myHashTable.keys()*/


// Exercices reccurring character in hashtable


function firstRecurringCharacter(input) {

	for (let i = 0; i < input.length; i++){

		for (let j = i + 1; j < input.length; j++) {

			if ( input[i] === input[j]) {

				return input[i];
			}
		}
	}

	return undefined;
}

firstRecurringCharacter([2, 5, 1, 2, 3, 5, 1, 2, 4])


function firstRecurringCharacter2(input){

	let map = {}

	for (let i = 0; i < input.length; i++){

		if (map[]) {

			return input[i]

		} else {

			map[input[i]] = i
		}
	}
	console.log(map)

	return undefined;

}

firstRecurringCharacter2([])