// WHERE THE MAGIC HAPPENS
$(document).ready( function () {
  function distMetric(x, y, x2, y2) {
    var xDiff = x - x2,
        yDiff = y - y2;
    return (xDiff * xDiff) + (yDiff * yDiff);
  }
  function closestEdge(x, y, w, h) {
    var topEdgeDist = distMetric(x, y, w / 2, 0),
        leftEdgeDist = distMetric(x, y, 0, h / 2),
        rightEdgeDist = distMetric(x, y, w, h / 2),
        bottomEdgeDist = distMetric(x, y, w / 2, h),
        min = Math.min(topEdgeDist, leftEdgeDist, rightEdgeDist, bottomEdgeDist);
    switch (min) {
      case topEdgeDist: return 'top';
      case leftEdgeDist: return 'left';
      case rightEdgeDist: return 'right';
      case bottomEdgeDist: return 'bottom';
    }
  }
  $('#content .item').each( function () {
    var $this = $(this),
        $slider = $('<div/>').addClass('slider').appendTo($this),
        transition = 'slide',
        speed = 150;
    $this.on({
      mouseenter: function (e) {
        var edge = closestEdge(e.offsetX, e.offsetY, $this.width(), $this.height());
        if ( edge == 'top' ) { $slider.stop(true, true).show(transition, {direction: 'up'}, speed); }
        else if ( edge == 'left' ) { $slider.stop(true, true).show(transition, {direction: 'left'}, speed); }
        else if ( edge == 'right' ) { $slider.stop(true, true).show(transition, {direction: 'right'}, speed); }
        else if ( edge == 'bottom' ) { $slider.stop(true, true).show(transition, {direction: 'down'}, speed); }
      }, mouseleave: function (e) {
        var edge = closestEdge(e.offsetX, e.offsetY, $this.width(), $this.height());
        if ( edge == 'top' ) { $slider.hide(transition, {direction: 'up'}, speed); }
        else if ( edge == 'left' ) { $slider.hide(transition, {direction: 'left'}, speed); }
        else if ( edge == 'right' ) { $slider.hide(transition, {direction: 'right'}, speed); }
        else if ( edge == 'bottom' ) { $slider.hide(transition, {direction: 'down'}, speed); }
      }
    });
  });
});