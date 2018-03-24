(function() {
    function SimpleGetter (tree, selector) {
        var treeCopy = tree;
        while(selector.length !== 0) {
            treeCopy = treeCopy[selector.shift()];
        }
        return treeCopy;
    }
    if (typeof module !== 'undefined' && typeof module.exports !== 'undefined')
        module.exports = SimpleGetter;
    else
        window.SimpleGetter = SimpleGetter;
})();