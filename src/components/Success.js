import React from "react";
import HeaderProject from "./HeaderProject";
import BackButton from "./BackButton";
import Footer from "./Footer";

const Success = ({id}) => {
    return (
        <>
            <div className='success' id={id}>
                <HeaderProject id='headerProject'/>
                <div className='success-message'>
                    <p>
                        Message was sent! Thank you.
                    </p>
                    <p>
                        I will reply soon!
                    </p>
                </div>
                <BackButton/>
                <Footer id='footer'/>
            </div>
        </>
    )
};

export default Success;