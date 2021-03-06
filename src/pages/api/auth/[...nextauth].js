import NextAuth from 'next-auth'
import Providers from 'next-auth/providers'

export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    Providers.Google({
      clientId: "430469541025-96le74j0snfdggookq9boj112324ia9q.apps.googleusercontent.com",
      clientSecret: "svfpk06VcBpI0sGVWmWOXHFa",
      authorizationUrl: 'https://accounts.google.com/o/oauth2/v2/auth?prompt=consent&access_type=offline&response_type=code',
    })
  ],

  session: {
    jwt: true,
    maxAge: 30*24*60*60,
  },

  jwt: {
    secret: "asdasdasdasdqweqwe",
  }

  // A database is optional, but required to persist accounts in a database
  //database: process.env.DATABASE_URL,
})