import Link from "next/link";

export function Page() {
  return (
    <main className="flex flex-col items-center justify-between min-h-screen p-24 prose lg:prose-xl">
      <h1>/dashboard/profile? Yeah, Pages Router.</h1>
      <p>Anthony puts on one sock and shoe and then the other sock and shoe.</p>
      <Link href="/">Back to start</Link>
    </main>
  );
}

export default Page;
