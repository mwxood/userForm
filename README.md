# Getting Started with UserForm App

Click the code button and copy the repository URL, then open the terminal and type git clone and the copied URL. After the repositery is finished type in terminal npm i to isntall node_modules for this project.

## How to start project

To start the project, please type npm start in the terminal and the project will open a tab in your browser with localhost:3000 (3000 is the port, if 3000 is used, the project will start with another port, for example 3001)

## Which inputs are included

in UserForm I used almost all HTML form inputs, without types:

month;
radio;
range;
reset;
search;
time;
week;
datetime-local;
color;
checkbox;

I used:

text;
email;
date;
number;
file;
url;
password;
tel;
textarea;

All inputs are required withoud file.

## What libraries are used

formik, yup, axios, bootstrap

## How to use UserForm App

The api,js file includes a request to toptal.com/developers/postbin If you are going to use this application, please insert the URL that will generate the toptal PostBin. Go to toptal.com/developers/postbin and click the blue Create Bin button, then copy the generated link "POST https://www.toptal.com/developers/postbin/your generated id" and paste that url into the api.js url.

## What design are used for UserForm App

I used a design I created myself, with a simple gradient background, a boxed shadow for form card, and standard bootstrap designed components.

## Unit test with Jest

I made tests for:
check if inputs exists,
checking the required inputs,
checking for correct data,
check for data submission,

### Happy checking and hacking ;)
