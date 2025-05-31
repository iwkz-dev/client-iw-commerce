"use client"

import { useState } from "react"
import { MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { openWhatsAppChat } from "@/utils/whatsapp"

interface WhatsAppFloatProps {
  phoneNumber: string
  message?: string
  position?: "bottom-left" | "bottom-right"
}

export default function WhatsAppFloat({
  phoneNumber,
  message = "Hello! I'm interested in your products.",
  position = "bottom-left",
}: WhatsAppFloatProps) {
  const [isHovered, setIsHovered] = useState(false)
  const [showTooltip, setShowTooltip] = useState(false)

  const positionClasses = {
    "bottom-left": "bottom-6 left-6",
    "bottom-right": "bottom-6 right-6",
  }

  return (
    <>
      {/* Main WhatsApp Button */}
      <div className={`fixed ${positionClasses[position]} z-50`}>
        <div className="relative">
          {/* Tooltip */}
          {showTooltip && (
            <div
              className={`absolute bottom-full mb-2 ${position === "bottom-left" ? "left-0" : "right-0"} 
              bg-gray-900 text-white text-sm px-3 py-2 rounded-lg whitespace-nowrap
              animate-in fade-in-0 zoom-in-95 duration-200`}
            >
              Chat with us on WhatsApp
              <div
                className={`absolute top-full ${position === "bottom-left" ? "left-4" : "right-4"} 
                w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900`}
              />
            </div>
          )}

          {/* Main Button */}
          <Button
            onClick={() => openWhatsAppChat(phoneNumber, message)}
            onMouseEnter={() => {
              setIsHovered(true)
              setShowTooltip(true)
            }}
            onMouseLeave={() => {
              setIsHovered(false)
              setShowTooltip(false)
            }}
            className={`relative w-14 h-14 rounded-full bg-green-500 hover:bg-green-600 
              shadow-lg hover:shadow-xl transition-all duration-300 group
              ${isHovered ? "scale-110" : "scale-100"}`}
            size="icon"
          >
            {/* WhatsApp Icon */}
            <svg
              className="w-7 h-7 text-white transition-transform duration-300 group-hover:scale-110"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
            </svg>

            {/* Online Indicator */}
            <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-400 border-2 border-white rounded-full" />
          </Button>
        </div>
      </div>
    </>
  )
}

// Alternative minimal version component
export function WhatsAppFloatMinimal({
  phoneNumber,
  message = "Hello! I'm interested in your products.",
  position = "bottom-left",
}: WhatsAppFloatProps) {
  const positionClasses = {
    "bottom-left": "bottom-6 left-6",
    "bottom-right": "bottom-6 right-6",
  }

  return (
    <div className={`fixed ${positionClasses[position]} z-50`}>
      <Button
        onClick={() => openWhatsAppChat(phoneNumber, message)}
        className="w-14 h-14 rounded-full bg-green-500 hover:bg-green-600 shadow-lg hover:shadow-xl 
          transition-all duration-300 hover:scale-110 group"
        size="icon"
      >
        <MessageCircle className="w-7 h-7 text-white transition-transform duration-300 group-hover:scale-110" />
        <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 border-2 border-white rounded-full" />
      </Button>
    </div>
  )
}
