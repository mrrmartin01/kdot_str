import { ArrowRight } from "@medusajs/icons"
import { Button, Heading } from "@medusajs/ui"

const Hero = () => {
  return (
    <div className="h-[85vh] w-full border-b border-ui-border-base relative bg-gradient-to-t from-sky-300 to-ui-bg-base">
      <div className="absolute inset-0 z-10 flex flex-col justify-center items-center text-center small:p-32 gap-6">
        <span>
          <Heading
            level="h1"
            className="bg-gradient-to-b from-sky-500 to-black bg-clip-text text-transparent text-4xl leading-10"
          >
           Welcome to K.STORE
          </Heading>
          <Heading
            level="h2"
            className="mt-2 text-3xl leading-10 text-ui-fg-subtle font-normal"
          >
            The world's leading e-commerce platform.
          </Heading>
        </span>
        <a
          href="/products"
          target="_blank"
        >
          <Button variant="secondary">
            Browse products
            <ArrowRight />
          </Button>
        </a>
      </div>
    </div>
  )
}

export default Hero
