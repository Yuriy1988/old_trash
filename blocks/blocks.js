function Block (_color, _el) {
    var color = _color,
        button = document.getElementById('def'),
        el = _el;

    resetColors();
    init();

    m.subscribe('default', setDef);
    function resetColors () {
        button.addEventListener('click', shareDef, false);
    }

    function shareDef () {
        m.publish('default', color);
    }

    function setDef () {
        el.className = color;
    }

    function init () {
        el.addEventListener('click', shareColor, false);
        m.subscribe('color-shared', setColor);
    }

    function setColor (colorClass) {
        el.className = colorClass;
    }

    function shareColor () {
        m.publish('color-shared', color)
    }
    return this;
}