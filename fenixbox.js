$(document).ready(function (){
	$('.fenixbox').fenixBox();
});

(function($){

	$.fn.fenixBox = function(){
			
			function removeFenixBox(){
					$('#fenixbox-overlay, #fenixbox').fadeOut(500, function(){ $(this).remove(); });
					$('html').css({'overflow-y': 'scroll'});
			}
			
			this.click(function(){
					$('html').css({'overflow-y': "hidden"});
					
					// Display overlay
					$('<div id="fenixbox-overlay"></div>')
						.css({
								'top': '"' + $(document).scrollTop() + '"',
								'opacity': '0',
								'cursor': 'pointer'
						})
						.animate({'opacity': '0.7'}, 'slow')
						.appendTo('body')
						.click(function(){
								removeFenixBox();
						});
					
					// Add font-awesome load icon.
					$('<i></i>')
						.addClass('fa fa-spinner fa-pulse fa-3x fenixbox-loader')
						.css({'top': parseInt($(window).height() / 2), 'left': parseInt(($(window).width() / 2) - 20)})
						.appendTo('#fenixbox-overlay');	
						
					// Add and hide the box the image shows in	
					$('<div id="fenixbox"></div>')
						.hide()
						.appendTo('body');
					
					// Create and load image
					$('<img>')
						.attr('src', $(this).attr('src'))
						.css({
								'max-height': parseInt($(window).height() - 100),
								'max-width': parseInt($(window).width() - 100)
						})
						.load(function(){
								$('#fenixbox')
									.css({
										'top': parseInt($(window).height() / 2 - ($('#fenixbox').height() / 2)),
										'left': parseInt($(window).width() / 2 - ($('#fenixbox').width() / 2))
						})
						.slideDown();
						})
						.appendTo('#fenixbox');
						
						$('<i></i>')
							.addClass('fa fa-times-circle fa-3x fenixbox-exit')
							.insertAfter('#fenixbox img')
							.click(function(){
									removeFenixBox();
							});
							
							if($(this).attr('title')){
									$('<span></span>')
										.text($(this).attr('title'))
										.css({
												'width': parseInt($('#fenixbox').width() - 20)
										})
										.addClass('fenixbox-title')
										.insertAfter('#fenixbox img');
							}
						
						
			});
	};

}(jQuery));
