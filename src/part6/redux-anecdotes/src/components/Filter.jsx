import { useDispatch } from 'react-redux'
import { filterChange } from '../reducers/filterReducer'

export const Filter = () => {
  const dispatch = useDispatch()

  const handleChange = e => {
    const content = e.target.value
    dispatch(filterChange(content))
  }

  const style = {
    marginBottom: 10
  }
  
    return (
      <div style={style}>
        filter <input onChange={handleChange} type="text"  />
      </div>
    )
  }
  