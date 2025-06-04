import Link from 'next/link';

export function FooterEvent() {
  return (
    <footer className="border-t bg-background mt-auto">
      <div className="container flex flex-col items-center justify-between gap-4 py-6 px-4 md:h-20 md:flex-row md:py-0">
        <div className="flex flex-col items-center gap-2 md:flex-row md:gap-4">
          <p className="text-center text-sm text-muted-foreground md:text-left">
            &copy; {new Date().getFullYear()} My Store. All rights reserved.
          </p>
        </div>
        <div className="flex gap-4">
          <Link
            href="/terms"
            className="text-sm text-muted-foreground hover:text-foreground hover:underline transition-colors"
          >
            Terms
          </Link>
          <Link
            href="/privacy"
            className="text-sm text-muted-foreground hover:text-foreground hover:underline transition-colors"
          >
            Privacy
          </Link>
        </div>
      </div>
    </footer>
  );
}
