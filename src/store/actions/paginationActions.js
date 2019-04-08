import { GET_AMOUNT_OF_PAGES, SET_CURRENT_PAGE } from "./actionTypes";


export const getAmountOfPages = (pagesAmount) => {
    return {
        type: GET_AMOUNT_OF_PAGES,
        pagesAmount: +pagesAmount
    }
}

export const setCurrentPage = (page) => {
    return {
        type: SET_CURRENT_PAGE,
        page: +page
    }
}