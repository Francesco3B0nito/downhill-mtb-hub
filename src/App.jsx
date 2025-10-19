
import { useState, useEffect } from 'react'
import { supabase } from './lib/supabaseClient'
import Auth from './components/Auth'
import Account from './components/Account'
import Home from './components/Home'

function App() {
  const [session, setSession] = useState(null)
  const [showLogin, setShowLogin] = useState(false)

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session)
    })

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session)
    })

    return () => subscription.unsubscribe()
  }, [])

  const handleShowLogin = () => {
    setShowLogin(true)
  }

  if (showLogin && !session) {
    return <Auth />
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 text-white">
      {!session ? (
        <Home onLoginClick={handleShowLogin} />
      ) : (
        <Account key={session.user.id} session={session} />
      )}
    </div>
  )
}

export default App

