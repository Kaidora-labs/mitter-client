import { Globe, LogIn, Shield, Users, Zap } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Text } from "@/components/typography";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Home() {
  const features = [
    {
      icon: Globe,
      title: "Cross-Chain Transfers",
      description:
        "Seamlessly transfer assets across different blockchains without worrying about the technical details.",
    },
    {
      icon: Shield,
      title: "Private Transactions",
      description:
        "Ensure confidentiality with private transactions that protect sensitive business information.",
    },
    {
      icon: Zap,
      title: "Sponsored Transactions",
      description:
        "Cover transaction fees for your users to provide a frictionless experience.",
    },
    {
      icon: Users,
      title: "Easy Onboarding",
      description:
        "Simplified onboarding flows tailored for various African countries and regulations.",
    },
  ];

  return (
    <div className="w-full mx-auto space-y-4">
      <header className="flex justify-between items-center px-8 py-8 text-primary">
        <div>
          <Text variant="h2" className="border-none">
            Mitter
          </Text>
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

      <main className="space-y-8">
        <section
          id="hero"
          className="space-y-8 py-12 px-4 max-w-2xl mx-auto text-center"
        >
          <Text variant="h1" className="sm:text-7xl font-bold">
            Your Gateway to the{" "}
            <span className="text-primary">African Market</span>
          </Text>

          <Text variant="lead">
            Mitter handles all the complexities of cross-chain transfers,
            private transactions, and various onboarding flows for African
            countries.
          </Text>

          <div className="flex flex-col sm:flex-row justify-center gap-4 px-4">
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
        </section>

        <section
          id="subhero"
          className="bg-secondary relative justify-center px-4 py-4 sm:p-0"
        >
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="relative shadow-2xl z-10 lg:translate-x-24">
              <Image
                src="/subhero-demo.png"
                alt={"Mitter Demo"}
                width={600}
                height={400}
                priority
              />
            </div>

            <div className="shadown-2xl lg:-translate-x-12 ">
              <Image
                src="/subhero-person.png"
                alt={"Mitter Asset"}
                width={800}
                height={600}
                priority
              />
            </div>
          </div>
        </section>

        <section id="details" className="space-y-12 p-8">
          <div className="space-y-2">
            <Text variant="h2" className="text-center border-none">
              How Mitter Works
            </Text>

            <Text variant="lead" className="text-center">
              We abstract away all the complexities so you can focus on your
              core business
            </Text>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature) => {
              const Icon = feature.icon;

              return (
                <Card
                  key={`feature-card-${feature.title}`}
                  className="shadow-xl hover:shadow-2xl transition-shadow"
                >
                  <CardHeader>
                    <div
                      className={`w-12 h-12 rounded-4xl bg-cyan-50 flex items-center justify-center`}
                    >
                      <Icon className={`w-6 h-6 text-blue-500`} />
                    </div>
                    <CardTitle>
                      <Text variant="lead" className="text-black">
                        {feature.title}
                      </Text>
                    </CardTitle>
                  </CardHeader>

                  <CardContent>
                    <CardDescription>
                      <Text variant="muted">{feature.description}</Text>
                    </CardDescription>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </section>

        <div>
          <section
            id="paymitter"
            className="bg-secondary py-8 px-12 flex flex-col lg:flex-row items-start justify-center gap-12 sm:gap-24"
          >
            <Image
              src="/paymitter-asset.png"
              alt={"Paymitter Phone Mockup"}
              width={600}
              height={400}
              priority
            />

            <div className="bg-secondary flex flex-col items-start justify-start space-y-4 max-w-sm">
              <div className="bg-white p-4 hidden sm:flex">
                <Image
                  src="/qr-code.png"
                  alt={"Paymitter QR Code"}
                  width={48}
                  height={48}
                />
              </div>

              <Text variant="h2" className="font-normal">
                Mitter is the Backing Infrastructure of Paymitter
              </Text>

              <Text variant="lead">
                Use your phones camera to scan and download the Permitter app
                Available on iOS and Android
              </Text>

              <div className="flex items-center justify-start gap-4">
                <Image
                  src="/google-play-badge.png"
                  alt={"Paymitter Google Play"}
                  width={120}
                  height={40}
                />

                <Image
                  src="/apple-store-badge.svg"
                  alt={"Paymitter Apple Store"}
                  width={120}
                  height={40}
                />
              </div>
            </div>
          </section>

          <section
            id="cta"
            className="bg-primary flex flex-col items-center justify-center py-16 space-y-12"
          >
            <div className="text-center max-w-4xl space-y-4">
              <Text variant="h2" className="text-white">
                Ready to Access the African Market?
              </Text>
              <Text variant="lead" className="text-white">
                Join Mitter today and focus on building your product while we
                handle all the complexities of the African market.
              </Text>
            </div>

            <div className="flex flex-col sm:flex-row justify-center gap-4 px-4">
              <Button
                variant="outline"
                size="lg"
                className="py-8 px-16"
                asChild
              >
                <Link
                  href="/auth/signup"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Text
                    variant="large"
                    className="text-primary flex items-center"
                  >
                    Get Started
                    <LogIn className="w-6 h-6 ml-4 text-primary" />
                  </Text>
                </Link>
              </Button>

              <Button
                size="lg"
                className="py-8 px-16 border-1 border-white hover:bg-primary/90"
                asChild
              >
                <Link href="/pay" target="_blank" rel="noopener noreferrer">
                  <Text variant="large">Pay a Merchant</Text>
                </Link>
              </Button>
            </div>
          </section>
        </div>
      </main>

      <footer></footer>
    </div>
  );
}
