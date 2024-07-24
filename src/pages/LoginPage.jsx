import axios from 'axios'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const LoginPage = () => {

  const navigate = useNavigate()

  const handleSubmit = (event)=>{
    event.preventDefault()

    const URL = "https://dummyjson.com/auth/login"

    const values = {
      username: event.target.email.value,
      password: event.target.password.value
    }

    axios.post(URL,values).then(resp => {
      console.log(resp)

      // Guardar token


//      navigate("/product")
    navigate("/dashboard")

    }).catch(err => {
      console.log(err.response)
      alert("Invalid Credentials")
    })

  }



  return (
    <main className='min-h-screen  flex flex-col justify-center align-middle'>
      <form class=" border rounded  min-w-96 min-h-64 mx-auto gap-3" onSubmit={handleSubmit}>
        <div class="mb-5 mt-5 mx-4">
          <label for="email" class="block mb-2 text-sm font-medium text-gray-900 ">Your email</label>
          <input type="text" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="user@flowbite.com" required />
        </div>
        <div class="mb-5 mx-4">
          <label for="password" class="block mb-2 text-sm font-medium text-gray-900 ">Your password</label>
          <input type="password" id="password" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " required />
        </div>
        <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center  mx-4">Submit</button>
      </form>
    </main>
  )
}

export default LoginPage
