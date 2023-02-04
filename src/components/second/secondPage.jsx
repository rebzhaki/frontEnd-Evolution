import React from "react";
import './secondPage.css';

const SecondPage = () => {
    return (
        <div className="secondpage">
            <h1>AI's next <span className="trustW" style={{ backgroundColor: "purple", backgroundImage: "linear-gradient(45deg, lightblue, #2214e8)", backgroundSize: "100%" }}>evolution</span> is here.</h1>
            <h1>And it's all about people.</h1>

            <img src={process.env.PUBLIC_URL + "/images/second.gif"} />

            <p>Engaged AI connects, explains and improves AI decision-making to drive performance</p>
            <p>across fraud, next best offer, churn, and more. This goes way beyond machine-</p>
            <p>learning management and it starts with how your people engage with your model.</p>

            <button>How it works</button>
        </div>
    )
}
export default SecondPage;