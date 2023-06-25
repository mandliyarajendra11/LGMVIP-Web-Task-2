const initialState={
    isLoading:false,
    isError:false,
    AllProducts:[],
    products:[],
    getData:true
}

const ProductReducer=(state=initialState,action)=>{
    switch(action.type){
        case "Loading":
            return {
                ...state,
                isLoading:true,
                getData:false
            }
        case "Api_Data":
            return {
                ...state,
                isLoading:false,
                AllProducts:action.payload,
                products:action.payload
            }
        case "Api_Error":
            return {
                ...state,
                isError:true
            } 
             default :return state
    }
}

export default ProductReducer