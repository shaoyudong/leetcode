function ListNode(val) {
    this.val = val;
    this.next = null;
}
ListNode.prototype.toString = function() {
    var l = this;
    var res = '';
    while (l.next) {
        res += l.val + ' -> ';
        l = l.next;
    }
    res += l.val;
    return res;
}
var n1 = new ListNode(2), n2 = new ListNode(4), n3 = new ListNode(3);
n1.next = n2;
n2.next = n3;
var n4 = new ListNode(5), n5 = new ListNode(6), n6 = new ListNode(4);
n4.next = n5;
n5.next = n6;
var l1 = n1, l2 = n4;

function addTwoNumbers(l1, l2) {
    var res = new ListNode();
    var head = res;
    var addNum = 0, prevNum = 0;
    var val = 0;
    while (l1 || l2 || prevNum) {
        var val1 = l1 && l1.val || 0;
        var val2 = l2 && l2.val || 0;
        [val, addNum] = add(val1, val2)
        res.val = add(val, prevNum)[0];
        prevNum = addNum + add(val, prevNum)[1];
        if (l1.next || l2.next || prevNum) {
            res.next = new ListNode();
        }
        res = res.next;
        l1 = l1.next;
        l2 = l2.next;
    }
    return head;
}

function add(v1, v2) {
    var total = v1 + v2;
    var rest = total % 10;
    var addNum = Math.floor(total / 10);
    return [rest, addNum];
}

function reverseList(l) {
    var prevList = null;
    var reversedHead = null;
    while (l) {
        var next = l.next;
        if (next === null) reversedHead = l;
        l.next = prevList;
        prevList = l;
        l = next;
    }
    return reversedHead;
}
console.log(addTwoNumbers(l1, l2).toString());


