class TreeNode {
    constructor(val, left, right) {
        this.val = val;
        this.left = left || null;
        this.right = right || null;
    }
}


function deepest(rootNode) {


    function deepestNodeDepthTuple(nodeDepthTuple) {
        if (!nodeDepthTuple.node.left && !nodeDepthTuple.node.right) {
            return nodeDepthTuple;
        }

        if (!nodeDepthTuple.node.left) {
            return deepestNodeDepthTuple({ node: nodeDepthTuple.node.right, depth: nodeDepthTuple.depth + 1 });
        }

        if (!nodeDepthTuple.node.right) {
            return deepestNodeDepthTuple({ node: nodeDepthTuple.node.left, depth: nodeDepthTuple.depth + 1 });
        }

        deepestLeft = deepestNodeDepthTuple({ node: nodeDepthTuple.node.left, depth: nodeDepthTuple.depth + 1 });
        deepestRight = deepestNodeDepthTuple({ node: nodeDepthTuple.node.right, depth: nodeDepthTuple.depth + 1 })

        return (deepestRight.depth > deepestLeft.depth) ? deepestRight : deepestLeft

    }

    return deepestNodeDepthTuple({ node: rootNode, depth: 0 }).node; // Could also return depth if we cared.

}


let originalTree =
    new TreeNode('foo',
        new TreeNode('bar',
            new TreeNode("bop",
                new TreeNode("boom"),
                null),
            null),
        new TreeNode('baz',
            new TreeNode("bing",
                new TreeNode("bang",
                    null,
                    new TreeNode("dingdingding")
                ),
                null),
            new TreeNode("mow",
                new TreeNode("troz"),
                null)
        )
    );

let deepestNode = deepest(originalTree);

console.log(deepestNode);