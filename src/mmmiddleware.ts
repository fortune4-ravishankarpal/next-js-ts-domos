import { NextRequest, NextResponse } from "next/server";

export function middleware(req: NextRequest) {
    const url = req.nextUrl.clone();
    const originalUrl = url.pathname + url.search;
    console.log("[48;2;255;0;255m [ originalUrl ]-6 [0m", originalUrl);
    const requestHeaders = new Headers(req.headers);
    requestHeaders.set("x-url", originalUrl);
    return NextResponse.next({
        request: {
            headers: requestHeaders,
        },
    });
}
export const config = {
    matcher: ["/((?!_next/|api/|favicon.ico).*)", "/.well-known/:path*"],
};
