// function used to create the nodes of the linked list
function ListNode(val) {
  this.val = val;
  this.next = null;
}

function createLinkedList(arr) {
  // Create a reference head to start the creation of the linked list
  const List = new ListNode(0);
  let head = List;

  // This can be a loop using an array to create all the nodes of the linked list
  for (let i = 0; i < arr.length; i += 1) {
    head.next = new ListNode(arr[i]);
    head = head.next;
  }

  // Return the linked list without the reference value
  return List.next;
}

const linkedList = createLinkedList([2, 4, 3]);
console.log(linkedList);
