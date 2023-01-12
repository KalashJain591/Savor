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
        category: "All",
    }
}
export const FilterContextProvider = ({children}) =>{
    const {products} = useProductContext();
    const[state, dispatch] = useReducer(reducer, initialState)

    //Set Grid Value
    const setGridView = () =>{
       return dispatch({type: "SET_GRIDVIEW"});
    }

    //updateFilterValue
    const updateFilterValue = (event) =>{
        let name = event.target.name;
        let value = event.target.value

        return dispatch({type: "UPDATE_FILTER_VALUE", payload:{name, value}})
    }

    //clearFilter
    const clearFilters = () =>{
        dispatch({type: "CLEAR_FILTER"})
    }
    
    useEffect(()=>{
        dispatch({type: "FILTER_PRODUCTS"})
    }, [products, state.filters])

    //display all products
    useEffect(()=>{
        dispatch({type: "LOAD_FILTER_PRODUCT", payload: products})
    },[products])

    return(
        <FilterContext.Provider value = {{...state, setGridView, updateFilterValue, clearFilters}}>
            {children}
        </FilterContext.Provider> 
    )
};

export const useFilterContext = () =>{
    return useContext(FilterContext);
}