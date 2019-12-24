# Bitcoin Transaction Website
 A website that displays all transactions above $1 000 000 USD that are made on the blockchain and also stores it into a mongoDB. Once saved, we create an endpoint API to '/transactions' which displays all transactions sorted (highest to lowest) by transaction cost from the database in a JSON format, while also able to GET all transactions and display it on our site using Jquery. Once displayed we are able to click on any of the transactions to then take us to www.Blockchain.com where it shows that exact transaction. 
 
 This application uses Node.js and Nest.js. 
 
## API
 This website uses two API's, one for the Blockchain from Whale Alert and the other for the Database from MongoDB, to find the transactions that are larger than $1 million USD and get all the details on that transaction, then save it into a database. 
 
###### API's
1. Whale Alert: https://docs.whale-alert.io/?_ga=2.164120636.2088609985.1573353112-1189581535.1573353112#introduction
2. MongoDB: https://www.mongodb.com/

## What I learned
* What REST is and how to integrate it into my application by GET, POST, DELETE ...
* What Node.js and Nest.js is and how to use them creating a full website that uses and creates API's
* How to setup a mongoDB in Node and be able to properly use it by adding or deleting from my server
* How to use Jquery in browser to take in a JSON format and display things into a table on my website

## Running the app

```bash
1. Download zip off github

2. Download 'node_modules' from here: https://drive.google.com/drive/u/1/folders/0ADRErA12WL8pUk9PVA
Install folder and put it into 'bitcoin-website' folder with the other folders like 'test', 'src', 'dist', and 'views' so should have a total of 5 folders after putting in the node_modules folder

3. Open a terminal and type 'npm run start'
# development
$ npm run start 

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod

4.
To look at the website go to 

http://localhost:4000/


5.
To look at the outputted transactions in a JSON format go to

http://localhost:4000/transactions
```

## Some Bugs
* If the database is empty and you click on the button it will get all transactions but it will not display it on the table until you refresh. Can fix this by having it wait before it calls next function to display.
* Since the Whale Alert Api takes in a start time and an end time everytime we refresh and click the button it will add all transactions within that time frame even though it might already be in our database so we will have duplicates. Can fix this by comparing the hash of each transaction pulled from Whale Alert with our database's transaction by querying for that exact hash since hash will always be unique. Then if we can find that hash in our database, don't add.
* Just a visual bug. When there is hundreds of transactions in our database it takes awhile to actually load the data and display it from all of the looping. Can fix this by setting a max number of transactions and have as many pages as needed or a faster way to go through JSON. 

## Tasks given
1. Display bitcoin transactions sorted (highest to lowest) by transaction cost in BTC and USD on a webpage
  * For task all you have to do is click the button on the middle of the screen it will display all transactions in a table format. This task took me ~3 hours because I had to learn how to actually take in data from the server and display it on the website.
2. Cache all transactions that you grab through the Whale API in a SQLite/MongoDB database
  * For this task I used MongoDB. The organization for my database is "BRYCE'S ORG - 2019-12-23" and is named "Project 0". This task took me ~5 hours because I had never worked with Node or Mongo and setting up MongoDB in Node was a challenge. But once I got everything setup I understood how to use it and create functions to query from the database. 
3. Create an endpoint that outputs the cached transaction data, in JSON format, sorted (highest to lowest) by transaction cost. 
  * For this task you have to add "/transactions" to the end of the base url and that will get you all transactions from the database sorted from highest to lowest in a JSON format. This task took me ~1 hour as once I had setup my database I was able to just get all transactions from the database and then sort it and output it in a JSON format. 
4. Output your main webpage with nice styles. we encourage you to use a CSS framework like Bootstrap or Material. 
  * Wanted to make a simple website with some transitions and effects and wanted simple colors. This task took me ~6 hours as I was playing around with the colors and transitions and effects on screen. 
5. Link the bitcoin addresses to a third party bitcoin address history site on your webpage
  * Can click on any of the rows and that will take you to that exact transaction on the blockchain website. This task took me ~10 minutes to figure out. 

* Learning Node js and Nest js and what they did in a full website took me awhile to learn and pick up on the typescript but once I had learned it and understood the basics I went through these tasks a lot faster. So thank you for giving me extra time. 

