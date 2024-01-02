import styles from './home.module.css';

export default function Home() {
  return (
    <main className="flex w-full flex-col items-center justify-center gap-y-6 md:gap-y-10 lg:gap-y-12">
      <div className="flex flex-col items-center gap-y-4 lg:gap-y-8">
        <div className="text-text-primary flex items-center gap-x-4 text-5xl md:gap-x-6 md:text-8xl lg:gap-x-8 lg:text-9xl">
          <span className={styles.wavingHand}>👋🏼</span>
          <h1>
            I&apos;m <span className="font-black">Frank</span>.
          </h1>
        </div>
        <div className="text-text-secondary italic sm:text-lg md:text-2xl lg:text-3xl">
          I strive to excel at engineering + product.
        </div>
      </div>
      <div className="bg-accent h-1 w-32 lg:w-64" />
      <p className="text-text-secondary max-w-[640px] text-center text-sm md:text-base lg:text-lg">
        Currently at Vertex Protocol, I&apos;m an engineering leader with
        experience in full stack software development. I graduated from the
        University of British Columbia with a Bachelor of Applied Science and
        Minor in Commerce. In the past, I&apos;ve held roles ranging from mobile
        development at Shopify to infrastructure engineering at SAP Concur.
        Outside of software leadership, I enjoy staying active with
        weightlifting, hiking, and Muay Thai.
      </p>
    </main>
  );
}
