$(document).ready(function(){
		
	$('select').niceSelect();
		
	$(window).load(function(){
		var selectedCurr = $('.select-holder select option:selected').val();
			console.log(selectedCurr);
				
			updateData(selectedCurr);
	});
			
	$('.select-holder select').on('change', function(){
		var selectedCurr = $(this).find('option:selected').val();
		console.log(selectedCurr);
				
		updateData(selectedCurr);
	});
			
	$('.currency-wrapper input[type="checkbox"]').on('change', function(){
		var selectedCurr = $('.select-holder select option:selected').val();
		console.log(selectedCurr);
				
		updateData(selectedCurr);
	});
			
	function updateData(selectedCurr){
			
		//ethereum
		$.getJSON( "https://apiv2.bitcoinaverage.com/indices/global/ticker/ETH"+selectedCurr, function( data ) {
			console.log(data);
			fillData('.ethereum', data);
		});
				
		//litecoin
		$.getJSON( "https://apiv2.bitcoinaverage.com/indices/global/ticker/LTC"+selectedCurr, function( data ) {
			console.log(data);
			fillData('.litecoin', data);
		});
				
		//bitcoin
		$.getJSON( "https://apiv2.bitcoinaverage.com/indices/global/ticker/BTC"+selectedCurr, function( data ) {
			console.log(data);
			fillData('.bitcoin', data);
		});
	}
			
	function fillData(selector, data){
		$(selector).find('.price').text("$" + data.ask);
				
		if($(selector).find('input').prop("checked")){
			//percent
			$(selector).find('.hour').text(data.changes.percent.hour + '$');
			$(selector).find('.day').text(data.changes.percent.day + '$');
			$(selector).find('.week').text(data.changes.percent.week + '$');
			$(selector).find('.month').text(data.changes.percent.month + '$');
		}else{
			//price
			$(selector).find('.hour').text(data.changes.price.hour + '%');
			$(selector).find('.day').text(data.changes.price.day + '%');
			$(selector).find('.week').text(data.changes.price.week + '%');
			$(selector).find('.month').text(data.changes.price.month + '%');
		}
		
	}
});