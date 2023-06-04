import Link from "next/link";

export function Page() {
  return (
    <main className="flex flex-col items-center justify-between min-h-screen p-24 prose lg:prose-xl">
      <h1>Hello from the Pages Router.</h1>
      <p>Anthony eats soup with a fork.</p>
      <Link href="/about">Go to /about</Link>
    </main>
  );
}

export default Page;
