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

        <div className="space-x-8 hidden sm:inline-block">
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

      <main>
        <div
          id="hero"
          className="space-y-12 py-12 max-w-2xl mx-auto text-center"
        >
          <Text variant="h1">
            Your Gateway to the{" "}
            <span className="text-primary">African Market</span>
          </Text>

          <Text variant="lead">
            Mitter handles all the complexities of cross-chain transfers,
            private transactions, and various onboarding flows for African
            countries.
          </Text>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button variant="default" size="lg" className="py-8 px-16" asChild>
              <Link
                href="/auth/signup"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Text variant="large">Get Started</Text>
              </Link>
            </Button>

            <Button
              variant="secondary"
              size="lg"
              className="py-8 px-16"
              asChild
            >
              <Link href="/pay" target="_blank" rel="noopener noreferrer">
                <Text variant="large">Pay a Merchant</Text>
              </Link>
            </Button>

            <Button
              variant="secondary"
              size="lg"
              className="py-8 px-16"
              asChild
            >
              <Link href="/invoice" target="_blank" rel="noopener noreferrer">
                <Text variant="large">Generate Invoice</Text>
              </Link>
            </Button>
          </div>
        </div>

        <div id="demo"></div>
        <div id="details"></div>
        <div id="paymitter"></div>
        <div id="cta"></div>
      </main>
      <footer></footer>
    </div>
  );
}
