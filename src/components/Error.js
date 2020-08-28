import React from "react";
import HeaderProject from "./HeaderProject";
import BackButton from "./BackButton";
import Footer from "./Footer";

const Error = ({id}) => {
    return (
        <>
            <div className='error' id={id}>
                <HeaderProject id='headerProject'/>
                <div className='error-message'>
                    <p>
                        Sent error! Sorry.
                    </p>
                    <p>
                        Please try again...
                    </p>
                </div>
                <BackButton/>
                <Footer id='footer'/>
            </div>
        </>
    )
};

export default Error;