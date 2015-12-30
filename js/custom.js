// JavaScript Document
$(document).ready( function(){	
var thisClick = $(document.body);			
	thisClick.on('click', "#_search", function(e){			 
		e.preventDefault();	
		$("#flyout>li>a").next().slideUp();
		$('#search_popup').show();	
		return false
		
	});
	thisClick.on('click', "#search_popup .close_x", function(e){			 
		e.preventDefault();	
		$('#search_popup').hide();	
		
	});
//flyout menu show
 thisClick.on('click', "#flyout li>a.menu1",  function(e){
	e.preventDefault();	
	$(this).next().slideDown();
 });

thisClick.on('click', "#flyout li>a.menu2", function(e){
	e.preventDefault();	
	$("#flyout>li>a.menu1").next().slideUp();	
	$(this).next().slideDown();
});
// The Accordion Effect
	thisClick.on('click', '.accord li a', function (e) {		
			e.preventDefault();	
			if ($(this).next("ul").is(":visible")){
				$(this).next("ul").slideUp("slow");
				$('.accord li a').removeClass('active');
			}else{
				$('.accord li ul').slideUp();
		      	$(this).next('ul').slideToggle();
		      	$('.accord li a').removeClass('active');
		     	$(this).addClass('active');
	    }	
	});
//flyout menu hide
	thisClick.on('click', ".flyout_toolsetting .close_x", function(e){			 
			e.preventDefault();	
			$(this).parent().hide();
			$('.accord li ul').slideUp();	
			$('.accord li a').removeClass('active');
	});
	
});//main Document ready all jquery event will come here

