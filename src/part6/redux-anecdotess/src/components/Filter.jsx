const Filter = () => {
    const handleChange = e => {
      // input-field value is in variable e.target.value
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
  
  export default Filter