// thanks @vncnz :)
function findBrowserTransform() {
    if (!window.getComputedStyle)
        return false;

    var el = document.createElement('p'), 
        has3d,
        transforms = {
            'webkitTransform':'-webkit-transform',
            'OTransform':'-o-transform',
            'msTransform':'-ms-transform',
            'MozTransform':'-moz-transform',
            'transform':'transform'
        };

    // Add it to the body to get the computed style.
    document.body.insertBefore(el, null);

    for (var t in transforms) {
        if (el.style[t] !== undefined) {
            el.style[t] = "translate3d(1px,1px,1px)";
            has3d = window.getComputedStyle(el).getPropertyValue(transforms[t]);
          return t;
        }
    }

    document.body.removeChild(el);
    return "transition";
}

var sentence = document.querySelector(".sentence");
var browserTransform = findBrowserTransform();

document.addEventListener("mousemove", function(e) {  
  xpos = e.offsetX == undefined ? e.layerX : e.offsetX;
  ypos = e.offsetY == undefined ? e.layerY : e.offsetY;
  
  var ax = -(window.innerWidth / 2 - xpos) / 20;
  var ay = (window.innerHeight / 2 - ypos) / 10;
  
  sentence.style[browserTransform] = "rotateY("+ax+"deg) rotateX("+ay+"deg)";
});