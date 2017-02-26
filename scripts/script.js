/*
** Jump to the next section function
** Source: http://stackoverflow.com/questions/29760049/scroll-to-next-section
// Cache your selectors
var $sec = $("section"); 

// On any of both arrows click
$(".prev, .next").click(function(){

    // We need to get current element
    // before defining the `.next()` or `.prev()` element to target
    // and get it's `offset().top` into an `y` variable we'll animate to.
    // A current element is always the one which bottom position
    // (relative to the browser top) is higher than 0.
    var y = $sec.filter(function(i, el) {
        return el.getBoundingClientRect().bottom > 0;
    })[$(this).hasClass("next")?"next":"prev"]("section").offset().top;
    // (Line above:) if the clicked button className was `"next"`,
    // target the the `.next("section")`, else target the `.prev("section")`
    // and retrieve it's `.offset().top`

    $("html, body").stop().animate({scrollTop: y});

});
*/ 
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


function computeDonationAmount(){
    
    // Set the initial donation amount to zero
    var choiceAmount = '';
            
        $("#other-amount").hide();  
            
            
           $(document).ready(function(){
               
               // Select donation amount
               $("#donateOther").on("click", function(){
                    $("#other-amount").toggle();
                   choiceAmount = 0;
               });
            
                $("#donateFive").on("click", function(){
                    choiceAmount = 5;
                    $("#error").html('<div class="alert alert-success"><strong> Donation amount: £' + choiceAmount + '</strong></div>');
               });     
               
                $("#donateTen").on("click", function(){
                    choiceAmount = 10;
                    $("#error").html('<div class="alert alert-success"><strong> Donation amount: £' + choiceAmount + '</strong></div>');
               });      
               
                $("#donateTwentyFive").on("click", function(){
                    choiceAmount = 25;
                    $("#error").html('<div class="alert alert-success"><strong> Donation amount: £' + choiceAmount + '</strong></div>');
               });
 
                   $("#other-amount").keyup(function(){
                       choiceAmount = $("#other-amount").val();
                         $("#error").html('<div class="alert alert-success"><strong> Donation amount: £' + choiceAmount + '</strong></div>');
                   });

               
             // Validate donation form
              $("#btnDonate").on("click", function(e){
                  e.preventDefault;
                  
                  var error = '';
                  var nameCard = $("#nameCard").val();
                  var cardNo = $("#cardNo").val();
                  var cvv = $("#cvv").val();
                  var name = $("#name").val();
                  var surname = $("#surname").val();
                  var address = $("#address").val();
                  var postCode = $("#postCode").val();
                  var email = $("#email").val();
                  
                  if (nameCard === '' || name.length < 2) {
                      error += '<br> Please insert the name as it appears on the card.';
                  }
                  
                  if (cardNo === '' || cardNo.length < 16) {
                       error += '<br> The card number must be formed of 16 digits.';
                  }                
                  
                  if (cvv === '' || cvv.length < 3) {
                       error += '<br> Please enter the 3 digits security code.';
                  }

                
                  if (name === '' || name.length < 2) {
                       error += '<br> The name is too short.';
                  }
                  
                  if (surname === '' || surname.length < 2) {
                       error += '<br> The surname is too short.';
                  }

                
                  if (address === '') {
                       error += '<br> Please enter your address.';
                  }
       
                  if (postCode === '') {
                       error += '<br> Please enter your postCode.';
                  }       
                  
                  if (email === '') {
                       error += '<br> Please enter a valid email address.';
                  }

                  
                  if (choiceAmount === '' || choiceAmount === 0){
                      error += '<br> Please select the donation amount.';
                  }
                  
                  if (error === '') {
                      $("#error").html('<div class="alert alert-success"><strong> Thank you for your support. Please check your email to see the receipt for your £' + choiceAmount +  ' donation. </strong> </div> ');
                  } else {
                      $("#error").html('<div class="alert alert-danger"><strong> There are some issues with your payment: </strong> ' + error +' </div> ');
                  }
                  
              });
               
           });
}


function toggleNavbar(){
    
    var lastScroll = 0; // Scroll position
    
      $(window).scroll(function(event){
          //Sets the current scroll position
          var st = $(this).scrollTop();
          //Determines up-or-down scrolling
          if (st > lastScroll){
             //Replace this with your function call for downward-scrolling
             $(".navbar-nav").hide();
          } else {
              $(".navbar-nav").show();
          }
          //Updates scroll position
          lastScroll = st;
      });
}