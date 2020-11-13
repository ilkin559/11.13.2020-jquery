$("#accardion button").click(function(){
 $("#accardion p").stop().slideUp()
 $(this).next().stop().slideToggle()
})

$("#tabmenu button").click(function(){
 $("#tabmenu button").css("background", "blue" )
 $(this).css("background","red")
 const btnInd= $(this).index()
 $("#tabmenu p").stop().slideUp()
 $("#tabmenu p").eq(btnInd).stop().slideDown()
})