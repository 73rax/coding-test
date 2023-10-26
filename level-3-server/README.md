# Coding Test Level 3 (Server)

## Overview

Welcome to the server component of the Coding Test Level 2/3. This server collects and securely stores user information sent by the Frontend client in a MongoDB Atlas database.

# Getting started

Make sure you are in the project's directory

* Install all project's dependencies with npm or yarn
```bash
npm install
#or 
yarn install
```

### Setting up the Database using MongoDB Atlas

To get your server connected to MongoDB Atlas, follow these steps:

* Sign up for a MongoDB Atlas account using your preferred method, such as Google.

* Create a new project and deployment. Choose the M0 plan, which is a free version for testing the server.

* Select your cloud provider and region, give your deployment a name, and click "create."

* While your cluster is being set up, configure your security settings. Set up your username and password; remember these for later use. Allow access to your local environment by adding your local IP and granting read and write permissions to the cluster.

* Click "Finish and Close."

You've now successfully set up your MongoDB database. Let's connect the server to it.


### Setting up Environment Variables

Create a .env file in the root directory and add the following lines:

* In DB_USER, insert your username.
* In DB_PASSWORD, insert the password you set up earlier.
* In DB_NAME, insert the name of your deployment or database.
* In PORT, insert the port where you want to run your server. If not specified, the server will run on port 8000 by default.
* In DB_CONNECTION_STRING, you need to add a specific code that corresponds to your cluster. To find this code:
  * Select the database from your sidebar.
  * Click "Connect" next to the database's name.
  * Select "Drivers."
  * On step 3, you'll find a code snippet similar to the one below. You only need the text that comes after your database's name (e.g., "b12rzia"). Paste this text after DB_CONNECTION_STRING.

```
mongodb+srv://<username>:<password>@test.b12rzia.mongodb.net/?retryWrites=true&w=majority

```

Your `.env` file should look like this:

```
DB_USER=RonEl
DB_PASSWORD=asd89432jif9
DB_NAME=nameOfDeployment
DB_CONNECTION_STRING=b12rzia
PORT=8080
```

Once you've completed this setup, your server is ready to start!

## Starting the Server

Run the following command to start your server:

```
node index.js
```

# Final Words

If you are using Visual Studio Code (VSC) and running the server from the built-in terminal, you can check the port where your server is running.

You can make calls to the server using tools like Postman. The server currently has one route, `/user`, and one endpoint, `/register`.

To register a user in your database, make a POST request to the following endpoint:

```
http://localhost:8000/user/register
```

Include a body with the user's credentials in the following raw JSON format:

```json
{
  "email": "users@email.com",
  "password": "usersPassword",
  "confirmPassword": "usersPassword"
}
```


## 🔗 Links
[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://https://www.linkedin.com/in/alexandros-ferent/)

