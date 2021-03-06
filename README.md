# Portfolio

This is Portfolio of MoNo258. You will find most recent projects there - all in one place together with needed links and a contact form.
<br />
*Designed and coded by MoNo258 :)* <br />

## Link to demo:
## [Portfolio](https://mono258-portfolio.herokuapp.com/)

![screenshot](https://github.com/MoNo258/Portfolio/raw/master/src/assets/Portfolio1.JPG "Portfolio screenshot 1")
![screenshot](https://github.com/MoNo258/Portfolio/raw/master/src/assets/Portfolio2.JPG "Portfolio screenshot 2")
![screenshot](https://github.com/MoNo258/Portfolio/raw/master/src/assets/Portfolio2A.JPG "Portfolio screenshot 2A")
![screenshot](https://github.com/MoNo258/Portfolio/raw/master/src/assets/Portfolio3.JPG "Portfolio screenshot 3")

## This project uses
* React.js
* React Router
* Sass
* Bootstrap
* create-react-app (This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).)
* Contact form created with Nodemailer (using Express server)
* image used in banner taken from MoNo258's private collection 
* svg icons made by Dave Gandy from [Flaticon](https://www.flaticon.com/)
* original Wonder Woman jpg taken from [pixabay](https://cdn.pixabay.com/photo/2017/07/06/18/48/wonder-woman-2478971_960_720.jpg) and modified by MoNo258


## Useful info

### General stuff
For running app locally you need to follow below steps.

#### Step 1 - clone code and install needed packages
1. Clone app: `git clone https://github.com/MoNo258/Portfolio`
2. Go to folder where files will be placed `cd portfolio`
3. In above folder run in terminal `npm i`

#### Step 2 - run needed scripts

In the project directory, you can run:

##### `npm run dev`

Runs the app in the development mode.<br />
This will open app on localhost 3000 but only with front-end part working. But since app contains back-end part (contact form), you must use localhost 4001 to check this functionality.<br />
*NOTE:* You must have builded app in `build` folder to run it correctly on 4001. If not downloaded yet just run build process for the app (see `npm run build`).<br />
Open [http://localhost:3000](http://localhost:3000) to view app in the browser (w/o working Contact Form).<br />
Open [http://localhost:4001](http://localhost:4001) to also check Contact Form functionality.<br />

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

##### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
