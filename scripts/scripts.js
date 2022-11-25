
	$(function(){
  		$(".reponse").hide();
          
      $(".titre").click(function(){
        if( $(this).children().hasClass("fa-angle-double-right"))
        {
          $(this).children().removeClass("fa-angle-double-right");
          $(this).children().addClass("fa-angle-double-down");
        }else
        {
          $(this).children().removeClass("fa-angle-double-down");
          $(this).children().addClass("fa-angle-double-right");
        }
        $(this).next().toggle();
      });
  	})