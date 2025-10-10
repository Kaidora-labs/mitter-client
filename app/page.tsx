import Link from "next/link";
import { Text } from "@/components/typography";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="w-full mx-auto space-y-4 px-4">
      <header className="w-full flex justify-between items-center py-4 px-8 text-primary">
        <div>
          <Text variant="h2">Mitter</Text>
        </div>

        <div className="space-x-8">
          <Link
            href="https://docs.mitter.io"
            target="_blank"
            rel="noopener noreferrer"
          >
            Developers
          </Link>

          <Button
            variant="outline"
            className="border-secondary hover:bg-secondary hover:text-primary"
            size="lg"
            asChild
          >
            <Link href="/auth/signin" target="_blank" rel="noopener noreferrer">
              Sign In
            </Link>
          </Button>

          <Button variant="default" size="lg" asChild>
            <Link href="/auth/signup" target="_blank" rel="noopener noreferrer">
              Sign Up
            </Link>
          </Button>
        </div>
      </header>

      <main></main>
      <footer></footer>
    </div>
  );
}
