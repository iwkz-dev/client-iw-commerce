import Link from 'next/link';
import { Header } from '@/components/header';
import { FooterEvent } from '@/components/footer-event';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';

export default function Charity() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1 container px-4 py-8">
        <div className="max-w-2xl mx-auto">
          <Link href="/">
            <Button variant="ghost" className="mb-6 p-0 h-auto">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Home
            </Button>
          </Link>

          <h1 className="text-2xl font-bold mb-4 sm:text-3xl">Charity</h1>
          <p className="text-muted-foreground">
            Welcome to our Charity page. Learn about our charitable initiatives and how you can
            contribute.
          </p>
        </div>
      </main>

      <FooterEvent />
    </div>
  );
}
