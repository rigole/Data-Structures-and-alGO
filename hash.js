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

class Hashtable {

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
}

const myHashTable = new Hashtable(50)
myHashTable.set('grapes', 1000)
myHashTable.get('grapes')