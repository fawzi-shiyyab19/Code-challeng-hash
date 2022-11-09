const {Node,The_sum} = require("./challenge01")

describe('Sum', () => {

    test('Sum TEST', () => {
       const tree = new Node(7);
       tree.right = new Node(9);
       tree.right.right = new Node(14);
       tree.right.left = new Node(null);
       tree.left = new Node(2);
       tree.left.left = new Node(1);
       tree.left.right = new Node(5);
        
       const test1 = The_sum(tree,3)
       const test2 = The_sum(tree,4)
       
     expect(test1).toBeTruthy()
     expect(test2).toBeFalsy()
  });
});