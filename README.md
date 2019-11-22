# express_Sequelize_RunningQueries_QueryBasedOnOperators
An express app utilizing sequelize to connect to mySQL and running query based on operators.

COMMAND PROMPT

(1) Run the following to navigate to your Desktop: 

    cd Desktop

(2) Create a new folder on Desktop: 

    mkdir Express

(3) Navigate to the Express directory: 

    cd Express

(4) Run the following command to install the Express generator globally onto your computer: 

    npm install express-generator -g

(5) Enter the following command to generate the Express starter app. This will set the view to use Handlebars and will name the app express_Sequelize_RunningQueries_QueryBasedOnID: 

    express --view=hbs express_Sequelize_RunningQueries_QueryBasedOnID

(6) Once the process is complete, navigate into the express_Sequelize_RunningQueries_QueryBasedOnID directory: 

    cd express_Sequelize_RunningQueries_QueryBasedOnID

(7) Now in the express_Sequelize_RunningQueries_QueryBasedOnID directory, run the following: 

    npm install

(8) Install Nodemon globally: 

    npm install -g nodemon
    
(9) Install Nodemon as a devDependency in the package.json file within the express_Sequelize_RunningQueries_QueryBasedOnID directory:

    npm install -save-dev nodemon
    
(10) Install mysql2:

    npm install --save mysql2

(11) Install sequelize: 

    npm install --save sequelize@5.15.1

(12) Open in VS code:

    code . 


VS CODE

(13) Navigate to the routes/index.js file.: ![Open index js file (Sequelize_RunningQueries_QueryBasedOnID)](https://user-images.githubusercontent.com/35668707/69103754-3e6b0680-0a34-11ea-886e-6f6f4fac5662.JPG)

(14) Require mysql2 in routes/index.js file: ![require mysql2 in index js file (Sequelize_RunningQueries_QueryBasedOnID)](https://user-images.githubusercontent.com/35668707/69103790-5c386b80-0a34-11ea-99f8-1c176507ffb9.JPG)


COMMAND PROMPT

(15) Install Sequelize CLI commands globally onto your computer: 

    npm install -g sequelize-cli

(16) Create necessary sequelize folders and filed in project:

    sequelize init
    

VS CODE

(17) Open config/config.json file and change settings to connect to the database: ![update database info in config-config json file (Sequelize_RunningQueries_QueryBasedOnID)](https://user-images.githubusercontent.com/35668707/69103865-8be77380-0a34-11ea-9035-a6f475887898.JPG)


COMMAND PROMPT

(18) Install mysql2 globally so sequelize CLI will be able to connect to the database:

    npm install -g mysql2
    
(19) Install sequelize-auto tool to generate model files: 

    npm install -g sequelize-auto

(20) Generate a model file for the actor table. (-h: IP/Hostname; -d: Database; -u: Username for database; -x: Password for database; -o: directory to place the models; -t: comma-seperated names of tables to import):  

    sequelize-auto -h localhost -d sakila -u root -x Password1! -o "./models" -t actor
    
VS CODE

(21) Open app.js file at the root of the project and include the './model" folder so that the models are available everywhere in the application: ![Open app js file (Sequelize_RunningQueries_QueryBasedOnID)](https://user-images.githubusercontent.com/35668707/69103931-b6d1c780-0a34-11ea-9320-c246e9fb5eb6.JPG)

![Require models in app js file (Sequelize_RunningQueries_QueryBasedOnID)](https://user-images.githubusercontent.com/35668707/69103988-e97bc000-0a34-11ea-82fc-c26ecc852efb.JPG)

(22) Add sequelize sync code above module.exports in the app.js file to ensure that the tables within the models in the project are the same as in the database.: ![Add sequelize sync in app js file (Sequelize_RunningQueries_QueryBasedOnID)](https://user-images.githubusercontent.com/35668707/69104106-44151c00-0a35-11ea-94dc-3e5651104035.JPG)

(23) In the views folder, create a specificActor.hbs file and add code to show the names of the actors.: ![Create and add handlebars code for specificActor in the views folder (Sequelize_RunningQueries_QueryBasedOnID)](https://user-images.githubusercontent.com/35668707/69156556-96941e00-0ab1-11ea-9a7b-3f090eebe5c2.JPG)

(24) In the routes/index.js file, require the models.: ![require models in index js file (Sequelize_RunningQueries_QueryBasedOnID)](https://user-images.githubusercontent.com/35668707/69104415-21373780-0a36-11ea-9463-d184e33cd4f8.JPG)

(25) Add a get() route for /specificActor and /actor/:id to the routes/index.js file.: ![add get() routes in index js file (Sequelize_RunningQueries_QueryBasedOnID)](https://user-images.githubusercontent.com/35668707/69104203-92c2b600-0a35-11ea-87d4-23a520cb4d2c.JPG)


COMMAND PROMPT

(26) Run nodemon in terminal to see DB sync'd up: 

    nodemon

WEB BROWSER

(27) Navigate to localhost3000/actor/[insert number] to view the actor based on ID.: ![navigate to localhost3000 to view actors based on ID (Sequelize_RunningQueries_QueryBasedOnID)](https://user-images.githubusercontent.com/35668707/69156671-c4796280-0ab1-11ea-8cbd-e1a104ef2df7.JPG)


NODEMON NOTE

Sometimes nodemon crashes in Windows 10 and there is a simple fix:

(1) Open Task manager (press Ctrl+Alt+Delete)

(2) Select the 'Processes tab'

(3) Search for 'Node.js: Server-side JavaScript'

(4) Select it and click on 'End task' button

Now you can run npm start.

