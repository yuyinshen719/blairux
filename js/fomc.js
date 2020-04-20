$(document).ready(function(){
	$('.solution-nav-item').on('click',	SelectSolutionView);
	$('.solution-nav-item').hover(SelectSolutionView);
});

var SelectSolutionView = function() {
	// set active tab
	$('.solution-nav-item').removeClass('active');
	$(this).addClass('active');

	var newSource = '/imgs/' + $(this).attr('data-view');
	$('.solution-iteration-view').attr('src',newSource);
};