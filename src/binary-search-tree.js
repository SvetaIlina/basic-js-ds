const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {

  constructor () {
    this.parentRoot = null;
  }

  root() {
    return this.parentRoot
  }

  add(data) {
   
    this.parentRoot = addNew(this.parentRoot, data)
    

    function addNew (node, value) {
      if(!node) {
        return new Node(value)
      }
      if (node.data === value) {
        return node
      } else if (node.data < value) {
        node.right = addNew(node.right, value)
      } else {
        node.left = addNew(node.left, value)
      }
      return node
    }

    }
  

  has(data) {
     return this.find(data) ? true : false

  }

  find(data) {
    function findData(node, value){
      if(!node) {
        return null
      } else if (node.data === value){
         return node
      } else if ( node.data > value) {
        return findData(node.left, value)
      } else {
        return findData(node.right, value)
      }
    }

    return findData(this.parentRoot, data)
  }

  remove(data) {
    this.parentRoot = removeData(this.parentRoot, data)

    function removeData(node, value) {
      if(!node) {
        return null
      }

      if(node.data > value) {
        node.left = removeData(node.left, value)
        return node
        } else if(node.data < value) {
          node.right = removeData(node.right, value)
          return node
        } else {
          if(!node.left) {
            node = node.right
            return node
          } else if (!node.right) {
            node = node.left
            return node
          } else if(!node.right && !node.left) {
            return null
          } else {

            let max = node.left
            while(max.right) {
              max = max.right
            }
  
            node.data = max.data
  
            node.left = removeData(node.left, max.data)
            return node;

            
          }

        
          }
    }
  }

  min() {
    if(!this.parentRoot) {
      return null
    } else{
      let node = this.parentRoot
      while(node.left) {
        node = node.left
      }
      return node.data;
    }

  }

  max() {
    if(!this.parentRoot) {
      return null
    } else{
      let node = this.parentRoot
      while(node.right) {
        node = node.right
      }
      return node.data;
    }
  }
}


module.exports = {
  BinarySearchTree
};