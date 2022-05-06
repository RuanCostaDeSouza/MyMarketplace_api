My Marketplace API
A login and registration system with token generation and authentication.

Using the REST concepts this project was developed with the intention of being a simple and safe system, which allowed the user to write and read information.

🚀 Started
📋 Requirements
You must have Node, and a prostgres database installed on the machine to run this application.

Insert the following variables into an .env file with the corresponding values:

DEV_DATABASE: //database used to record information
DEV_USERNAME: //database login
DEV_PASSWORD: //database password
DEV_HOST: //used host, the most common in a local bank is to be root
DEV_PORT: //port used to access the database
🔧 Install
install all dependencies using:

npm install
yarn add

With the dependencies installed, just run the commands below depending on your preferred package manager

 * yarn sequelize db:create     // create database
 * yarn sequelize db:migrate    // create tables
 * yarn sequelize db:seed:all   // run seeders   
 * yarn dev

or

 * npm run sequelize db:create     // create database
 * npm run sequelize db:migrate    // create tables
 * npm run sequelize db:seed:all   // run seeders   
 * npm run dev

API will be running on port 3030 of your localhost

📦 Development
The developed system can be applied as a method to manage user accesses to certain parts of the application in a secure way, such as a private page that needs an altentication in order to have access to its information

🛠️ Built with
Node
Express
Sequelize ORM
postgress
Json web token
⌨️ Built by Ruan Costa de Souza😊