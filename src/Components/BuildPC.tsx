import React,{useState} from "react";
import "../CSS/Buildpc.css";
import cpu from "../json/Json.bank/CPU.json";
import gpu from "../json/Json.bank/GPU.json";
import ram from "../json/Json.bank/RAM.json";
import ssd from "../json/Json.bank/SSD.json";
import motherb from "../json/Json.bank/MotherBoard.json";
import psu from "../json/Json.bank/PSU.json";

export default function BuildyourPc() {



    const HW_Store = ["CPU", "GPU", "RAM", "SSD", "MotherB", "PSU"];

    const HW_lists = [cpu,gpu,ram,ssd,motherb,psu];

    const [list, set_List] = useState<object[]>(cpu);

    const sayhell = async(index : number) => {

        set_List(HW_lists[index]);

    }

    type objtyp = typeof list[0];

    return (
        <div className="PC_Lab">
            <div className="PC_Builder">

                <div className="PC_video">
                </div>
                <div className="Hardware_Section">
                    <div className="Hardware_Sec_Header">
                        <h1>Build Your Own PC</h1>
                    </div>
                    <div className="Hardware_Inventory">

                        <div className="Hardware_btn">
                            {
                                HW_Store.map((HW, i) => (<button key={i} onClick={() => sayhell(i)}>{HW}</button>))
                            }
                        </div>
                        <div className="Hardware_Find">
                            <div className="Hardware_Find_Input">
                                <input type="text"/>
                            </div>

                            <div className="Hardware_List">
                                {
                                    list.map((hwl: objtyp, i) => (<button key={i}>
                                        <h1 style={{fontSize: "1.6vw", position:"absolute", left:"3%", top:"1.5%"}}>{hwl.model ?? null}</h1>
                                        //@ts-ignore
                                        <h2 style={{fontSize: "1vw", position: "absolute", left: "3%", bottom: "2%"}}>{hwl.type ?? null}</h2>
                                        //@ts-ignore
                                        <h2 style={{fontSize: "1vw", position:"absolute", right: "3%", top:"1%"}}>{hwl.capacity ?? null}</h2>
                                        <h2 style={{fontSize: "1.2vw", position:"absolute", right: "3%", bottom:"2%"}}>{hwl.price ?? null}</h2>
                                    </button>))
                                }
                            </div>
                        </div>


                    </div>

                </div>
            </div>
        </div>
    )

}