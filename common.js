$(".new").hide();

 $(".btn1" ).click(function() {

 $(".btn1").css({'color': '#ececec','background':'#4fd0ae','text-decoration':'none'});
 $(".btn2").css({'color': '#4fd0ae','background':'#ececec','text-decoration':'none'});

  $( ".best" ).animate({
    opacity: 0,
    }, 100);
    $(".best").hide();
   $(".new").show();
   $( ".new" ).animate({
     'opacity': 1
   }, 100);
});

$(".btn2" ).click(function() {
 $(".btn2").css({'color': '#ececec','background':'#4fd0ae','text-decoration':'none'});
 $(".btn1").css({'color': '#4fd0ae','background':'#ececec','text-decoration':'none'});
 $( ".new" ).animate({
 opacity: 0
}, 100);
  $(".new").hide();
  $(".best").show();
 $( ".best" ).animate({
 opacity: 1
}, 100);
});

$("img").click(function(){
 $("#ModalDiv").show();
 $("#btn_close").show();
 $("#ModalDiv").animate({'z-index':'10','opacity':'1'},300);
 $("#ModalDiv").css({
   'background': 'url(' + $(this).attr('src') + ')',
   'background-repeat':'no-repeat',
   'background-position':'center',
   'background-size': 'contain'
 });
 $("#btn_close").animate({opacity: 1},300);
 $("#btn_close").show();
});
 $("#btn_close").click(function(){
  $("#ModalDiv").animate({opacity: 0},500);
  $("#btn_close").animate({opacity: 0},500);
  $("#ModalDiv").hide();
  $("#btn_close").hide();
 });


  $(".like").click(function(){
    // if("фото лайкнуто"){
         $(this).css({'background-image':'url(liked.png)'});
    // }else{
    //   $(this).css({'background-image':'url(like.png)'});
    // }
      // Обработка лайка ajax код

  });

  $(".download").click(function(){

      // Обработка скачивания ajax код

  });

  $(".repost").click(function(){

      // Обработка репоста ajax код

  });

  $(".info").click(function(){

      // Обработка доп.информации ajax код

  });
