import React, {useEffect, useState} from 'react';
import {ReactComponent as RocketTag} from '../assets/rocket.svg';
import {ReactComponent as EnvelopeTag} from '../assets/envelope.svg';
import {ReactComponent as BlackTag} from "../assets/blackTag.svg";
import {ReactComponent as AttachTag} from "../assets/attachment.svg";
import {ReactComponent as LinkedInTag} from '../assets/linkedin.svg';
import {ReactComponent as CopyTag} from '../assets/copy.svg';
import {CopyToClipboard} from 'react-copy-to-clipboard';

const Contact = ({id}) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [mssg, setMssg] = useState('');
    const [fullMessage, setFullMessage] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [errorName, setErrorName] = useState(null);
    const [errorEmail, setErrorEmail] = useState(null);
    const [errorMssg, setErrorMssg] = useState(null);
    const [statusSuccess, setStatusSuccess] = useState(null);
    const [statusError, setStatusError] = useState(null);

    const [copiedNameValue] = useState('Monika Nowogórska');
    const [copiedName, setCopiedName] = useState(false);
    const [copiedEmailValue] = useState('monika258@gmail.com');
    const [copiedEmail, setCopiedEmail] = useState(false);
    const [attachmentName, setAttachmentName] = useState('Choose a file');

    const handleSubmit = (e) => {
        // e.preventDefault();
        sendForm();
    };

    const sendForm = () => {
        if (window.location.hash === '#/success') {
            // console.log(data.status);
            setStatusSuccess(true);
            setName('');
            setEmail('');
            setMssg('');
            setFullMessage({
                name: '',
                email: '',
                message: ''
            });
        } else if (window.location.hash === '#/error') {
            setStatusError(`Error while sending message. Try again.`);
        }
        // setTimeout(() => {
        //     setStatusSuccess(null);
        //     setStatusError(null);
        // }, 7000);
    };

    useEffect(() => {
        if (name.length > 0 && name.length < 4) {
            setErrorName('Please provide name (>4 chars)!')
        } else {
            setErrorName(null)
        }

        // regular expression used based on standard RFC 2822 but shorter version
        if (email.length > 0 &&
            !email.match(`[a-z0-9!#$%&'*+/=?^_\`{|}~-]+(?:\\.[a-z0-9!#$%&'*+/=?^_\`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?`)) {
            setErrorEmail('Your e-mail is not correct!')
        } else {
            setErrorEmail(null)
        }

        if (mssg.length > 0 && mssg.length < 20) {
            setErrorMssg('Message must contain at least 20 characters!')
        } else {
            setErrorMssg(null)
        }

        setFullMessage({
            name: name,
            email: email,
            message: mssg
        });
    }, [name, email, mssg]);

    const handleCopyMssg = () => {
        setTimeout(() => {
            setCopiedName(false);
            setCopiedEmail(false);
        }, 2500);
    };

    const handleFile = (e) => {
        e.preventDefault();
        setAttachmentName(e.target.files[0].name)
    };

    return (
        <div className='contact container-fluid' id={id}>
            <div className='contact__wrapper container '>
                <h4 className='contact__title h3 ' >
                    Found something interesting? Try me!
                </h4>
                <p className='contact__text h4'>
                    Send me your challenge to find out what I am worth ;)
                </p>
                <div className='contact__row row'>
                    <div className='contact__col col-xl-6 col-lg-6 col-md-12 col-sm-12'>
                        <div className='contact__card contact__card--left card'>
                            <div className="card__header card-header">
                                Contact me via e-mail or LinkedIn
                            </div>
                            <div className='card__body card__body--left card-body'>
                                <h5 className='card__title card-title'>
                                    Details to be used:
                                </h5>
                                <p className='card__text card-text' onClick={handleCopyMssg}>
                                    <CopyToClipboard text={copiedNameValue} onCopy={() => setCopiedName(true)}>
                                        <span>
                                            <BlackTag className='button__image'/>
                                            {<>{copiedNameValue} <CopyTag className='button__image button__copyTag'/></>}
                                            {copiedName
                                                ? <span className='error-info copy-info'> Copied to clipboard</span>
                                                : null}
                                        </span>
                                    </CopyToClipboard>
                                </p>
                                <p className='card__text card-text' onClick={handleCopyMssg}>
                                    <CopyToClipboard text={copiedEmailValue} onCopy={() => setCopiedEmail(true)}>
                                        <span>
                                        <EnvelopeTag className='button__image'/>
                                            {<>{copiedEmailValue} <CopyTag className='button__image button__copyTag'/></>}
                                            {copiedEmail
                                                ? <span className='error-info copy-info'> Copied to clipboard</span>
                                                : null}
                                        </span>
                                    </CopyToClipboard>
                                </p>
                                <p className='card__text card-text'>
                                    <li className='card__link'>
                                        <LinkedInTag className='button__image'/>
                                        <a target='_blank' rel='noopener noreferrer'
                                           href='https://www.linkedin.com/in/monika-nowogorska/'
                                           className='card__link-href'>
                                            LinkedIn profile
                                        </a>
                                    </li>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className='contact__col col-xl-6 col-lg-6 col-md-12 col-sm-12'>
                        <div className='contact__card contact__card--right card'>
                            <div className="card__header card-header">
                                Contact me via contact form
                            </div>
                            <div className='card__body card__body--right card-body'>
                                <h5 className='card__title card-title'>
                                    Use embedded contact form:
                                </h5>
                                {/*{statusSuccess*/}
                                {/*    ?*/}
                                {/*    <Success id='success' />*/}
                                {/*    :*/}
                                {/*    statusError*/}
                                {/*        ?*/}
                                {/*        <Error id='error' />*/}
                                {/*        :*/}
                                {/*        <div className='empty-div--success'></div>*/}
                                {/*}*/}
                                <form className='contact__form form'
                                      onSubmit={handleSubmit}
                                        method='POST' action='send'
                                >
                                    <div className='form__group form-group'>
                                        <label htmlFor="name" className="form__label">Name</label>
                                        <input type="text" placeholder='Name' id='name' name='name'
                                               className='form__control form-control'
                                               value={name}
                                               onChange={e => setName(e.target.value)}
                                        />
                                        {errorName
                                            ?
                                            <p className='error-info'>
                                                {errorName}
                                            </p>
                                            :
                                            <div className='empty-div--error'></div>
                                        }
                                    </div>
                                    <div className='form__group form-group'>
                                        <label htmlFor="email" className="form__label">E-mail</label>
                                        <input type="email" placeholder='abc@xyz.com' id='email' name='email'
                                               className='form__control form-control'
                                               value={email}
                                               onChange={e => setEmail(e.target.value)}
                                        />
                                        {errorEmail
                                            ?
                                            <p className='error-info'>
                                                {errorEmail}
                                            </p>
                                            :
                                            <div className='empty-div--error'></div>
                                        }
                                    </div>
                                    <div className='form__group form-group'>
                                        <label htmlFor="mssg" className="form__label form__label--textarea">
                                            Your message to me
                                        </label>
                                        <textarea id='mssg' name='mssg' cols='30' rows='4'
                                                  className='form__control form-control'
                                                  placeholder=
                                                      'Your message or challenge.
                                                   It will take you few minutes and you have nothing to loose.
                                                   But for me this is an opportunity!'
                                                  value={mssg}
                                                  onChange={e => setMssg(e.target.value)}
                                        />
                                        {errorMssg
                                            ?
                                            <p className='error-info'>
                                                {errorMssg}
                                            </p>
                                            :
                                            <div className='empty-div--error'></div>
                                        }
                                    </div>
                                    <div className="form__group form__group--attachment form-group">
                                        {/*<label htmlFor="formAttachment" className="form__label form__label--attachment">*/}
                                        {/*    Attachment (optional)*/}
                                        {/*</label>*/}
                                        {/*<div className="form__group form__group--attachmentOld form-group">*/}
                                        {/*    <input type="file" className="form__control-file form-control-file"*/}
                                        {/*           onChange={handleFile} id="formAttachment"*/}
                                        {/*           title='Select a file'/>*/}
                                        {/*    <div className='form__group form__group--attachmentNew form-group'>*/}
                                        {/*        /!*eslint-disable-next-line*!/*/}
                                        {/*        <a className="form__control-fileNew form-control">{attachmentName}</a>*/}
                                        {/*        <AttachTag className='button__image form__imageAttachment'/>*/}
                                        {/*    </div>*/}
                                        {/*</div>*/}
                                        <label htmlFor="formAttachment"  className="form__label form__label--attachment"
                                            style={{fontFamily: 'Anonymous Pro', fontStyle: 'italic'}}
                                        >
                                            I am still working on attachents to be available
                                        </label>

                                    </div>
                                    <div className='row form__row'>
                                        <div className='col-12 form__col form__col--button'>
                                            {(errorName || errorEmail || errorMssg || name === '' || email === '' || mssg === '')
                                                ?
                                                <button className="form__button btn btn-dark" disabled={true}>
                                                    <RocketTag className='button__image'/>
                                                    Send
                                                </button>
                                                :
                                                <button type='submit' className="form__button btn btn-dark mb-2">
                                                    <RocketTag className='button__image'/>
                                                    Send
                                                </button>
                                            }
                                            {/*<button type='submit' className="form__button btn btn-dark mb-2"disabled={true}>*/}
                                            {/*    Contact form is not ready yet*/}
                                            {/*</button>*/}

                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Contact;