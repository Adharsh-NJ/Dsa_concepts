//142:linked list cycle 2

var detectCycle = function(head) {
    let slow = head;
    let fast = head;

    while(fast && fast.next){
        slow = slow.next;
        fast = fast.next.next;
        if (slow === fast) {
            // Step 2: Find the start of the cycle
            slow = head;
            while (slow !== fast) {
                slow = slow.next;
                fast = fast.next;
            }
            return slow;  // The start of the cycle
        }
    }
    return null
};

//206. Reverse Linked List

var reverseList = function(head) {
    let current = head;
    let start = null;
    while(current){
     let temp = current.next;
     current.next = start;
     start = current;
     current = temp
    }
    return start;
 };

//142. Linked List Cycle II


var detectCycle = function(head) {
    let slow = head;
    let fast = head;

    while(fast && fast.next){
        slow = slow.next;
        fast = fast.next.next;
        if (slow === fast) {
            // Step 2: Find the start of the cycle
            slow = head;
            while (slow !== fast) {
                slow = slow.next;
                fast = fast.next;
            }
            return slow;  // The start of the cycle
        }
    }
    return null
};

//234. Palindrome Linked List

var isPalindrome = function(head) {
    let fast = head;
    let slow = head;
    while(fast && fast.next){
        slow = slow.next;
        fast = fast.next.next
    }
    let prev = null;
    while(slow){
        let temp = slow.next;
        slow.next = prev;
        prev = slow;
        slow = temp;
    }
    let left = head;
    let right = prev;
    while(right){
        if(left.val !== right.val){
            return false
        }
        left = left.next
        right = right.next
    }
    return true;
};

////237. Delete Node in a Linked List
//237. Delete Node in a Linked List
var deleteNode = function(node) {
    if (node == null || node.next == null) {
        throw new Error("The node to delete cannot be the last node or null");
    }
    
    let nextNode = node.next;
    node.val = nextNode.val;  // Copy the value from the next node to the current node
    node.next = nextNode.next;  // Link the current node to the next-next node
};

//23. Merge k Sorted Lists

class NewNode {
    constructor(val = 0, next = null) {
        this.val = val;
        this.next = next
    }
}
var mergeKLists = function (lists) {
    let result = [];
    let arr = [];
    let minQueue = new MinPriorityQueue({ priority: (node) => node.val });

    for (let i = 0; i < lists.length; i++) {
        if (lists[i]) {
            minQueue.enqueue(lists[i]);
        }
    }
    let dummyNode = new NewNode()
    let current = dummyNode
    while (!minQueue.isEmpty()) {
      let minNode = minQueue.dequeue().element;
      current.next = minNode;
      current = current.next;
      if(minNode.next){
        minQueue.enqueue(minNode.next);
      }
    }

    // Return the merged list, starting from the node after the dummy
    return dummyNode.next;
};