import React, { useContext, useState } from 'react'
import Button from './Button'
import { Input } from './Input'
import { UserContext } from './UserProvider'
import axios from 'axios'

export default function SearchBar() {
  const { user, setUser } = useContext(UserContext)
  const [input, setInput] = useState('')
  function handleChange(e) {
    setInput(e.target.value)
  }
  async function handleClick() {
    try {
      setUser((user) => ({ ...user, loading: true }))
      let response = await axios.get(`https://api.github.com/users/${input}`)
      const info = response.data
      response = await axios.get(`https://api.github.com/users/${input}/repos?per_page=100`)
      const repos = response.data
      response = await axios.get(`https://api.github.com/users/${input}/events/public?per_page=10`)
      const events = response.data
      setUser({ ...user, info, repos, events, loading: false, active: true, error:null })
    } catch (error) {
      const message = error.message != "Network Error" ? error.response.data.message : error.message
      setUser((user) => ({ ...user, loading: false, active: false, error: message }))
    }
  }
  return (
    <div className='flex w-full lg:w-2xl gap-4 justify-between'>
      <Input onChange={handleChange} placeholder='Enter Github Username eg:JhonDoe01' />
      <Button onClick={handleClick}>Search</Button>
    </div>
  )
}
