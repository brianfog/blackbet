import { useRef, useState } from "react";
import "../CSS/blkhedn.css";
import truck from "../Images/icons8-truck-100(1).png";

export default function Bheadown(){

    const [email, set_emial] = useState("");

    const [pass, set_pass] = useState("");

    const see = useRef(null);

    const eye_ref = useRef(null);
 
    let seetype = true;



    const seepass = () => {
        seetype = !seetype;

        if(!seetype){
            eye_ref.current.type = `text`;
            see.current.innerText = `-`;
        }else{
            eye_ref.current.type = `password`;
            see.current.innerText = `x`;
        }

    };

    return(
        <div className="headown">
            <div className="signin">

                <div className="inputsign">
                    <input type="email" onChange={(e) => { set_emial(e.target.value) }} placeholder="Your Email..."/>
                    <input type="password" ref={eye_ref} onChange={(e)=> {set_pass(e.target.value)}} placeholder="Your Password..."/>
                    <button onClick={seepass} ref={see}>x</button>
                </div>

                <button type="submit">Sign In</button>
                <p className="noaccount">Don't have an account ? <a>Sign Up</a></p>

            </div>

            <div className="hednright">

                <h1 className="weltext">Welcome</h1>

                <div className="welcomebox">
                    <div className="welcome">
                        <h1>To BlackBerry Official Site</h1>
                    </div>
                    <img src={truck}/>
                </div>

            </div>
        </div>
    )
}