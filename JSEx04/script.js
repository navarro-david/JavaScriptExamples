// Example 1: Classes in Vanilla JavaScript

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

tree.traverseDF(function(node) {
    console.log(node.data)
});