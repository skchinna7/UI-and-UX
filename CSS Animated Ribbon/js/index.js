$('.ribbon').on('click', function() {	
  var self = $(this),
      newone = self.clone(true);
  
  self.before(newone);
  $("." + self.attr("class") + ":last").remove();
});