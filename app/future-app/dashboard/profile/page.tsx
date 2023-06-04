import Link from "next/link";

export function Page() {
  return (
    <main className="flex flex-col items-center justify-between min-h-screen p-24 prose lg:prose-xl">
      <h1>App Router for the Dashboard!</h1>
      <p>Anthony has read many leatherbound books.</p>
      <Link href="/">Back to start</Link>
    </main>
  );
}

export default Page;
