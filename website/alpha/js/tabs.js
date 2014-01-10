$(document).ready(function() {	
  //Get all the LI from the #tabMenu UL
  $('#youWant .tabMenu li').click(function(){
    
    //perform the actions when it's not selected
    if (!$(this).hasClass('selected')) {    
           
	    //remove the selected class from all LI    
	    $('#youWant .tabMenu li').removeClass('selected');
	    
	    //Reassign the LI
	    $(this).addClass('selected');
	    
	    //Hide all the DIV in .boxBody
	    $('#youWant .boxBody div.parent').slideUp('1500');
	    
	    //Look for the right DIV in boxBody according to the Navigation UL index, therefore, the arrangement is very important.
	    $('#youWant .boxBody div.parent:eq(' + $('#youWant .tabMenu > li').index(this) + ')').slideDown('1500');
	    
	 }
    
  });
  
   //Get all the LI from the #tabMenu UL
  $('#insights .tabMenu li').click(function(){
    
    //perform the actions when it's not selected
    if (!$(this).hasClass('selected')) {    
           
	    //remove the selected class from all LI    
	    $('#insights .tabMenu li').removeClass('selected');
	    
	    //Reassign the LI
	    $(this).addClass('selected');
	    
	    //Hide all the DIV in .boxBody
	    $('#insights .boxBody div.parent').slideUp('1500');
	    
	    //Look for the right DIV in boxBody according to the Navigation UL index, therefore, the arrangement is very important.
	    $('#insights .boxBody div.parent:eq(' + $('#insights .tabMenu > li').index(this) + ')').slideDown('1500');
	    
	 }
    
  });
  
 
 
   //Get all the LI from the #tabMenu UL
  
  
  
 //Get all the LI from the #tabMenu UL
  $('#we .tabMenu li').click(function(){
    
    //perform the actions when it's not selected
    if (!$(this).hasClass('selected')) {    
           
	    //remove the selected class from all LI    
	    $('#we .tabMenu li').removeClass('selected');
	    
	    //Reassign the LI
	    $(this).addClass('selected');
	    
	    //Hide all the DIV in .boxBody
	    $('#we .boxBody div.parent').slideUp('1500');
	    
	    //Look for the right DIV in boxBody according to the Navigation UL index, therefore, the arrangement is very important.
	    $('#we .boxBody div.parent:eq(' + $('#we .tabMenu > li').index(this) + ')').slideDown('1500');

	    
	 }
    
  });
	
	//Mouseover effect for Posts, Comments, Famous Posts and Random Posts menu list.
	
 	
	
});