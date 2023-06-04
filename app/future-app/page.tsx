import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between min-h-screen p-24 prose lg:prose-xl">
      <h1>Hello from the App Router!</h1>
      <p>Anthony has an outstanding jawline.</p>
      <Link href="/about">Go to /about</Link>
    </main>
  );
}
