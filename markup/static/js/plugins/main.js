
$(document).ready(function () {
	popup ();

	forms();

	var swiper = new Swiper('.slider', {
		spaceBetween: 10,
		navigation: {
			nextEl: '.slider-next',
			prevEl: '.slider-prev',
		},
	});


	$( ".tabs" ).tabs();

	$(document).ready(function() {
		$('select').niceSelect();
	});
	
	$('.form').each(function() {
        var it = $(this);
         it.validate({
			rules: {
				number: {
					digits: true,
					required: false,
					maxlength: 4,
				}
			},

			errorPlacement: function (error, element) {
			},

			submitHandler: function() {
				$.ajax({
					success: function(){
						var rowId = it.closest('tr').data("id");
					}
				});
			},  
         
         });
	 });
	 
})