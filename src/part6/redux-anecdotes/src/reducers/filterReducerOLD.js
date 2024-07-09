const filterReducer = (state ='', action) => {
  switch (action.type) {
    case 'SET_FILTER':
        // console.log('FILTRO: ', action.payload)
        return action.payload
      default:
        return state
    }
  }

  export const filterChange = content => {
    return {
      type: 'SET_FILTER',
      payload: content,
    }
  }

  export default filterReducer
