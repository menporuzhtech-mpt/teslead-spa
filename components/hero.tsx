import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-background py-12 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-center">
          {/* Left Content */}
          <div className="flex flex-col justify-center items-start sm:items-center text-left sm:text-center px-4">
            <h1 className="text-5xl sm:text-6xl font-bold text-foreground mb-4">
              Oops!
            </h1>
            <h2 className="text-2xl sm:text-3xl font-semibold text-foreground mb-6">
              This page is under construction
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground mb-6 leading-relaxed max-w-xl">
              We’re building something better for you.
            </p>
            <p className="text-base sm:text-lg text-muted-foreground mb-8 leading-relaxed max-w-xl">
              For over 28 years, <span className="font-semibold text-foreground">Teslead</span> has been a trusted leader in
              industrial valve repair, maintenance, and testing services. Our commitment to
              <span className="font-semibold"> engineering excellence</span> and
              <span className="font-semibold"> sustainable innovation</span> has positioned us at the forefront of both traditional
              industrial operations and the emerging clean energy sector.
            </p>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-xl">
              We’re currently upgrading our website to deliver an improved experience — with easier access to our
              services, products, and expertise.
            </p>
            <p className="text-base sm:text-lg font-medium text-foreground mt-8">
              <em>Stay tuned — our new site is coming soon!</em>
            </p>
          </div>


          {/* Right Illustration (replaced with image) */}
          <div className="relative h-96 sm:h-[500px] flex items-center justify-center">
            <div className="relative w-full h-full">
              {/* Background Circle */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-blue-50 rounded-full blur-3xl opacity-60"></div>

              {/* Construction Image */}
              <Image
                src="/construction.png" // your image in /public
                alt="Under construction illustration"
                // fill
                className="object-contain relative z-10"
                priority
                height={800}
                width={800}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
