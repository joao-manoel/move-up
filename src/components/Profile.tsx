import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';

import {FiLogOut} from "react-icons/fi";

import styles from '../styles/components/Profile.module.css';

import { signOut } from 'next-auth/client';

export function Profile({username, avatar}) {
    const {level} = useContext(ChallengesContext);

    return (
        <div className={styles.profileContainer}>
            <img src={avatar} alt={username} />
            <div>
                <strong>{username} <button onClick={() => signOut()}><FiLogOut /></button></strong>
                <p>
                    <img src="icons/level.svg" alt="Level" />
                    Level {level}
                </p>
            </div>
        </div>
    )
}