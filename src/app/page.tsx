import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
        {/* Your page content goes here */}
        <div className="container py-12">
          <h1 className="text-3xl font-bold">Welcome to My Website</h1>
          <p className="mt-4 text-muted-foreground">This is a sample page with a footer.</p>
        </div>
      </main>
      <Footer />
    </div>
  )
}
