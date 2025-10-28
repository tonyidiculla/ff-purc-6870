import { NextRequest, NextResponse } from 'next/server';

export function proxy(request: NextRequest) {
  // Allow API routes
  if (request.nextUrl.pathname.startsWith('/api/')) {
    return NextResponse.next();
  }
  
  // Allow all requests - HMS will handle authentication
  // This service is only accessible through HMS iframe embedding
  return NextResponse.next();
}

export default proxy;