class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

function preOrder(node) {
    if (node === null) return; // encerra a funcao

    console.log(node.value); // acessa o valor atual
    preOrder(node.left); // vai pra esquerda ate ser null
    preOrder(node.right); // vai pra direita assim que conclui a esquerda
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

preOrder(root) // começa na raiz

