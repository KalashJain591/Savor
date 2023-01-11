import { useContext, createContext, useReducer, useEffect } from "react";
import { useProductContext } from "./ProductContext";
import reducer from "../Reducer/FilterReducer";
const FilterContext = createContext();

const initialState ={
    filter_products: [],
    all_products: [],
    grid_view: true,
    filters: {
        text: "",

    }
}
export const FilterContextProvider = ({children}) =>{
    const {products} = useProductContext();
    const[state, dispatch] = useReducer(reducer, initialState)

    //Set Grid Value
    const setGridView = () =>{
       return dispatch({type: "SET_GRIDVIEW"});
    }

    //Search Fucntion
    const updateFilterValue = (event) =>{
        let name = event.target.name;
        let value = event.target.value

        return dispatch({type: "UPDATE_FILTER_VALUE", payload:{name, value}})
    }
    useEffect(()=>{
        dispatch({type: "LOAD_FILTER_PRODUCT", payload: products})
    },[products])

    return(
        <FilterContext.Provider value = {{...state, setGridView, updateFilterValue}}>
            {children}
        </FilterContext.Provider> 
    )
};

export const useFilterContext = () =>{
    return useContext(FilterContext);
}