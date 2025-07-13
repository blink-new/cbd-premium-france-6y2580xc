import { useState } from 'react'
import { ShoppingCart, Menu, X, Leaf } from 'lucide-react'
import { Button } from './ui/button'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [cartCount] = useState(0)

  const navItems = [
    { name: 'Accueil', href: '#home' },
    { name: 'Fleurs Premium', href: '#fleurs' },
    { name: 'Extractions', href: '#extractions' },
    { name: 'Sirops CBD', href: '#sirops' },
    { name: 'Contact', href: '#contact' }
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass-effect border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-r from-accent to-green-400 rounded-xl flex items-center justify-center">
              <Leaf className="w-6 h-6 text-black" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold gradient-text">CBD Premium</span>
              <span className="text-xs text-muted-foreground">FRANCE</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-foreground/80 hover:text-accent transition-colors duration-200 hover:scale-105"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Cart & Mobile Menu */}
          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              size="sm"
              className="relative hover:bg-accent/10"
            >
              <ShoppingCart className="w-5 h-5" />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 w-5 h-5 bg-accent text-black text-xs rounded-full flex items-center justify-center font-semibold">
                  {cartCount}
                </span>
              )}
            </Button>

            {/* Mobile menu button */}
            <Button
              variant="ghost"
              size="sm"
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 glass-effect border-b border-white/10 animate-slide-up">
            <nav className="px-4 py-6 space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block text-sm font-medium text-foreground/80 hover:text-accent transition-colors duration-200 py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header