const FilterReducer = (state, action) => {
    if (action.type === "LOAD_FILTER_PRODUCT") {
        // console.log("lap", action.payload)
            return {
                ...state,
                filter_products: [...action.payload],
                all_products: [...action.payload]
            }
    }
    if (action.type === "SET_GRIDVIEW") {
        return{
            ...state,
            grid_view: true,
        }
    }
    if(action.type === "")
    return state;

}

export default FilterReducer;
