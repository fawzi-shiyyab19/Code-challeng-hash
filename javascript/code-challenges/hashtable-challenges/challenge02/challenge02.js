'use strict';

class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null
  }
  append(value) {
    let node = new Node(value);
    if (this.head) {
      let currentNode = this.head;
      while (currentNode.next) {
        currentNode = currentNode.next;
      }
      currentNode.next = node;
    } else {
      this.head = node;
    }
  }
}

class HashTable {
  constructor(size) {
    this.size = size;
    this.table = new Array(size);
  }

  hash(key) {
    let ascii = key.split('').reduce((acc, item) => {
      return item.charCodeAt() + acc;
    }, 0);
    return (ascii * 599) % (this.size);
  }

  set(key, value) {
    let index = this.hash(key);
    if (this.table[index]) {
      this.table[index].append({ [key]: value });
    } else {
      const ll = new LinkedList();
      this.table[index] = ll;
      ll.append({ [key]: value });
    }
  }

  get(key) {
    if (this.table[this.hash(key)]) {
      let ll = this.table[this.hash(key)];
      let currentNode = ll.head;
      while (currentNode) {
        if (Object.keys(currentNode.value) == key) {
          return currentNode.value[key];
        } else {
          currentNode = currentNode.next;
        }
      }
    } else {
      console.log('index is empty');
    }
  }
}

function firstWordRepet(str) {
  let obj = new HashTable(10);
  let arr = str.split(' ');
  for (let i = 0; i < arr.length; i++) {
    obj[arr[i]] = arr[i];
    if (obj[arr[i + 1]]) {
      return arr[i + 1];
    }
  }
  return 'No Repetition';
}

module.exports = {
  firstWordRepet
}