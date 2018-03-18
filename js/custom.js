	// custom jQuery script

	$(function() {
		$('[data-sortable=true] .subjects').sortable()
		$('[data-sortable=true] .subjects').sortable('enable')

		$('[data-panel]').on('click', (e) => {
			const target = $(e.currentTarget)
			if (target.hasClass('active')) {
				// do nothing
			} else {
				target.addClass('active')
					  .attr('data-sortable', true)
			}
		});
			$('body').on('click', '[data-panel-submit]', (e) => {
			const target = $(e.currentTarget)
			const order = target.attr('data-panel-submit')
			const panel = $('[data-panel=\'' + order + '\']')
			panel.removeClass('active')
					.attr('data-sortable', false);

		});


	})