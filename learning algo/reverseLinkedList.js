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