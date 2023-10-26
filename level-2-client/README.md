# Form Submission Application

A simple Next.js application that demonstrates form submission and real-time error validation. This project showcases how to create a responsive and user-friendly form for user registration.

## Overview

This application focuses on creating a registration form using Next.js, React, and Axios. The form collects user information, including email, password, and confirmation of the password. Real-time error validation ensures that users receive immediate feedback on their input. It checks the validity of the email format, password length, and password confirmation match.

## Features

- **Form Validation**: Real-time validation of email, password, and password confirmation fields.
- **Dynamic Error Handling**: Informative error messages to guide users.
- **Form Submission**: Securely handle form submissions and provide feedback on success or failure.
- **Responsive Design**: The form adapts to various screen sizes and orientations.
- **Modern JavaScript**: Written in ES6 for code clarity and efficiency.

## Technologies Used

- [Next.js](https://nextjs.org/): A popular React framework for building server-rendered React applications.
- [React](https://reactjs.org/): A JavaScript library for building user interfaces.
- [Axios](https://axios-http.com/): A promise-based HTTP client for making requests to an API.
- JavaScript (ES6): Utilizes modern JavaScript features for code efficiency.
- HTML5 and CSS3: Standard web technologies for creating structured content and styling.

## Getting Started

* Make sure you are on the project directory and install project dependencies using npm or yarn

```bash
npm install
#or 
yarn install
```
* Run the application

```bash
npm run dev
```

* Create a `.env.local` file in the project's root directory and add the port in which your server will be running 

```
NEXT_APP_PORT= "8000"
```

* Access the application on [`http://localhost:3000`](http://localhost:3000)


## Usage

1. Fill out the registration form with your email, password, and password confirmation.
2. Real-time error messages appear when you enter invalid information.
3. Submit the form, and the application will provide feedback on the success or failure of registration.

