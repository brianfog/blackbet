import UseFetch from "../Hooks/useFetch";
import type { UserType } from "../Redux/Data Slices/userslice"

export const Contact = {

    Message : async(User : UserType , MessageText : string ) => {
        if (!User || !MessageText) return;

        const {Data, FetchError} = UseFetch('messageus', 'post', {UserName : User.username, ClinetMessage : MessageText});
        if (FetchError) return;

        const response = await Data.data?.message || Data.message;

        return response;
    }

}