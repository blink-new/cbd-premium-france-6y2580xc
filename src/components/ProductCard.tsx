import { Button } from './ui/button'
import { Badge } from './ui/badge'
import { Star, Plus } from 'lucide-react'

interface ProductCardProps {
  id: string
  name: string
  strain: string
  thc: string
  cbd: string
  price: number
  originalPrice?: number
  image: string
  rating: number
  reviews: number
  category: 'fleur' | 'hash' | 'sirop'
  isNew?: boolean
  isBestSeller?: boolean
}

const ProductCard = ({ 
  name, 
  strain, 
  thc, 
  cbd, 
  price, 
  originalPrice, 
  image, 
  rating, 
  reviews, 
  category,
  isNew,
  isBestSeller 
}: ProductCardProps) => {
  const getCategoryStyle = () => {
    switch (category) {
      case 'fleur':
        return 'bg-green-500/10 text-green-600 border-green-500/20'
      case 'hash':
        return 'bg-amber-500/10 text-amber-600 border-amber-500/20'
      case 'sirop':
        return 'bg-purple-500/10 text-purple-600 border-purple-500/20'
      default:
        return 'bg-accent/10 text-accent border-accent/20'
    }
  }

  return (
    <div className="product-card">
      {/* Badges */}
      <div className="absolute top-4 left-4 z-10 flex flex-col gap-2">
        {isNew && (
          <Badge className="bg-accent text-black font-semibold">
            NOUVEAU
          </Badge>
        )}
        {isBestSeller && (
          <Badge className="bg-gradient-to-r from-yellow-400 to-orange-400 text-black font-semibold">
            BEST SELLER
          </Badge>
        )}
      </div>

      {/* Product Image */}
      <div className="relative h-64 overflow-hidden">
        <img 
          src={image} 
          alt={name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Product Info */}
      <div className="p-6 space-y-4">
        {/* Category & Rating */}
        <div className="flex items-center justify-between">
          <Badge variant="outline" className={getCategoryStyle()}>
            {category.toUpperCase()}
          </Badge>
          <div className="flex items-center space-x-1">
            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
            <span className="text-sm font-medium">{rating}</span>
            <span className="text-xs text-muted-foreground">({reviews})</span>
          </div>
        </div>

        {/* Product Name & Strain */}
        <div>
          <h3 className="font-bold text-lg text-foreground group-hover:text-accent transition-colors">
            {name}
          </h3>
          <p className="text-sm text-muted-foreground font-medium">{strain}</p>
        </div>

        {/* THC/CBD Info */}
        <div className="flex items-center space-x-4 text-xs">
          <div className="flex items-center space-x-1">
            <span className="text-muted-foreground">THC:</span>
            <span className="font-semibold text-red-500">{thc}</span>
          </div>
          <div className="flex items-center space-x-1">
            <span className="text-muted-foreground">CBD:</span>
            <span className="font-semibold text-accent">{cbd}</span>
          </div>
        </div>

        {/* Price & Add to Cart */}
        <div className="flex items-center justify-between pt-2">
          <div className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-foreground">{price}€</span>
            {originalPrice && (
              <span className="text-sm text-muted-foreground line-through">{originalPrice}€</span>
            )}
          </div>
          <Button size="sm" className="premium-button">
            <Plus className="w-4 h-4 mr-1" />
            Ajouter
          </Button>
        </div>
      </div>
    </div>
  )
}

export default ProductCard