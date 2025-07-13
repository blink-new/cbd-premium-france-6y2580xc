import ProductCard from './ProductCard'
import { Button } from './ui/button'
import { Badge } from './ui/badge'
import { Leaf, ArrowRight } from 'lucide-react'

const FleursSection = () => {
  const fleurs = [
    {
      id: '1',
      name: 'Cookies Gelato',
      strain: 'Indica Dominant Hybrid',
      thc: '< 0.3%',
      cbd: '18-22%',
      price: 89,
      originalPrice: 109,
      image: 'https://images.unsplash.com/photo-1605648916361-9bc12ad6a569?w=400&h=300&fit=crop',
      rating: 4.9,
      reviews: 127,
      category: 'fleur' as const,
      isNew: true,
      isBestSeller: true
    },
    {
      id: '2',
      name: 'DOJA Purple Punch',
      strain: 'Indica',
      thc: '< 0.3%',
      cbd: '16-20%',
      price: 79,
      image: 'https://images.unsplash.com/photo-1583912267550-3a0b5c4b9c3a?w=400&h=300&fit=crop',
      rating: 4.8,
      reviews: 89,
      category: 'fleur' as const,
      isBestSeller: true
    },
    {
      id: '3',
      name: 'BackPackBoys OG Kush',
      strain: 'Hybrid',
      thc: '< 0.3%',
      cbd: '19-23%',
      price: 95,
      image: 'https://images.unsplash.com/photo-1574781330855-d0db2706b3d0?w=400&h=300&fit=crop',
      rating: 4.7,
      reviews: 156,
      category: 'fleur' as const,
      isNew: true
    },
    {
      id: '4',
      name: 'Cookies Wedding Cake',
      strain: 'Indica Dominant',
      thc: '< 0.3%',
      cbd: '17-21%',
      price: 85,
      image: 'https://images.unsplash.com/photo-1605648916361-9bc12ad6a569?w=400&h=300&fit=crop',
      rating: 4.9,
      reviews: 203,
      category: 'fleur' as const
    }
  ]

  return (
    <section id="fleurs" className="py-20 bg-gradient-to-b from-background to-accent/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center space-y-6 mb-16">
          <Badge variant="outline" className="bg-green-500/10 text-green-600 border-green-500/20">
            <Leaf className="w-4 h-4 mr-2" />
            Fleurs Premium
          </Badge>
          
          <div className="space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold">
              <span className="gradient-text">Fleurs CBD</span>
              <br />
              <span className="text-foreground">Style Californien</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Découvrez notre collection exclusive de fleurs CBD premium, 
              cultivées avec passion et présentées dans des packagings 
              iconiques inspirés des plus grandes marques californiennes.
            </p>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {fleurs.map((fleur) => (
            <ProductCard key={fleur.id} {...fleur} />
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <Button size="lg" variant="outline" className="border-accent/30 hover:bg-accent/10 text-lg px-8 py-4">
            Voir toute la collection
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>

        {/* Features */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center space-y-4">
            <div className="w-16 h-16 bg-green-500/10 rounded-2xl flex items-center justify-center mx-auto">
              <Leaf className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="text-xl font-semibold">Cultivation Indoor</h3>
            <p className="text-muted-foreground">
              Fleurs cultivées en intérieur avec un contrôle précis de l'environnement 
              pour une qualité optimale.
            </p>
          </div>

          <div className="text-center space-y-4">
            <div className="w-16 h-16 bg-amber-500/10 rounded-2xl flex items-center justify-center mx-auto">
              <div className="w-8 h-8 bg-gradient-to-r from-amber-400 to-orange-400 rounded-lg" />
            </div>
            <h3 className="text-xl font-semibold">Packaging Premium</h3>
            <p className="text-muted-foreground">
              Emballages hermétiques style DOJA, Cookies et BackPackBoys 
              pour préserver fraîcheur et arômes.
            </p>
          </div>

          <div className="text-center space-y-4">
            <div className="w-16 h-16 bg-purple-500/10 rounded-2xl flex items-center justify-center mx-auto">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-400 to-pink-400 rounded-lg" />
            </div>
            <h3 className="text-xl font-semibold">Terpènes Naturels</h3>
            <p className="text-muted-foreground">
              Profils terpéniques authentiques préservés pour des saveurs 
              et effets d'exception.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FleursSection