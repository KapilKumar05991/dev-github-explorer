import { useContext, useEffect, useState } from 'react'
import Profile from './Profile'
import Repository from './Repository'
import SearchBar from './SearchBar'
import Activity from './Activity'
import { UserContext } from './UserProvider'
import Button from './Button'

const Layout = () => {
    const { user, setUser } = useContext(UserContext)

    return (
        <div className='relative flex min-h-screen px-3 py-4 gap-6 flex-col items-center justify-center'>
            <div className='absolute top-4 right-4'>
                <Button onClick={() => {
                    setUser({ ...user, theme: user.theme == "Dark" ? "Light" : "Dark" })
                }}> &#9728;  {user.theme == "Dark" ? "Light" : "Dark"}</Button>
            </div>
            <h1 className='text-4xl sm:text-5xl mt-8 text-center font-bold'>Developer Github Explorer</h1>
            <SearchBar />
            {
                user.error && <div className='text-2xl flex gap-4'><img className='bg-white size-10 rounded-full' src='/src/assets/github.svg' />{user.error}</div>
            }
            {
                user.loading ?
                    <div className='text-2xl mt-4 animate-ping'><img className='bg-white size-10 rounded-full' src='/src/assets/github.svg' /></div>
                    :
                    user.active && <>
                        <Profile />
                        <Repository />
                        <Activity />
                    </>
            }

        </div>
    )
}

export default Layout