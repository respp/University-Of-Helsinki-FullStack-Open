import { createSlice } from "@reduxjs/toolkit"


const notificationSlice = createSlice({
    name : 'notification',
    initialState : null,
    reducers : {
        setMessage(state, action){
            return action.payload
        }
    }
})

//***************** REDUX THUNK ******************/

export const showMessage = (message, time) =>{
    return async dispatch =>{
        dispatch(setMessage(message))
        setTimeout(()=>{
          dispatch(setMessage(null))
        }, time * 1000)
    }
}

// Export the actions
export const { setMessage } = notificationSlice.actions

// Export the reducer
export default notificationSlice.reducer