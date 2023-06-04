import Link from "next/link";

export function Page() {
  return (
    <main className="flex flex-col items-center justify-between min-h-screen p-24 prose lg:prose-xl">
      <h1>/about in the Pages Router.</h1>
      <p>Anthony dances to the sound of nails on a chalkboard.</p>
      <Link href="/dashboard">Go to /dashboard</Link>
    </main>
  );
}

export default Page;
