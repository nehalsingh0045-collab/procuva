import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
export function middleware(request: NextRequest) {
  const protectedPath = ['/dashboard','/rfqs','/products','/admin','/profile'].some(p => request.nextUrl.pathname.startsWith(p));
  if (protectedPath && !request.cookies.get('procuva_session')) return NextResponse.redirect(new URL('/auth/login', request.url));
  return NextResponse.next();
}
export const config = { matcher: ['/dashboard/:path*','/rfqs/:path*','/products/:path*','/admin/:path*','/profile/:path*'] };
