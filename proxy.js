import { NextResponse } from "next/server";

export default function proxy(request) {
    console.log("No Permission");
    return NextResponse.redirect(new URL("/home", request.url));
}

export const config = {
    matcher: ["/blog/:path*", "/user/:path*"],
};