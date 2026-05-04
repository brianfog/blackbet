import { useRef } from "react";
import "../CSS/blkshopp.css"


export default function Blkshopp() {

    const hardware_choice = ["CPU", "GPU", "RAM"];

    const Hardware_ref = useRef(null);



    let Hardware_Switch = false;

    const Hardware_Open = ()=>{

        Hardware_Switch = !Hardware_Switch;

        if(!Hardware_Switch){
            Hardware_ref.current.style.height = `100px`;
        }else{
            Hardware_ref.current.style.height = `500px`;
        }

    };

    return (
        <div className="Shop-Container">

            <div className="Shop-Side-Bar">
                {
                    hardware_choice.map((HW, i) => (
                        <div key={i} className="Hardware-Choice" ref={Hardware_ref}>
                            <div className="Hardware-Head">
                                <h1>
                                    {HW}
                                </h1>
                                <button onClick={Hardware_Open}>
                                    <p>
                                        {">"}
                                    </p>
                                </button>
                            </div>
                            <div className="Hardware-Assets">
                                
                            </div>
                        </div>
                    ))
                }
            </div>
            <div className="Whole-Shop">

                <h1 className="products-head">
                    Latest Products
                </h1>

                <div className="Shop_Itslef">
                    {
                        Array.from({ length: 9 }, (_, i) => (
                            <div className="Shop-Item" key={i}>
                                <div className="Shop-Image">

                                </div>
                                <div className="Shop-Title">
                                    <h1>
                                        Shop Title
                                    </h1>
                                </div>
                            </div>
                        ))
                    }
                </div>

                <div className="Pagination">
                    {
                        Array.from({length: 5},(_,i)=>(
                            <button>
                                {i}
                            </button>
                        ))
                    }
                </div>
            </div>
        </div>
    )

}