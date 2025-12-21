import "../CSS/blkhed.css"
import blkbry from '../Images/icons8-black-berry-96.png';

export default function Blkheader() {
    return (
        <>
            <header>
              <div className="Logo">
                <a>
                    BLACK<span>
                        <img src={blkbry}/>
                        </span>BERRY
                </a>
              </div>
              <div className="Menu">
                    <a>
                        Info
                    </a>
                    <a>
                        Shop
                    </a>
                    <a>
                        Tel
                    </a>
                    <a>
                        Contact
                    </a>
              </div>
            </header>
        </>
    )
}