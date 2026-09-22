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
root.left.right.left = new Node(4)
root.left.right.right = new Node(7);

// direita
root.right = new Node(10);
root.right.right = new Node(14);
root.right.right.left = new Node(13);

function searchBST(node, key) {
  // se chegamos em um no nulo, nao encontramos o valor
  if (node === null) {
    return null;
  }

  // se  valor do no atual é o que buscamos, retornamos o no
  if (key === node.value) {
    return node;
  }

  // e a chave for menor. continuamos a busca na subarvore esquerda
  if (key < node.value) {
    return searchBST(node.left, key);
  }

  // e a chave for maior. continuamos a busca na subarvore direita
  return searchBST(node.right, key);
}

const resultado = searchBST(root, 7);

if (resultado !== null) {
  console.log(`Valor ${resultado.value} encontrado na árvore!`);
} else {
  console.log("Valor não encontrado na árvore.");
}
