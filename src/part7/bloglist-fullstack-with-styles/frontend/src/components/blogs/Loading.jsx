import Spinner from 'react-bootstrap/Spinner';

const Loading = () => {
  return (
    <div className='bg-blogs'>
      <div className='spinner'>
        <Spinner animation="grow" />
      </div>

    </div>
  )
}

export default Loading
