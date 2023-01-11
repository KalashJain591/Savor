const ProductReducer = (state, action) => {
    // if(action.type === "SET_LOADING"){
    //     return{
    //         ...state,
    //         isLoading: true,
    //     };
    // }
    // if (action.type === "API_ERROR"){
    //     return{
    //         ...state,
    //         isLoading: false,
    //         isError: true, 
    //     };
    // }
    if(action.type === "SET_API_DATA"){
        const featureData = action.payload.filter((curElem)=>{
            return curElem.feature === true;
        });
        console.log("ac", featureData)
        return{
            ...state,
            products: action.payload,
            featureProducts: featureData,
        }
    }
  return state;
}

export default ProductReducer
