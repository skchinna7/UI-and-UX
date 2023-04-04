$().ready(function(){
	var $win = $(window);

	$('.main-menu > ul > li').each(function(){
		if ($(this).find('.submenu').length > 0) {
			$(this).hover(function(){
				$(this)
					.addClass('hover')
					.find('.submenu')
					.stop(true, true)
					.fadeIn('fast');
			}, function(){
				$(this)
					.removeClass('hover')
					.find('.submenu')
					.stop(true, true)
					.fadeOut('fast');
			});
		}
	});

	//
	// Features on home page
	//

	var $features = $('#features');
	if ($features.length > 0) {
		$features.find('section').hover(function(){
			$(this).addClass('hover');
		}, function(){
			$(this).removeClass('hover');
		});
	}

	//
	// Case studies
	//

	var $carouselWorks = $('#works');
	if ($carouselWorks.length > 0) {
		var itemWidth = 396,
			winWidth = $win.width(),
			carouselWidth = (Math.round(winWidth / itemWidth)) * itemWidth;
		//console.log('site: ' + winWidth);
		//console.log('carousel: ' + carouselWidth);
		$carouselWorks.css({
			'width': carouselWidth,
			'margin-left': - Math.round((carouselWidth - winWidth) / 2)
		});
		$carouselWorks.jcarousel({
			list: '.wrap',
			items: 'section',
			wrap: 'circular',
			auto: 1,
			animation: {
				duration: 500
			}
		});
		$carouselWorks.jcarouselAutoscroll({
			interval: 3000
		});
		$carouselWorks.on('jcarousel:firstin', 'section', function(event, carousel) {
			$(this).addClass('ninja-first');
		});
		$carouselWorks.on('jcarousel:lastin', 'section', function(event, carousel) {
			$(this).addClass('ninja-last');
		});
		$carouselWorks.on('jcarousel:visiblein', 'section', function(event, carousel) {
			$(this).addClass('showed');
		});
		$carouselWorks.on('jcarousel:visibleout', 'section', function(event, carousel) {
			$(this).removeClass('showed');
		});
		$carouselWorks.on('jcarousel:scroll', function(event, carousel, target, animate) {
			$carouselWorks.find('section').removeClass('ninja-first ninja-last');
		});
		var $itemsVisible = $carouselWorks.jcarousel('visible');
		$itemsVisible.addClass('showed');
		$itemsVisible.first().addClass('ninja-first');
		$itemsVisible.last().addClass('ninja-last');
		$carouselWorks.find('section').click(function(e){
			if ($(this).hasClass('ninja-first')) {
				$carouselWorks.jcarousel('scroll', '-=1');
				e.preventDefault();
			}
			if ($(this).hasClass('ninja-last')) {
				$carouselWorks.jcarousel('scroll', '+=1');
				e.preventDefault();
			}
		});
		$win.resize(function(){
			winWidth = $win.width();
			carouselWidth = (Math.round(winWidth / itemWidth)) * itemWidth;
			$carouselWorks.css({
				'width': carouselWidth,
				'margin-left': - Math.round((carouselWidth - winWidth) / 2)
			});

			$carouselWorks.jcarousel('reload');

			var $itemsVisible = $carouselWorks.jcarousel('visible');
			$itemsVisible.removeClass('showed ninja-first ninja-last');
			$itemsVisible.addClass('showed');
			$itemsVisible.first().addClass('ninja-first');
			$itemsVisible.last().addClass('ninja-last');
		});
	}

	//
	// Quotes
	//

	var $glideQuotes = $('#quotes');
	if ($glideQuotes.length > 0) {
		$glideQuotes.glide({
			type: 'carousel',
			autoplay: 4000
		});
	}

	//
	// Steps
	//

	$('.steps').each(function(){
		var $el = $(this),
			$steps = $el.find('.step'),
			time = 1000,
			totalTime = $steps.length * time,
			currentTime = totalTime,
			start = $el.offset().top - $win.height() + $el.height();
		$win.scroll(function(){
			var Y = $win.scrollTop(),
				state = $el.attr('data-state');
			if (Y >= start && state != 'started') {
				$el.attr('data-state', 'started');
				$steps.each(function(){
					var $step = $(this);
					setTimeout(function(){
						$step.addClass('showed');
					}, currentTime);
					currentTime -= time;
				});
				var $line = $('<li class="line"></li>');
				$el.append($line);
				$line.animate({
					'height': $el.outerHeight() - 38 + 'px'
				}, totalTime);
			}
		});
	});

	//
	// Offices
	//

	var $offices = $('#offices');
	if ($offices.length > 0) {
		$offices.find('.office').hover(function(){
			$(this).addClass('hover');
		}, function(){
			$(this).removeClass('hover');
		});
	}

	//
	// Clients
	//
	
	var $glideClients = $('#clients');
	if ($glideClients.length > 0) {
		$glideClients.glide({
			type: 'carousel',
			autoplay: 4000
		});
	}
});

// Preload images
var cache = [];
$.preloadImages = function($args) {
	var args_len = $args.length;
	for (var i = args_len; i--;) {
		var cacheImage = document.createElement('img');
		cacheImage.src = $args[i];
		cache.push(cacheImage);
	}
};