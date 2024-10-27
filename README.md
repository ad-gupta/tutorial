# Smart Tutor

## Project Overview

Smart Tutor is an online educational platform designed to connect tutors and students seamlessly. It provides features for users to register, create and manage courses, rate tutorials, and handle payments through an integrated shopping cart system. The platform emphasizes user authentication, profile management, and efficient course management.

## Features

- **User Registration & Authentication**: Users can register, log in, and manage their profiles securely.
- **Course Management**: Tutors can create, edit, delete, and fetch details about their courses.
- **Review System**: Users can rate courses and leave feedback, helping others make informed decisions.
- **Shopping Cart Integration**: Students can add courses to their cart and process payments through a secure checkout system.
- **Email Notifications**: The platform sends email notifications for password resets and contact form submissions.
- **Paper Management**: Users can upload, search, and filter academic papers.
- **User-Friendly Interface**: Built with a modern UI to enhance the user experience.

## Technologies Used

- **Frontend**: React.js, Tailwind CSS
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **State Management**: Redux-toolkit
- **Payment Gateway**: Stripe
- **Email Service**: Nodemailer
- **Error Handling**: Custom error handling middleware

## API Endpoints

### User Authentication

- `POST /api/v1/register`: Register a new user
- `POST /api/v1/login`: Login a user
- `GET /api/v1/profile`: Get user profile
- `PUT /api/v1/profile/update`: Update user profile
- `POST /api/v1/password/forgot`: Send password reset link
- `PUT /api/v1/password/reset/:token`: Reset user password

### Course Management

- `POST /api/v1/course/add`: Add a new course
- `GET /api/v1/course/:id`: Get course details
- `PUT /api/v1/course/edit/:id`: Edit an existing course
- `DELETE /api/v1/course/delete/:id`: Delete a course
- `GET /api/v1/courses`: Get all courses

### Review Management

- `POST /api/v1/course/:id/review`: Rate a course
- `GET /api/v1/course/:id/reviews`: Get reviews for a course
- `DELETE /api/v1/course/:id/review/:reviewId`: Delete a review

### Order Management

- `POST /api/v1/cart/add/:id`: Add a course to the cart
- `GET /api/v1/cart/my-orders`: Get user orders
- `DELETE /api/v1/cart/delete/:id`: Delete an item from the cart

  ## Live Link: 
  ```bash
   https://smart-tutor-bu5k.onrender.com/

## Setup and Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/ad-gupta/tutorial.git

2. Create Build file
  `cd client`
  `npm run build`

3. Install dependency of both client and root directory
  `/client` ---> `npm install`
  `root (/)` ---> `npm install`

4. Run the website
   `root (/)` ---> `npm run dev`




![Your paragraph text (1)](https://github.com/user-attachments/assets/83237992-db5f-45b4-9c9b-8236c01eeb1e)

[Screenshot 2024-10-27 185919.pdf](https://github.com/user-attachments/files/17534869/Screenshot.2024-10-27.185919.pdf)


