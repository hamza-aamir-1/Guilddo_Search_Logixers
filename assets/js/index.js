// === Search Section ===
// Filter Tab
$(document).ready(function() {
	var $btns = $('.search_tabs').click(function() {
	  if (this.id == 'all') {
	    $('#main > section').fadeIn(450);
	  } else {
	    var $el = $('.' + this.id).fadeIn(450);
	    $('#main > section').not($el).hide();
	  }
	  $btns.removeClass('active');
	  $(this).addClass('active');
	})
});