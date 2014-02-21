$(document).ready(function(){
  $("p").click(function(){
    $(this).hide();
  });


$("button").click(function(){
    $("p").hide();
  });


$("#btn").click(function(){
    $("#test").hide();
  });



$('form').submit(function(){

       
      
        $.ajax({
            type: 'GET',
            data:$('form').serialize(), 
            success: function(){

                alert('Your comment was successfully added');
            },
            error: function(){

                alert('There was an error adding your comment');
            }
        });

        return false;
    });




});