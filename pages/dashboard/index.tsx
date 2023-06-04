import Link from "next/link";

export function Page() {
  return (
    <main className="flex flex-col items-center justify-between min-h-screen p-24 prose lg:prose-xl">
      <h1>/dashboard home? Pages Router.</h1>
      <p>Anthony pours the milk before the cereal.</p>
      <Link href="/dashboard/profile">Go to /dashboard/profile</Link>
    </main>
  );
}

export default Page;
