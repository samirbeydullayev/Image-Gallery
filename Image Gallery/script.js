$(function(){
    $("li.action").click(function(){
        var divs=$(".divs")
         divs.each(function(){
           if( $(this).attr("data-isotope").indexOf(2)== -1){
               $(this).fadeOut(200);
           }else{
            $(this).fadeIn(200);
           };

         })
    });

    $("li.comedy").click(function(){
        var divs=$(".divs")
         divs.each(function(){
           if( $(this).attr("data-isotope").indexOf(3)== -1){
               $(this).fadeOut(200);
           }else{
            $(this).fadeIn(200);
           };

         });
    });

    $("li.fantastic").click(function(){
        var divs=$(".divs")
         divs.each(function(){
           if( $(this).attr("data-isotope").indexOf(4)== -1){
               $(this).fadeOut(200);
           }else{
            $(this).fadeIn(200);
           };

         });
    });

    $("li.scare").click(function(){
        var divs=$(".divs")
         divs.each(function(){
           if( $(this).attr("data-isotope").indexOf(5)== -1){
               $(this).fadeOut(200);
           }else{
            $(this).fadeIn(200);
           };

         });
    });

    $("li.blueray").click(function(){
        var divs=$(".divs")
         divs.each(function(){
           if( $(this).attr("data-isotope").indexOf(6)== -1){
               $(this).fadeOut(200);
           }else{
            $(this).fadeIn(200);
           };

         });
    });

    $("li.all").click(function(){
        var divs=$(".divs")
         divs.each(function(){
           if( $(this).attr("data-isotope").indexOf(1)== -1){
               $(this).fadeOut(200);
           }else{
            $(this).fadeIn(200);
           };

         });
    });

 
   
  
});
