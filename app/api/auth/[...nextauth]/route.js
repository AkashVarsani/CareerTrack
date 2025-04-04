import connectdb from "@/app/components/connectdb";
import User from "@/app/models/User";
import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";

const provider = NextAuth({
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  callbacks: {
    async signIn({ user, account }) {
      console.log("sign in successfully");
      if (account.provider == "github" || account.provider == "google") {
        await connectdb();
        let currentuser = await User.findOne({ email: user.email });
        if (!currentuser) {
          const newUser = await new User({
            email: user.email,
            username: user.email.split("@")[0],
            name: user.name,
            profile: user.image,
          });
          await newUser.save();
        }
      }
      return true;
    },
    async session({ session }) {
      const res = await User.findOne({ email: session.user.email }).lean();
      session.user = { ...session.user, ...res };
      return session;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
});

export { provider as GET, provider as POST };
