import { getAll } from '@vercel/edge-config';
import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

export const config = {
  matcher: [
    // Protect from directly accessing /future-app routes
    '/future-app/:path*',
    // Feature-flagged App Router pages
    '/dashboard/:path*',
    '/about',
    '/'
  ],
};

export async function middleware(request: NextRequest) {
  // Protect from directly accessing /future-app routes
  if (request.nextUrl.pathname.startsWith('/future-app')) {
    const newUrl = new URL(`/404`, request.nextUrl);
    return NextResponse.rewrite(newUrl, { status: 404 });
  }

  const flags = await getAll();

  if (flags["home-is-app"] && request.nextUrl.pathname === "/") {
    const newUrl = new URL(
      `/future-app${request.nextUrl.pathname}`,
      request.nextUrl,
    );

    // Send user to `app` version
    return NextResponse.rewrite(newUrl);
  }

  if (flags["dashboard-is-app"] && request.nextUrl.pathname.startsWith("/dashboard")) {
    const newUrl = new URL(
      `/future-app${request.nextUrl.pathname}`,
      request.nextUrl,
    );

    // Send user to `app` version
    return NextResponse.rewrite(newUrl);
  }

  // Send user to `pages` version
  return NextResponse.next();
}
