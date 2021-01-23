function previewFile(){
	var imageUpload = document.querySelector('#imageUpload'),
		file = document.querySelector('input[type="file"]').files[0],
		reader = new FileReader();
	reader.onloadend = () => imageUpload.style.backgroundImage = 'url(' + reader.result + ')'
	if (file)
		reader.readAsDataURL(file)
	else
	imageUpload.style.backgroundImage = document.getElementById('upload-bg').reset()
}
function resetImage(){
	document.getElementById('imageUpload').style.backgroundImage = '';
}
$(function(){
	'use strict'
	$("body").css("padding-top", $(".navbar.fixed-top").height());

    // let windoHeight = $(window).height(),
    //     navHeight = $('.navbar').innerHeight();
    //     upperbarHeight = $('.upper-bar').innerHeight();
	// $(".headerslider, .carousel-item").height(windoHeight - (navHeight + upperbarHeight));

	$('#sidebarCollapse').on('click', function () {
		$('#sidebar-menu').toggleClass('active');
	});
	
	$('#close-sidebar').on('click', function () {
		$('#sidebar-menu').toggleClass('active');
	});

	$('[data-toggle="tooltip"]').tooltip();
	/* Start Admin Penal */
	$('.counter li span').each(function(){
		const This = $(this);
		$({Count: This.text()}).animate(
			{Count: This.parent().attr("data-count")},{
				duration: 2000,
				easing: "linear",
				step: function(){
					This.text(Math.floor(this.Count))
				},
				complete: function(){
					This.text(this.Count)
				}
			}
		)
	});

	// VanillaTilt.init(document.querySelector('.form-box'),{
	// 	max: 25,
	// 	speed: 200,
	// 	glare:true,
	// 	"max-glare":1,
	// });

	/* forms validation */
	$("#singup-form .container-fluid .row .form-box input:not([type='submit'])").on("blur",function(){
		$.fn.toValidate($(this));
	});
	// var $j = jQuery.noConflict();
	// $.fn.validate = function(el){
	// 	console.log(el.attr("name"));
	// 	if(el.attr("name")=="name"){
	// 		if(el.val().trim().match(/^[\u0621-\u064A ]+$/)==null) return false; // Accept Only Arabic Latters
	// 	}
	// 	else if(el.attr("name")=="lastName_ar"){
	// 		if(el.val().trim().match(/^[\u0621-\u064A ]+$/)==null) return false; // Accept Only Arabic Latters
	// 	}
	// 	else if(el.attr("name")=="firstName_en"){
	// 		if(el.val().trim().match(/^[a-zA-Z ]+$/)==null) return false; // Accept Only Arabic Latters
	// 	}
	// 	else if(el.attr("name")=="lastName_en"){
	// 		if(el.val().trim().match(/^[a-zA-Z ]+$/)==null) return false; // Accept Only Arabic Latters
	// 	}
	// 	else if(el.attr("name")=="email"){
	// 		if(el.val().trim().match(/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/)==null) return false;
	// 	}
	// 	else if(el.attr("name")=="address"){
	// 		if(el.val().trim().match(/^([\u0621-\u064A0-9\-, ]{3,})|([a-zA-Z0-9\-, ]{3,})+$/) == null) return false;
	// 	}
	// 	else if(el.attr("name")=="password"){
	// 		if(el.val().trim().length < 14 ) return false;
	// 	}
	// 	else if(el.attr("name")=="confirm-password"){
	// 		const password = $("#singup-form .container-fluid .row .form-box input[type='password']")
	// 		if((el.val().trim().length < 14)&&(el.val().trim()!=password.val().trim())){
	// 			return false;
	// 		}
	// 	}
		
	// }

});
