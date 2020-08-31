import projectExchange from '../assets/exchange_rates_board.JPG';
import projectExchange_Alt from '../assets/ExRates_alt.jpg';
import projectShare from '../assets/share_because_you_care.JPG';
import projectShare_Alt from '../assets/SBC_alt.jpg';
import projectChat from '../assets/ChatApp.JPG';
import projectChat_Alt from '../assets/ChatA_alt.jpg';
import projectScrum from '../assets/zaplanuj_jedzonko.JPG';
import projectScrum_Alt from '../assets/ZJ_alt.jpg';
import projectPPP from '../assets/potluck_party_planner.JPG';
import projectPPP_Alt from '../assets/PPP_alt.jpg';
import projectPortfolio from '../assets/portfolio-main.JPG';
import projectPortfolio_Alt from '../assets/portfolio1-alt.jpg';

export default [
    {
        'index': 1,
        'image': projectExchange,
        'imageAlt': projectExchange_Alt,
        'title': 'Exchange Rates Board',
        'text': 'Project that presents latest & historical exchange rates and financial news from API.',
        'demoLink': 'https://mono258.github.io/Exchange_Rates_Board-project',
        'notes': 'This is RWD app',
        'exampleLogin': 'Check out whole app using example login details \'person@person.person\' with password \'person\'',
        'gitHubLink': 'https://github.com/MoNo258/Exchange_Rates_Board-project',
        'textarea': `  <h3 class='textarea__title'>
                                    This project uses:
                                </h3>
                                <ul class='textarea__list' >
                                    <li class='textarea__item' >
                                        <i class="fas fa-location-arrow"></i>
                                        JavaScript ES6
                                    </li>
                                    <li class='textarea__item'>
                                         <i class="fas fa-location-arrow"></i>
                                        React.js, React Router
                                    </li>
                                    <li class='textarea__item'>
                                         <i class="fas fa-location-arrow"></i>
                                        CSS and Sass
                                    </li>
                                    <li class='textarea__item'>
                                         <i class="fas fa-location-arrow"></i>
                                        Bootstrap & reactstrap
                                    </li>
                                    <li class='textarea__item'>
                                         <i class="fas fa-location-arrow"></i>
                                        Webpack (for configuration)
                                    </li>
                                    <li class='textarea__item'>
                                         <i class="fas fa-location-arrow"></i>
                                        REST API + WebSocket API
                                    </li>
                                    <li class='textarea__item'>
                                         <i class="fas fa-location-arrow"></i>
                                        Firebase
                                    </li>
                                    <li class='textarea__item'
                                        data-toggle="tooltip" data-placement="top"
                                        title="Black Dashboard React: Copyright 2018 Creative Tim" >
                                         <i class="fas fa-location-arrow"></i>
                                        GitHub repository: Black Dashboard React
                                    </li>
                                </ul>`,
        'story': ' Final Project for Coders Lab Front-end course. ' +
            'The idea behind this was based on my experience as Financial Analyst' +
            ' - this app was supposed to be a \'little sister\' of Reuters and Bloomberg terminals. ' +
            'I was struggling a lot to find free API services that will give me opportunity to show wider range ' +
            'of financial instruments. Having that in mind I am really happy ' +
            'to present you rates\' table, charts and financial news.'
    },
    {
        'index': 2,
        'image': projectShare,
        'imageAlt': projectShare_Alt,
        'title': 'Share because you care',
        'text': 'Landing page with contact form. ' +
            'After login user have ' +
            'possibility to fill in few steps form to give the things away.',
        'demoLink': 'https://mono258.github.io/Share_because_you_care',
        'notes': 'This is RWD app',
        'exampleLogin': 'Check out whole app using example login details \'person@person.person\' with password \'person\'',
        'gitHubLink': 'https://github.com/MoNo258/Share_because_you_care',
        'textarea': `  <h3 class='textarea__title'>
                                    This project uses:
                                </h3>
                                <ul class='textarea__list' >
                                    <li class='textarea__item' >
                                        <i class="fas fa-location-arrow"></i>
                                        create-react-app (This project was bootstrapped with Create React App.)
                                    </li>
                                    <li class='textarea__item'>
                                         <i class="fas fa-location-arrow"></i>
                                        JavaScript ES6
                                    </li>
                                    <li class='textarea__item'>
                                         <i class="fas fa-location-arrow"></i>
                                        React.js, React Router
                                    </li>
                                    <li class='textarea__item'>
                                         <i class="fas fa-location-arrow"></i>
                                        Bootstrap, Sass
                                    </li>
                                    <li class='textarea__item'>
                                         <i class="fas fa-location-arrow"></i>
                                        react-js-pagination
                                    </li>
                                    <li class='textarea__item'>
                                         <i class="fas fa-location-arrow"></i>
                                        API
                                    </li>
                                    <li class='textarea__item'>
                                         <i class="fas fa-location-arrow"></i>
                                        Firebase authentication (email & password)
                                    </li>
                                </ul>`,
        'story': 'Project was created as part of Coders Lab course. Prototype of the project ("Oddam w dobre ręce")' +
            ' was prepared by Coders Lab graduate - Magda - in Adobe XD.'
    },
    {
        'index': 3,
        'image': projectChat,
        'imageAlt': projectChat_Alt,
        'title': 'ChatApp',
        'text': 'ChatApp is very simple chat where logged in user can post messages ' +
            'and check out posts of other users.',
        'demoLink': 'https://mono258.github.io/ChatApp',
        'notes': 'This is RWD app',
        'exampleLogin': 'Check out whole app using example login details \'person@person.person\' with password \'person\'',
        'gitHubLink': 'https://github.com/MoNo258/ChatApp',
        'textarea': `  <h3 class='textarea__title'>
                                    This project uses:
                                </h3>
                                <ul class='textarea__list' >
                                    <li class='textarea__item' >
                                        <i class="fas fa-location-arrow"></i>
                                        create-react-app (This project was bootstrapped with Create React App.)
                                    </li>
                                    <li class='textarea__item'>
                                         <i class="fas fa-location-arrow"></i>
                                        React.js, React Router
                                    </li>
                                    <li class='textarea__item'>
                                         <i class="fas fa-location-arrow"></i>
                                        Firebase authentication (email/password; Google; GitHub)
                                    </li>
                                    <li class='textarea__item'>
                                         <i class="fas fa-location-arrow"></i>
                                        Firebase realtime database
                                    </li>
                                </ul>`,
        'story': 'This app was written based on tutorial prepared by Deven Rathore from \'CSS-TRICKS\'. ' +
            'My main goal was to learn Firebase authentication (using email & password / with Google / with GitHub) ' +
            'and Firebase realtime database. ' +
            'Additionally I wanted to work on app created with create-react-app package.'
    },
    {
        'index': 4,
        'image': projectScrum,
        'imageAlt': projectScrum_Alt,
        'title': 'Plan your eating behaviors',
        'text': 'Landing page and app for adding recipes and food schedules. ' +
            'Project created as part of Scrum Lab during 1 week sprint (two team members)',
        'demoLink': 'https://zen-tereshkova-6e5782.netlify.app/',
        'notes': 'This app is DESKTOP only',
        'gitHubLink': 'https://github.com/MoNo258/CodersLab_WAR_SFE_S_149_ScrumLab-repo',
        'textarea': `  <h3 class='textarea__title'>
                                    This project uses:
                                </h3>
                                <ul class='textarea__list' >
                                    <li class='textarea__item'>
                                         <i class="fas fa-location-arrow"></i>
                                        JavaScript ES6
                                    </li>
                                    <li class='textarea__item'>
                                         <i class="fas fa-location-arrow"></i>
                                        Sass Dart
                                    </li>
                                    <li class='textarea__item'>
                                         <i class="fas fa-location-arrow"></i>
                                        Gulp (for Sass)
                                    </li>
                                    <li class='textarea__item'>
                                         <i class="fas fa-location-arrow"></i>
                                        Webpack (for js)
                                    </li>
                                </ul>
                                <h3 class='textarea__title'>
                                    This project was created:
                                </h3>
                                <ul class='textarea__list' >
                                    <li class='textarea__item'>
                                         <i class="fas fa-location-arrow"></i>
                                        in Scrum methodology
                                    </li>
                                    <li class='textarea__item'>
                                         <i class="fas fa-location-arrow"></i>
                                        using GitHub repo and Git for local branche
                                    </li>
                                    <li class='textarea__item'>
                                         <i class="fas fa-location-arrow"></i>
                                        using Trello (Kanban board) for tracking progress
                                    </li>
                                    <li class='textarea__item'>
                                         <i class="fas fa-location-arrow"></i>
                                        using WebStorm
                                    </li>
                                </ul>`,
        'story': 'This app is a result of Scrum Lab module during Front-end course in Coders Lab IT School. ' +
            'This project was realized together with the team . ' +
            'We worked in Scrum methodology: we had 1 week (one sprint) to work on it. ' +
            'Our team kept repository on GitHub and members worked on their tasks on separate, local branches. ' +
            'After sprint was finished (starting from the moment when MoNo258\'s repo was created) project was developed by me.'
    },
    {
        'index': 5,
        'image': projectPPP,
        'imageAlt': projectPPP_Alt,
        'title': 'Potluck Party Planner',
        'text': 'Potluck Party Planner is an app to be used with friends while organizing a party. ' +
            'This app will help you to agree on who brings what.',
        'demoLink': 'https://mono258.github.io/PPP-Potluck_Party_Planner',
        'notes': 'This is RWD app',
        'gitHubLink': 'https://github.com/MoNo258/PPP-Potluck_Party_Planner',
        'textarea': `  <h3 class='textarea__title'>
                                    This project uses:
                                </h3>
                                <ul class='textarea__list' >
                                    <li class='textarea__item' >
                                        <i class="fas fa-location-arrow"></i>
                                        create-react-app (This project was bootstrapped with Create React App.)
                                    </li>
                                    <li class='textarea__item'>
                                         <i class="fas fa-location-arrow"></i>
                                        React.js
                                    </li>
                                    <li class='textarea__item'>
                                         <i class="fas fa-location-arrow"></i>
                                        Firebase authentication (Google)
                                    </li>
                                    <li class='textarea__item'>
                                         <i class="fas fa-location-arrow"></i>
                                        Firebase realtime database
                                    </li>
                                </ul>`,
        'story': 'This app was written based on tutorial prepared by Simon Bloom from \'CSS-TRICKS\'. ' +
            'My main goal was to learn Firebase authentication (with Google) and Firebase realtime database. ' +
            'Additionally I wanted to work on app created with create-react-app package.'
    },
    {
        'index': 6,
        'image': projectPortfolio,
        'imageAlt': projectPortfolio_Alt,
        'title': 'Portfolio',
        'text': 'This is Portfolio of MoNo258. You will find here most recent projects - all in one place together with needed links + contact information',
        'demoLink': 'https://mono258-portfolio.herokuapp.com/',
        'notes': 'This is RWD app',
        'exampleLogin': null,
        'gitHubLink': 'https://github.com/MoNo258/Portfolio',
        'textarea': `  <h3 class='textarea__title'>
                                    This project uses:
                                </h3>
                                <ul class='textarea__list' >
                                    <li class='textarea__item' >
                                        <i class="fas fa-location-arrow"></i>
                                        JavaScript ES6
                                    </li>
                                    <li class='textarea__item'>
                                         <i class="fas fa-location-arrow"></i>
                                        React.js, React Router
                                    </li>
                                    <li class='textarea__item'>
                                         <i class="fas fa-location-arrow"></i>
                                        CSS and Sass
                                    </li>
                                    <li class='textarea__item'>
                                         <i class="fas fa-location-arrow"></i>
                                        Bootstrap
                                    </li>
                                    <li class='textarea__item' >
                                        <i class="fas fa-location-arrow"></i>
                                        create-react-app (This project was bootstrapped with Create React App.)
                                    </li>
                                    <li class='textarea__item'>
                                         <i class="fas fa-location-arrow"></i>
                                        Contact form created with Nodemailer (using Express server)
                                    </li>
                                    <li class='textarea__item'>
                                         <i class="fas fa-location-arrow"></i>
                                        image used in banner taken from MoNo258's private collection
                                    </li>
                                    <li class='textarea__item'>
                                         <i class="fas fa-location-arrow"></i>
                                        svg icons made by Dave Gandy from Flaticon
                                    </li>
                                    <li class='textarea__item'>
                                         <i class="fas fa-location-arrow"></i>
                                        original Wonder Woman jpg taken from Pixabay and modified by MoNo258
                                    </li>
                                </ul>`,
        'story': 'This project contains all information and links that might be needed to check out my work/knowledge ' +
            'and to understand what I am capable of. You can easily navigate to my LinkedIn and GitHub profiles ' +
            'to see more details about my experience. If you find my projects interesting, ' +
            'you can contact me via e-mail or contact form. ' +
            'App designed and coded by myself :)'
    },
];