import Link from 'next/link';
import Image from 'next/image';
import { User } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Header() {
  return (
    <header className="border-b bg-background sticky top-0 z-50">
      <div className="container flex items-center justify-between px-4 py-4">
        {/* Store Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <Image
            src="/iwkz_logo.png"
            alt="Picture of the IWKZ Logo"
            width={60}
            height={20}
            className="rounded-lg"
          />
          <span className="hidden font-bold sm:inline-block">My Store</span>
        </Link>

        {/* Login/Register */}
        <Link href="/auth">
          <Button variant="ghost" size="sm" className="flex items-center gap-2">
            <User className="h-4 w-4" />
            <span className="hidden sm:inline">Login</span>
          </Button>
        </Link>
      </div>
    </header>
  );
}
