'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Search, ShoppingCart, User, Heart, Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';

export default function EcommerceHeader() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isScrollingDown, setIsScrollingDown] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Determine scroll direction
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsScrollingDown(true);
      } else {
        setIsScrollingDown(false);
      }

      // Check if scrolled past header
      setIsScrolled(currentScrollY > 150);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const navigationItems = [
    { name: 'Home', href: '/sate-somay' },
    { name: 'Shop', href: '/shop' },
    { name: 'Categories', href: '/categories' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <>
      {/* Main Header */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 bg-white border-b transition-transform duration-300 ${
          isScrollingDown ? '-translate-y-full' : 'translate-y-0'
        }`}
      >
        {/* Main Navigation */}
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/sate-somay" className="text-2xl font-bold text-gray-900">
              <Image src="/iwkz_logo.png" alt="Picture of the IWKZ Logo" width={60} height={20} />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex space-x-8">
              {navigationItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-gray-700 hover:text-gray-900 font-medium transition-colors"
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            {/* Action Buttons */}
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="icon" className="hidden md:flex">
                <User className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" className="hidden md:flex">
                <Heart className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" className="relative">
                <ShoppingCart className="w-5 h-5" />
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  3
                </span>
              </Button>

              {/* Mobile Menu Button */}
              <Button
                variant="ghost"
                size="icon"
                className="lg:hidden"
                onClick={() => setIsMobileMenuOpen(true)}
              >
                <Menu className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Simplified Header (shows when main header is hidden) */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 bg-white border-b shadow-md transition-transform duration-300 ${
          isScrolled && isScrollingDown ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            {/* Burger Menu */}
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="w-5 h-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-80">
                <SheetHeader>
                  <SheetTitle>Menu</SheetTitle>
                </SheetHeader>
                <div className="mt-6 space-y-4">
                  {/* Search in mobile menu */}
                  <div className="relative">
                    <Input type="search" placeholder="Search products..." className="pl-4 pr-10" />
                    <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                  </div>

                  {/* Navigation Links */}
                  <nav className="space-y-2">
                    {navigationItems.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className="block py-2 px-4 text-gray-700 hover:bg-gray-100 rounded-md transition-colors"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </nav>

                  {/* User Actions */}
                  <div className="border-t pt-4 space-y-2">
                    <Link
                      href="/account"
                      className="flex items-center py-2 px-4 text-gray-700 hover:bg-gray-100 rounded-md transition-colors"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <User className="w-5 h-5 mr-3" />
                      My Account
                    </Link>
                    <Link
                      href="/wishlist"
                      className="flex items-center py-2 px-4 text-gray-700 hover:bg-gray-100 rounded-md transition-colors"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <Heart className="w-5 h-5 mr-3" />
                      Wishlist
                    </Link>
                    <Link
                      href="/help"
                      className="flex items-center py-2 px-4 text-gray-700 hover:bg-gray-100 rounded-md transition-colors"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Help & Support
                    </Link>
                  </div>
                </div>
              </SheetContent>
            </Sheet>

            {/* Logo */}
            <Link href="/" className="text-xl font-bold text-gray-900">
              ShopLogo
            </Link>

            {/* Cart Icon */}
            <Button variant="ghost" size="icon" className="relative">
              <ShoppingCart className="w-5 h-5" />
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                3
              </span>
            </Button>
          </div>
        </div>
      </header>
    </>
  );
}
