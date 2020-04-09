$(document).ready(function() {
    var extern = document.getElementsByTagName("link")[2].href;
    $('#header').load(extern);
    var home = document.getElementsByTagName("link")[3].href;
    $('#content').load(home);

    $('#home').addClass("active");

    $(window).on("scroll", function() {
        if ($(window).scrollTop() >= 15) {
        $(".navbar").addClass("compressed");
        } else {
        $(".navbar").removeClass("compressed");
        }
    });

    $('ul li a').click(function(){
        $('li a').removeClass("active");
        $(this).addClass("active");
    });
  });

  function showDetails(a){
    if(a==1){
      var home = document.getElementsByTagName("link")[3].href;
      $('#content').load(home);
    }else if(a==2){
      var support = document.getElementsByTagName("link")[4].href;
      $('#content').load(support);
    }else if(a==3){
      var help = document.getElementsByTagName("link")[5].href;
      $('#content').load(help);
    }else if(a==4){
      var test = document.getElementsByTagName("link")[6].href;
      $('#content').load(test);
    }
  }