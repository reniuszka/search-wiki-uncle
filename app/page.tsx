import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={inter.className}>
      <section className="bg-slate-100 text-green-900 font-bold mx-auto max-w-lg p-4">
        <h2>Welcome in WikiUncle! You can search what you need :)</h2>
      </section>
    </main>
  );
}
