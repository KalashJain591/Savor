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
        return {
            ...state,
            grid_view: true,
        }
    }
    if (action.type === "UPDATE_FILTER_VALUE") {
        const { name, value } = action.payload
        return {
            ...state,
            filters: {
                ...state.filters,
                [name]: value,
            }
        }
    }
    if (action.type === "FILTER_PRODUCTS") {
        let { all_products } = state;
        let tempFilterProduct = [...all_products];

        const { text, category } = state.filters;

        if (text) {
            tempFilterProduct = tempFilterProduct.filter((curElem) => {
                return curElem.name.toLowerCase().includes(text);
            })
        }
        // console.log(tempFilterProduct)
        if (category !== "All") {
            tempFilterProduct = tempFilterProduct.filter((curElem) => {
                return curElem.category === category;
            })
        }
        return {
            ...state,
            filter_products: tempFilterProduct,
        }
    }
    if (action.type === "CLEAR_FILTER") {
        // console.log("reducer")
        // console.log(state.filters)
        return {
            ...state,
            filters: {
                text: "",
                category: "All"
            },
        }
    }
    return state;

}

export default FilterReducer;
