import React from 'react';
import picture from '../assets/AboutMoNo258_small.jpg'
import {ReactComponent as CursorTag} from "../assets/cursor.svg";
import {ReactComponent as PinTag} from "../assets/paperPushPin.svg";
import {ReactComponent as CircleDotTag} from "../assets/dotCircle.svg";
import {ReactComponent as CheckedTag} from "../assets/checkedSymbol.svg";

const AboutMe = ({id}) => {

    return (
        <div className='aboutMe ' id={id}>
            <div className='aboutMe__container container-fluid'>
                <div className='aboutMe__cardDeck card-deck '>
                    <div className='aboutMe__row row'>
                        <div className='aboutMe__col col-xl-6 col-lg-6 col-md-12 col-sm-12'>
                            <div className='aboutMe__card card'>
                                <div className='card__container card__container--left'>
                                    <div className='card__image card-img'>
                                        <img className='aboutMe_img' src={picture} alt="woman"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='aboutMe__col col-xl-6 col-lg-6 col-md-12 col-sm-12'>
                            <div className='aboutMe__card card'>
                                <div className='card__container'>
                                    <div className='card__body card-body'>
                                        <h5 className='card__title card-title'>
                                            <PinTag className='cardAM__tag'/>
                                            My name is Monika
                                        </h5>
                                        <p className='card__text card-text'>
                                            I am an analyst with 10 years experience
                                            aspiring for changing profession to Front-end Developer
                                            (and, in coming years, Full-Stack Developer).
                                        </p>
                                        <div className='card__listContainer'>
                                            <h3 className='card__listTitle'>
                                                <CheckedTag className='cardAM__tag'/>
                                                AS-IS:
                                            </h3>
                                            <ul className='card__list'>
                                                <li className='card__item'>
                                                    <CursorTag className='cardAM__tag cardAM__tag--list'/>
                                                    HTML5
                                                </li>
                                                <li className='card__item'>
                                                    <CursorTag className='cardAM__tag cardAM__tag--list'/>
                                                    CSS3
                                                </li>
                                                <li className='card__item'>
                                                    <CursorTag className='cardAM__tag cardAM__tag--list'/>
                                                    JS ES6
                                                </li>
                                                <li className='card__item'>
                                                    <CursorTag className='cardAM__tag cardAM__tag--list'/>
                                                    React
                                                </li>
                                                <li className='card__item'>
                                                    <CursorTag className='cardAM__tag cardAM__tag--list'/>
                                                    GitHub
                                                </li>
                                                <li className='card__item'>
                                                    <CursorTag className='cardAM__tag cardAM__tag--list'/>
                                                    Git
                                                </li>
                                                <li className='card__item'>
                                                    <CursorTag className='cardAM__tag cardAM__tag--list'/>
                                                    Sass
                                                </li>
                                                <li className='card__item'>
                                                    <CursorTag className='cardAM__tag cardAM__tag--list'/>
                                                    Bootstrap
                                                </li>
                                                <li className='card__item'>
                                                    <CursorTag className='cardAM__tag cardAM__tag--list'/>
                                                    REST API
                                                </li>
                                            </ul>
                                        </div>
                                        <div className='card__listContainer'>
                                            <h3 className='card__listTitle'>
                                                <CircleDotTag className='cardAM__tag'/>
                                                TO-BE:
                                            </h3>
                                            <ul className='card__list'>
                                                <li className='card__item'>
                                                    <CursorTag className='cardAM__tag cardAM__tag--list'/>
                                                    Redux
                                                </li>
                                                <li className='card__item'>
                                                    <CursorTag className='cardAM__tag cardAM__tag--list'/>
                                                    Node.js
                                                </li>
                                                <li className='card__item'>
                                                    <CursorTag className='cardAM__tag cardAM__tag--list'/>
                                                    ExpressJS
                                                </li>
                                                <li className='card__item'>
                                                    <CursorTag className='cardAM__tag cardAM__tag--list'/>
                                                    MongoDB
                                                </li>
                                                <li className='card__item'>
                                                    <CursorTag className='cardAM__tag cardAM__tag--list'/>
                                                    PostgreSQL
                                                </li>
                                                <li className='card__item'>
                                                    <CursorTag className='cardAM__tag cardAM__tag--list'/>
                                                    Typescript
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
};

export default AboutMe;