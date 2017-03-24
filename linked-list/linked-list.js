'use strict'

function Node(value=null, previous=null, next=null) {
  this.val = value;
  if (!previous && !next) {
    this.prev = this;
    this.next = this;
  } else {
    this.prev = previous;
    this.prev.next = this;
    this.next = next;
    this.next.prev = this;
  }
}

function deleteNode(node) {
  node.prev.next = node.next;
  node.next.prev = node.prev;
  return node.val;
}

// Implementation of double linked list with a main node for constant time...
// retrieval of first and last elements.
let LinkedList = function() {
  this.main = new Node();
  this.nodes = 0;
}

// insert value at end of list.
LinkedList.prototype.push = function(value) {
  this.main.prev = new Node(value, this.main.prev, this.main);
  this.nodes += 1;
}

// remove value at end of list.
LinkedList.prototype.pop = function() {
  let popped = deleteNode(this.main.prev);
  this.nodes -= 1;
  return popped;
}

// remove value at front.
LinkedList.prototype.shift = function() {
  let shifted = deleteNode(this.main.next);
  this.nodes -= 1;
  return shifted;
}

// insert value at front.
LinkedList.prototype.unshift = function(value) {
  this.main.next = new Node(value, this.main, this.main.next);
  this.nodes += 1;
}

// delete node with input value.
LinkedList.prototype.delete = function(value) {
  let startNode = this.main.prev;
  while (startNode !== this.main) {
    if (startNode.val === value) {
      deleteNode(startNode);
      this.nodes -= 1;
      break;
    }
    startNode = startNode.prev;
  }
}

LinkedList.prototype.count = function() {
  return this.nodes;
}

module.exports = LinkedList;
