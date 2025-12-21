import "../CSS/blkhedn.css";

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
        </div>
    )
}