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

(5) Enter the following command to generate the Express starter app. This will set the view to use Handlebars and will name the app express_Sequelize_RunningQueries_QueryBasedOnOperators: 

    express --view=hbs express_Sequelize_RunningQueries_QueryBasedOnOperators

(6) Once the process is complete, navigate into the express_Sequelize_RunningQueries_QueryBasedOnOperators directory: 

    cd express_Sequelize_RunningQueries_QueryBasedOnOperators
    
(7) Now in the express_Sequelize_RunningQueries_QueryBasedOnOperators directory, run the following: 

    npm install

(8) Install Nodemon globally: 

    npm install -g nodemon
    
(9) Install Nodemon as a devDependency in the package.json file within the express_Sequelize_RunningQueries_QueryBasedOnOperators directory:

    npm install -save-dev nodemon
    
(10) Install mysql2:

    npm install --save mysql2

(11) Install sequelize: 

    npm install --save sequelize@5.15.1

(12) Open in VS code:

    code . 


VS CODE

(13) Navigate to the routes/index.js file.: ![Open index js file (Sequelize_RunningQueries_QueryBasedOnOperators)](https://user-images.githubusercontent.com/35668707/69394456-108ef780-0caa-11ea-81de-9b8088a6f01d.JPG)

(14) Require mysql2 in routes/index.js file: ![Require mysql2 index js file (Sequelize_RunningQueries_QueryBasedOnOperators)](https://user-images.githubusercontent.com/35668707/69394492-2997a880-0caa-11ea-867d-3e5ff3203a1d.JPG)


COMMAND PROMPT

(15) Install Sequelize CLI commands globally onto your computer: 

    npm install -g sequelize-cli

(16) Create necessary sequelize folders and filed in project:

    sequelize init
    

VS CODE

(17) Open config/config.json file and change settings to connect to the database: ![Add database connection info in config- config json file (Sequelize_RunningQueries_QueryBasedOnOperators)](https://user-images.githubusercontent.com/35668707/69394551-4d5aee80-0caa-11ea-841a-3ad6f15c42bc.JPG)

COMMAND PROMPT

(18) Install mysql2 globally so sequelize CLI will be able to connect to the database:

    npm install -g mysql2
    
(19) Install sequelize-auto tool to generate model files: 

    npm install -g sequelize-auto

(20) Generate a model file for the actor table. (-h: IP/Hostname; -d: Database; -u: Username for database; -x: Password for database; -o: directory to place the models; -t: comma-seperated names of tables to import):  

    sequelize-auto -h localhost -d sakila -u root -x Password1! -o "./models" -t actor
    
VS CODE

(21) Open app.js file at the root of the project and include the './model" folder so that the models are available everywhere in the application: 

(22) Add sequelize sync code above module.exports in the app.js file to ensure that the tables within the models in the project are the same as in the database.: 

(23) In the views folder, create a specificActor.hbs file and add code to show the names of the actors.: 

(24) In the routes/index.js file, require models, Sequelize and Sequelize Operators.: 

(25) Add a get() route for /specificActor, /actor/:id and /actors to the routes/index.js file.: 

(26) Update the /actors route with queries using the operators.: 


COMMAND PROMPT

(26) Run nodemon in terminal to see DB sync'd up: 

    nodemon

WEB BROWSER

(27) Navigate to localhost3000/actors to view the actor based on ID.: 


NODEMON NOTE

Sometimes nodemon crashes in Windows 10 and there is a simple fix:

(1) Open Task manager (press Ctrl+Alt+Delete)

(2) Select the 'Processes tab'

(3) Search for 'Node.js: Server-side JavaScript'

(4) Select it and click on 'End task' button

Now you can run npm start.

