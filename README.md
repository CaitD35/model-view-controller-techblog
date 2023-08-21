# model-view-controller-techblog

## Description

This challenge was to create a CMS-style blog site so developers can publish their blog posts and comment on other developers' posts as well. This application follows the MVC paradigm in architectural structure, using Handlebars.js as the templating language, Sequelize as the ORM and the express-session npm package for authentication.

When the user visits the homepage they are presented with any exisitng blog posts, navagation links and an option to log in. 
The user can then choose to sign up and create a username and password and the credentials are then saved to the site and the user will be logged in. There is also an option for the user to log out and log back in when they revisit the website. 

The user will also have an option to access any exisiting blog posts on the page that shows the post title, creators username, date the post was created and options to leave a comment for that post. 
The user also has an option to create a new post and review any exisiting posts the user has created. 


## Table of Contents

* [Installation](#installation)
* [Usage](#usage)
* [License](#license)

## Installation

To install this application, clone the code into your terminal for the respective repository. Then, install npm by entering the command ```npm install```  into the terminal.

## Usage

To use this application, enter the command ```npm start``` into the terminal and then open your browser and enter ```localhost:3001``` into the address bar.

## License

This application is licensed under the MIT license.


## Deployed Application

Click [here](https://mvc-tech-blogcd-d81620dd9bbd.herokuapp.com/) to view the deployed application on Heroku.
