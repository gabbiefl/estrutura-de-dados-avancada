class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

// raiz
const root = new Node(8);

// filhos da raiz

// esquerda
root.left = new Node(3);
root.left.left = new Node(1);
root.left.right = new Node(6);
root.left.right.left = new Node(4);
root.left.right.right = new Node(7);

// direita
root.right = new Node(10);
root.right.right = new Node(14);
root.right.right.left = new Node(13);

function deleleteBST(node, key) {
  // se chegamos em um nó nulo, não encontramos o valor
  if (node === null) {
    return null;
  }

  if (key < node.value) {
    node.left = deleleteBST(node.left, key);
    return node;
  }

  if (key > node.value) {
    node.right = deleleteBST(node.right, key);
    return node;
  }

  if (node.left === null && node.right === null) {
    return null;
  }

  if (node.left === null) {
    return node.right;
  }

  if (node.right === null) {
    return node.left;
  }

  let sucessor = node.right;
  while (sucessor.left !== null) {
    sucessor = sucessor.left;
  }
  node.value = sucessor.value;
  node.right = deleleteBST(node.right, sucessor.value);
  return node;
}

const resultado = deleleteBST(root, 10);