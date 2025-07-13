import ProductCard from './ProductCard'
import { Button } from './ui/button'
import { Badge } from './ui/badge'
import { Snowflake, ArrowRight, Zap } from 'lucide-react'

const ExtractionsSection = () => {
  const extractions = [
    {
      id: '5',
      name: 'Hash WPFF Bubble',
      strain: 'Full Spectrum',
      thc: '< 0.3%',
      cbd: '45-55%',
      price: 149,
      originalPrice: 179,
      image: 'https://images.unsplash.com/photo-1609205807107-e8ec2120f9de?w=400&h=300&fit=crop',
      rating: 4.9,
      reviews: 67,
      category: 'hash' as const,
      isNew: true,
      isBestSeller: true
    },
    {
      id: '6',
      name: 'Live Rosin WPFF',
      strain: 'Solventless',
      thc: '< 0.3%',
      cbd: '50-60%',
      price: 189,
      image: 'https://images.unsplash.com/photo-1609205807107-e8ec2120f9de?w=400&h=300&fit=crop',
      rating: 4.8,
      reviews: 43,
      category: 'hash' as const,
      isNew: true
    },
    {
      id: '7',
      name: 'Ice Water Hash',
      strain: 'Fresh Frozen',
      thc: '< 0.3%',
      cbd: '40-50%',
      price: 129,
      image: 'https://images.unsplash.com/photo-1609205807107-e8ec2120f9de?w=400&h=300&fit=crop',
      rating: 4.7,
      reviews: 89,
      category: 'hash' as const,
      isBestSeller: true
    },
    {
      id: '8',
      name: 'Temple Ball Hash',
      strain: 'Traditional',
      thc: '< 0.3%',
      cbd: '35-45%',
      price: 109,
      image: 'https://images.unsplash.com/photo-1609205807107-e8ec2120f9de?w=400&h=300&fit=crop',
      rating: 4.6,
      reviews: 124,
      category: 'hash' as const
    }
  ]

  return (
    <section id="extractions" className="py-20 bg-gradient-to-b from-accent/5 to-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center space-y-6 mb-16">
          <Badge variant="outline" className="bg-amber-500/10 text-amber-600 border-amber-500/20">
            <Snowflake className="w-4 h-4 mr-2" />
            Extractions WPFF
          </Badge>
          
          <div className="space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold">
              <span className="text-foreground">Hash CBD</span>
              <br />
              <span className="gradient-text">Whole Plant Fresh Frozen</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Nos extractions premium WPFF (Whole Plant Fresh Frozen) offrent 
              une concentration exceptionnelle en CBD et terpènes, 
              pour une expérience authentique et puissante.
            </p>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {extractions.map((extraction) => (
            <ProductCard key={extraction.id} {...extraction} />
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <Button size="lg" variant="outline" className="border-accent/30 hover:bg-accent/10 text-lg px-8 py-4">
            Voir toutes les extractions
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>

        {/* Process Explanation */}
        <div className="mt-20 bg-card/50 border border-border/50 rounded-3xl p-8 md:p-12 backdrop-blur-sm">
          <div className="text-center space-y-6 mb-12">
            <h3 className="text-3xl font-bold">
              Le Processus <span className="gradient-text">WPFF</span>
            </h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Découvrez notre méthode d'extraction révolutionnaire qui préserve 
              l'intégralité des composés actifs de la plante.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-blue-500/10 rounded-2xl flex items-center justify-center mx-auto">
                <Snowflake className="w-8 h-8 text-blue-600" />
              </div>
              <h4 className="text-xl font-semibold">1. Congélation Flash</h4>
              <p className="text-muted-foreground">
                La plante entière est immédiatement congelée après récolte 
                pour préserver tous les terpènes volatils.
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-cyan-500/10 rounded-2xl flex items-center justify-center mx-auto">
                <div className="w-8 h-8 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-lg" />
              </div>
              <h4 className="text-xl font-semibold">2. Extraction à Froid</h4>
              <p className="text-muted-foreground">
                Utilisation d'eau glacée et de glace pour séparer les trichomes 
                sans solvants chimiques.
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-amber-500/10 rounded-2xl flex items-center justify-center mx-auto">
                <Zap className="w-8 h-8 text-amber-600" />
              </div>
              <h4 className="text-xl font-semibold">3. Purification</h4>
              <p className="text-muted-foreground">
                Filtrage minutieux et séchage contrôlé pour obtenir 
                un concentré pur et puissant.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ExtractionsSection