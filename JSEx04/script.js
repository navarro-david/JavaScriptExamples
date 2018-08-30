// Needed Data Sctructures

/**
* Queue
*/
function Queue() {
    this.dataStore = []
    this.enqueue = function enqueue(element) {
        this.dataStore.push(element)
    }
    this.dequeue = function dequeue() {
        return this.dataStore.shift()   // Returns the first element of the array
    }
    this.front = function front() {
        return this.dataStore[0]
    }
    this.back = function back() {
        return this.dataStore[this.dataStore.length - 1]
    }
}

// Example 1: Classes in Vanilla JavaScript
console.error("*** Example 1: Vanilla Classes ***");

function Person(name, age) {
    this.name = name;
    this.age = age;
}

Person.prototype.greet = function () {
    return "Hello, my name is " + this.name + ", I am " + this.age;
};

// Example 1.1


let steve = new Person("Steve", 27);
console.log(steve.greet());

// Exmaple 2: Trees in Vanilla JavaScript
// https://code.tutsplus.com/articles/data-structures-with-javascript-tree--cms-23393

console.error("*** Example 2: Tree ***");

function Node(data) {
    this.data = data;
    this.parent = null;
    this.children = [];
}

function Tree(data) {
    let node = new Node(data);
    this._root = node;
}

Tree.prototype.traverseDF = function (callback) {
    // this is a recurse and immediately-invoking function 
    // callback is a function that will be called later
    (function recurse(currentNode) {
        // step 2
        for (var i = 0, length = currentNode.children.length; i < length; i++) {
            // step 3
            recurse(currentNode.children[i]);
        }

        // step 4
        callback(currentNode);

        // step 1
    })(this._root);
}

Tree.prototype.traverseBF = function (callback) {
    var queue = new Queue();

    queue.enqueue(this._root);

    let currentNode = queue.dequeue();

    while (currentNode) {
        for (var i = 0, length = currentNode.children.length; i < length; i++) {
            queue.enqueue(currentNode.children[i]);
        }

        callback(currentNode);
        currentNode = queue.dequeue();
    }
};

Tree.prototype.contains = function (callback, traversal) {
    traversal.call(this, callback);
};

Tree.prototype.add = function (data, toData, traversal) {
    var child = new Node(data),
        parent = null,
        callback = function (node) {
            if (node.data === toData) {
                parent = node;
            }
        };

    this.contains(callback, traversal);

    if (parent) {
        parent.children.push(child);
        child.parent = parent;
    } else {
        throw new Error('Cannot add node to a non-existent parent.');
    }
};

//Example 2.1
let tree = new Tree('one');

tree._root.children.push(new Node('two'));
tree._root.children[0].parent = tree;

tree._root.children.push(new Node('three'));
tree._root.children[1].parent = tree;

tree._root.children.push(new Node('four'));
tree._root.children[2].parent = tree;

tree._root.children[0].children.push(new Node('five'));
tree._root.children[0].children[0].parent = tree._root.children[0];

tree._root.children[0].children.push(new Node('six'));
tree._root.children[0].children[1].parent = tree._root.children[0];

tree._root.children[2].children.push(new Node('seven'));
tree._root.children[2].children[0].parent = tree._root.children[2];

/*
 
 structure of tree
 
 one (depth: 0)
 ├── two (depth: 1)
 │   ├── five (depth: 2)
 │   └── six (depth: 2)
 ├── three (depth: 1)
 └── four (depth: 1)
     └── seven (depth: 2)
 
 */

console.error("*** DEPTH-FIRST SEARCH ***");

tree.traverseDF(function (node) {
    console.log(node.data)
});

console.error("*** BREADTH-FIRST SEARCH ***");

tree.traverseBF(function (node) {
    console.log(node.data)
});

// Example 3: Maps

console.error("*** Example 3: Maps ***");

const person = new Map([
    ['name', 'David'],
    ['age', 23]
]);

// person.forEach((value,key) => {
//     console.log(value, key);
// });

for(let key of person.keys()) {
    console.log(key);
}

for(let value of person.values()) {
    console.log(value);
}

for(let entry of person.entries()) {
    console.log(entry);
}

console.log('EXAMPLE: Delete');
person.delete('name');

for(let entry of person.entries()) {
    console.log(entry);
}

console.log('EXAMPLE: clear');
person.clear();

for(let entry of person.entries()) {
    console.log("test...");
    console.log(entry);
}

person.set('name', 'Carolyn');
person.set('age', 24);

person.forEach((value) => {
    console.log(value);
});