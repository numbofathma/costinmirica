import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(req: NextRequest) {
  // Add a new header x-current-path which passes the path to downstream components
  const headers = new Headers(req.headers);
  headers.set('x-current-path', `${req.nextUrl.protocol}${req.nextUrl.host}`);

  return NextResponse.next({
    request: {
      // New request headers
      headers,
    },
  });
}

export const config = {
  matcher: [
    // match all routes except static files and APIs
    '/((?!api|_next/static|_next/image|icons|social|static|favicon.ico).*)',
  ],
};
