(function() {
    function Getter(data, ref) {
        var ref2 = data;
        for (var deepness in ref) {
            ref2 = ref2[ref[deepness]];
        }
        return ref2;
    };
    if (typeof module !== 'undefined' && typeof module.exports !== 'undefined')
        module.exports = Getter;
    else
        window.Getter = Getter;
})();