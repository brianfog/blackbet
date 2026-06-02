



        const movePrice = (e) => {

            if (!Draging) return;

            const price_parent = minRef.current?.parentElement?.getBoundingClientRect();
            
            if(!price_parent) return;

            let percentage = (e.clientX - price_parent.left) / price_parent.width;
            percentage = Math.max(0, Math.min(1,percentage));

            const New_cost = Math.round(min_value + (max_value - min_value) * percentage);

            const clamped_cost = Math.min(New_cost, max_value - 100);

            set_min(clamped_cost);

            if(minRef.current){
                const New_width = ((clamped_cost - min_value) / (max_value - min_value))* 100;
                
                minRef.current.style.width = `${New_width}%`;
                
            }



        }

        const outPrice = () => {
            Set_Drag(false);
        }

 
        

export default movePrice;
