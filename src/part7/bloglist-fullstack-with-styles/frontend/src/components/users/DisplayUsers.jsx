import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { Table } from 'react-bootstrap';
import './users.css'



export const DisplayUsers = () => {
  
  const users = useSelector(state => state.users)

  return (
    <div className='bg-blogs display-users'>
      <h3></h3>
      <table className='custom-table'>
          <tbody><tr>
            <td>Users</td>
            <td>
              <h4>Blogs created</h4>
            </td>
          </tr>
          {users.map((user) => (
            <tr key={user.id}>
              <td>
               <Link to={`/users/${user.id}`} className='link-table'>{user.name}</Link>
              </td>
              <td><h6>{user.blogs.length}</h6></td>
            </tr>
          ))}
          </tbody>
      </table>
    </div>
  )
}
