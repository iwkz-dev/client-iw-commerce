import Link from 'next/link';
import { Header } from '@/components/header';
import { FooterEvent } from '@/components/footer-event';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeft } from 'lucide-react';

export default function Auth() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1 container px-4 py-8">
        <div className="max-w-md mx-auto">
          <Link href="/">
            <Button variant="ghost" className="mb-6 p-0 h-auto">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Home
            </Button>
          </Link>

          <Card>
            <CardHeader>
              <CardTitle>Login / Register</CardTitle>
              <CardDescription>Access your account or create a new one</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Button className="w-full">Login</Button>
              <Button variant="outline" className="w-full">
                Register
              </Button>
            </CardContent>
          </Card>
        </div>
      </main>

      <FooterEvent />
    </div>
  );
}
