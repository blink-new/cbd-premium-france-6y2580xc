import ProductCard from './ProductCard'
import { Button } from './ui/button'
import { Badge } from './ui/badge'
import { Droplets, ArrowRight, Beaker } from 'lucide-react'

const SiropsSection = () => {
  const sirops = [
    {
      id: '9',
      name: 'Purple Lean CBD',
      strain: 'Grape Flavor',
      thc: '< 0.3%',
      cbd: '500mg/100ml',
      price: 69,
      originalPrice: 89,
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop',
      rating: 4.8,
      reviews: 156,
      category: 'sirop' as const,
      isNew: true,
      isBestSeller: true
    },
    {
      id: '10',
      name: 'Actavis Style CBD',
      strain: 'Cherry Flavor',
      thc: '< 0.3%',
      cbd: '750mg/100ml',
      price: 79,
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop',
      rating: 4.9,
      reviews: 203,
      category: 'sirop' as const,
      isBestSeller: true
    },
    {
      id: '11',
      name: 'Hitech CBD Syrup',
      strain: 'Tropical Mix',
      thc: '< 0.3%',
      cbd: '600mg/100ml',
      price: 75,
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop',
      rating: 4.7,
      reviews: 89,
      category: 'sirop' as const,
      isNew: true
    },
    {
      id: '12',
      name: 'Lean Green CBD',
      strain: 'Mint Flavor',
      thc: '< 0.3%',
      cbd: '400mg/100ml',
      price: 59,
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop',
      rating: 4.6,
      reviews: 124,
      category: 'sirop' as const
    }
  ]

  return (
    <section id="sirops" className="py-20 bg-gradient-to-b from-background to-purple-500/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center space-y-6 mb-16">
          <Badge variant="outline" className="bg-purple-500/10 text-purple-600 border-purple-500/20">
            <Droplets className="w-4 h-4 mr-2" />
            Sirops CBD
          </Badge>
          
          <div className="space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold">
              <span className="text-foreground">Sirops CBD</span>
              <br />
              <span className="gradient-text">Style Lean Premium</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Nos sirops CBD premium s'inspirent des codes esthétiques 
              d'Actavis et Hitech. À diluer dans votre soda préféré 
              pour une expérience relaxante unique.
            </p>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {sirops.map((sirop) => (
            <ProductCard key={sirop.id} {...sirop} />
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <Button size="lg" variant="outline" className="border-accent/30 hover:bg-accent/10 text-lg px-8 py-4">
            Voir tous les sirops
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>

        {/* Usage Guide */}
        <div className="mt-20 bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded-3xl p-8 md:p-12">
          <div className="text-center space-y-6 mb-12">
            <h3 className="text-3xl font-bold">
              Comment <span className="gradient-text">Consommer</span>
            </h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Guide d'utilisation pour profiter pleinement de nos sirops CBD premium.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-purple-500/10 rounded-2xl flex items-center justify-center mx-auto">
                <Droplets className="w-8 h-8 text-purple-600" />
              </div>
              <h4 className="text-xl font-semibold">1. Dosage</h4>
              <p className="text-muted-foreground">
                Commencez par 5-10ml de sirop selon votre tolérance. 
                Augmentez progressivement si nécessaire.
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-blue-500/10 rounded-2xl flex items-center justify-center mx-auto">
                <Beaker className="w-8 h-8 text-blue-600" />
              </div>
              <h4 className="text-xl font-semibold">2. Mélange</h4>
              <p className="text-muted-foreground">
                Diluez dans 200-300ml de soda, jus de fruits ou eau gazeuse. 
                Mélangez bien avant consommation.
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-green-500/10 rounded-2xl flex items-center justify-center mx-auto">
                <div className="w-8 h-8 bg-gradient-to-r from-green-400 to-emerald-400 rounded-lg" />
              </div>
              <h4 className="text-xl font-semibold">3. Effets</h4>
              <p className="text-muted-foreground">
                Les effets se manifestent en 30-60 minutes. 
                Relaxation et bien-être garantis.
              </p>
            </div>
          </div>

          {/* Warning */}
          <div className="mt-8 p-4 bg-amber-500/10 border border-amber-500/20 rounded-xl">
            <p className="text-sm text-amber-700 text-center">
              ⚠️ <strong>Important :</strong> Réservé aux adultes. Ne pas conduire après consommation. 
              Consultez un médecin en cas de traitement médical.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SiropsSection