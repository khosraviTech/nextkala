
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


            phone: user.phone,
            username: user.username,
            gender: user.gender,
            age: user.age,
            birthDate: user.birthDate,
            address: user.address,
            company: user.company,

          };
        }

        return null
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
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.firstName = user.firstName;
        token.lastName = user.lastName;
        token.email = user.email;
        token.image = user.image;
        token.phone = user.phone;
        token.username = user.username;
        token.gender = user.gender;
        token.age = user.age;
        token.birthDate = user.birthDate;
        token.address = user.address;
        token.company = user.company;
      }
      console.log("JWT:", token);

      return token;
    },

    async session({ session, token }) {
      session.user.id = token.id;
      session.user.firstName = token.firstName;
      session.user.lastName = token.lastName;
      session.user.phone = token.phone;
      session.user.username = token.username;
      session.user.gender = token.gender;
      session.user.age = token.age;
      session.user.birthDate = token.birthDate;
      session.user.address = token.address;
      session.user.company = token.company;
      console.log("SESSION:", session);
      return session;
    },
  },
});


