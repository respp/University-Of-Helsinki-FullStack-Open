import { createSlice } from "@reduxjs/toolkit"


const notificationSlice = createSlice({
    name : 'notification',
    initialState : null,
    reducers : {
        showMessage(state, action){
            return action.payload
        }
    }
})

export const { showMessage } = notificationSlice.actions

export default notificationSlice.reducer