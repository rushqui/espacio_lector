$(document).ready(function(){

	$('form').submit(function(e){
		e.preventDefault();

		var data=$(this).serializeArray();
		data.push({name:'tag',value:'login'});

		$.ajax({
			url: '/PHP/login_form.php',
			type: 'POST',
			dataType: 'json',
			data: data,
			beforeSend:function(){
				$('.fas').css('display','inline');

			}
		})
		.done(function() {
			$('span').html("Correcto");
		})
		.fail(function() {
			$('span').html("Error, vuelve a intentarlo");
		})
		.always(function() {
			$('fas').hide();
		});
		
	})

})