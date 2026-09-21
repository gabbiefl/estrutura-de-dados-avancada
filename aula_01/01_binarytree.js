class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

// raiz
const root = new Node("A");

// filhos da raiz

// esquerda
root.left = new Node("B");
root.left.left = new Node("D");
root.left.right = new Node("E");

// direita
root.right = new Node("C");
root.right.left = new Node("F");
root.right.right = new Node("G");
