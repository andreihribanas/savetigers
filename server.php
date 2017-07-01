<?php

    require_once('vendor/autoload.php');
    session_start();

    if (isset($_POST)){
      
      $amount = $_POST['amount'];

      if ($amount > 0 ){
          // Set your secret key: remember to change this to your live secret key in production
          // See your keys here: https://dashboard.stripe.com/account/apikeys
          \Stripe\Stripe::setApiKey("sk_test_joubn94mWqGUPDHDZ5eCsoQt");

          // Token is created using Stripe.js or Checkout!
          // Get the payment token submitted by the form:

          // Charge the user's card:
          $charge = \Stripe\Charge::create(array(
            "amount" => $_POST['amount'] * 100, // amount in cents
            "currency" => "gbp",
            "description" => "Example charge",
            "source" => $_POST['stripeToken'],
          ));

          $_SESSION['payment'] = ' <div class="container">
                                      <div class="alert alert-success alert-dissmisable show" role="alert">
                                        <button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                                        <strong> Success: </strong> The payment was processed succesfully.
                                      </div>
                                    </div>';

          
      } else {
          $_SESSION['payment'] = ' <div class="container">
                                      <div class="alert alert-danger alert-dissmisable show" role="alert">
                                        <button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                                        <strong> Success: </strong> The amount must be higher than zero.
                                      </div>
                                    </div>';
      }

      header('Location: index.php#donate');

    }


?>
