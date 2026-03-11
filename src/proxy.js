import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";
const privetRoute = ["/mybooking", "/dashboard", "/booking"];
// This function can be marked `async` if using `await` inside
export async function proxy(req) {
  const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });
  const isAuthenticked = Boolean(token);
  const reqPath = req.nextUrl.pathname;
  const isPrivetRequest = privetRoute.some((route) =>
    req.nextUrl.pathname.startsWith(route),
  );
  if (!isAuthenticked && isPrivetRequest) {
    return NextResponse.redirect(
      new URL(`/login?callbackUrl=${reqPath}`, req.url),
    );
  }
//   console.log(token, isAuthenticked, reqPath, isPrivetRequest);
}

// Alternatively, you can use a default export:
// export default function proxy(request) { ... }

export const config = {
  matcher: ["/mybooking/:path*", "/dashboard/:path*", "/booking/:path*"],
};
