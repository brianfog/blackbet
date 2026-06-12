import { useEffect, useRef, useState } from "react";
import "../CSS/blkshopp.css"


export default function Blkshopp() {

    const hardware_choice = {
        "CPU": { "Providers": ["Intel", "AMD", "NVidia"] },
        "GPU": {
            "Providers": ["NVidia", "AMD", "Intel"],
            "V-RAM": [1, 2, 4, 6, 8]
        },
        "RAM": { "capacity": [2, 4, 6, 8, 12, 16] },
        "SSD": { "capacity": ["256 GB", "512 GB", "1 TB", "2TB"] },
        "Mother-B": { "DDRV": ["DDR4", "DDR5"] },
        "PSU": { "Wattage": ["550 W", "750 W", "850 W", "1000 W", "1200 W"] }
    };

    const Hardware_ref = useRef<HTMLDivElement[]>([]);

    const [open_index, set_open] = useState();

    const Hardware_switch_Rot = useRef<HTMLParagraphElement[]>([]);

    const Hardware_Open = (index) => {

        set_open(open_index === index ? null : index);

    };

    const [minCost, set_min] = useState(100);

    const [maxCost, set_max] = useState(10000);

    const minRef = useRef(null);

    const maxRef = useRef(null);

    const [Dir_Right, Set_Dir] = useState(false);

    const priceRef = useRef<HTMLDivElement[]>([]);

    const [Draging, Set_Drag] = useState(false);



    useEffect(() => {

        const min_value = 100;

        const max_value = 10000;



        const onPrice = (e) => {
            e.preventDefault();

            Set_Drag(true);

        }


        const movePrice = (e) => {

            if (!Draging) return;

            const price_parent = minRef.current?.parentElement?.getBoundingClientRect();

            if (!price_parent) return;



            let percentage = Dir_Right ? (price_parent.right - e.clientX) / price_parent.width : (e.clientX - price_parent.left) / price_parent.width;

            percentage = Math.max(0, Math.min(1, percentage));


            const min0max = Dir_Right ? max_value : min_value;

            const flip_width = Dir_Right ? min_value - max_value : max_value - min_value;

            const New_cost = Math.round(min0max + flip_width * percentage);

            const clamped_cost = Dir_Right ? Math.max(New_cost, min_value + 100) : Math.min(New_cost, max_value - 100);

            if (Dir_Right) { set_max(clamped_cost) } else { set_min(clamped_cost); }

            if (minRef.current && !Dir_Right) {
                const New_width = ((clamped_cost - min_value) / (max_value - min_value)) * 100;

                minRef.current.style.width = `${New_width}%`;

            } else if (maxRef.current && Dir_Right) {
                const New_width = ((max_value - clamped_cost) / (max_value - min_value) * 100);

                maxRef.current.style.width = `${New_width}%`;
            }



        }

        const outPrice = () => {
            Set_Drag(false);
        }

        if (priceRef.current[0] && priceRef.current[1]) {

            const minbtn = priceRef.current[0].getBoundingClientRect();

            priceRef.current[0].style.right = `-${minbtn.width / 2}px`;

            const maxbtn = priceRef.current[1].getBoundingClientRect();

            priceRef.current[1].style.left = `-${maxbtn.width / 2}px`;

            priceRef.current[0].addEventListener("pointerdown", onPrice);

            priceRef.current[1].addEventListener("pointerdown", onPrice);

            window.addEventListener("pointermove", movePrice);

            window.addEventListener("pointerup", outPrice);

        }
        return () => {

            if (priceRef.current[0] &&  priceRef.current[1]) {

                priceRef.current[0].removeEventListener("pointerdown", onPrice);

                priceRef.current[1].addEventListener("pointerdown", onPrice);

                window.removeEventListener("pointermove", movePrice);

                window.removeEventListener("pointerup", outPrice);
            }
        }



    }, [Draging, minCost,maxCost, Dir_Right])




    return (
        <div className="Shop-Container">
            <div className="Shop-Side-Bar">

                <div className="Price-Range">
                    <h1>At Your Price</h1>
                    <div className="Range-inputs">
                        <div className="minimum-bar" ref={minRef}>
                            <div className="min-range-drive" ref={(el : HTMLDivElement) => {if (el) priceRef.current[0] = el}} onMouseEnter={() => Set_Dir(false)}>
                                {minCost}$
                            </div>
                        </div>
                        <div className="maximum-bar" ref={maxRef}>
                            <div className="max-range-drive" ref={(el : HTMLDivElement) => {if(el) priceRef.current[1] = el}} onMouseEnter={() => Set_Dir(true)}>
                                {maxCost}$
                            </div>
                        </div>
                    </div>
                </div>

                {
                    Object.entries(hardware_choice).map(([key,data], i) => (
                        <div key={i} className="Hardware-Choice" style={{ height: open_index === i ? "500px" : "100px" }} ref={(elmnt:HTMLDivElement) =>{if (elmnt) Hardware_ref.current[i] = elmnt}}>
                            <div className="Hardware-Head">
                                <h1>
                                    {key}
                                </h1>
                                <button onClick={() => Hardware_Open(i)}>
                                    <p ref={(el: HTMLParagraphElement) => {if(el) Hardware_switch_Rot[i] = el}} style={{ transform: open_index === i ? `rotate(90deg) scaleY(1.5)` : `rotate(0deg) scaleY(1.5)` }}>
                                        {">"}
                                    </p>
                                </button>
                            </div>

                            <div className="Hardware-Assets">
                                {Object.entries(data).map(([hf,ndta], i) => (<>
                                    <h1 style={{ fontFamily: "arial", border: "1px solid black", borderStyle: "none none solid none", width: "80%" }} key={i}>{hf}</h1>
                                    <div className="Hardware-checkbox">
                                        {ndta.map((HU, i) => (
                                            <li>
                                                <label style={{ fontFamily: "arial" }} key={i}>{HU}</label>
                                                <input type="checkbox" />
                                            </li>
                                        ))}
                                    </div>
                                </>))}
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
                        Array.from({ length: 5 }, (_, i) => (
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