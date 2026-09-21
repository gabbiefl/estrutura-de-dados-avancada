class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function inOrder(node) {
  if (node === null) return;

  inOrder(node.left); // percorre a subarvore esquerda
  console.log(node.value); // acessa raiz
  inOrder(node.right); // percorre a subarvore direita
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

inOrder(root)
