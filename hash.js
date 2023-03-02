class hashTable {
    constructor(size = 8) { this.bucket = new Array(size); this.size = size; }

    hash(key) {
        let sum = 0;
        for (let i = 0; i < key.length; ++i) {
            sum += key.charCodeAt(i);
        }
        let hash = sum % this.size;

        return hash;

    }
    insert(key, value) {
        let h = this.hash(key);
       
        return this.bucket[h] = value;

    }
    search(key) {
       
        return this.bucket[this.hash(key)];
    }
}

const newInst = new hashTable(9);
newInst.insert("101", "Anuj");
newInst.insert("102", "Shakul");
newInst.insert("103", "Raj");
newInst.insert("301", "Shreyu");

console.log(newInst.search("101"));
console.log(newInst.search("301"));
console.log(newInst);