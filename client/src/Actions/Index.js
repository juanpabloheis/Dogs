import { URL_BREEDS, URL_BREED_CREATED, URL_BREEDS_NAME, URL_BREED_DETAIL, URL_TEMPERAMENTS } from '../Endpoints'
const axios = require('axios');


export function getBreeds(name) {
    return async function (dispatch) {
        if (name) {
            let breeds = await axios.get(URL_BREEDS_NAME + name);
            breeds = breeds.data;
            return dispatch({ type: 'GET_BREEDS_NAME', payload: breeds });
        } else {
            let breeds = await axios.get(URL_BREEDS);
            breeds = breeds.data;
            return dispatch({ type: 'GET_BREEDS', payload: breeds });
        }
    };
}

export function getDetail(id) {
    return async function (dispatch) {
        const detail = await axios.get(URL_BREED_DETAIL + id)
        return dispatch({ type: 'GET_DETAIL', payload: detail.data })
    }
}

export function deleteDetail() {
    return { type: 'DELETE_DETAIL'}
}

export function addDog(dog) {
    return async function (dispatch) {
        await axios.post(URL_BREED_CREATED, dog);
        const breeds = await axios.get(URL_BREEDS);
        return dispatch({ type: 'GET_BREEDS', payload: breeds.data });
    };
}

export function getTemperaments() {
    return async function (dispatch) {
        const temperaments = await axios.get(URL_TEMPERAMENTS)
        return dispatch({ type: 'GET_TEMPERAMENTS', payload: temperaments.data })
    }
}

export function filterBy(payload) {
    return { type: 'FILTER_BY', payload: payload }
};

export function orderBy(payload) {
    return { type: 'ORDER_BY', payload: payload }
};

export function cleanFilters() {
    return { type: 'CLEAN_FILTERS' }
};

export function setDogsPerPage(payload) {
    return { type: 'SET_DOGS_PER_PAGE', payload: payload }
}

