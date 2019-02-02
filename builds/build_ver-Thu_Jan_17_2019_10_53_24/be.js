jQuery(function($){
	// $(".main").on("click", ".js-slide-button", function(){
	// 	if($(this).closest(".js-slide-item").hasClass("active")){
	// 		$(this).closest(".js-slide-item").removeClass("active").find(".js-slide-hide").stop().slideUp(300);
	// 	}
	// 	else{
	// 		$(this).closest(".js-slide-item").addClass("active").find(".js-slide-hide").stop().slideDown(300);
	// 	}
	// });

    $('#loadmore').click(function(){
        var data = {
            'action': 'loadmore',
            'query': true_posts,
            'page' : current_page
        };
        $.ajax({
            url: ajaxurl,
            data: data,
            type: 'POST',
            success: function(data){
                if( data ) {
                    $('.ajax-list-wrapper').append(data);
                    current_page++;
                    if (current_page == max_pages) $("#loadmore").remove();
                } else {
                    $('#loadmore').remove();
                }

                

            }
        });
    });

    $(".ajax-popup-wrapper").on("click", function() {
        $("#popup-send     input[name='company_id']").val($(this).parent().attr("data-company-id"));
        $("#popup-order    input[name='company_id']").val($(this).parent().attr("data-company-id"));
        $("#popup-response input[name='company_id']").val($(this).parent().attr("data-company-id"));
    });

    // https://stackoverflow.com/questions/5392344/sending-multipart-formdata-with-jquery-ajax
    $("#popup-send form").submit(function (e) {
        e.preventDefault();
        var filedata = new FormData(document.querySelector("#popup-send form"));
        jQuery.each($('#popup-send input[name^="techtask_docs"]')[0].files, function(i, file) {
            filedata.append(i, file);
        });
        filedata.delete('techtask_docs[]');

        filedata.append('action', 'new_techtask');

        $.ajax({
            url: ajaxurl,
            type: 'POST',
            method : 'POST',
            data: filedata,
            success: function(response) {
                if ( response['error'] ) {
                    alert('Error');
                } else {
                    $(".fancybox-button--close").trigger("click");
                    $("#notification-trigger").trigger("click");

                }
            },
            cache: false,
            contentType: false,
            processData: false

        });
    });

    $("#popup-order form").submit(function (e) {
        e.preventDefault();

        var data = {
            action: 'new_order_task',
            data: $(this).serialize(),
        };

        $.ajax({
            url: ajaxurl,
            type: 'POST',
            data: data,
            success: function(response) {
                if ( response['error'] ) {
                    alert('Error');
                } else {
                    $(".fancybox-button--close").trigger("click");
                    $("#notification-trigger").trigger("click");

                }
            }
        });
    });

    $(".ajax-list-wrapper").on('submit', '.manipulate_company_response form', function (e) {
        e.preventDefault();
        var data = {
            action: 'handle_company_response',
            data: $(this).serialize(),
        };
        $.ajax({
            url: ajaxurl,
            type: 'POST',
            data: data,
            success: function(response) {
                if (response['error'] ) {
                    alert('Error');
                } else {
                    $(".fancybox-button--close").trigger("click");
                    $("#notification-trigger").trigger("click");

                }
            }
        });
    });

    $("#popup-response form").submit(function (e) {
        e.preventDefault();

        var filedata = new FormData(document.querySelector("#popup-response form"));
        var ratings = document.getElementsByName('rating-0');
        var counter = 1;
        var final_check = false;
        for (var i of ratings) {
            if (i.checked) {
                final_check = true;
                break;
            }
            counter += 1;
        }
        counter = final_check ? counter : 0;

        filedata.append('action', 'new_review');
        filedata.append('rating-0', counter);

        $.ajax({
            url: ajaxurl,
            type: 'POST',
            data: filedata,
            success: function(response) {
                if ( response['error'] ) {
                    alert('Error');
                } else {
                    $("#popup-response").removeClass('active');
                    $("#notification-trigger").trigger("click");
                    $.ajax({
                        url: ajaxurl,
                        type: 'POST',
                        data:  { action: 'publish_review', id: response['id'] },
                        success: function(response) {
                            $(".fancybox-button--close").trigger("click");
                            $("#notification-trigger").trigger("click");
                        }
                    });
                }
                console.log(response);
            },
            cache: false,
            contentType: false,
            processData: false
        });
    });

});

