import { useEffect, useState, type SetStateAction } from "react";
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

    const [hello, sethello] = useState();

    const [list, set_List] = useState(cpu);

    const sayhell = async(index) => {

        set_List(HW_lists[index]);

    }

    return (
        <div className="PC_Lab">
            <div className="PC_Builder">

                <div className="PC_video">
                    {hello}
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
                                    list.map((hwl, i) => (<button key={i}>
                                        <h1 style={{fontSize: "1.6vw", position:"absolute", left:"3%", top:"1.5%"}}>{hwl.model}</h1>
                                        <h2 style={{fontSize: "1vw", position: "absolute", left: "3%", bottom: "2%"}}>{ (hwl as any).type ? (hwl as any).type : null}</h2>
                                        <h2 style={{fontSize: "1vw", position:"absolute", right: "3%", top:"1%"}}>{ (hwl as any).capacity ? (hwl as any).capacity : null}</h2>
                                        <h2 style={{fontSize: "1.2vw", position:"absolute", right: "3%", bottom:"2%"}}>{hwl.price}</h2>
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