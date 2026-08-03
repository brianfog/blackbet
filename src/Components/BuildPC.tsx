import React,{useState} from "react";
import "../CSS/Buildpc.css";
import cpu from "../json/Json.bank/CPU.json";
import gpu from "../json/Json.bank/GPU.json";
import ram from "../json/Json.bank/RAM.json";
import ssd from "../json/Json.bank/SSD.json";
import motherb from "../json/Json.bank/MotherBoard.json";
import psu from "../json/Json.bank/PSU.json";

const BuildyourPc = () => {



    const HW_Store = ["CPU", "GPU", "RAM", "SSD", "MotherB", "PSU"];

    const HW_lists = [cpu,gpu,ram,ssd,motherb,psu];

    const [build_search, set_search_build] = useState<string>("");

    const [list, set_List] = useState<object[]>(cpu);

    const [anum, setanum] = useState<number>(0);

    const sayhell = async(index : number) => {

        set_List(HW_lists[index]);
        setanum(index);

    }

    type majtype = {
        model : string;
        price : number;
        capacity : string;
        type: string
    };



    

    const notempty = (e) => {

        const array = HW_lists[anum];

        if(build_search != ""){
        set_List(array.filter(item => item.model.toLocaleLowerCase().includes(e.target.value.toLowerCase())));
        }else{
        set_List(array);
        }

    }


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
                                <input type="text" value={build_search} onChange={(e) =>{ set_search_build(e.target.value.toLowerCase());notempty(e)}}/>
                            </div>

                            <div className="Hardware_List">
                                {
                                    list.map((hwl: majtype, i) => (<button key={i}>
                                        <h1 >{hwl.model ?? null}</h1>
                                        <h2>{hwl.type ?? null}</h2>
                                        <h2>{hwl.capacity ?? null}</h2>
                                        <h2 >{hwl.price ?? null}$</h2>
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

export default BuildyourPc;