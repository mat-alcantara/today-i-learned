function ListNode(val) {
  this.val = val;
  this.next = null;
}

const addTwoNumbers = (l1, l2, carry = false) => {
  let node = null;

  if (l1 || l2) {
    const val1 = l1 ? l1.val : 0;
    const val2 = l2 ? l2.val : 0;

    const next1 = l1 ? l1.next : null;
    const next2 = l2 ? l2.next : null;

    const val = carry ? val1 + val2 + 1 : val1 + val2;

    // Example: 9 % 10 = 9; 12 % 10 = 2
    node = new ListNode(val % 10);
    node.next = addTwoNumbers(next1, next2, val >= 10);
  } else if (carry) {
    node = new ListNode(1);
  }
  return node;
};

addTwoNumbers(
  { val: 2, next: { val: 4, next: { val: 3, next: null } } },
  { val: 5, next: { val: 6, next: { val: 4, next: null } } }
);
