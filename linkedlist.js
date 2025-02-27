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
    }
    else {
      let node = this.head;
      newNode.nextNode = node;
      this.head = newNode
    }
    this.size++;
  }

  at(index) {
    let node = this.head
    for(let i = 0; i < index; i++) {
      node = this.head.nextNode;
    } 
    return node;
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
console.log(ll.size);
console.log(ll.at(0));
console.log(ll.tail);