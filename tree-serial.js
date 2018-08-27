/**
 * Given the root to a binary tree, implement serialize(root), which serializes the tree into a string, 
 * and deserialize(s), which deserializes the string back into the tree.
 */


class TreeNode
{
    constructor(val, left, right)
    {
        this.val = val;
        this.left = left || null;
        this.right = right || null;
    }
}



function serialize(root)
{
    if (root == null) { return "^"; }
    let outputString = "";
    outputString += encodeURI(root.val);
    outputString += "|" + serialize(root.left);
    outputString += "|" + serialize(root.right);
    return outputString;
}

function deserialize(str)
{
    let valArray = str.split("|");
    let index = 0;


    function treeFromArray()
    {
        if (valArray[index] == "^")
        {
            return null;
        }

        var node = new TreeNode(valArray[index]);

        index++;
        node.left = treeFromArray();

        index++;
        node.right = treeFromArray();

        return node;
    }

    return treeFromArray();
}




let originalTree = new TreeNode('foo', new TreeNode('bar', new TreeNode("bop"), null), new TreeNode('baz', null, new TreeNode("mow", new TreeNode("troz"), null)));
let rehydratedTree = deserialize(serialize(originalTree));

console.log(`The damn thing works: ${JSON.stringify(originalTree) === JSON.stringify(rehydratedTree)}`);