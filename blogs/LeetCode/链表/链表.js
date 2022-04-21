class LinkedList {
  constructor() {
    this.head = null;
  }

  // O(1)
  insert(node) {
    if (this.head !== null) {
      node.next = this.head;
    }
    this.head = node;
  }

  // O(n)
  find(node) {
    let p = this.head; // 创建一个遍历指针
    while (p && p !== node) { // 当p为null或者p为node时,停止遍历
      p = p.next;
    }
    return p; // 如果node在链表中, p = node,否则返回null
  }
}

function ListNode(key) {
  this.key = key;
  this.next = null;
}

const list = new LinkedList();
const node = new ListNode(1);

list.head = node;

const node2 = new ListNode(2)

node2.next = list.head;

list.head = node2;

console.log(list.find(node));
console.log(list);
