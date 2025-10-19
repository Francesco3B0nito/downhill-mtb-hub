
import { useState } from 'react'
import { supabase } from '../lib/supabaseClient'
import { Button } from './ui/button.jsx'
import { Input } from './ui/input.jsx'
import { Label } from './ui/label.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card.jsx'

export default function Auth() {
  const [loading, setLoading] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = async (event) => {
    event.preventDefault()

    setLoading(true)
    const { error } = await supabase.auth.signInWithPassword({ email, password })

    if (error) {
      alert(error.error_description || error.message)
    }
    setLoading(false)
  }

  const handleSignUp = async (event) => {
    event.preventDefault();

    setLoading(true);
    const { error } = await supabase.auth.signUp({ email, password });

    if (error) {
      alert(error.error_description || error.message);
    } else {
      alert('Check your email for the login link!');
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
      <Card className="w-full max-w-md bg-slate-800/50 border-slate-700 text-white">
        <CardHeader className="text-center">
          <CardTitle className="text-3xl">Bem-vindo!</CardTitle>
          <CardDescription className="text-slate-400">Faça login ou crie sua conta para começar</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleLogin}>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="email">Email</Label>
                <Input 
                  id="email" 
                  type="email" 
                  placeholder="seu@email.com" 
                  value={email} 
                  onChange={(e) => setEmail(e.target.value)} 
                  className="bg-slate-900 border-slate-700 focus:ring-orange-500"
                />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="password">Senha</Label>
                <Input 
                  id="password" 
                  type="password" 
                  placeholder="Sua senha"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="bg-slate-900 border-slate-700 focus:ring-orange-500"
                />
              </div>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button type="submit" className="w-full bg-orange-500 hover:bg-orange-600" disabled={loading}>
                  {loading ? 'Carregando...' : 'Entrar'}
                </Button>
                <Button variant="outline" onClick={handleSignUp} className="w-full border-slate-600 hover:bg-slate-700" disabled={loading}>
                  {loading ? 'Carregando...' : 'Cadastrar'}
                </Button>
              </div>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}

