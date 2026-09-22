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

function insertBST(root, key) {
  if (root === null) {
    return new Node(key);
  }

  let atual = root;

  while (true) {
    if (key < atual.value) {
      if (atual.left === null) {
        atual.left = new Node(key);
        break;
      }
      atual = atual.left;
    } else {
      if (atual.right === null) {
        atual.right = new Node(key);
        break;
      }
      atual = atual.right;
    }
  }

  return root;
}

insertBST(root, 9);