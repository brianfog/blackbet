import "../CSS/blkplan.css";
import plans from "../json/plans.json";

export default function Blan() {

    return (
        <div className="plan-board">
            <div className="plan-grid">
                {
                    plans.map((pln, i)=>(
                        <div className="plan-item" key={i}>
                            <div className="plan-buy">
                                <h1>{pln.plan}</h1>
                                <button>BUY {pln.price}</button>
                            </div>
                            <div className="plan-adv">
                                <ul>
                                    {
                                        pln.advantages.map((itm, i)=>(
                                            <li key={i}>
                                                {itm}
                                            </li>
                                        ))
                                    }
                                </ul>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )

}