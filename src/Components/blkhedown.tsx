import "../CSS/blkhedn.css";
import truck from "../Images/icons8-truck-100(1).png";

export default function Bheadown(){
    return(
        <div className="headown">
            <div className="signin">
                <div className="inputsign">
                    <input type="email" placeholder="Your Email..."/>
                    <input type="password" placeholder="Your Password..."/>
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