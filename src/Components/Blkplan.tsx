import "../CSS/blkplan.css";
import plans from "../json/plans.json";

export default function Blan() {

    return (
        <>
            <div className="plan-sec">
                <h1 className="plans-head">
                    Plans
                </h1>
                <div className="plan-con">
                    {
                        plans.map(plan => (<div className="planitem">
                            <div className="planbuy">
                                <h1>{plan.plan}</h1>
                                <h2>{plan.price}</h2>
                                <button>
                                    Buy
                                </button>
                            </div>
                            <div className="advantage">
                                <h1>Pros:</h1>
                                <ul>
                                    {plan.advantages.map(adv => (<li>
                                        {adv}
                                    </li>))}
                                </ul>
                            </div>
                        </div>))
                    }
                </div>
            </div>
        </>
    )

}