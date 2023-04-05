$('.grow').on('click', function(){
  $('.ribbon').css({
    fontSize: '+=5px'
  });
});


$('.shrink').on('click', function(){
  $('.ribbon').css({
    fontSize: '-=5px'
  });
});