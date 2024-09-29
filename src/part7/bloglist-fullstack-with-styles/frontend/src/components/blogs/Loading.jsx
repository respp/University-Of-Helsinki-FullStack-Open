import {Spinner} from 'react-bootstrap';

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
