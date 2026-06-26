
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GitHubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";

export default NextAuth({
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },


      },

      async authorize(credentials) {
        if (!credentials) return null;

        const email = credentials.email;
        const password = credentials.password;

        const response = await fetch(
          "https://dummyjson.com/users"
        );

        const data = await response.json();

        const user = data.users.find(
          (user: { email: string; password: string }) =>
            user.email === credentials.email &&
            user.password === credentials.password
        );
        if (email === "1@1" && password === "1") {
          return {
            id: "admin1",
            name: "Demo User",
            email: "demo@nextkala.com",
          };
        }

        if (!user) {
          return null;
        }
        if (user) {
          return {
            id: String(user.id),
            name: `${user.firstName} ${user.lastName}`,
            email: user.email,
            image: user.image,
            firstName: user.firstName,
            lastName: user.lastName,
            maidenName: user.maidenName,
            age: user.age,
            gender: user.gender,
            phone: user.phone,
            username: user.username,
            password: user.password,
            birthDate: user.birthDate,
            bloodGroup: user.bloodGroup,
            height: user.height,
            weight: user.weight,
            eyeColor: user.eyeColor,
            hair: user.hair,
            ip: user.ip,
            address: user.address,
            macAddress: user.macAddress,
            university: user.university,
            bank: user.bank,
            company: user.company,
            ein: user.ein,
            ssn: user.ssn,
            userAgent: user.userAgent,
            crypto: user.crypto,
            role: user.role,
          };
        }


      },
    }),


    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string
    }),

    GitHubProvider({
      clientId: process.env.AUTH_GITHUB_ID as string,
      clientSecret: process.env.AUTH_GITHUB_SECRET as string,
    }),
  ],

  pages: {
    signIn: "/login",
  },

  session: {
    strategy: "jwt",
  },

  secret: process.env.AUTH_SECRET,
});


