import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { Table } from 'react-bootstrap';


export const DisplayUsers = () => {
  
  const users = useSelector(state => state.users)

  return (
    <div className='bg-blogs'>
      <h1>Users</h1>
      <Table className='custom-table'>
          <tbody><tr>
            <td></td>
            <td>
              <b>blogs created</b>
            </td>
          </tr>
          {users.map((user) => (
            <tr key={user.id}>
              <td>
               <Link to={`/users/${user.id}`} className='link-table'>{user.name}</Link>
              </td>
              <td><h4>{user.blogs.length}</h4></td>
            </tr>
          ))}
          </tbody>
      </Table>
    </div>
  )
}
