"use client"
import EcommerceHeader from "@/components/ecommerce-header"
import WhatsAppFloat from "@/components/whatsapp-float"
import ProductMenu from "@/components/product-menu"
import HeroBanner from "@/components/hero-banner"
import Footer  from "@/components/footer"

export default function Page() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#f2ffef] to-white">
      <EcommerceHeader />
      <HeroBanner />
      <main>
        <ProductMenu />
      </main>
      <Footer/>
      {/* WhatsApp Float Button */}
      <WhatsAppFloat
        phoneNumber="491792851483"
        message="Hi! saya ada pertanyaan perihal SaSo 2025"
        position="bottom-left"
      />
    </div>
  )
}
