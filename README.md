#### Objective: 
Create a MERN stack application that includes user authentication (signup, signin, forgot password) using JWT tokens, and integrates with the Star Wars API to list characters with pagination. The app should be responsive and hosted on a free server. Utilize a state management library to handle data, and ensure protected routes are implemented. 

#### Requirements: 

1. **Authentication System**: 
- Implement user signup, signin, and forgot password functionality using JWT tokens. - Use bcrypt for password hashing. 
- Validate user inputs and handle errors appropriately. 

2. **Star Wars Characters Listing**: 
- Fetch and display Star Wars characters from the SWAPI using pagination. - Use a table or modal view to list only the necessary details of characters. - Provide internal pages for each character showing detailed information. 

3. **State Management**: 
- Use a state management library like Redux, Redux Toolkit, or Zustand to manage the application state. 

4. **Responsive Design**: 
- Ensure the app is responsive and works well on various screen sizes. - Use a CSS library like Tailwind CSS, Bootstrap, Ant Design, Material UI, or core CSS for styling. 

5. **Hosting**: 
- Host the application on a free server like Vercel or Netlify. 
- Share the code repository via GitHub, GitLab, or Bitbucket. 

#### Detailed Steps: 
1. **Setup and Configuration**: 
- Initialize a new React project using Create React App or a similar tool. - Set up a backend server with Node.js and Express. 
- Configure MongoDB for the database. 

2. **User Authentication**: 

- **Signup**: 
- Create a signup form with fields for username, email, and password. - Validate inputs and store hashed passwords in MongoDB. 
- Generate and return a JWT token upon successful signup. 
- **Signin**: 
- Create a signin form with fields for email and password.
- Authenticate users and return a JWT token. 
- **Forgot Password**: 
- Implement a forgot password flow to send password reset links to users. - Allow users to reset their password using a token. 

3. **Star Wars Characters API Integration**: 
- Fetch characters from the SWAPI (https://swapi.dev/api/people). 
- Implement pagination using the provided "next" and "previous" links from the API. - Display character details in a table or modal view, showing only necessary information. 

4. **State Management**: 
- Use Redux, Redux Toolkit, or Zustand to manage global state. 
- Create slices or stores for user authentication and Star Wars characters data. - Use hooks to connect components to the state. 

5. **Protected Routes**: 
- Implement protected routes that can only be accessed by authenticated users. - Redirect unauthenticated users to the signin page. 

6. **Styling and Responsiveness**: 
- Use a CSS library like Tailwind CSS, Bootstrap, Ant Design, Material UI, or core CSS to style the app. 
- Ensure the app is responsive and looks good on different devices. 

