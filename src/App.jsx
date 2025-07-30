
import Layout from './components/Layout'
import { UserContext, UserProvider } from './components/UserProvider'


function App() {
  return (
    <UserProvider>
      <Layout />
    </UserProvider>
  )
}

export default App
