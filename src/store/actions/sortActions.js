import { SET_SORTING_FILTERS } from "./actionTypes";


export const setSortingFilters = (name, value) => {
    return {
        type: SET_SORTING_FILTERS,
        name,
        value
    }
}
