import Link from "next/link";

export default function Page() {
  return (
    <main className="flex flex-col items-center justify-between min-h-screen p-24 prose lg:prose-xl">
      <h1>App Router for the Dashboard!</h1>
      <p>You should definitely follow/like/subscribe to Anthony.</p>
      <Link href="/dashboard/profile">Go to /dashboard/profile</Link>
    </main>
  );
}
