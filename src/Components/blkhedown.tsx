import { useEffect, useRef, useState } from "react";
import "../CSS/blkhedn.css";
import truck from "../Images/icons8-truck-100(1).png";

export default function Bheadown() {


    const [email, set_emial] = useState("");

    const [pass, set_pass] = useState("");

    const [TheType, Set_Type] = useState(`password`);

    const see = useRef(null);

    let seetype = true;



    const seepass = () => {
        seetype = !seetype;

        if (!seetype) {
            Set_Type(`text`);
            see.current.innerText = `-`;
        } else {
            Set_Type(`password`);
            see.current.innerText = `x`;
        }

    };






    return (
        <div className="Introduction-section">
            <div className="Log-In">

                <label>Log In</label>

                <div className="sign-input-box">

                    <div className="inputs">
                        <input type="email" onChange={(e) => { set_emial(e.target.value) }} placeholder="Your Email..." maxLength={25} />
                    </div>

                    <div className="inputs">
                        <input type={TheType} onChange={(e) => { set_pass(e.target.value) }} placeholder="Your Password..." maxLength={15} />
                        <button onClick={seepass} ref={see}>x</button>
                    </div>

                </div>

                <div className="Sign-Submit-Sec">
                    <button className="Sign-submit" type="submit" >Try</button>
                    <p>You don't have an account?  <a>Sign-Up</a></p>
                </div>

            </div>

            <div className="sub-header-right">

                <h1 className="welcome-text">Welcome</h1>

                <div className="truck-animation">
                    <div className="truck-line">
                        <h1>To BlackBerry Official Site  </h1>
                    </div>
                    <img src={truck} className="truck-img"/>
                </div>

            </div>
        </div>
    )
}