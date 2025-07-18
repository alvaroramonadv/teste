import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronRight, Star, Users, Shield, Zap } from 'lucide-react';

export default function LandingPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Navbar */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-black/80 backdrop-blur-md' : ''}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-2xl font-bold text-white">SeuLogo</div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              <a href="#home" className="text-gray-300 hover:text-white transition">Início</a>
              <a href="#features" className="text-gray-300 hover:text-white transition">Recursos</a>
              <a href="#about" className="text-gray-300 hover:text-white transition">Sobre</a>
              <a href="#contact" className="text-gray-300 hover:text-white transition">Contato</a>
            </div>

            {/* Mobile Menu Button */}
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-white"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden bg-black/90 backdrop-blur-md rounded-lg p-4 mt-2">
              <a href="#home" className="block py-2 text-gray-300 hover:text-white">Início</a>
              <a href="#features" className="block py-2 text-gray-300 hover:text-white">Recursos</a>
              <a href="#about" className="block py-2 text-gray-300 hover:text-white">Sobre</a>
              <a href="#contact" className="block py-2 text-gray-300 hover:text-white">Contato</a>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-20 pb-32 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-in">
            Bem-vindo ao Futuro
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Transforme suas ideias em realidade com nossa plataforma inovadora
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-full font-semibold hover:scale-105 transition-transform flex items-center justify-center">
              Começar Agora <ChevronRight className="ml-2" />
            </button>
            <button className="border border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-black transition">
              Saiba Mais
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-12">
            Nossos Recursos
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-8 hover:bg-white/20 transition">
              <Zap className="text-yellow-400 mb-4" size={48} />
              <h3 className="text-xl font-semibold text-white mb-2">Rápido</h3>
              <p className="text-gray-300">
                Performance otimizada para entregar resultados em tempo recorde
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-8 hover:bg-white/20 transition">
              <Shield className="text-green-400 mb-4" size={48} />
              <h3 className="text-xl font-semibold text-white mb-2">Seguro</h3>
              <p className="text-gray-300">
                Proteção de dados com criptografia de última geração
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-8 hover:bg-white/20 transition">
              <Users className="text-blue-400 mb-4" size={48} />
              <h3 className="text-xl font-semibold text-white mb-2">Colaborativo</h3>
              <p className="text-gray-300">
                Trabalhe em equipe com ferramentas integradas
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 bg-black/30">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8 text-center">
          <div>
            <div className="text-5xl font-bold text-white mb-2">10K+</div>
            <div className="text-gray-300">Usuários Ativos</div>
          </div>
          <div>
            <div className="text-5xl font-bold text-white mb-2">99.9%</div>
            <div className="text-gray-300">Uptime</div>
          </div>
          <div>
            <div className="text-5xl font-bold text-white mb-2">24/7</div>
            <div className="text-gray-300">Suporte</div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-12">
            O que dizem nossos clientes
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-8">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="text-yellow-400 fill-current" size={20} />
                ))}
              </div>
              <p className="text-gray-300 mb-4">
                "Plataforma incrível! Mudou completamente a forma como trabalho."
              </p>
              <div className="text-white font-semibold">João Silva</div>
              <div className="text-gray-400">CEO, TechCorp</div>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-8">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="text-yellow-400 fill-current" size={20} />
                ))}
              </div>
              <p className="text-gray-300 mb-4">
                "Suporte excepcional e recursos que realmente fazem a diferença."
              </p>
              <div className="text-white font-semibold">Maria Santos</div>
              <div className="text-gray-400">Designer, Creative Studio</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-12">
          <h2 className="text-4xl font-bold text-white mb-4">
            Pronto para começar?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Junte-se a milhares de usuários satisfeitos
          </p>
          <button className="bg-white text-purple-600 px-8 py-4 rounded-full font-semibold hover:scale-105 transition-transform">
            Criar Conta Grátis
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-white/10">
        <div className="max-w-7xl mx-auto text-center text-gray-400">
          <p>&copy; 2025 SeuSite. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
}