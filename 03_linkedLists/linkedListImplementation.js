class LinkedList {
    constructor(value) {
      this.head = {
        value: value,
        next: null
      };
      this.tail = this.head;
      this.length = 1;
    }
    append(value) {
      const newNode = {
        value: value,
        next: null
      }
      this.tail.next = newNode; //adding next to the last value added 
      //note: after the first update this.head.next is pointing to newNode created and this.tail is also newNode on further update newNodes next is updated so it is added to the end of the head and tail has reference to this last item that is newNode
      console.log(this);
      this.tail = newNode;//making tail the new node created
      console.log(this);
      this.length++;
      return this;
    }
    prepend(value) {
      const newNode = {
        value: value,
        next: null
      }
      newNode.next = this.head;
      this.head = newNode;
      this.length++;
      return this;
    }
    printList() {
      const array = [];
      let currentNode = this.head;
      while(currentNode !== null){
          array.push(currentNode.value)
          currentNode = currentNode.next
      }
      return array;
    }
    insert(index, value){
      //Check for proper parameters;
      if(index >= this.length) {
        console.log('yes')
        return this.append(value);
      }
      
      const newNode = {
        value: value,
        next: null
      }
      const leader = this.traverseToIndex(index-1);
      const holdingPointer = leader.next;
      leader.next = newNode;
      newNode.next = holdingPointer;
      this.length++;
      return this.printList();
    }
    traverseToIndex(index) {
      //Check parameters
      let counter = 0;
      let currentNode = this.head;
      while(counter !== index){
        currentNode = currentNode.next;
        counter++;
      }
      return currentNode;
    }
    remove(index) {
      // Check Parameters      
      const leader = this.traverseToIndex(index-1);
      const unwantedNode = leader.next;
      leader.next = unwantedNode.next;
      this.length--;
      return this.printList();
    }
  }
  
  let myLinkedList = new LinkedList(10);
  myLinkedList.append(5);
  myLinkedList.append(16);
  // myLinkedList.prepend(1);
  // console.log(myLinkedList);
  // myLinkedList.insert(2, 99);
  // myLinkedList.insert(20, 88);
  // myLinkedList.remove(2);
  
  
  
  