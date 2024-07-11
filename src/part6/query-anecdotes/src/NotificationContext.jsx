//  ESTE COMPONENTE NO ESTA SIENDO UTILIZADO, SOLO ES UNA PRUEBA


import { useReducer, useContext, createContext } from 'react'

const NotificationReducer = (state, action) =>{
  switch(action.type){
    case 'SET_MESSAGE': {
      return action.payload
    }
    default: return state
  }
}

const NotificationContext = createContext()

export const NotificationContextProvider = () => {
    const [notification, notificationDispatch] = useReducer(NotificationReducer, '')
    return (
    <NotificationContext.Provider value={[notification, notificationDispatch] }>
      {props.children}
    </NotificationContext.Provider>
    )
}
