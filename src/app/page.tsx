import styles from './home.module.css';

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center gap-y-12">
      <div className="flex flex-col items-center gap-y-4">
        <div className="text-text-primary flex items-center gap-x-8 text-9xl">
          <span className={styles.wavingHand}>👋🏼</span>
          <h1>
            I&apos;m <span className="font-black">Frank</span>.
          </h1>
        </div>
        <div className="text-text-secondary text-4xl italic">
          Some catchy tagline about how great I am.
        </div>
      </div>
      <div className="bg-accent h-1 w-64" />
      <p className="text-text-secondary max-w-[500px] text-center text-lg">
        Lorem ipsum dolor sit amet consectetur. Tellus in vulputate fringilla eu
        nulla risus dui vitae tincidunt. Massa odio nulla pulvinar diam nulla
        vitae risus. Adipiscing gravida risus ac leo sed sit at consequat.
        Molestie sed habitant felis in.
      </p>
    </main>
  );
}
