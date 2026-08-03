import "../CSS/exp_slide.css";

const Exp_Slide = () => {

    const Pdct = ["Keyboard", "Headphones", "Flash memory", "HDMI", "Mouse"];

    return (
        <div className="expand-Whole">
            <div className="expand_container">
                {
                    Pdct.map((op, i) => (<div className="exp-slides" key={i}>
                        <img />
                        <div className="exp-head">
                            <h1>{op}</h1>
                        </div>
                    </div>))
                }
            </div>
        </div>
    )

}

export default Exp_Slide;