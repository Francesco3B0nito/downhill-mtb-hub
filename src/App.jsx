import { useState, useEffect } from 'react'
import { supabase } from './lib/supabaseClient'
import Auth from './components/Auth'
import Account from './components/Account'
import Home from './components/Home'

function App() {
  const [session, setSession] = useState(null)
  const [showLogin, setShowLogin] = useState(false)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Ottieni la sessione iniziale
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session)
      setLoading(false)
    })

    // Ascolta i cambiamenti di autenticazione
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session)
      // Se l'utente fa login, nascondi la pagina di login
      if (session) {
        setShowLogin(false)
      }
    })

    return () => subscription.unsubscribe()
  }, [])

  const handleShowLogin = () => {
    setShowLogin(true)
  }

  const handleBackToHome = () => {
    setShowLogin(false)
  }

  // Mostra un loading durante il check della sessione
  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center">
        <div className="text-white text-xl">Carregando...</div>
      </div>
    )
  }

  // Se c'è una sessione attiva, mostra il profilo
  if (session) {
    return <Account session={session} onBackToHome={handleBackToHome} />
  }

  // Se non c'è sessione e l'utente ha cliccato su login/cadastro
  if (showLogin) {
    return <Auth onBack={handleBackToHome} />
  }

  // Altrimenti mostra la homepage
  return <Home onLoginClick={handleShowLogin} />
}

export default App

