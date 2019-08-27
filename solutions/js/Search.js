var stack = [];
var queue = [];

function DFS(node) {
    stack.push(node);
    while (stack.length) {
        node = stack.pop();
        console.log(node.val);
        if (node.children && node.children.length) {
            for (var i = node.children.length - 1; i >= 0; i--) {
                stack.push(node.children[i]);
            }
        }
    }
}

function BFS(node) {
    queue.push(node);
    while (queue.length) {
        node = queue.shift();
        console.log(node.val);
        if (node.children && node.children.length) {
            for (var i = 0; i < node.children.length; i++) {
                queue.push(node.children[i]);
            }
        }
    }
}

var tree = {
    val: 1,
    children: [
        {
            val: 2,
            children: [
                {
                    val: 5
                }
            ]
        },
        {
            val: 3,
            children: [
                {
                    val: 6
                },
                {
                    val: 7
                }
            ]
        },
        {
            val: 4,
            children: [
                {
                    val: 8
                }
            ]
        },
    ]
}


BFS(tree);
