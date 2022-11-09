function Node(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
  
  const tree = new Node(7);
  tree.right = new Node(9);
  tree.right.right = new Node(14);
  tree.right.left = new Node(null);
  tree.left = new Node(2);
  tree.left.left = new Node(1);
  tree.left.right = new Node(5);
  
  const The_sum = (tree, f)=>{
    const find =  (root, f, arr)=>{
      if (root == null) return false;
      if (arr.includes(f - root.value)) 
      return true; 
      arr.push(root.value);
      return find(root.left, f, arr) || find(root.right, f, arr); 
  };
    let container = [];
    return find(tree, f, container);
  };
  
  console.log(" The_sum", The_sum(tree, 3));
  
  module.exports = {
      Node,
      The_sum
  }