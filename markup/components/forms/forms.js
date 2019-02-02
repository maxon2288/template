function forms() {

    $('input[name="ecpKey"]').mask('0000 0000 0000 0000');
    $('input[name="phone"]').mask('+0 000 000 0000');
    $('input[name="number"]').mask('0000');

    
    $('.form').each(function() {
        var it = $(this);
         it.validate({
             rules: {
                 email: {
                     required: true,
                     email: true,
                 },
                 phone: {
                     required: true,
                     minlength: 11
                 },
                 vote: {
                    required: true,
                 },
                 messages: {
                     required: true,
                 },
                 name: {
                     required: false,
                 },
                 password: {
                     required: true,
                 },
                 votename: {
                     required: true,
                     maxlength: 10,
                 },
                 passwordYet: {
                     required: true,
                     equalTo: "#password"          
                 }
             },
         
             errorPlacement: function (error, element) {
             },
    
             submitHandler: function() {
                 // console.log(1)
                 // $(".form input, .form textarea").val('');
                 
             },  
         
         });
     });
    $('.form-add-vote').each(function() {
        var it = $(this);
         it.validate({
             rules: {
                addVote: {
                     required: true,
                 },
             },
         
             errorPlacement: function (error, element) {
             },
    
             submitHandler: function() {
                 // console.log(1)
                 // $(".form input, .form textarea").val('');
                 
             },  
         
         });
     });
    $('.bill-data-form').each(function() {
        var it = $(this);
         it.validate({
             rules: {
             },
             
             errorPlacement: function (error, element) {
             },
    
             submitHandler: function() {
                it.find("input").val("");
             },  
         
         });
     });
    $('.form-loan').each(function() {
        var it = $(this);
         it.validate({
             rules: {
                numberLoan: {
                     required: true,
                     digits: true,
                 }
             },
         
             errorPlacement: function (error, element) {
             },
    
             submitHandler: function() {
                 // console.log(1)
                 // $(".form input, .form textarea").val('');
                 
             },  
         
         });
     });
    $('.users-search').each(function() {
        var it = $(this);
         it.validate({
             rules: {
                search: {
                     required: true,
                 }
             },
         
             errorPlacement: function (error, element) {
             },
    
             submitHandler: function() {
             },  
         
         });
     });
    
    $('.add-programm-form').each(function() {
        var it = $(this);
         it.validate({
             rules: {
                 nameVote: {
                     required: true,
                     minlength: 5,
                 },
                 first: {
                    required: true,
                    digits: true,
                 },
                 target: {
                     required: true,
                     digits: true,
                 },
                 term: {
                     required: true,
                     digits: true,
                 },
                 opening: {
                    required: true,
                    digits: true,
                 }
             },
         
             errorPlacement: function (error, element) {
             },
    
             submitHandler: function() {
                 // console.log(1)
                 // $(".form input, .form textarea").val('');
                 $.ajax({
                     // type: 'POST',
                     // url: 'mail.php',
                     success: function(){
                         it.find("input").val("");
                         $('.popup, .overlay').removeClass('visible');
                         $("body, html").css("overflow", "auto")
                     }
                 });
             },  
         
         });
     });
    $('.users-form').each(function() {
        var it = $(this);
         it.validate({
             rules: {
                 email: {
                     required: true,
                     email: true,
                 },
                 phone: {
                     required: true,
                     minlength: 11
                 },
                 vote: {
                    required: true,
                 },
                 messages: {
                     required: true,
                 },
                 name: {
                     required: false,
                 },
                 password: {
                     required: true,
                 },
                 votename: {
                     required: true,
                     maxlength: 10,
                 },
                 passwordYet: {
                     required: true,  
                     equalTo: "#password"          
                 }
             },
         
             errorPlacement: function (error, element) {
             },
    
             submitHandler: function() {
                 // console.log(1)
                 // $(".form input, .form textarea").val('');
                 $.ajax({
                    // type: 'POST',
                    // url: 'mail.php',
                    success: function(){
                        it.find("input").val("");
                    }
                });
             },  
         
         });
     });
    $('.ecp-form').each(function() {
        var it = $(this);
         it.validate({
             rules: {
                 email: {
                     required: true,
                     email: true,
                 },
                 phone: {
                     required: true,
                     minlength: 11
                 },
                 vote: {
                    required: true,
                 },
                 messages: {
                     required: true,
                 },
                 name: {
                     required: false,
                 },
                 password: {
                     required: true,
                 },
                 votename: {
                     required: true,
                     maxlength: 10,
                 },
                 passwordYet: {
                     required: true,  
                     equalTo: "#password"          
                 },
                ecpKey: {
                    required: true,
                    minlength: 19,
                },
                ecpPassword: {
                    required: true,
                    minlength: 5,
                }

             },
         
             errorPlacement: function (error, element) {
             },
    
             submitHandler: function() {
                 // console.log(1)
                 // $(".form input, .form textarea").val('');
                 
             },  
         
         });
     });
    $('.form-vote').each(function() {
        var it = $(this);
         it.validate({
             rules: {
                 email: {
                     required: true,
                     email: true,
                 },
                 phone: {
                     required: true,
                     minlength: 11
                 },
                 vote: {
                    required: true,
                 },
                 messages: {
                     required: true,
                 },
                 name: {
                     required: false,
                 },
                 password: {
                     required: true,
                 },
                 votename: {
                     required: true,
                     maxlength: 10,
                 },
                 passwordYet: {
                     required: true,  
                     equalTo: "#password"          
                 },
                ecpKey: {
                    required: true,
                    minlength: 19,
                },
                ecpPassword: {
                    required: true,
                    minlength: 5,
                }

             },
         
             errorPlacement: function (error, element) {
             },
    
             submitHandler: function() {
                 // console.log(1)
                 // $(".form input, .form textarea").val('');
                 $.ajax({
                     // type: 'POST',
                     // url: 'mail.php',
                     success: function(){
                        it.find("input").val("");
                        $('.radio').each(function () {
                            var it = $(this);
                            it.closest(".vote").find(".radio-thanx").css({
                                "display": "flex",
                            });
                            it.remove();        
                            $(".form-vote__submit").remove();
                        });
                     }
                 });
             },  
         
         });
     });
}
