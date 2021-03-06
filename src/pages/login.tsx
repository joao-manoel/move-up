import Head from 'next/head';

import { signIn, signOut, useSession } from 'next-auth/client';

import styles from '../styles/pages/Login.module.css';

export default function Login() {
  const [ session, loading ] = useSession()
  

  return (

    <div className={styles.LoginContainer}>

      {loading ? (
        <h1>Carregando...</h1>
      ) : (
        <>
        {!session && <>
          Not signed in <br/>
          <button onClick={() => signIn('google')}>Sign in</button>
        </>}
        {session && <>
          Signed in as {session.user.email} <br/>
          <img src={session?.user?.image}/>
          <button onClick={() => signOut()}>Sign out</button>
        </>}
        </>
      )}



      
    </div>
  )
}