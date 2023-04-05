var $navlist = $('#navlist'),
    $tip = $( $.parseHTML('<div id="hint">You\'ll want to click this</div>') );

$('#showmenu').on('click', function () {
  $navlist.toggleClass('show');
  $tip.detach();
});


// make a nice presentation guide
$(document).ready( function () {
  
  $menuButton = $('#showmenu');
  
  $tip
    .css({
      'font-size': '18px',
      'font-weight': '600',
      'line-height': '20px',
      'padding': '10px'
    })
    .offset({
      top: $menuButton.offset().top + 2,
      left: $navlist.width() - 15
    })
    .appendTo('body');
  
});