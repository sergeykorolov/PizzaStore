import axios from "axios";

export const setPizzas = (items) => ({
    type: 'SET_PIZZAS',
    payload: items,
});

export const setLoaded = (isLoaded) => ({
    type: 'SET_LOADED',
    payload: isLoaded
})

export const fetchPizzas = (sortBy, category) => (dispatch) => {
    dispatch(setLoaded(false));
    axios.get(`/pizzas?${
        category !== null
            ? `category=${category}` : ''}&_sort=${sortBy.type}&_order=${sortBy.order}`
    ).then(({data}) => {
        dispatch(setPizzas(data));
    })
}