import Link from 'next/link';
import { Facebook, Instagram, Mail, Phone, MapPin, MessageCircle } from 'lucide-react';
import { openWhatsAppChat } from '@/utils/whatsapp';
import { Button } from './ui/button';

export default function Footer() {
  const contactPhoneNumber = '491792851483';
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold">© 2025 IWKZ</h3>
            <p className="text-gray-300 text-sm">
              Sate Somay by IWKZ e.V.
            </p>
            <div className="flex space-x-4">
              <Link
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 hover:bg-blue-600 rounded-full flex items-center justify-center transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </Link>
              <Link
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 hover:bg-pink-600 rounded-full flex items-center justify-center transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/shop" className="text-gray-300 hover:text-white transition-colors">
                  Shop
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Customer Service */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Customer Service</h4>
            <div className="pt-3">
                <Button
                  onClick={() =>
                    openWhatsAppChat(
                      contactPhoneNumber,
                      "Hello! I'd like to learn more about the Masjid.",
                    )
                  }
                  className="flex items-center space-x-2 bg-green-600 hover:bg-green-700 text-white rounded-md px-3 py-2 text-sm"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Contact via WhatsApp</span>
                </Button>
              </div>
          </div>

          {/* Support Our Masjid */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Support Our Masjid</h4>
            <div className="text-gray-300 text-sm space-y-2">
              <p className="font-medium">Indonesischer Weisheits- & Kulturzentrum e.V.</p>
              <div className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <div>
                  <p>Feldzeugmeister. 1</p>
                  <p>10557 Berlin</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 flex-shrink-0" />
                <p>+49 30 6792 7147</p>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 flex-shrink-0" />
                <Link href="mailto:info@iwkz.de" className="hover:text-white transition-colors">
                  info@iwkz.de
                </Link>
              </div>
              <div className="pt-2 border-t border-gray-700">
                <p className="text-xs">Konto Nr.: 346669106</p>
                <p className="text-xs">BLZ: 1001 0010, Post Bank Berlin</p>
              </div>
              
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        {/*
        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-300 text-sm">
              <p>&copy; 2024 ShopLogo. All rights reserved.</p>
            </div>
            <div className="flex space-x-6 text-sm">
              <Link href="/privacy" className="text-gray-300 hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-300 hover:text-white transition-colors">
                Terms of Service
              </Link>
              <Link href="/impressum" className="text-gray-300 hover:text-white transition-colors">
                Impressum
              </Link>
            </div>
          </div>
        </div>
        */}
      </div>
    </footer>
  );
}
