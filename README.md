# Angular Store

## Run the application
  1. Get the repository and change into its directory.
  2. Run `npm install` to install required modules.
  3. Run `ng serve` to start a server.
  4. Go to `http://localhost:4200` to test application.

## About
The goal of this project was to create a basic store frontend in Angular as
a single-page web application. It doesn't feature a backend.

The list of products is fetched from the sample file at github and then used
to present the products in an overview. You can choose to get more information
by clicking on the product image which will lead you to a separate product page.
On that page and on the list as well, you can add items to your cart. That's
reported by a plain `alert` message - didn't bother to create an extra
component as the demo video uses that to give feedback, too :-)

At any time, you may visit the shopping cart by using the navigation bar at the
top. It may be empty or contain items. If it contains items, you'll see the
subtotals depending on the number of items that you put into the shopping cart.
You can decide to change the number here. You'll also see the total sum.

You will then have to enter your full name (minimum 6 chars), an address
(minimum 12 chars) and a credit card number (minimum 16 chars). Pretty crude
validation, no color coding, etc. but that should suffice.

And then you can send your order!

## Notes
I used SCSS instead of CSS as in the course and could have used it more
thoroughly, and the style sheets are also messy - I know :-D
