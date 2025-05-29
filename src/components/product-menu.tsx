"use client"

import { useState } from "react"
import Image from "next/image"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ShoppingCart, Heart } from "lucide-react"

interface Product {
  id: string
  name: string
  description: string
  price: number
  image: string
  category: "food" | "drinks" | "other"
  isPopular?: boolean
  isNew?: boolean
}
//Just demo say
const sampleProducts: Product[] = [
  // Food Category
  {
    id: "1",
    name: "Margherita Pizza",
    description: "Fresh tomatoes, mozzarella cheese, basil leaves on crispy thin crust",
    price: 18.99,
    image: "/placeholder.svg?height=200&width=300",
    category: "food",
    isPopular: true,
  },
  {
    id: "2",
    name: "Grilled Salmon",
    description: "Atlantic salmon with herbs, served with roasted vegetables",
    price: 24.99,
    image: "/placeholder.svg?height=200&width=300",
    category: "food",
  },
  {
    id: "3",
    name: "Caesar Salad",
    description: "Crisp romaine lettuce, parmesan cheese, croutons, caesar dressing",
    price: 14.99,
    image: "/placeholder.svg?height=200&width=300",
    category: "food",
  },
  {
    id: "4",
    name: "Beef Burger",
    description: "Juicy beef patty with lettuce, tomato, cheese, and special sauce",
    price: 16.99,
    image: "/placeholder.svg?height=200&width=300",
    category: "food",
    isNew: true,
  },
  {
    id: "5",
    name: "Nasi Goreng Kambing",
    description: "Nasi yang digoreng dan dicampur dengan daging kambing bumbu, seringkali termasuk kecap manis, bawang merah, bawang putih, dan rempah-rempah lainnya",
    price: 16.99,
    image: "/nasgor-kambing.jpeg?height=200&width=300",
    category: "food",
    isNew: true,
  },

  // Drinks Category
  {
    id: "5",
    name: "Fresh Orange Juice",
    description: "Freshly squeezed orange juice, no added sugar",
    price: 6.99,
    image: "/placeholder.svg?height=200&width=300",
    category: "drinks",
  },
  {
    id: "6",
    name: "Iced Coffee",
    description: "Cold brew coffee with ice, served with milk or cream",
    price: 4.99,
    image: "/placeholder.svg?height=200&width=300",
    category: "drinks",
    isPopular: true,
  },
  {
    id: "7",
    name: "Green Smoothie",
    description: "Spinach, banana, apple, and coconut water blend",
    price: 8.99,
    image: "/placeholder.svg?height=200&width=300",
    category: "drinks",
  },
  {
    id: "8",
    name: "Craft Beer",
    description: "Local brewery IPA with citrus notes",
    price: 7.99,
    image: "/placeholder.svg?height=200&width=300",
    category: "drinks",
  },

  // Other Category
  {
    id: "9",
    name: "Artisan Bread",
    description: "Freshly baked sourdough bread, perfect for sharing",
    price: 5.99,
    image: "/placeholder.svg?height=200&width=300",
    category: "other",
  },
  {
    id: "10",
    name: "Chocolate Cake",
    description: "Rich chocolate cake with dark chocolate ganache",
    price: 12.99,
    image: "/placeholder.svg?height=200&width=300",
    category: "other",
    isNew: true,
  },
  {
    id: "11",
    name: "Gift Card",
    description: "Perfect gift for food lovers, available in multiple denominations",
    price: 25.0,
    image: "/placeholder.svg?height=200&width=300",
    category: "other",
  },
]

export default function ProductMenu() {
  const [activeTab, setActiveTab] = useState("food")
  const [favorites, setFavorites] = useState<string[]>([])

  const toggleFavorite = (productId: string) => {
    setFavorites((prev) => (prev.includes(productId) ? prev.filter((id) => id !== productId) : [...prev, productId]))
  }

  const getProductsByCategory = (category: string) => {
    return sampleProducts.filter((product) => product.category === category)
  }

  const formatPrice = (price: number) => {
    return `$${price.toFixed(2)}`
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Menu</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Discover our carefully curated selection of delicious food, refreshing drinks, and special items
        </p>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid w-full grid-cols-3 mb-8 max-w-md mx-auto">
          <TabsTrigger value="food" className="text-sm font-medium">
            Food ({getProductsByCategory("food").length})
          </TabsTrigger>
          <TabsTrigger value="drinks" className="text-sm font-medium">
            Drinks ({getProductsByCategory("drinks").length})
          </TabsTrigger>
          <TabsTrigger value="other" className="text-sm font-medium">
            Other ({getProductsByCategory("other").length})
          </TabsTrigger>
        </TabsList>

        <TabsContent value="food" className="mt-6">
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {getProductsByCategory("food").map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                isFavorite={favorites.includes(product.id)}
                onToggleFavorite={() => toggleFavorite(product.id)}
              />
            ))}
          </div>
        </TabsContent>

        <TabsContent value="drinks" className="mt-6">
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {getProductsByCategory("drinks").map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                isFavorite={favorites.includes(product.id)}
                onToggleFavorite={() => toggleFavorite(product.id)}
              />
            ))}
          </div>
        </TabsContent>

        <TabsContent value="other" className="mt-6">
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {getProductsByCategory("other").map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                isFavorite={favorites.includes(product.id)}
                onToggleFavorite={() => toggleFavorite(product.id)}
              />
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}

interface ProductCardProps {
  product: Product
  isFavorite: boolean
  onToggleFavorite: () => void
}

function ProductCard({ product, isFavorite, onToggleFavorite }: ProductCardProps) {
  return (
    <Card className="group hover:shadow-lg transition-all duration-300 overflow-hidden">
      <div className="relative">
        <div className="aspect-[4/3] overflow-hidden">
          <Image
            src={product.image || "/placeholder.svg"}
            alt={product.name}
            width={300}
            height={200}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>

        {/* Badges */}
        <div className="absolute top-2 left-2 flex flex-col gap-1">
          {product.isPopular && (
            <Badge variant="destructive" className="text-xs">
              Popular
            </Badge>
          )}
          {product.isNew && (
            <Badge variant="secondary" className="text-xs bg-green-500 text-white">
              New
            </Badge>
          )}
        </div>

        {/* Favorite Button */}
        <Button
          variant="ghost"
          size="icon"
          className={`absolute top-2 right-2 w-8 h-8 rounded-full bg-white/80 hover:bg-white transition-colors ${
            isFavorite ? "text-red-500" : "text-gray-600"
          }`}
          onClick={onToggleFavorite}
        >
          <Heart className={`w-4 h-4 ${isFavorite ? "fill-current" : ""}`} />
        </Button>
      </div>

      <CardHeader className="pb-2">
        <CardTitle className="text-lg font-semibold line-clamp-1">{product.name}</CardTitle>
        <CardDescription className="text-xs sm:text-sm text-gray-600 md:line-clamp-2 ">
          {product.description}
        </CardDescription>
      </CardHeader>

      <CardFooter className="pt-2 flex items-center justify-between">
        <div className="text-lg md:text-xl font-bold text-gray-900">${product.price.toFixed(2)}</div>
        <Button size="sm" className="gap-0.5 sm:gap-1 md:gap-2 text-[10px] sm:text-xs md:text-sm px-1.5 sm:px-2 md:px-3 py-0.5 sm:py-1 md:py-2">
          <ShoppingCart className="w-2.5 h-2.5 sm:w-3 sm:h-3 md:w-4 md:h-4" />
          <span className="hidden sm:inline">Add to Cart</span>
          <span className="sm:hidden">Add</span>
        </Button>
      </CardFooter>
    </Card>
  )
}
