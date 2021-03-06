import "../styles/global.css";

import { Provider } from 'next-auth/client'

import { UserProvider } from "../contexts/UserContext";

function MyApp({ Component, pageProps }) {
  

  return (
    <Provider session={pageProps.session}>
      <UserProvider>
        <Component {...pageProps} />
      </UserProvider>
    </Provider>
  )
}

export default MyApp
