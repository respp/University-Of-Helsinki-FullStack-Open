import PropTypes from 'prop-types';

const Notification = ({ notification }) => {
  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1,
    marginBottom: 5
  }
  
  if (!notification) return null

  return (
    <div style={style}>
      {notification}
    </div>
  )
}

Notification.propTypes = {
  notification : PropTypes.string.isRequired
}

export default Notification
