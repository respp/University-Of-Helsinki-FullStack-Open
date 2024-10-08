import { createSlice } from "@reduxjs/toolkit"

const errorMessageSlice = createSlice({
    name : 'error',
    initialState : null,
    reducers : {
        setError(state, action){
            return action.payload
        },
        setErrorForm(state, action){
            return action.payload
        }
    }
})

//***************** REDUX THUNK ******************/

export const error = (message, time) =>{//message
    return dispatch =>{
        dispatch(setError(message))
        setTimeout(() => {
            dispatch(setError(null))
        }, 1000 * time);
    }
}

export const errorForm = (message, time) =>{//message
    return dispatch =>{
        dispatch(setErrorForm(message))
        setTimeout(() => {
            dispatch(setErrorForm(null))
        }, 1000 * time);
    }
}

export const { setError, setErrorForm } = errorMessageSlice.actions

export default errorMessageSlice.reducer