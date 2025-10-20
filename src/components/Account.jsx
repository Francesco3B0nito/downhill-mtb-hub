import { useState, useEffect } from 'react'
import { supabase } from '../lib/supabaseClient'
import { Button } from './ui/button.jsx'
import { Input } from './ui/input.jsx'
import { Label } from './ui/label.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card.jsx'
import { Home, LogOut } from 'lucide-react'

export default function Account({ session, onBackToHome }) {
  const [loading, setLoading] = useState(true)
  const [username, setUsername] = useState(null)
  const [fullName, setFullName] = useState(null)
  const [website, setWebsite] = useState(null)
  const [avatar_url, setAvatarUrl] = useState(null)

  useEffect(() => {
    getProfile()
  }, [session])

  async function getProfile() {
    try {
      setLoading(true)
      const { data, error, status } = await supabase
        .from('profiles')
        .select(`username, website, avatar_url, full_name`)
        .eq('id', session.user.id)
        .single()

      if (error && status !== 406) {
        throw error
      }

      if (data) {
        setUsername(data.username)
        setWebsite(data.website)
        setAvatarUrl(data.avatar_url)
        setFullName(data.full_name)
      }
    } catch (error) {
      console.log('Error loading user data:', error.message)
    } finally {
      setLoading(false)
    }
  }

  async function updateProfile(event) {
    event.preventDefault()

    try {
      setLoading(true)
      const { user } = session

      const updates = {
        id: user.id,
        username,
        full_name: fullName,
        website,
        avatar_url,
        updated_at: new Date(),
      }

      let { error } = await supabase.from('profiles').upsert(updates)

      if (error) throw error
      
      alert('Perfil atualizado com sucesso!')
    } catch (error) {
      alert(error.message)
    } finally {
      setLoading(false)
    }
  }

  async function handleLogout() {
    await supabase.auth.signOut()
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 p-4">
      <div className="w-full max-w-2xl">
        {/* Barra de Navegação */}
        <div className="flex justify-between items-center mb-4">
          <Button 
            variant="ghost" 
            onClick={onBackToHome}
            type="button"
            className="text-white hover:text-orange-500 hover:bg-slate-800"
          >
            <Home className="mr-2 h-4 w-4" />
            Voltar para Home
          </Button>
          <Button 
            variant="ghost" 
            onClick={handleLogout}
            type="button"
            className="text-white hover:text-red-500 hover:bg-slate-800"
          >
            <LogOut className="mr-2 h-4 w-4" />
            Sair
          </Button>
        </div>

        <Card className="w-full bg-slate-800/50 border-slate-700 text-white">
          <CardHeader>
            <CardTitle className="text-2xl">Seu Perfil</CardTitle>
            <CardDescription className="text-slate-400">
              Gerencie suas informações pessoais
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={updateProfile} className="space-y-6">
              <div className='space-y-2'>
                <Label>Email</Label>
                <Input 
                  type="text" 
                  value={session.user.email} 
                  disabled 
                  className="bg-slate-700 border-slate-600 text-slate-400" 
                />
              </div>
              <div className='space-y-2'>
                <Label htmlFor="username">Nome de Usuário *</Label>
                <Input
                  id="username"
                  type="text"
                  required
                  value={username || ''}
                  onChange={(e) => setUsername(e.target.value)}
                  className="bg-slate-900 border-slate-700 focus:ring-orange-500 text-white"
                  placeholder="seu_usuario"
                />
              </div>
              <div className='space-y-2'>
                <Label htmlFor="fullName">Nome Completo</Label>
                <Input
                  id="fullName"
                  type="text"
                  value={fullName || ''}
                  onChange={(e) => setFullName(e.target.value)}
                  className="bg-slate-900 border-slate-700 focus:ring-orange-500 text-white"
                  placeholder="Seu Nome Completo"
                />
              </div>
              <div className='space-y-2'>
                <Label htmlFor="website">Website</Label>
                <Input
                  id="website"
                  type="url"
                  value={website || ''}
                  onChange={(e) => setWebsite(e.target.value)}
                  className="bg-slate-900 border-slate-700 focus:ring-orange-500 text-white"
                  placeholder="https://seu-site.com"
                />
              </div>

              <div className="flex justify-center pt-4">
                <Button 
                  type="submit" 
                  className="w-full sm:w-auto bg-orange-500 hover:bg-orange-600" 
                  disabled={loading}
                >
                  {loading ? 'Salvando...' : 'Atualizar Perfil'}
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

