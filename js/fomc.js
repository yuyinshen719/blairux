$(document).ready(function(){
	$('.solution-nav-item').on('click',	SelectSolutionView);
	$('.solution-nav-item').hover(SelectSolutionView);


	var magImage = $('.magnify-image');
	var magFocus = $('.magnify-focus');

    magImage.on('mouseover', function() {
        magFocus.css('opacity', 1);
    });
    magImage.on('mouseout', function() {
        magFocus.css('opacity', 0);
    });
    magImage.mousemove(function(pointer) {
		//var delta = 2;
		var delta = 1974 / $(this).width();
        var imageOffset = $(this).offset();
    	var topOffset = pointer.pageY - imageOffset.top;
        var leftOffset = pointer.pageX - imageOffset.left;
        var bgTop = (-1 * topOffset * delta) + (600 / delta);
        var bgLeft = (-1 * leftOffset * delta) + (600 / delta);
        magFocus.css({
            'left': leftOffset - 300,
            'top': topOffset - 300,
            'background-position': bgLeft + 'px ' + bgTop + 'px'
        });
    });
});

var SelectSolutionView = function() {
	// set active tab
	$('.solution-nav-item').removeClass('active');
	$(this).addClass('active');

	var newSource = 'imgs/' + $(this).attr('data-view');
	$('.solution-iteration-view').attr('src',newSource);
};