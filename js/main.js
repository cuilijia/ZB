jQuery(function ($) {
    'use strict';

    // -------------------------------------------------------------
    //  Placeholder
    // -------------------------------------------------------------
    (function() {

        var textAreas = document.getElementsByTagName('textarea');

        Array.prototype.forEach.call(textAreas, function(elem) {
            elem.placeholder = elem.placeholder.replace(/\\n/g, '\n');
        });

    }());


    // -------------------------------------------------------------
    //  Show 
    // -------------------------------------------------------------

    (function() {
        $("document").ready(function()
            {
                 $(".more-category.one").hide();
                $(".show-more.one").click(function()
                    {
                        $(".more-category.one").show();
                        $(".show-more.one").hide();
                    });
            });

        $("document").ready(function()
            {
                 $(".more-category.two").hide();
                $(".show-more.two").click(function()
                    {
                        $(".more-category.two").show();
                        $(".show-more.two").hide();
                    });
            });

        $("document").ready(function()
            {
                 $(".more-category.three").hide();
                $(".show-more.three").click(function()
                    {
                        $(".more-category.three").show();
                        $(".show-more.three").hide();
                    });
            });

    }());    
    

    // -------------------------------------------------------------
    //  Slider
    // -------------------------------------------------------------

    (function() {

        $('#price').slider();
        $('#Applicate_Age').slider();

    }());


    // -------------------------------------------------------------
    //  language Select
    // -------------------------------------------------------------

   (function() {

        $('.category-dropdown').on('click', '.category-change a', function(ev) {
            if ("#" === $(this).attr('href')) {
                ev.preventDefault();
                var parent = $(this).parents('.category-dropdown');
                parent.find('.change-text').html($(this).html());
            }
        });

    }());
   

    // -------------------------------------------------------------
    // Accordion
    // -------------------------------------------------------------

        (function () {  
            $('.collapse').on('show.bs.collapse', function() {
                var id = $(this).attr('id');
                $('a[href="#' + id + '"]').closest('.panel-heading').addClass('active-faq');
                $('a[href="#' + id + '"] .panel-title span').html('<i class="fa fa-minus"></i>');
            });

            $('.collapse').on('hide.bs.collapse', function() {
                var id = $(this).attr('id');
                $('a[href="#' + id + '"]').closest('.panel-heading').removeClass('active-faq');
                $('a[href="#' + id + '"] .panel-title span').html('<i class="fa fa-plus"></i>');
            });
        }());


    // -------------------------------------------------------------
    //  Checkbox Icon Change
    // -------------------------------------------------------------

    (function () {

        $('input[type="checkbox"]').change(function(){
            if($(this).is(':checked')){
                $(this).parent("label").addClass("checked");
            } else {
                $(this).parent("label").removeClass("checked");
            }
        });

    }());

    // -------------------------------------------------------------
    //  select-category Change
    // -------------------------------------------------------------
	$('.select-category.post-option ul li a').on('click', function() {
		$('.select-category.post-option ul li.link-active').removeClass('link-active');
		$(this).closest('li').addClass('link-active');
	});

	$('.subcategory.post-option ul li a').on('click', function() {
		$('.subcategory.post-option ul li.link-active').removeClass('link-active');
		$(this).closest('li').addClass('link-active');
	});
// script end

     $("#loginsubmit").click(function(){

        var username=$("#Username").val();
        var password=$("#Password").val();
        login(username,password);
    });

    $("#signupsubmit").click(function(){

        var username=$("#Username").val();
        var password=$("#Password").val();
        signup(username,password);
    });

    function login(name,pass) {
        $.ajax({
            url: "http://193.112.18.21:8080/login",
            type: 'post',
            data: {Username: name, Password: pass},
            dataType: 'json',
            xhrFields: {withCredentials: true},
            success: function (data, textStatus, request) {
                console.log("response:" + data['code']);
                console.log(request.getResponseHeader('Content-Type'));
                console.log(request.getResponseHeader('Faygosessionid'));
                //alert(data.code);
                if(data.code==1)
                    window.location.replace("index.html");
            },
            error: function(xhr, ajaxOptions, thrownError) {
                console.info("error.");
                if (xhr.status == 200) {
                    alert(ajaxOptions);
                }
                else {
                    alert(xhr.status);
                    alert(thrownError);
                }
            }
        });
    }
    function signup(name,pass) {
        $.ajax({
            url: "http://193.112.18.21:8080/register",
            type: 'post',
            data: {Username: name, Password: pass},
            dataType: 'json',
            xhrFields: {withCredentials: true},
            success: function (data, textStatus, request) {
                console.log("response:" + data['code']);
                console.log(request.getResponseHeader('Content-Type'));
                console.log(request.getResponseHeader('Faygosessionid'));
                //alert(data.code);
                if(data.code==1)
                    window.location.replace("index.html");
            },
            error: function(xhr, ajaxOptions, thrownError) {
                console.info("error.");
                if (xhr.status == 200) {
                    alert(ajaxOptions);
                }
                else {
                    alert(xhr.status);
                    alert(thrownError);
                }
            }
        });
    }



});

