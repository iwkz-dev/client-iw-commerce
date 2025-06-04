import Link from 'next/link';
import { Header } from '@/components/header';
import { FooterEvent } from '@/components/footer-event';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1 container px-4 py-8">
        {/* Welcome Section */}
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl">
            Welcome to IW-Commerce
          </h1>
          <p className="mt-4 text-muted-foreground text-sm sm:text-base">
            Choose from our available services below
          </p>
        </div>

        {/* Navigation Buttons */}
        <div className="grid gap-4 sm:gap-6 max-w-2xl mx-auto">
          {/* Sate Somay 2025 */}
          <Card className="hover:shadow-md transition-shadow">
            <CardContent className="p-0">
              <Link href="/sate-somay" className="block">
                <Button
                  variant="ghost"
                  className="w-full h-16 sm:h-20 text-base sm:text-lg font-semibold hover:bg-primary/5"
                >
                  Sate Somay
                </Button>
              </Link>
            </CardContent>
          </Card>

          {/* Toko IWKZ */}
          <Card className="hover:shadow-md transition-shadow">
            <CardContent className="p-0">
              <Link href="/toko-iwkz" className="block">
                <Button
                  variant="ghost"
                  className="w-full h-16 sm:h-20 text-base sm:text-lg font-semibold hover:bg-primary/5"
                >
                  Toko IWKZ
                </Button>
              </Link>
            </CardContent>
          </Card>

          {/* Charity */}
          <Card className="hover:shadow-md transition-shadow">
            <CardContent className="p-0">
              <Link href="/charity" className="block">
                <Button
                  variant="ghost"
                  className="w-full h-16 sm:h-20 text-base sm:text-lg font-semibold hover:bg-primary/5"
                >
                  Charity
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>

        {/* Additional Info */}
        <div className="text-center mt-12">
          <p className="text-sm text-muted-foreground">Need help? Contact our support team</p>
        </div>
      </main>

      <FooterEvent />
    </div>
  );
}
