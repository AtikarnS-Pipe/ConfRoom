import React, {useState} from 'react'
import { Link } from 'react-router-dom'

function Users() {
    const [users, setUsers] = useState([{
        Name: 'John Doe',
        Email: 'ppiippee47@gmail.com',
        Age: 25
    }])
  return (
    <div className='d-flex justify-content-center align-items-center vh-100 bg-primary'>
        <div className='w-90 bg-white rounded p-5 '>
            <Link to='/create' className='btn btn-success'>Add +</Link>
            <table className='table'>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Age</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user, index) => (
                        <tr key={index}>
                            <td>{user.Name}</td>
                            <td>{user.Email}</td>
                            <td>{user.Age}</td>
                            <td>
                                <Link to='/update' className='btn btn-success'>Update</Link>
                                <button className='btn btn-danger'>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default Users