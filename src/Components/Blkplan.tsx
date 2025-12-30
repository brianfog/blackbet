import "../CSS/blkplan.css";
import plans from "../json/plans.json";

export default function Blan() {

    return (
        <>
            <div className="plan-sec">
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
                                {plan.advantages.map(adv => (<h1>
                                    {adv}
                                </h1>))}
                            </div>
                        </div>))
                    }
                </div>
            </div>
        </>
    )

}