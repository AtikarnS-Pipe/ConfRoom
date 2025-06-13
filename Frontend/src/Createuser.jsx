import React from 'react'

function Createuser() {
  return (
    <div className='d-flex justify-content-center align-items-center vh-100 bg-primary'>
        <div className='w-90 bg-white rounded p-5 '>
            <h2 className='text-center'>Update User</h2>
            <form>
                <div className='mb-3'>
                    <label className='form-label'>Name</label>
                    <input type='text' className='form-control' placeholder='Enter Name' />
                </div>
                <div className='mb-3'>
                    <label className='form-label'>Email</label>
                    <input type='email' className='form-control' placeholder='Enter Email' />
                </div>
                <div className='mb-3'>
                    <label className='form-label'>Age</label>
                    <input type='number' className='form-control' placeholder='Enter Age' />
                </div>
                <button type='submit' className='btn btn-success w-100'>Create User</button>
            </form>

        </div>
    </div>
  )
}

export default Createuser