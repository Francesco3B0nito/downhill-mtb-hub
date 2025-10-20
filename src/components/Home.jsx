import { useState } from 'react'
import { Button } from './ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card.jsx'
import { Badge } from './ui/badge.jsx'
import { 
  Mountain, 
  Users, 
  MapPin, 
  Calendar, 
  ShoppingBag, 
  Trophy, 
  Wrench,
  Video,
  BookOpen,
  MessageCircle,
  Crown,
  Menu,
  X
} from 'lucide-react'
import '../App.css'

function Home({ onLoginClick }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const features = [
    {
      icon: MessageCircle,
      title: 'Fórum da Comunidade',
      description: 'Conecte-se com riders do mundo todo, compartilhe experiências e tire dúvidas',
      tier: 'free'
    },
    {
      icon: MapPin,
      title: 'Mapeamento de Trilhas',
      description: 'Descubra os melhores percorsos de downhill com mapas detalhados e condições em tempo real',
      tier: 'free'
    },
    {
      icon: Calendar,
      title: 'Eventos e Competições',
      description: 'Participe de eventos locais e internacionais, organize group rides',
      tier: 'free'
    },
    {
      icon: ShoppingBag,
      title: 'Marketplace',
      description: 'Compre e venda equipamentos usados, encontre ofertas exclusivas',
      tier: 'free'
    },
    {
      icon: Trophy,
      title: 'Concursos Foto/Video',
      description: 'Participe de concursos, ganhe prêmios e descontos de sponsors',
      tier: 'free'
    },
    {
      icon: Wrench,
      title: 'Profissionais Verificados',
      description: 'Encontre oficinas e mecânicos especializados perto de você',
      tier: 'free'
    },
    {
      icon: Video,
      title: 'Tutoriais Exclusivos',
      description: 'Acesse conteúdos premium de pro-riders e webinars técnicos',
      tier: 'premium'
    },
    {
      icon: Mountain,
      title: 'Route Planner AI',
      description: 'Planeje percursos personalizados com IA baseada em suas habilidades',
      tier: 'premium'
    },
    {
      icon: Users,
      title: 'Integração WhatsApp',
      description: 'Grupos automáticos para eventos e comunidades temáticas',
      tier: 'premium'
    }
  ]

  const stats = [
    { value: '50K+', label: 'Riders Ativos' },
    { value: '10K+', label: 'Trilhas Mapeadas' },
    { value: '500+', label: 'Eventos/Mês' },
    { value: '100+', label: 'Países' }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 text-white">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-slate-900/95 backdrop-blur-sm border-b border-slate-700">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-2">
              <Mountain className="h-8 w-8 text-orange-500" />
              <span className="text-xl font-bold text-white">Downhill MTB Hub</span>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-6">
              <a href="#home" className="text-slate-300 hover:text-white transition-colors">Home</a>
              <a href="#features" className="text-slate-300 hover:text-white transition-colors">Funcionalidades</a>
              <a href="#pricing" className="text-slate-300 hover:text-white transition-colors">Planos</a>
              <a href="#community" className="text-slate-300 hover:text-white transition-colors">Comunidade</a>
              <Button onClick={onLoginClick} variant="outline" className="border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white">
                Entrar
              </Button>
              <Button onClick={onLoginClick} className="bg-orange-500 hover:bg-orange-600 text-white">
                Cadastrar
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden text-white"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden py-4 space-y-3 border-t border-slate-700">
              <a href="#home" className="block text-slate-300 hover:text-white transition-colors">Home</a>
              <a href="#features" className="block text-slate-300 hover:text-white transition-colors">Funcionalidades</a>
              <a href="#pricing" className="block text-slate-300 hover:text-white transition-colors">Planos</a>
              <a href="#community" className="block text-slate-300 hover:text-white transition-colors">Comunidade</a>
              <div className="flex flex-col space-y-2 pt-2">
                <Button onClick={onLoginClick} variant="outline" className="border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white w-full">
                  Entrar
                </Button>
                <Button onClick={onLoginClick} className="bg-orange-500 hover:bg-orange-600 text-white w-full">
                  Cadastrar
                </Button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="container mx-auto px-4 py-20 text-center">
        <div className="max-w-4xl mx-auto space-y-6">
          <Badge className="bg-orange-500/20 text-orange-400 border-orange-500/50 px-4 py-1">
            🚀 Conectando riders em todo o mundo
          </Badge>
          <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
            A Comunidade Global de
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-600"> Downhill MTB</span>
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Descubra trilhas, conecte-se com riders, participe de eventos e leve suas habilidades ao próximo nível. 
            Tudo em uma única plataforma.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
            <Button size="lg" onClick={onLoginClick} className="bg-orange-500 hover:bg-orange-600 text-white text-lg px-8">
              Começar Gratuitamente
            </Button>
            <Button size="lg" variant="outline" className="border-slate-600 text-white hover:bg-slate-800 text-lg px-8">
              Ver Demo
            </Button>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 max-w-4xl mx-auto">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl font-bold text-orange-500">{stat.value}</div>
              <div className="text-slate-400 mt-2">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Funcionalidades Completas</h2>
          <p className="text-xl text-slate-400">Tudo que você precisa para viver sua paixão pelo downhill</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="bg-slate-800/50 border-slate-700 hover:border-orange-500/50 transition-all duration-300 hover:transform hover:scale-105">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <feature.icon className="h-10 w-10 text-orange-500 mb-2" />
                  {feature.tier === 'premium' && (
                    <Badge className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white border-0">
                      <Crown className="h-3 w-3 mr-1" />
                      PRO
                    </Badge>
                  )}
                </div>
                <CardTitle className="text-white">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-slate-400">{feature.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Escolha Seu Plano</h2>
          <p className="text-xl text-slate-400">Comece grátis ou desbloqueie todo o potencial com o plano PRO</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Free Plan */}
          <Card className="bg-slate-800/50 border-slate-700">
            <CardHeader>
              <CardTitle className="text-2xl text-white">Plano Gratuito</CardTitle>
              <CardDescription className="text-slate-400">Perfeito para começar</CardDescription>
              <div className="pt-4">
                <span className="text-5xl font-bold text-white">R$ 0</span>
                <span className="text-slate-400">/mês</span>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <ul className="space-y-3">
                <li className="flex items-center text-slate-300">
                  <span className="text-green-500 mr-2">✓</span> Fórum da comunidade
                </li>
                <li className="flex items-center text-slate-300">
                  <span className="text-green-500 mr-2">✓</span> Mapeamento básico de trilhas
                </li>
                <li className="flex items-center text-slate-300">
                  <span className="text-green-500 mr-2">✓</span> Calendário de eventos
                </li>
                <li className="flex items-center text-slate-300">
                  <span className-="text-green-500 mr-2">✓</span> Marketplace
                </li>
                <li className="flex items-center text-slate-300">
                  <span className="text-green-500 mr-2">✓</span> Concursos foto/video
                </li>
                <li className="flex items-center text-slate-300">
                  <span className="text-green-500 mr-2">✓</span> Lista de profissionais
                </li>
              </ul>
              <Button onClick={onLoginClick} className="w-full bg-slate-700 hover:bg-slate-600 text-white">
                Começar Agora
              </Button>
            </CardContent>
          </Card>

          {/* Premium Plan */}
          <Card className="bg-gradient-to-br from-orange-500/20 to-red-600/20 border-orange-500 relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-orange-500 text-white px-4 py-1 text-sm font-semibold">
              POPULAR
            </div>
            <CardHeader>
              <CardTitle className="text-2xl text-white">Plano PRO</CardTitle>
              <CardDescription className="text-slate-300">Para riders sérios</CardDescription>
              <div className="pt-4">
                <span className="text-5xl font-bold text-white">R$ 49</span>
                <span className="text-slate-300">/ano</span>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <ul className="space-y-3">
                <li className="flex items-center text-white font-medium">
                  <span className="text-orange-400 mr-2">✓</span> Tudo do plano gratuito
                </li>
                <li className="flex items-center text-white font-medium">
                  <span className="text-orange-400 mr-2">✓</span> Route Planner com IA
                </li>
                <li className="flex items-center text-white font-medium">
                  <span className="text-orange-400 mr-2">✓</span> Mapas offline e 3D
                </li>
                <li className="flex items-center text-white font-medium">
                  <span className="text-orange-400 mr-2">✓</span> Integração WhatsApp
                </li>
                <li className="flex items-center text-white font-medium">
                  <span className="text-orange-400 mr-2">✓</span> Tutoriais exclusivos
                </li>
                <li className="flex items-center text-white font-medium">
                  <span className="text-orange-400 mr-2">✓</span> Suporte prioritário
                </li>
                <li className="flex items-center text-white font-medium">
                  <span className="text-orange-400 mr-2">✓</span> Descontos em lojas parceiras
                </li>
              </ul>
              <Button onClick={onLoginClick} className="w-full bg-orange-500 hover:bg-orange-600 text-white">
                Assinar PRO
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Community Section */}
      <section id="community" className="container mx-auto px-4 py-20">
        <div className="bg-gradient-to-r from-orange-500/10 to-red-600/10 border border-orange-500/30 rounded-2xl p-12 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            Junte-se à Comunidade
          </h2>
          <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
            Conecte riders do Brasil e do mundo. Compartilhe suas aventuras, aprenda novas técnicas e 
            descubra os melhores spots de downhill.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" onClick={onLoginClick} className="bg-orange-500 hover:bg-orange-600 text-white">
              Criar Conta Gratuita
            </Button>
            <Button size="lg" variant="outline" className="border-slate-600 text-white hover:bg-slate-800">
              Explorar Comunidade
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-800 mt-20">
        <div className="container mx-auto px-4 py-12">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Mountain className="h-6 w-6 text-orange-500" />
                <span className="font-bold text-white">Downhill MTB Hub</span>
              </div>
              <p className="text-slate-400 text-sm">
                A plataforma completa para amantes de downhill mountain bike.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-white mb-4">Plataforma</h3>
              <ul className="space-y-2 text-slate-400 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">Funcionalidades</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Preços</a></li>
                <li><a href="#" className="hover:text-white transition-colors">API</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Documentação</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-white mb-4">Comunidade</h3>
              <ul className="space-y-2 text-slate-400 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">Fórum</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Eventos</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Parceiros</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-white mb-4">Suporte</h3>
              <ul className="space-y-2 text-slate-400 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">Central de Ajuda</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contato</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Termos de Uso</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Privacidade</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-800 mt-8 pt-8 text-center text-slate-400 text-sm">
            <p>© 2025 Downhill MTB Hub. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Home
