import React from "react";
import { Link } from "react-router-dom";
import './firstPage.css';

const FirstPage = () => {
    return (
        <>

            <div className="firstpage">
                <div className="navb">
                    <img src={process.env.PUBLIC_URL + '/images/logo2.png'} />
                    <div className="navlink">
                        <Link to="/">Product</Link>
                        <Link to="/">Usecases</Link>
                        <Link to="/">Company</Link>
                        <Link to="/">Blog</Link>
                        <Link to="/">Pricing</Link>
                        <Link to="/" style={{ float: "right" }}>Sign in</Link>
                        <Link className="" to="/" style={{ float: "right" }}>Sign up</Link>
                    </div>
                </div>
                <div className="content">
                    <img src={process.env.PUBLIC_URL + '/images/first.gif'} />
                    <h1>Build models you can <span className="trustW" style={{ backgroundColor: "purple", backgroundImage: "linear-gradient(45deg, beige, #2214e8)", backgroundSize: "100%" }}>trust</span></h1>
                    <p>Continuously improve your model's performance with feedback</p>
                    <p>from across your organization</p>

                    <div style={{ textAlign: "center" }}>
                        <button style={{ backgroundColor: "#952bdb" }}>Get Started</button>
                        <button style={{ backgroundColor: "#5a5b5b" }}>Request Demo</button>
                    </div>
                </div>

                <div className="footerr">
                    <hr></hr>
                    <div className="footImage">

                        <img src={process.env.PUBLIC_URL + '/images/amazon.png'} />
                        <img src={process.env.PUBLIC_URL + '/images/ericss.png'} />
                        <img src={process.env.PUBLIC_URL + '/images/walmart.png'} />
                        <img src={process.env.PUBLIC_URL + '/images/siemens.png'} />
                        <img src={process.env.PUBLIC_URL + '/images/samsung.png'} />
                    </div>
                </div>
            </div>
        </>
    )

}
export default FirstPage;