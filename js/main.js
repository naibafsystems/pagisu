$(document).ready(function(){

	$('#quienesBtn').click(function(){
		$('#nosotros').addClass('active');
		$('#equipo').removeClass('active');
		$('#tecnologia').removeClass('active');		
	});
	$('#equipoBtn').click(function(){
		$('#nosotros').removeClass('active');
		$('#equipo').addClass('active');
		$('#tecnologia').removeClass('active');		
	});
	$('#tecnoBtn').click(function(){
		$('#nosotros').removeClass('active');
		$('#equipo').removeClass('active');
		$('#tecnologia').addClass('active');		
	});


	$('#bancoBtn').click(function(){
		$('#banco').addClass('active');
		$('#transporte').removeClass('active');
		$('#desarrollo').removeClass('active');		
	});
	$('#transporteBtn').click(function(){
		$('#banco').removeClass('active');
		$('#transporte').addClass('active');
		$('#desarrollo').removeClass('active');		
	});
	$('#desarrolloBtn').click(function(){
		$('#banco').removeClass('active');
		$('#transporte').removeClass('active');
		$('#desarrollo').addClass('active');		
	});

	$('.menu-drop-btn').click(function(){
		$('.dropdown-menu').toggleClass('active-btn');
	});
});