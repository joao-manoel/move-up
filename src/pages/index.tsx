
import Head from 'next/head';
import { GetServerSideProps } from 'next';
import { signIn, signOut, useSession } from 'next-auth/client';

import { CompletedChallenges } from '../components/CompletedChallenges';
import { CountDown } from '../components/CountDown';
import { ExperienceBar } from '../components/ExperienceBar'
import { Profile } from '../components/Profile'


import styles from '../styles/pages/Home.module.css';
import { ChallengeBox } from '../components/ChallengeBox';
import { CountdownProvider } from '../contexts/CountDownContext';
import { ChallengesProvider } from '../contexts/ChallengesContext';

interface HomeProps {
  level: number;
  currentExperience: number;
  challengesCompleted: number;
}

export default function Home(props: HomeProps) {
  
  const [ session, loading ] = useSession()

  if(loading){
    return <h1>Carregando</h1>
  }

  

  if(session){
    return (
      <ChallengesProvider 
        level={props.level} 
        currentExperience={props.currentExperience}
        challengesCompleted={props.challengesCompleted}
      >
        <div className={styles.container}>
  
          <Head>
            <title> Inicio | move.up </title>
          </Head>
  
          <ExperienceBar />
          <CountdownProvider> 
            <section>
              <div>
                <Profile username={session?.user?.name} avatar={session?.user?.image} />
                <CompletedChallenges />
                <CountDown />
              </div>
              <div>
                <ChallengeBox />
              </div>
            </section>
          </CountdownProvider> 
        </div>
      </ChallengesProvider>
    )
  }else if(!session){
    return(
      <div className={styles.ContainerLogin}>
        <h1>Bem vindo</h1>
        <p>Faça login para acessar o <strong>Move.up</strong></p>
        <button onClick={() => signIn("google")}>Login</button>
      </div>
    )
  }

  
  
  
}


export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const {level, currentExperience, challengesCompleted} = ctx.req.cookies;
  
  return {
    props: {
      level: Number(level),
      currentExperience: Number(currentExperience),
      challengesCompleted: Number(challengesCompleted)
    }
  }
}