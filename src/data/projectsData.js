import projectExchange from '../assets/exchange_rates_board.JPG';
import projectExchange_Alt from '../assets/ExRates_alt.jpg';
import projectShare from '../assets/share_because_you_care.JPG';
import projectShare_Alt from '../assets/SBC_alt.jpg';
import projectPPP from '../assets/potluck_party_planner.JPG';
import projectPPP_Alt from '../assets/PPP_alt.jpg';

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
            'A logged in user has ' +
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
];