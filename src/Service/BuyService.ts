import UseFetch from "../Hooks/useFetch";
import type { UserType } from "../Redux/Data Slices/userslice"

export const Buy = {

    BuyPC : async(User : UserType, PC) => {
        if (!User) return;

        const {Data, FetchError} = UseFetch('buypc', 'post', {UserName : User.username , LoggedIn : User.LoggedIN , PCDetailes : PC});
        if (FetchError) return;

        const response = await Data.data?.Link || Data.Link

        if (!response) return;

        window.open(response).focus();
    },
    BuyPCComponent : async(User : UserType, Component) => {
        if (!User) return;

        const {Data, FetchError} = UseFetch('buycomp', 'post',{UserName : User.username , LoggedIn : User.LoggedIN , CompDetailes : Component});
        if (FetchError) return;
        
        
        const response = await Data.data?.Link || Data.Link

        if (!response) return;

        window.open(response).focus();
    }

}