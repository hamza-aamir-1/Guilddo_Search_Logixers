// === Search Section ===
// Filter Tab
$(document).ready(function() {
	var $btns = $('.search_tabs').click(function() {
	  if (this.id == 'all') {
	    $('#parent > section').fadeIn(450);
	  } else {
	    var $el = $('.' + this.id).fadeIn(450);
	    $('#parent > section').not($el).hide();
	  }
	  $btns.removeClass('active');
	  $(this).addClass('active');
	})
});