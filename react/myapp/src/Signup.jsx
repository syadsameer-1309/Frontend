import React, { useState } from 'react'


const Signup = (props) => {
  const user = props.users
  const setUser = props.setUsers
  const [newUser, setNewUser] = useState()
  const [newPass, setNewPass] = useState()
  function handelUsername(e) {
    setNewUser(e.target.value)
  }
  function handelPassword (e){
    setNewPass(e.target.value)
  }
  function handelSignup (){
    console.log(...user);
    
    setUser([...user, {newUser,newPass}])
  }
  return (
    <div className='bg-black p-10'>
      <div className='bg-white p-10 border rounded-lg'>
        <h1 className='text-3xl font-medium'>Hey hi</h1>
        <p>Signup here</p>
        <div className='flex flex-col gap-2 my-2'>
          <input type="text" placeholder='Enter your name'
            onChange={handelUsername}
            className='w-52 border-black p-1 bg-transparent border rounded-lg' />
          <input type="text" placeholder='Enter your password'
          onChange={handelPassword}
            className='w-52 border-black p-1 bg-transparent border rounded-lg' />
          <input type="text" placeholder='conform your password'
            className='w-52 border-black p-1 bg-transparent border rounded-lg' />
          <button className='bg-orange-600 w-24 p-1 rounded-md' onClick={handelSignup}>Signup</button>
        </div>
      </div>
    </div>
  )
}

export default Signup
