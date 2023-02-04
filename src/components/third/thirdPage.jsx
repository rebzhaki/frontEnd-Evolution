import React from "react";
import './thirdPage.css'

const ThirdPage = () => {
    return (
        <div className="thirdpage">
            {/* <img src={process.env.PUBLIC_URL + "/images/artistic.png"} /> */}
            <h1>Take a giant leap in</h1>
            <h1>performance with</h1>
            <h1>the Apres Graph</h1>

            <div className="bigData">
                <p>The Apres Knowledge Graph understands and</p>
                <p>connects data from all sources, including:</p>
                <p>database, streaming, and model data. Then it</p>
                <p>augments the results using real-time feedback from</p>
                <p>team interactions and platform-generated insights.</p>
            </div>
            <a href="/" style={{ color: "#2214e8", textDecoration: "none", fontSize: "18px" }}>Learn more</a>
        </div>

    )
}
export default ThirdPage;