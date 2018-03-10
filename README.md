# ps-drive-2018-gst-app
A GST billing app

Setup Requirements:
MySql, node.js, hapi(v16).
Database name : placementseason
Table name : itemlist

STEPS:
1. Create database and table in mysql using "table.sql" file.
2. Enter your MySql username and password in 'server.js' on line number 10 and 11.
3. Type "node server.js" in command prompt.
4. Node server is running on the port 3000.
5. Open browser with "localhost:3000/product" to add a new product to the database.
6. Right side of that page shows the list of already existing products.
7. And goto "localhost:3000/bill" for billing of required products.
8. Search your product by "product code or name", if found then it will be displayed in the following table.
9. And you enter the quantity of that searched product.
10. Finally it will be added to the bill table showing total and gross total.

Scope of Improvement:
1. Edit functionality not done in the PRODUCT page.
2. UI improvements.