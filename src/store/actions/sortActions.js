import { SET_SORTING_ORDER, SET_SORTING_FILTERS } from "./actionTypes";

export const setSortingOrder = () => {
    return {
        type: SET_SORTING_ORDER
    }
}

export const setSortingFilters = (name, value) => {
    return {
        type: SET_SORTING_FILTERS,
        name,
        value
    }
}
