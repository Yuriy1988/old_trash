function BlockController () {
    var red = new Block('red', getEl('red')),
        green = new Block('green', getEl('green')),
        blue = new Block('blue', getEl('blue'));

    function getEl(id) {
        return document.getElementById(id);
    }
    return this;
}