class LinkedList {
  head = null;
  tail = null;
  size = 0;

  append(value) {
    const newNode = new Node(value);
    if(this.head === null) {
      this.head = newNode;
    }
    else {
      let node = this.head;
      while(node.nextNode != null) {
        node = node.nextNode;
      }
      node.nextNode = newNode;
    }
    this.size++;
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
console.log(ll.toString());