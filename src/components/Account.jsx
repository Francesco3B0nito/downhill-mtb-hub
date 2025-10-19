import { useState, useEffect } from 'react'
import { supabase } from '../lib/supabaseClient'
import { Button } from '@/components/ui/button.jsx'
import { Input } from '@/components/ui/input.jsx'
import { Label } from '@/components/ui/label.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'

export default function Account({ session }) {
  const [loading, setLoading] = useState(true)
  const [username, setUsername] = useState(null)
  const [fullName, setFullName] = useState(null)
  const [website, setWebsite] = useState(null)
  const [avatar_url, setAvatarUrl] = useState(null)

  useEffect(() => {
    let { data, error, status } = supabase
      .from('profiles')
      .select(`username, website, avatar_url, full_name`)
      .eq('id', session.user.id)
      .single()

    if (error && status !== 406) {
      console.log(error)
      throw error
    }

    if (data) {
      setUsername(data.username)
      setWebsite(data.website)
      setAvatarUrl(data.avatar_url)
      setFullName(data.full_name)
    }

    setLoading(false)

  }, [session])

  async function updateProfile(event) {
    event.preventDefault()

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

    if (error) {
      alert(error.message)
    }
    setLoading(false)
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
      <Card className="w-full max-w-2xl bg-slate-800/50 border-slate-700 text-white">
        <CardHeader>
          <CardTitle>Seu Perfil</CardTitle>
          <CardDescription>Gerencie suas informações</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={updateProfile} className="space-y-6">
            <div className='space-y-2'>
              <Label>Email</Label>
              <Input type="text" value={session.user.email} disabled className="bg-slate-700" />
            </div>
            <div className='space-y-2'>
              <Label htmlFor="username">Nome de Usuário</Label>
              <Input
                id="username"
                type="text"
                required
                value={username || ''}
                onChange={(e) => setUsername(e.target.value)}
                className="bg-slate-900 border-slate-700 focus:ring-orange-500"
              />
            </div>
            <div className='space-y-2'>
              <Label htmlFor="fullName">Nome Completo</Label>
              <Input
                id="fullName"
                type="text"
                value={fullName || ''}
                onChange={(e) => setFullName(e.target.value)}
                className="bg-slate-900 border-slate-700 focus:ring-orange-500"
              />
            </div>
            <div className='space-y-2'>
              <Label htmlFor="website">Website</Label>
              <Input
                id="website"
                type="url"
                value={website || ''}
                onChange={(e) => setWebsite(e.target.value)}
                className="bg-slate-900 border-slate-700 focus:ring-orange-500"
              />
            </div>

            <div className="flex justify-between items-center pt-4">
              <Button type="submit" className="bg-orange-500 hover:bg-orange-600" disabled={loading}>
                {loading ? 'Salvando...' : 'Atualizar Perfil'}
              </Button>
              <Button variant="outline" className="border-slate-600 hover:bg-slate-700" onClick={() => supabase.auth.signOut()}>
                Sair
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}

