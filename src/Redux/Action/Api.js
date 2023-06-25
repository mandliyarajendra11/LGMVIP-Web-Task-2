import axios from "axios";
import { ALL } from ".";

export const getProduct=(url,dispatch)=>{
    dispatch(ALL("Loading"));
    setTimeout(async() => {
        try{
            const res=await axios.get(url);
            var products= await res.data.data
            dispatch(ALL("Api_Data",products))
        }
        catch(error){
            dispatch(ALL("Api_Error"));
        }    
    },2000);
    
}

