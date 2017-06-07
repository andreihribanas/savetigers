
// The following function is not my own creation, all right belong to the author
    function goToNextSection(){

        var $sec = $("section");

        $(".prev, .next").click(function(){
            var y = $sec.filter(function(i, el) {
            return el.getBoundingClientRect().bottom > 0;
            })[$(this).hasClass("next")?"next":"prev"]("section").offset().top;
            $("html, body").stop().animate({scrollTop: y});
        });
    }


    // Load Youtube video
    function loadVideo(){

    }


    function toggleNavbar(){

        var lastScroll = 0; // Scroll position

          $(window).scroll(function(event){
              //Sets the current scroll position
              var st = $(this).scrollTop();
              //Determines up-or-down scrolling
              if (st > lastScroll){
                 //Replace this with your function call for downward-scrolling
                 $(".navbar").hide();
              } else {
                  $(".navbar").show();
              }
              //Updates scroll position
              lastScroll = st;
          });
    }
