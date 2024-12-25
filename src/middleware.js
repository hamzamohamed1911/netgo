import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';

export function middleware(request) {
  const cookieStore = cookies();
  const token = cookieStore.get('authToken'); 

  if (token && request.nextUrl.pathname === '/auth') {
    return NextResponse.redirect(new URL('/', request.url)); 
  }

  if (!token && request.nextUrl.pathname !== '/auth') {
    return NextResponse.redirect(new URL('/auth', request.url)); 
  }

  return NextResponse.next(); 
}

export const config = {
  matcher: [ '/auth', '/profile'], 
};
