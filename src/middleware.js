import { NextResponse } from "next/server";
import { NextRequest } from "next/server";

// This function can be marked `async` if using `await` inside
export function middleware(NextRequest) {
  console.log("Something here ..");
  return NextResponse.redirect(new URL("/", NextRequest.url));
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: "/contact/:path*",
};
