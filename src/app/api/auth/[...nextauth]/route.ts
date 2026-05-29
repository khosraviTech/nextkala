import { handlers } from "@/auth"
import * as authModule from "@/auth";
console.log('Auth module:', authModule);


export const GET = handlers.GET;
export const POST = handlers.POST;
// ↑ This creates automatic API routes
// POST /api/auth/callback/credentials → handles login
// GET  /api/auth/session              → returns current user
// POST /api/auth/signout              → handles logout
