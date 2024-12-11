import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Login = (props) => {
  const navigate = useNavigate()
  const user = props.users

  const [euser, setEuser] = useState();
  const [epass, setEpass] = useState();

  const [rUser, setRuser] = useState(true)
  let oldUser = false
  function handelUsername(e) {
    setEuser(e.target.value)
  }
  function handelPassword(e) {
    setEpass(e.target.value)
  }

  function checkUser() {
    console.log(user);

    user.map((item) => {
      // console.log(item);
      if (item.username === euser && item.password === epass) {
        console.log("success full login");

        setRuser(true)

        navigate('/landing')

      }

      if (oldUser === false) {
        setRuser(false)
        navigate('/signup')
      }

    })
  }
  return (
    <div className='bg-black p-10'>
      <div className='bg-white p-10 border rounded-lg'>
        <h1 className='text-3xl font-medium'>Hey hi</h1>
        <p>I help you to manage your activities after you login</p>
        <div className='flex flex-col gap-2 my-2'>
          <input type="text" placeholder='Enter your name' onChange={handelUsername}
            className='w-52 border-black p-1 bg-transparent border rounded-lg' />
          <input type="text" placeholder='Enter your password' onChange={handelPassword}
            className='w-52 border-black p-1 bg-transparent border rounded-lg' />
          <button className='bg-violet-500 w-24 p-1 rounded-md' onClick={checkUser}>Login</button>
        </div>
      </div>
    </div>
  )
}

export default Login
