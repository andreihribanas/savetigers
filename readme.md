
# Setup

- Download install the Stripe library (download it using composer)
```php
    $ composer require stripe/stripe-php
```

- Load the Stripe library onto your project
```php
    require_once('vendor/autoload.php');
```

- Change Stripe API key with yours: open the server.php file and add your key
```php
    \Stripe\Stripe::setApiKey("sk_yourkeygoeshere");
```


## How to run the project

- Download / clone project link and from the repository
- Access the resources using on your local server

# Project description

This project represent a presentation website for a fictive wildlife organization dedicated to fight against the extinctions of animal species, in this case the fight to preserve the tigers species and stop the current extinction process. <br />
The project was created with the purpose to showcase the design skills rather than implement more advanced functionality. Also focused on the responsive design to display on a range of devices. <br />


## Project main features

- Single page application
- Section to section navigation

- Donation payments
- Optimized resources (images)


## Resources

- HTML & CSS, PHP, Bootstrap 4, JavaScript
- Stripe.js for processing donations

## Future tasks/bugs to work on

- [ ] Leverage browser caching
- [ ] Subscribing to newsletter
