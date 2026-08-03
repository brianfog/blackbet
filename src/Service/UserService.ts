import UseFetch from "../Hooks/useFetch";

export const UserAuth = {

    TokenCheck : async() => {

        const token = localStorage.getItem('token');
        if (!token) return;

        //otherwise

        const {Data, FetchError} = UseFetch('checktoken','post',{user_token : token})
        if(FetchError) {
            console.log(`error occurred : ${FetchError}`);
            return
        }
        const response = await Data;
        
        return response;

        //Redux Has the Hold of the user's info

    },

    signUP : async(Password : string, Email : string) => {
        if (!Password || !Email) return;

        const {Data, FetchError} = UseFetch('signup','post',{password: Password,email : Email});
        if(FetchError) {
            console.log(`error occurred : ${FetchError}`);
            return
        }
        const response = await Data;
        await localStorage.setItem('token', response.data?.token || response.token);
        UserAuth.TokenCheck();
    },

    signIN : async(PassWord: string, EMail : string ) => {
        if (!EMail || !PassWord) return; 

        const {Data,FetchError} = UseFetch('signin','post',{logpass : PassWord, logmail : EMail});
        if(FetchError){
            console.log(`error occurred : ${FetchError}`);
            return
        }
        const response = Data;
        await localStorage.setItem('token', response.data?.token || response.token);
        UserAuth.TokenCheck();
    },

    

}