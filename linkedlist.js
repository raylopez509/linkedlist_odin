class LinkedList {
  head = null;
  tail = null;
  size = 0;

  append(value) {
    const newNode = new Node(value);
    if(this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    }
    else {
      let node = this.head;
      while(node.nextNode != null) {
        node = node.nextNode;
      }
      node.nextNode = newNode;
      this.tail = newNode;
    }
    this.size++;
  }

  prepend(value) {
    const newNode = new Node(value);
    if(this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    }
    else {
      let node = this.head;
      newNode.nextNode = node;
      this.head = newNode;
    }
    this.size++;
  }

  at(index) {
    let node = this.head;
    for(let i = 0; i < index; i++) {
      node = this.head.nextNode;
    } 
    return node;
  }

  pop() {
    let node = this.head;
    let newTail = this.head;
    if(this.head === this.tail) {
      this.head = null;
      this.tail = null;
      
    } else {
      node = node.nextNode;
      while(node.nextNode != null) {
        newTail = node;
        node = node.nextNode;
      }
      this.tail = newTail;
      newTail.nextNode = null;
    }
    this.size--;
  }

  contains(value) {
    let node = this.head;
    while(node != null) {
      console.log(node.value + " = " + value);
      if(node.value === value) {
        return true;
      }
      node = node.nextNode;
    }
    return false;
  }

  toString() {
    if(this.head === null) {
      return "empty list";
    }
    else {
      let str = "";
      let node = this.head;
      str += `( ${node.value} )`;
      while(node.nextNode != null) {
        node = node.nextNode;
        str += ` -> ( ${node.value} )`;
      }
      str += " -> null";
      return str;
    }
  }
}

class Node {
  constructor(value = null, nextNode = null) {
    this.value = value;
    this.nextNode = nextNode;
  }
}

const ll = new LinkedList();
ll.append(1);
ll.append(2);
ll.prepend(0);
console.log(ll.toString());
console.log(ll.contains(1));
console.log(ll.contains(2));
console.log(ll.toString());