import React, { createContext, useEffect, useState } from 'react'

export const UserContext = createContext()

export function UserProvider({ children }) {
  const [user, setUser] = useState({
    active: false,
    info: {},
    repos: [],
    events: [],
    theme: 'Dark',
    loading: false,
    error: null
  })
  useEffect(() => {
    const root = window.document.documentElement
    if (user.theme == 'Dark') {
      root.classList.add('dark')
    } else {
      root.classList.remove('dark')
    }
  }, [user.theme])
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  )
}
