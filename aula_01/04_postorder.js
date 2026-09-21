class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

function postOrder(node) {
    if (node === null) return;

    postOrder(node.left);
    postOrder(node.right);
    console.log(node.value);
}

const root = new Node("A");

// esquerda
root.left = new Node("B");
root.left.left = new Node("D");
root.left.right = new Node("E");

// direita
root.right = new Node("C");
root.right.left = new Node("F");
root.right.right = new Node("G");

postOrder(root)
