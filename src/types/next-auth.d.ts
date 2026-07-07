import NextAuth, { DefaultSession } from "next-auth";
import { Address, Company } from "./user";

declare module "next-auth" {
    interface Session {
        user: {
            id: string;
            firstName?: string;
            lastName?: string;
            phone?: string;
            username?: string;
            gender?: string;
            age?: number;
            birthDate?: string;
            address?: Address;
            company?: Company;
        } & DefaultSession["user"];
    }

    interface User {
        id: string;
        firstName?: string;
        lastName?: string;
        phone?: string;
        username?: string;
        gender?: string;
        age?: number;
        birthDate?: string;
        address?: Address;
        company?: Company;
    }
}

declare module "next-auth/jwt" {
    interface JWT {
        id: string;
        firstName?: string;
        lastName?: string;
        phone?: string;
        username?: string;
        gender?: string;
        age?: number;
        birthDate?: string;
        address?: Address;
        company?: Company;
    }
}