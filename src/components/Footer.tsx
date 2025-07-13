import { Leaf, Mail, Phone, MapPin, Instagram, Twitter, Facebook } from 'lucide-react'
import { Button } from './ui/button'
import { Badge } from './ui/badge'

const Footer = () => {
  return (
    <footer id="contact" className="bg-gradient-to-b from-background to-accent/5 border-t border-border/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-r from-accent to-green-400 rounded-xl flex items-center justify-center">
                <Leaf className="w-6 h-6 text-black" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold gradient-text">CBD Premium</span>
                <span className="text-xs text-muted-foreground">FRANCE</span>
              </div>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Votre référence française pour les produits CBD premium. 
              Qualité californienne, savoir-faire français, conformité légale garantie.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="sm" className="hover:bg-accent/10">
                <Instagram className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="sm" className="hover:bg-accent/10">
                <Twitter className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="sm" className="hover:bg-accent/10">
                <Facebook className="w-5 h-5" />
              </Button>
            </div>
          </div>

          {/* Products */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold">Nos Produits</h3>
            <ul className="space-y-3">
              <li>
                <a href="#fleurs" className="text-muted-foreground hover:text-accent transition-colors">
                  Fleurs CBD Premium
                </a>
              </li>
              <li>
                <a href="#extractions" className="text-muted-foreground hover:text-accent transition-colors">
                  Extractions WPFF
                </a>
              </li>
              <li>
                <a href="#sirops" className="text-muted-foreground hover:text-accent transition-colors">
                  Sirops CBD
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-accent transition-colors">
                  Nouveautés
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-accent transition-colors">
                  Best Sellers
                </a>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold">Support</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-muted-foreground hover:text-accent transition-colors">
                  Guide d'utilisation
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-accent transition-colors">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-accent transition-colors">
                  Livraison & Retours
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-accent transition-colors">
                  Service Client
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-accent transition-colors">
                  Garantie Qualité
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold">Contact</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-accent" />
                <span className="text-muted-foreground">contact@cbdpremium.fr</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-accent" />
                <span className="text-muted-foreground">+33 1 23 45 67 89</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-accent mt-0.5" />
                <span className="text-muted-foreground">
                  123 Rue de la Paix<br />
                  75001 Paris, France
                </span>
              </div>
            </div>
            
            {/* Newsletter */}
            <div className="space-y-3">
              <h4 className="font-medium">Newsletter</h4>
              <div className="flex space-x-2">
                <input 
                  type="email" 
                  placeholder="Votre email"
                  className="flex-1 px-3 py-2 bg-background border border-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-accent/50"
                />
                <Button size="sm" className="premium-button">
                  S'abonner
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Legal Section */}
        <div className="py-8 border-t border-border/50">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
            {/* Legal Links */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-6 text-sm">
              <a href="#" className="text-muted-foreground hover:text-accent transition-colors">
                Mentions Légales
              </a>
              <a href="#" className="text-muted-foreground hover:text-accent transition-colors">
                Politique de Confidentialité
              </a>
              <a href="#" className="text-muted-foreground hover:text-accent transition-colors">
                CGV
              </a>
              <a href="#" className="text-muted-foreground hover:text-accent transition-colors">
                Cookies
              </a>
            </div>

            {/* Badges */}
            <div className="flex items-center space-x-4">
              <Badge variant="outline" className="bg-green-500/10 text-green-600 border-green-500/20">
                🇫🇷 Made in France
              </Badge>
              <Badge variant="outline" className="bg-blue-500/10 text-blue-600 border-blue-500/20">
                ✓ THC &lt; 0.3%
              </Badge>
              <Badge variant="outline" className="bg-purple-500/10 text-purple-600 border-purple-500/20">
                🔒 Paiement Sécurisé
              </Badge>
            </div>
          </div>

          {/* Copyright */}
          <div className="mt-8 pt-8 border-t border-border/50 text-center">
            <p className="text-sm text-muted-foreground">
              © 2024 CBD Premium France. Tous droits réservés. 
              <span className="block mt-1">
                Produits non destinés à un usage médical. Réservé aux adultes (+18 ans).
              </span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer