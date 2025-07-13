import { Button } from './ui/button'
import { Badge } from './ui/badge'
import { Sparkles, Shield, Truck } from 'lucide-react'

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-accent/5" />
      
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-accent/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-green-400/10 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8 animate-fade-in">
          {/* Badge */}
          <Badge variant="secondary" className="mx-auto bg-accent/10 text-accent border-accent/20 hover:bg-accent/20">
            <Sparkles className="w-4 h-4 mr-2" />
            100% Français • Qualité Premium
          </Badge>

          {/* Main heading */}
          <div className="space-y-4">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight">
              <span className="gradient-text">CBD Premium</span>
              <br />
              <span className="text-foreground">Made in France</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Découvrez notre sélection exclusive de fleurs CBD californiennes, 
              extractions hash WPFF et sirops premium. L'excellence française 
              rencontre le savoir-faire californien.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="premium-button text-lg px-8 py-4">
              Découvrir nos produits
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-4 border-accent/30 hover:bg-accent/10">
              En savoir plus
            </Button>
          </div>

          {/* Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 max-w-4xl mx-auto">
            <div className="flex flex-col items-center space-y-3 p-6 rounded-2xl bg-card/50 border border-border/50 backdrop-blur-sm">
              <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center">
                <Shield className="w-6 h-6 text-accent" />
              </div>
              <h3 className="font-semibold text-lg">100% Légal</h3>
              <p className="text-sm text-muted-foreground text-center">
                Conforme à la réglementation française, taux THC &lt; 0.3%
              </p>
            </div>

            <div className="flex flex-col items-center space-y-3 p-6 rounded-2xl bg-card/50 border border-border/50 backdrop-blur-sm">
              <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center">
                <Sparkles className="w-6 h-6 text-accent" />
              </div>
              <h3 className="font-semibold text-lg">Qualité Premium</h3>
              <p className="text-sm text-muted-foreground text-center">
                Sélection rigoureuse, packaging californien, saveurs authentiques
              </p>
            </div>

            <div className="flex flex-col items-center space-y-3 p-6 rounded-2xl bg-card/50 border border-border/50 backdrop-blur-sm">
              <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center">
                <Truck className="w-6 h-6 text-accent" />
              </div>
              <h3 className="font-semibold text-lg">Livraison Rapide</h3>
              <p className="text-sm text-muted-foreground text-center">
                Expédition discrète sous 24h partout en France
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero