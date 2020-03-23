# vibez

Necessary dependencies:

1. For backend and firebase: 
Firebase tools: “npm install -g firebase-tools”
Initialized the firebase: “firebase init”, choose “process now, functions, no ESLint, NO replacement for exist files, and install all dependencies”
You may need the postman to send request and receive response
You need to check if you can manipulate the firebase of our project

2. For frontend:
Following are my npm installations, check if you need install them:
back to your root directory, install react by running "npm install -g create-react-app"

since the video create the react app within the same root directory of server-database end, so I create the frontend outside the SOEN341 folder

create the react app by name by running "create-react-app vibez-client"

enter the app folder by running "cd vibez-client"

running "npm start", after finishing, localhost:3000 should display react interface

stay in the folder of the app, install react router dom by running "npm install --save react-router-dom"

stay in the folder of the app, running "npm install --save @material-ui/core", this is a package from "material-ui.com", we will use the App Bar for our Navbar

stay in the folder of the app, running "npm install --save axios"

stay in the folder of the app, running "npm install --save dayjs"

stay in the folder of the app, running "npm install --save jwt-decode"

Also, we need to install redux by running "npm install --save redux react-redux redux-thunk", as well as an chrome extension "Redux DevTools"

to edit profile component, we need "npm install --save @material-ui/icons"

 
Problems Description:

1. global “theme”: 
In the video, the guy use “const theme” to store some CSS code, but my console prompts error when I follow his way of doing that, so I kept “const styles = { CSS CODE HERE }” instead of using “const styles = theme => ({ ...theme})” to make the code works. You can try the way in the video, this point starts around 5h51m50s.

2. “user” account
In our firebase database, the users collection has a document called “usesr” which is a spelling mistakes, its email is user@email.com with the password “123456”, but if you start our front end and using them to login, you will find there is no error message, but  you can not actually login, which means you cannot see the home page. If you wanna operate something, I suggest you using “new2” and “new3”. Btw, all passwords are “123456”

3. CSS display
According to the code, the “LOGIN”, “HOME” and “SIGNUP” in the navbar should be white, but they are black, I tried but cannot figure what caused this problem. Since it doesn’t affect our functionality, so I just ignore it and move forward.
