import { useEffect, useState } from "react"

const UseFetch = (Path : string, Method : string, Body : object) => {

    const [Data , Set_Data] = useState(null);
    const [Loading , Set_Loading] = useState(true);
    const [FetchError, Set_Fetch_Error] = useState(null);

    useEffect(() => {
         fetch(`Parent_URL/${Path}`,{method : Method || 'get' , body: JSON.stringify(Body) || null})
         .then(res => res.json())
         .then(ispassed => Set_Data(ispassed))
         .catch(err => {if(err && !Data) Set_Fetch_Error(err)})
         .finally(() => {if(Data) Set_Loading(false)})

    },[Data])


    return {Data, FetchError, Loading}

}

export default UseFetch;